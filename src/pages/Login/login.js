import React, {useState} from 'react';
import * as S from './styled'
import Header from '../../components/header/HeaderHandle/header'
import { useHistory } from 'react-router-dom'
import { api } from '../../utils/api';

function App(props){

    const history = useHistory()

    const [ keepLogged, setKeepLogged ] = useState(false)
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError] = useState('')

    function handleLogin(){
        api.post('/login', {
            email: email,
            password: password
        }).then(async res => {
            sessionStorage.setItem('token', res.data.token)
            if(keepLogged){
                localStorage.setItem('keepLogged', keepLogged)
                localStorage.setItem('refreshToken', res.data.refreshToken)
            } else if(!keepLogged){
                sessionStorage.setItem('refreshToken', res.data.refreshToken)
            }
            history.push('/')
        })
          .catch(erro => setError(erro.response.data.message))
    }

    return (
        <>
            <Header />
            <S.Container>
                <S.LoginBox>
                    <S.LoginForm>
                        <S.LoginTitle>Login</S.LoginTitle>
                        <S.LoginInput placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                        <S.LoginInput type='password' placeholder='Senha' onChange={e => setPassword(e.target.value)}/>
                        <S.LoginCheckBoxContainer> 
                            <S.LoginCheckBox type='checkbox' id='keepLogged' value='continuarLogado' onChange={() => setKeepLogged(!keepLogged)}/>
                            <label for='keepLogged'>Continuar logado</label>
                        </S.LoginCheckBoxContainer>
                        <S.LoginButton type="button" onClick={handleLogin}>Login</S.LoginButton>
                        <S.Error>{error}</S.Error>
                    </S.LoginForm>
                </S.LoginBox>
            </S.Container>
        </>
    );
}

export default App