import styled from "styled-components";

export const Container = styled.div`
    width: 98vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`

export const SubContainer = styled.div`
    background-color: gray;
    width: 80%;
    height: max-content;
    padding: 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    background-color: whitesmoke;

    @media (max-width: 299px){
        min-width: 95vw;
    }
`

export const ImageChangerContainer = styled.div`
    background-color: inherit;
    width: 30%;
    height: 60%;
    display: flex;
    margin-top: 5vh;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 900px){
        min-width: fit-content;
        height: 40%
    }
`

export const ProfileImage = styled.img`
    width: 20vw;
    height: 20vw;
    min-width: 120px;
    min-height: 120px;
    border-radius: 50%;
    background-color: white;
`

export const ImageChangerButtons = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NameChangerButtonsContainer = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const NameChangerButtonsSubContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NameChangerButtons = styled.img`
    margin: 0 5px;
    cursor: pointer;
`

export const AllCropperContainer = styled.div`
    height: 80%;
	padding: 10px;
    width: max-content;
    position: fixed;
    z-index: 4;
`

export const CropperContainer = styled.div`
    height: 90%;
    width: 98vw;
    position: relative;
`

export const CropperContainerButtons = styled.div`
    border: 1px solid #f5f5f5;
	height: 20%;
	display: flex;
	align-items: center;
	justify-content: center;
    width: 98vw;
`

export const CropperButtons = styled.button`
    width: 12vw;
    height: 6vh;
    background-color: #0049a3;
    border-radius: 15px;
    border: 0;
    font-size: 1.3vw;
    font-family: sans-serif;
    cursor: pointer;
    margin: 0 0.5vw;

    :hover{
        filter: brightness(120%);
    }

`

export const Name = styled.h4`
    margin: 0 auto;
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    font-size: 2vw;
`

export const NameChangerContainer = styled.div`

`

export const NameInput = styled.input`
    width: 80%;
    height: fit-content;
    padding: 3px 0;
    font-size: 120%;
    line-height: 30px;
    border-radius: 15px;
    border: 1px solid #ccc;
    outline: none;
    position: relative;
    margin-top: 1px;
    text-align: center;

    @media (max-width: 900px) {
        height: fit-content;
        font-size: 120%;
        width: 50%;
        padding: 3px 0;
        margin-top: 1px;
    }
`

export const InputContainer = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1vh 0;
`

export const EditButton = styled.button`
    width: 12vw;
    height: 6vh;
    background-color: #0049a3;
    border-radius: 15px;
    border: 0;
    font-size: 1.3vw;
    font-family: sans-serif;
    cursor: pointer;
    margin: 0 1vw;

    @media (max-width: 900px){
        font-size: 100%;
        width: fit-content;
        min-height: fit-content;
        max-width: 120px;
        padding: 5px 5px;
    }

    @media (max-width: 400px){
        font-size: 100%;
        min-width: fit-content;
    }

    :hover{
        filter: brightness(120%);
    }
`

export const PasswordChangerContainer = styled.div`
    width: 100%;
    height: max-content;
    padding: 5px 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 1vw;
`

export const PasswordInput = styled.input`
    width: 70%;
    height: fit-content;
    padding: 3px 0;
    font-size: 120%;
    line-height: 30px;
    border-radius: 15px;
    border: 1px solid #ccc;
    outline: none;
    position: relative;
    margin-top: 1px;
    min-width: fit-content;

    @media (max-width: 900px) {
        height: fit-content;
        font-size: 120%;
        width: 50%;
        padding: 3px 0;
        margin-top: 1px;
    }
`

export const PasswordChangerSubContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: 50%;
    height: max-content;
`

export const PasswordLabel = styled.label`
    width: 100%;
`

export const PasswordEditButton = styled.button`
    border: 1px solid gray;
    border-radius: 0.5vw;
    width: 5%;
    min-width: 50px;
    min-height: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2vh 0.5vw;
`

export const PasswordEditImage = styled.img`
    width: 100%;
`

export const NewPasswordSendButton = styled.button`
    border: 1px solid greenyellow;
    background-color: green;
    border-radius: 0.5vw;
    width: 5%;
    min-width: 50px;
    min-height: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5vw;
`

export const ChangePasswordPopUpContainer = styled.div`
    width: 50%;
    height: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const EmailChangerContainer = styled.div`
    width: 100%;
    height: max-content;
    padding: 5px 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 1vw;
`

export const EmailInput = styled.input`
    width: 50%;
    height: fit-content;
    padding: 3px 0;
    font-size: 120%;
    line-height: 30px;
    border-radius: 15px;
    border: 1px solid #ccc;
    outline: none;
    position: relative;
    margin-top: 1px;
    min-width: fit-content;

    @media (max-width: 900px) {
        height: fit-content;
        font-size: 120%;
        width: 50%;
        padding: 3px 0;
        margin-top: 1px;
    }
`

export const EmailLabel = styled.label`
    width: 80%;
`

export const EmailEditButton = styled.button`
    border: 1px solid gray;
    border-radius: 0.5vw;
    width: 5%;
    min-width: 50px;
    min-height: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2vh 0.5vw;
`

export const EmailEditImage = styled.img`
    width: 100%;
`

export const ChangeEmailPopUpContainer = styled.div`
    width: 100%;
    height: 80%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const AnimationContainer = styled.div`
    width: 40%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const Error = styled.h3`
    position: relative;
    width: fit-content;
`