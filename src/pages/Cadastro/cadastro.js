import React, {useState} from 'react';
import Header from '../../components/header/HeaderHandle/header';
import * as S from './styled'
import Loading from '../../components/Loading/loading'
import { api } from '../../utils/api';

function App(props){
    const [ name, setName] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')

    const [ play, setPlay] = useState(false)
    const [ loading, setLoading] = useState(false)
    const [ message, setMessage] = useState({messageText: '', messageColor: 'black'})

    function handleCadastro(){
        
        if(confirmPassword === password && password !== ''){
            setPlay(true)
            setLoading(true)

            setMessage({messageText: 'Verificando suas credenciais', messageColor: 'black'})
            
            api.post('/cadastro', {
                name: name,
                email: email,
                password: password
            }).then(res => {
                setMessage({messageText: 'Usuário cadastrado com sucesso. Confirme seu e-mail!', messageColor: 'green'})
                setLoading(false)
            })
              .catch(erro => setMessage({messageText: erro.response.data.message, messageColor: 'red'}))
        } else {
            setMessage({messageText: 'As senhas não conferem', messageColor: 'red'})
            setTimeout(() => {
                setMessage({messageText: '', messageColor: 'red'})
            }, 3000)
        }
        
    }

    return (
        <>
        <Header />
        <S.Container>
            <S.CadastroBox>
                <S.CadastroForm>
                    <S.CadastroTitle>Cadastro</S.CadastroTitle>
                    <S.CadastroInput type='text' placeholder='Nome' onChange={e => setName(e.target.value)}/>
                    <S.CadastroInput type='email' placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                    <S.CadastroInput type='password' placeholder='Senha' onChange={e => setPassword(e.target.value)}/>
                    <S.CadastroInput type='password' placeholder='Confirmar senha' onChange={e => setConfirmPassword(e.target.value)}/>
                    <S.CadastroButton type="button" onClick={handleCadastro}>Cadastro</S.CadastroButton>
                    <S.Error style={{color: `${message.messageColor}`}}>{message.messageText}</S.Error>
                </S.CadastroForm>
            </S.CadastroBox>
            <S.AnimationContainer>
                { play ? <Loading loading={loading} /> : ''}
            </S.AnimationContainer>
        </S.Container>
        </>
    );
}

export default App