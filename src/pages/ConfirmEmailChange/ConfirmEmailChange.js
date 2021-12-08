import React, { useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/header/HeaderHandle/header";
import * as S from './styled'
import Loading from '../../components/Loading/loading'
import { api } from "../../utils/api";

function App(props){
    const { confirmationCode } = useParams()
    const [ loading, setLoading] = useState(true)
    const [ message, setMessage] = useState({messageText: '', messageColor: 'blue'})

    const [ play, setPlay] = useState(false)
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')

    

    function handleClick(event){
        event.preventDefault();

        if(password == confirmPassword){
            setPlay(true)

            api.post(`/changeMail/${confirmationCode}`, {
                        password: password
                    })
                    .then(res => {
                            setMessage({messageText: 'E-mail confirmado com sucesso', messageColor: 'green'})
                            setLoading(false)
                    })
                    .catch(error => {
                            setMessage({messageText: 'Algo deu errado', messageColor: 'red'})
                            setTimeout(() => {
                                setPlay(false)
                                setMessage({messageText: '', messageColor: 'green'})
                            }, 3000)
                    })
        } else if(password != confirmPassword){
            setMessage({messageText: 'As senhas não conferem!', messageColor: 'red'})
        }
    }

    return (
        <>
            <Header />
            <S.Container>
                <S.CadastroBox>
                    <S.CadastroForm onSubmit={handleClick}>
                        <S.CadastroTitle>Troca de e-mail</S.CadastroTitle>
                        <S.CadastroInput type='password' placeholder='Senha' onChange={e => setPassword(e.target.value)} required={true}/>
                        <S.CadastroInput type='password' placeholder='Confirmar senha' onChange={e => setConfirmPassword(e.target.value)} required={true}/>
                        <S.CadastroButton type='submit' />
                        <S.Error style={{color: `${message.messageColor}`}}>{message.messageText}</S.Error>
                    </S.CadastroForm>
                </S.CadastroBox>
                <S.AnimationContainer>
                    { play ? <Loading loading={loading} /> : ''}
                </S.AnimationContainer>
            </S.Container>
        </>
        
    )
}

export default App