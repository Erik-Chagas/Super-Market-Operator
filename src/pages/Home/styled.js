import styled from "styled-components";
import './style.css'

export const SectionOne = styled.section`
    width: 99.45vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SubSectionOne = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media(max-width: 470px){
        align-content: flex-start;
    }
`

export const HomeImage = styled.img`
    width: 40vw;
    height: 40vh;
    margin-top: 6vh;

    @media(max-width: 700px){
        width: 70vw;
        height: max-content;
        margin-top: 0;
    }
`

export const Text = styled.h1`
    font-family: "Galano Grotesque";
    font-size: 200%;
    position: relative;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    text-align: center;
    text-justify: inter-word;

    @media(max-width: 870px){
        height: max-content;
    }

    @media(max-width: 700px){
        height: max-content;
        margin-top: 3vh;
        margin-bottom: 0.5vh;
    }
`

export const DicasContainer = styled.div`
    width: 50vw;
    height: 30vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    margin-top: 5vh;

    @media(max-width: 700px){
        width: 80vw;
        height: max-content;
        margin-top: 5vh;
        
    }
`

export const Dicas = styled.div`
    width: 15vw;
    height: 15vw;
    background-color: turquoise;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 10px;
    border: 3px solid #F04C00;

    @media(max-width: 700px){
        width: 40vw;
        height: 40vw;
    }
`

export const DicasImages = styled.img`
    width: 7.5vw;
    height: fit-content;

    @media(max-width: 700px){
        width: 18vw;
    }
`

export const DicasText = styled.h5`
    font-family: sans-serif;
    font-size: 1.2vw;
    text-align: center;
    text-justify: inter-word;
    margin: 0;

    @media(max-width: 700px){
        font-size: 92%;
    }
`
