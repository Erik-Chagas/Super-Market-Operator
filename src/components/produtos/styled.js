import styled from "styled-components";

export const Container = styled.li`
    width: 40%;
    height: max-content;
    padding: 5px 0;
    min-width: 150px;
    min-height: 100px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    background-color: inherit;
    margin: 1vh 3vw;
    border: 1px solid #adadad;
    border-radius: 10px;

    @media(max-width: 700px){
        width: 90%;
    }

    :hover{
        border-left: 5px solid #F04C00;
    }
`

export const ProductImage = styled.img`
    width: 90%;
    height: auto;
`

export const ProductImageContainer = styled.div`
    margin: 0;
    width: 40%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SubContainer = styled.div`
    margin: 0 0 0 5px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`

export const ProductName = styled.p`
    margin: 0 0 5px 0;
    width: fit-content;
    height: fit-content;
    font-size: calc(70% + 0.8vmin);
`

export const ProductPrice = styled.p`
    margin: 0 5% 5px 5%;
    width: fit-content;
    height: fit-content;
    font-size: calc(70% + 0.8vmin);
`

export const ProductQuantity = styled.p`
    margin: 0 0 5px 0;
    width: fit-content;
    height: fit-content;
    font-size: calc(70% + 0.8vmin);
`

export const ProductDescription = styled.p`
    margin: 0;
    overflow-wrap: break-word;
    width: 50%;
    height: max-content;
    font-size: calc(70% + 0.8vmin);
`