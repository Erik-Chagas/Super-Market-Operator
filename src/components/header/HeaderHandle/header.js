import React, { useContext, useEffect, useState } from "react";
import * as S from './styled'
import carrinho from '../../../assets/images/SMO_Logo.png'
import AccountMenu from '../accountsMenu/account'
import { authContext } from '../../../context/auth'
import Menu from '../../../assets/images/MenuBar.svg'
import './style.css'

function Header(props){
    const {initUser} = useContext(authContext)

    const [token, setToken] = useState(null)

    function LinksSign(props){
        return (
            <S.LinkSignList>
                <S.LinkSignItemLeft>
                    <S.LinkSign to='/login'>Login</S.LinkSign>
                </S.LinkSignItemLeft>

                <S.LinkSignItemRight>
                    <S.LinkSign to='/cadastro'>Cadastro</S.LinkSign>
                </S.LinkSignItemRight>
            </S.LinkSignList>
        )
    }

    function openHandle(){
        let menu = document.getElementsByClassName('header');
        menu[0].classList.toggle('true')
    }

    useEffect(() => {
        async function verifyLogin(){
            await initUser()
            setToken(sessionStorage.getItem('token'))
        }
        verifyLogin()
    }, [])

    return (

        <>
            <S.MenuBar className='menuToggle' src={Menu} alt='Abrir Menu' onClick={() => openHandle()}/>

            <S.Container className='header'>
                <S.LogoLink to='/'><S.Logo src={carrinho} alt='Logo'/> <h2>SMO</h2></S.LogoLink>
                
                <S.Divisor/>

                <S.NavList className='navList'>
                    <S.NavItem>
                        <S.LinkHome to='/'>Home</S.LinkHome>
                    </S.NavItem>
                    <S.NavItem>
                        <S.LinkHome to='/'>Aplicativo</S.LinkHome>
                    </S.NavItem>
                    <S.NavItem>
                        <S.LinkHome to='/'>Quem somos?</S.LinkHome>
                    </S.NavItem>

                    <S.NavItem>
                        <S.LinkHome to='/produtos'>Produtos</S.LinkHome>
                    </S.NavItem>
                </S.NavList>

                <S.Divisor/>

                
                <S.AccountOptions>
                    {token ? <AccountMenu /> 
                    : 
                    <LinksSign />
                    }
                </S.AccountOptions>
                
                
            </S.Container>       
        </>

    );
}

export default Header