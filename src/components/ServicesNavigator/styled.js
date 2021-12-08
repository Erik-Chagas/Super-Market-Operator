import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoDiv = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
`

export const LogoImg = styled.img`
    width: 20%;
    min-width: 50px;
    margin: 0;
    margin-right: 5%;
`

export const LogoName = styled.h4`
    font-size: 1.3vw;
    display: block;

    @media(max-width: 700px){
        font-size: 3vw;
    }
`

export const ServiceContainer = styled.div`
    position: fixed;
    width: 20%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: #051e34;
    color: #ededed;
    transition: 0.2s ease-in;
    transform: translateX(-100%);

    @media(max-width: 700px){
        width: 50%;
    }
`

export const ServiceSymbol = styled.img`
    width: 10%;
    height: 10%;
    min-width: 50px;
    margin: 0 auto;
`

export const ServiceName = styled.h4`
    margin: 0;
    margin-left: 5%;
    font-size: 1.2vw;
    display: block;
    width: fit-content;
    height: fit-content;
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    @media(max-width: 700px){
        font-size: 3vw;
    }
`

export const ServiceLinkTO = styled(Link)`
    text-decoration: none;
    margin: 0 auto;
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: 0.3s ease-out;
    margin-bottom: 5%;

    :hover{
        background-color: #e0e0e0;
    }
`

export const ServiceImg = styled.img`
    width: 2.5vw;
    min-width: 45px;
`

export const Divisor = styled.hr`
    width: 99%;
`

export const LogoLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    text-decoration: none;
    color: white;
    font-family: sans-serif;
`

export const NavigatorOptionContainer = styled.div`
    flex-grow: 1;
    width: 100%;
    background-color: inherit;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`

export const NavigatorArrow = styled.h1`
    margin: 0 2px;
    cursor: pointer;
`

export const MenuBar = styled.img`
    position: fixed;
    z-index: 0;
    display: block;
    cursor: pointer;
    transition: transform 0.2s ease-in;
    
`