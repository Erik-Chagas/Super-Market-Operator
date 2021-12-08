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
    width: 40%;
    min-width: 400px;
    height: max-content;
    padding: 10px 0;
    margin: 20vh 0 0 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.808);
`
export const CadastroForm = styled.form`
    width: 80%;
    margin: 0 auto;    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

`
export const CadastroTitle = styled.h1`
    width: fit-content;
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
export const CadastroButton = styled.input`
    margin: 5% 0 0 0;
    padding: 5px 10px;
    background-color: #2364a3;
    border-radius: 10px;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover{
        filter: brightness(140%);
    }
`

export const Error = styled.h3`
    width: 100%;
    text-align: center;
`

export const AnimationContainer = styled.div`
    width: 100%;
    height: fit-content;
`
