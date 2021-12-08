import styled from "styled-components";

export const Container = styled.div`
    width: 98vw;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginBox = styled.div`
    width: 35%;
    height: max-content;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.808);

    @media(max-width: 700px){
        min-width: 70vw;
    }
`
export const LoginForm = styled.form`
    width: 80%;
    margin: 0 auto;    
`
export const LoginTitle = styled.h1`
    width: fit-content;
    position: relative;
    left: 50%;
    transform: translate(-50%);
`

export const LoginInput = styled.input`
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

export const LoginButton = styled.button`
    cursor: pointer;
    margin-top: 15px;
    border: 0px;
    height: 25px;
    width: 25%;
    border-radius: 5px;
    background-color: #D91A1D;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    transition: 0.3s;
    font-size: 1.2vw;
    :hover{
        background-color: #DE6667;
    }

    @media(max-width: 700px){
        font-size: 3.5vw;
    }
`

export const LoginCheckBoxContainer = styled.div`
    width: 100%;
    margin: 8px 0 0 0; 
    display: flex;
    justify-content: flex-start;
    align-items: center;

`

export const LoginCheckBox = styled.input`
    width: fit-content;
    height: 15px;
    line-height: 30px;
    border-radius: 15px;
    border: 1px solid #ccc;
    outline: none;
    position: relative;
    margin: 0 5px 0 8%;
    left: 0;
`

export const Error = styled.p`
    font-family: sans-serif;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    width: fit-content;
    color: red;
`