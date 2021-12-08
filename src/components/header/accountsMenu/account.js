import React, { useState, useEffect } from "react";
import * as S from './styled'
import { useHistory } from 'react-router-dom'
import { api } from "../../../utils/api";

function AccountMenu(props) {

    const history = useHistory()

    const [ user, setUser] = useState(null)

    useEffect(() => {
        async function getUserInfo(){
            api.get('/userInfo', {
                headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
            }).then(res => {
                if(res){
                    setUser(res.data)
                }
            })
        }

        getUserInfo()
    }, []); 

    const [ open, setOpen ] = useState(false)

    function DropDownMenu(){
        function signOut(){
            localStorage.clear()
            sessionStorage.clear()
            window.location.reload(true);
        }

        function DropDownItem(props){
            return(
                <S.DropText onClick={() => props.trigger()}>{props.option}</S.DropText>
            )
        }

        return (
            <S.DropDownStyle>
                <DropDownItem trigger={() => {history.push('/account')}} option = {'configurações'}></DropDownItem>
                <DropDownItem trigger={signOut} option = {'sair'}></DropDownItem>
            </S.DropDownStyle>
        )
    }

    return (
        <>
            <S.accountContainer className='accountContainer'>
                {user ? 
                <S.accountHandle className='accountHandle'>
                    <S.ProfileDiv onClick={() => setOpen(!open)} className='ProfileDiv'>
                        {user ? <S.ProfilePic src={user.profileImage.url} alt='Imagem do perfil'/> : ''}
                        <S.UserName>{user.name}</S.UserName>
                    </S.ProfileDiv>
                    {open ? <DropDownMenu /> : ''}
                </S.accountHandle>     
                :   <p>{''}</p>  
                }
            </S.accountContainer>
        </>
    )
}

export default AccountMenu