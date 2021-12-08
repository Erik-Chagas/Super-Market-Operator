import styled from "styled-components";

export const Container = styled.div`
    width: 98vw;
    height: 98vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
`

export const CadastroBox = styled.div`
    width: 35%;
    height: max-content;
    margin: 2vh 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.808);

    @media(max-width: 700px){
        min-width: 70vw;
    }
`
export const CadastroForm = styled.form`
    width: 80%;
    margin: 0 auto;    
`
export const CadastroTitle = styled.h1`
    width: fit-content;
    position: relative;
    left: 50%;
    transform: translate(-50%);
`

export const CadastroInput = styled.input`
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
export const CadastroButton = styled.button`
    cursor: pointer;
    margin-top: 15px;
    font-size: 1.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
    height: 22px;
    width: 25%;
    border-radius: 5px;
    background-color: #D91A1D;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    transition: 0.3s;
    :hover{
        background-color: #DE6667;
    }

    @media(max-width: 700px){
        font-size: 2.5vw;
    }
`

export const Error = styled.h3`
    position: relative;
    left: 50%;
    transform: translate(-50%);
    width: fit-content;
    text-align: center;
`

export const AnimationContainer = styled.div`
    width: 100%;
    height: fit-content;
`
