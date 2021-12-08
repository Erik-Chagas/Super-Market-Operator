import React, { useState, useEffect, useRef } from "react";
import Produto from '../../components/produtos/Produto'
import * as S from './styled'
import { useHistory } from 'react-router-dom'
import Popup from "../../components/PopUp/Popup";
import Navigator from "../../components/ServicesNavigator/Navigator";
import { api } from "../../utils/api";
import Drop from "../../components/DropzoneComponent/drop";

function App(props){

    const history = useHistory()

    const [showPopup, setShowPopup] = useState(false)
    const [PopUpOption, setPopUpOption] = useState('')

    const [categoriaSelecionada, setCategoriaSelecionada] = useState('')
    const [ categorias, setCategorias] = useState([])
    const [ produtos, setProdutos] = useState([])

    useEffect(() => {
        async function getUserCategories(){
            if(sessionStorage.getItem('token') != 'undefined'){
                const userInfo = await api.get('/categorias', {
                    headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
                })
        
                setCategorias(userInfo.data.categorias)
            } else {
                history.push('/')
            }
        }

        getUserCategories()

    }, [])

    useEffect(() => {
        if(categorias.filter(categoria => categoria.nome == categoriaSelecionada)[0] != undefined){
            let productList = categorias.filter(categoria => categoria.nome == categoriaSelecionada)[0].produtos
            setProdutos(productList)
        }
    }, [categorias])

    async function carregarProduct(categoriaNome){
        const categoriasAPI = await api.get('/categorias', {
                headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
            })
        setCategorias(categoriasAPI.data.categorias)
        setCategoriaSelecionada(categoriaNome)
    }

    function handleClick(option){
        setPopUpOption(option)
        setShowPopup(true)
    }

    function AddNewItemButton(props){
        return (
            <S.AddElement onClick={() => props.click(props.option)}>
                <S.AddSymbol>+</S.AddSymbol>
            </S.AddElement>
        )
    }

    function AddNewCategoriaPopUpContent(props){
        const inputName = useRef(null)

        async function SalvarCategoria(){
            const postResponse = await api.post('/categorias', {
                    categorie: inputName.current.value
                },{
                headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
                }
            )

            const postCategoria = await api.get('/categorias', {
                headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
                }
            )
            setCategorias(postCategoria.data.categorias)
        }

        return (
            <S.CategoriaPopUpContainer>
                <h2>Adicionar categoria</h2>

                <S.CategoriaPopUpForm>
                    <S.CategoriaInput  type='text' ref={inputName} placeholder='Nome' required={true}/>
                    <S.CategoriaSendButton type='submit' onClick={() => SalvarCategoria()}>Salvar</S.CategoriaSendButton>
                </S.CategoriaPopUpForm>
            </S.CategoriaPopUpContainer>
        )
    }

    function AddNewProductPopUpContent(props){
        const inputName = useRef(null)
        const inputPreco = useRef(null)
        const inputQuantidade = useRef(null)
        const inputDescricao = useRef(null)
        const ProductForm = useRef(null)

        let file

        function handleFile(image){
            file = image
        }

        async function SalvarProduto(){
            const form = new FormData(ProductForm.current)
            form.append("file", file)
            form.append("categorie", categoriaSelecionada)
            const postResponse = await api({
                method: "POST",
                url: "/produtos",
                data: form,
                headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`},
              })

            const postCategoria = await api.get('/categorias', {
                headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
                }
            )
            
            setCategorias(postCategoria.data.categorias)
        }

        return (
            <S.ProductForm ref={ProductForm}>
                <S.ProductFormTitle>Adicionar produto</S.ProductFormTitle>
                <S.ProductInfoContainer>
                    <S.ProductInput style={{width: '40%'}} name='nome' type='text' ref={inputName} placeholder='Nome'/>
                    <S.ProductInput style={{width: '20%'}} name='preco' type='number' ref={inputPreco} placeholder='Preço' />
                    <S.ProductInput style={{width: '20%'}} name='quantidade' type='text' ref={inputQuantidade} placeholder='Quantidade' />
                    <S.ProductInputTextArea name='descricao' type='text' ref={inputDescricao} placeholder='Descrição' />
                </S.ProductInfoContainer>
                <S.ProductDropzoneContainer>
                    <Drop handleFile={handleFile}/>
                </S.ProductDropzoneContainer>            
                <S.ProductSendButton  type="button" onClick={() => SalvarProduto()}>Salvar</S.ProductSendButton>
            </S.ProductForm>
        )
    }

    function Categoria(props){
    
        return (
            <S.CategoriaItem onClick={() => carregarProduct(props.nome)}>
                <S.ContainerCategorie>
                    <S.CategorieName>{props.nome}</S.CategorieName>
                </S.ContainerCategorie>
            </S.CategoriaItem>
        )
    }

    return (
        <S.UpperContainer>
            <Navigator />
            <Popup trigger={showPopup} setTrigger={setShowPopup}>
                { PopUpOption == 'produto' ? <AddNewProductPopUpContent /> : ''}
                { PopUpOption == 'categoria' ? <AddNewCategoriaPopUpContent /> : ''}
            </Popup>
            <S.Container>
                <S.CategoriasContainer className='CategoriasContainer'>
                    <S.CategoriaList className='CategoriaList'>
                        { 
                            categorias.map((categoria, index) => {
                                return (
                                    <Categoria key={index} nome={categoria.nome}/>
                                )
                            })
                        }
                        <AddNewItemButton click={handleClick} option={'categoria'}/>
                    </S.CategoriaList>
                </S.CategoriasContainer>

                <S.ProdutosListContainer>
                    <S.ProdutosList>
                        {
                            produtos.length == 0 ?
                            <S.NoProducts>
                                <h2 style={{width: '100%', textAlign: 'center'}}>Sem produtos</h2>
                            </S.NoProducts>
                            : 
                            produtos.map(produto => (
                                <Produto name={produto.nome} preco={produto.preco} quantidade={produto.quantidade} descricao={produto.descricao} image={produto.imageURL}/>
                            ))
                        }

                        { categoriaSelecionada == '' ? '' : <AddNewItemButton click={handleClick} option={'produto'}/>}
                    </S.ProdutosList>
                </S.ProdutosListContainer>
                 
            </S.Container>
        </S.UpperContainer>
    )
}

export default App