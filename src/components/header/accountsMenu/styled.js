import styled from "styled-components";

export const accountContainer = styled.div`
    @media(max-width: 700px){
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
`

export const accountHandle = styled.div`
    background-color: white;
    width: fit-content;
    max-width: 10vw;
    height: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    margin-left: 10%;
    border: 1px solid black;

    @media(max-width: 700px){
        width: 100%;
        height: 30px;
        max-width: 100%;
        margin: 0;
    }
`
export const ProfilePic = styled.img`
    border-radius: 50px;
    width: 2vw;
    height: 2vw;
    border: 1px solid black;
    margin-right: 1vw;

    @media(max-width: 700px){
        margin: 0 10px 0 20%;
        width: 10%;
        height: auto;
    }
`

export const DropDownStyle = styled.div`
    background-color: #2a2a2a;
    height: max-content;
    width: fit-content;
    padding: 0 1vw;

    @media(max-width: 700px){
        width: 100%;
        padding: 0;
    }
`
export const ProfileDiv = styled.div`
    position: relative;
    min-width: 8vw;
    width: fit-content;
    padding: 0 3px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    cursor: pointer;

    @media(max-width: 700px){
        width: 100%;
        margin: 0;
    }
`

export const DropText = styled.p`
    color: white;
    height: 5vh;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
`

export const UserName = styled.p`
    text-align: center;
    font-size: calc(90% + 0.8vmin);
    white-space: nowrap; 
    text-overflow: clip;
    overflow: hidden;
`