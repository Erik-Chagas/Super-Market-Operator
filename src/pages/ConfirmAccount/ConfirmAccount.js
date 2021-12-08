import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/header/HeaderHandle/header";
import * as S from './styled'
import Loading from '../../components/Loading/loading'
import { api } from "../../utils/api";

function App(props){
    const { confirmationCode } = useParams()
    const [ loading, setLoading] = useState(true)
    const [ message, setMessage] = useState({messageText: '', messageColor: 'blue'})

    useEffect(() => {
        setMessage({messageText: 'Verificando e-mail', messageColor: 'turqueise'})
        setLoading(true)
        api.get(`/confirm/${confirmationCode}`)
            .then(res => {
                setMessage({messageText: 'E-mail confirmado com sucesso', messageColor: 'green'})
                setLoading(false)
            })
            .catch(error => {
                setMessage({messageText: 'Algo deu errado', messageColor: 'red'})
            })
    }, [])

    return (
        <>
            <Header />
            <S.Container>
                <Loading loading={loading} />
                <S.confirmTitle style={{color: `${message.messageColor}`}}>{message.messageText}</S.confirmTitle>
            </S.Container>
            
        </>
        
    )
}

export default App