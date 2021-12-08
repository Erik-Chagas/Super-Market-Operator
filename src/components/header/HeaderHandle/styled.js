import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    background-color: #F04C00;
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 1;

    @media(max-width: 700px){
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 40vw;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        transform: translate(-102%);
    }
`

export const Logo = styled.img`
    width: auto;
    height: 90%;
    margin: 3px 5px 0 3px;

    @media(max-width: 700px){
        display: none;
    }
`
export const NavList = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
    margin: 0;
    margin-left: 5vw;
    font-family: sans-serif;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media(max-width: 700px){
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 0;
    }
`

export const NavItem = styled.li`
    letter-spacing: 3px;
    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: 0.3s;
    margin: 0vh 2vw;
    transition: 0.1s ease-in;

    :hover{
        background-color: #D4D4D4;
        
    }

    @media(max-width: 700px){
        margin: 1vh 0;
    }
`

export const LinkSign = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: sans-serif;
`
export const LinkSignList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    display: flex;
    margin-left: 5vw;

    @media(max-width: 700px){
        margin: 0;
        width: 100%;
        flex-wrap: wrap;
        height: max-content;
        justify-content: center;
    }

    @media(max-width: 875px) and (min-width: 700px){
        margin-left: 2vw;
    }
`

export const LinkSignItemLeft = styled.li`
    background-color: #61C7F2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10vw;
    height: 5vh;
    margin: 2vh 1vw;
    border-radius: 50px;

    @media(max-width: 700px){
        margin: 0;
        width: 49%;
        font-size: 3vw;
        margin-left: 0;
        border-radius: 0;
        border: 0.5px solid whitesmoke;
    }
`

export const LinkSignItemRight = styled.li`
    background-color: #61C7F2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10vw;
    height: 5vh;
    margin: 2vh 1vw;
    border-radius: 50px;

    @media(max-width: 700px){
        margin: 0;
        flex-grow: 1;
        font-size: 3vw;
        margin-left: 0;
        border-radius: 0;
        border: 0.5px solid whitesmoke;
        border-left: 0px solid whitesmoke;
    }
`


export const LinkHome = styled(Link)`
    width: max-content;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.5vw;
    font-family: sans-serif;
    color: black;

    @media(max-width: 700px){
        margin: 0;
        font-size: 4.2vw;
    }
`

export const MenuBar = styled.img`
    display: none;
    position: fixed;
    z-index: 2;

    @media(max-width: 700px){
        display: block;
        cursor: pointer;
        z-index: 2;
        transition: transform 0.2s ease-in;
    }
`

export const LogoLink = styled(Link)`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    text-decoration: none;
    color: white;
    font-family: sans-serif;

    @media(max-width: 700px){
        color: #F04C00;
        height: 60px;
    }
`

export const AccountOptions = styled.div`
    background-color: inherit;
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media(max-width: 700px){
        margin: 0;
        align-items: flex-end;
        justify-content: center;
    }
`

export const Divisor = styled.hr`
    width: 100%;

    @media(min-width: 700px){
        display: none;
    }
`