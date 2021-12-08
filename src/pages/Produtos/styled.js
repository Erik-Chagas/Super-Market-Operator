import styled from "styled-components";

export const UpperContainer = styled.div`
    width: 95vw;
    display: flex;
    flex-direction: row;
`

export const Container = styled.div`
    margin: 0;
    width: 100%;
    height: max-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const CategoriasContainer = styled.div`
    background-color: inherit;
    width: 80%;
    margin: 0;
`

export const CategoriaList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0;
`

export const ProdutosList = styled.ul`
    width: 80%;
    height: max-content;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 5px 0;
    margin: 0;
    background-color: inherit;
    list-style: none;
`

export const ProdutosListContainer = styled.ul`
    width: 90%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
    margin: 0;
    background-color: inherit;
    box-shadow: 2px 2px 10px #adadad;
    border-radius: 10px;
    border: 1px solid #adadad;
`

export const ContainerCategorie = styled.div`
    width: 100%;
    height: 5vh;
    padding: 2px;
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.808);
    cursor: pointer;
    transition: 0.1s;

    :hover{
        transform: translateY(-10%);
    }
`

export const CategorieName = styled.h3`
    width: fit-content;
    height: fit-content;
    text-align: center;
    font-size: 1.1vw;

    @media(max-width: 1000px) and (min-width: 500px){
        font-size: 2.2vw;
    }

    @media(max-width: 500px){
        font-size: 4vw;
    }

`

export const CategoriaItem = styled.li`
    display: inline-block;
    margin: 5px 1vw 0;
`

export const AddElement = styled.li`
    width: 3vw;
    height: 3vw;
    min-width: 20px;
    min-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F5F5F5;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.6);
    margin: 5px;
    cursor: pointer;
`

export const AddSymbol = styled.h3`
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const ProductForm = styled.form`
    width: 90%;
    height: 90%;
    margin: 0 auto;   
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const ProductFormTitle = styled.h1`
    width: 100%;
    text-align: center;
    height: fit-content;
`

export const ProductInput = styled.input`
    width: 90%;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    border: 1px solid #ccc;
    outline: none;
    position: relative;
    margin-top: 5px;
`

export const ProductInputTextArea = styled.textarea`
    width: 90%;
    height: 80px;
    line-height: 30px;
    border-radius: 15px;
    border: 1px solid #ccc;
    outline: none;
    position: relative;
    margin-top: 5px;
`

export const ProductInfoContainer = styled.div`
    width: 60%;
    height: max-content;
    padding: 5px 0;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const ProductDropzoneContainer = styled.div`
    width: 30%;
    height: 80%;
    min-height: 70%;
    padding: 5px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const ProductSendButton = styled.button`
    cursor: pointer;
    margin-top: 15px;
    border: 0px;
    height: 25px;
    width: 25%;
    border-radius: 5px;
    background-color: #D91A1D;
    position: relative;
    transition: 0.3s;
    font-size: 1.2vw;
    :hover{
        background-color: #DE6667;
    }

    @media(max-width: 700px){
        font-size: 3.5vw;
    }
`

export const CategoriaInput = styled.input`
    width: 90%;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    border: 1px solid #ccc;
    outline: none;
    position: relative;
    margin-top: 5px;
    left: 50%;
    transform: translate(-50%);
`

export const CategoriaPopUpContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px 0;
`

export const CategoriaPopUpForm = styled.form`
    width: 80%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

`

export const CategoriaSendButton = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    border: 0px;
    height: 25px;
    width: 25%;
    border-radius: 5px;
    background-color: #D91A1D;
    position: relative;
    transition: 0.3s;
    font-size: calc(65% + 0.8vmin);

    :hover{
        background-color: #DE6667;
    }

    @media(max-width: 700px){
    }
`

export const NoProducts = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`