import styled from "styled-components";

export const PopupExternalDiv = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 5;
`

export const PopupInner = styled.div`
    position: relative;
    height: fit-content;
    background-color: white;
    width: fit-content;
`

export const PopupCloseButton = styled.button`
    position: relative;
    float: right;
    border: 0;
    cursor: pointer;
    background-color: inherit;
    height: fit-content;
`