import React, { useRef } from "react";
import * as S from './styled'
import LogoImg from '../../assets/images/SMO_Logo.svg'
import Products from '../../assets/images/Products.svg'
import Menu from '../../assets/images/MenuBar.svg'
import './style.css'

function Navigator(props){
    const navBar = useRef(null)

    function closeNav(){
        let navServices = document.getElementsByClassName('navBar');
        navServices[0].classList.toggle('true')
    }

    function Logo(props){
        return (
            <>
                <S.LogoLink to='/'>
                    <S.LogoDiv>
                        <S.LogoImg src={LogoImg} alt='Logo'/>
                        <S.LogoName className='notOpen'>Super Market Operator</S.LogoName>
                    </S.LogoDiv>
                </S.LogoLink>
            </>
        )
    }

    function ServiceLink(props){
        return (
            <S.ServiceLinkTO to={props.to}>
                <S.ServiceImg src={props.img} />
                <S.ServiceName className='notOpen'>{props.serviceName}</S.ServiceName>
            </S.ServiceLinkTO>
        )
    }

    return (
        <>
            <S.MenuBar className='menuToggle' src={Menu} alt='Abrir Menu' onClick={closeNav}/>
            <S.ServiceContainer className='navBar' ref={navBar}>
                <Logo />
                <S.Divisor/>
                <ServiceLink to={`${'/produtos'}`} img={Products} serviceName={'Produtos'}/>
                <S.NavigatorOptionContainer>
                    <S.NavigatorArrow onClick={() => closeNav()}>&#8592;</S.NavigatorArrow>
                </S.NavigatorOptionContainer>
            </S.ServiceContainer>
        </>
    )
}

export default Navigator