import react, { useState, useEffect, useRef } from "react";
import Cropper from "react-easy-crop";
import Header from '../../components/header/HeaderHandle/header';
import * as S from './styled'
import * as utils from '../../utils/cropImage'
import confirmImage from '../../assets/images/confirm.svg'
import cancelImage from '../../assets/images/cancel.svg'
import editImage from '../../assets/images/edit.svg'
import Popup from "../../components/PopUp/Popup";
import './style.css'
import Loading from '../../components/Loading/loading'
import { useHistory } from 'react-router-dom'
import { api } from "../../utils/api";

function App(props){

    const history = useHistory()

    const [user, setUser] = useState(null)

    const [ playPasswordLoading, setplayPasswordLoading] = useState(false)
    const [ loading, setLoading] = useState(false)
    const [ message, setMessage] = useState({messageText: '', messageColor: 'black'})
    const [ emailMessage, setEmailMessage] = useState({messageText: '', messageColor: 'black'})

    const [ playNameLoading, setplayNameLoading] = useState(false)

    const [userName, setUserName] = useState('')
    const [changeName, setChangeName] = useState(false)
    const inputName = useRef(null)

    const [userEmail, setUserEmail] = useState('')
    const inputEmail = useRef(null)

    const [changePassword, setChangePassword] = useState(false)

    const [showPopup, setShowPopup] = useState(false)

    const [image, setImage] = useState(null)
    const [croppedArea, setCroppedArea] = useState(null)
    const [crop, setCrop] = useState({x: 0, y: 0})
    const [zoom, setZoom] = useState(1)

    const inputImage = useRef()

    const inputImageTrigger = () => inputImage.current.click()

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
		setCroppedArea(croppedAreaPixels);
    }

    const onSelectFile = (event) => {
        if (event.target.files && event.target.files.length > 0) {
			const reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]);
			reader.addEventListener("load", () => {
				setImage(reader.result);
			});
		}
    }

    const onUpload = async () => {
        const canvas = await utils.getCroppedImg(image, croppedArea);
        const canvasDataUrl = canvas.toDataURL("image/jpeg");
        const convertedURLToFile = utils.dataURLtoFile(canvasDataUrl, 'ProfileImage.jpeg')
        const form = new FormData()
        form.append("file", convertedURLToFile)
        const uploadPic = await api({
            method: "POST",
            url: "/editProfile",
            data: form,
            headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`},
          })

        const userInfo = await api.get('/userInfo', {
            headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
        })

        setUser(userInfo.data)
        setImage(null)
    }

    const changingName = (value) => {
        setChangeName(value)

        if(value){
            inputName.current.style.border = '2px solid #F04C00;'
            inputName.current.style = 'border: 2px solid #F04C00; transform: scale(1.1); transition: 0.1s;'
        } else {
            inputName.current.style.border = '1px solid #ccc;'
            inputName.current.style = 'border: 1px solid #ccc; transform: scale(1); transition: 0.1s;'
        }
        
    }

    const changeNameAPICall = async () => {
        setplayNameLoading(true)
        setLoading(true)

        try {
            const changeAPICall = await api.post('/editProfile', {
                name: userName
            },{
                headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
            })
            setLoading(false)

            setTimeout(() => {
                setplayNameLoading(false)
                setLoading(false)
                window.location.reload(true)
            }, 1000)

            const userInfo = await api.get('/userInfo', {
                headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
            })
    
            setUser(userInfo.data)
            setUserName(userInfo.data.name)

            

        } catch(error) {

        }
    }

    function ChangeEmailPopUp(props){
        const inputMail = useRef(null)

        const changeEmailAPICall = async () => {
            try{
                setEmailMessage({messageText: '', messageColor: 'green'})

                const change = await api.post('/editProfile', {
                    email: inputMail.current.value
                },{
                    headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
                })

                setEmailMessage({messageText: 'Troca de e-mail em andamento, verifique sua caixa de entrada e confirme sua senha para concluir', messageColor: 'green'})

            } catch(erro) {
                setEmailMessage({messageText: 'Oops... Algo deu errado', messageColor: 'red'})
            }
            
            const userInfo = await api.get('/userInfo', {
                headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
            })
    
            setUser(userInfo.data)
            setUserEmail(userInfo.data.email)
        }

        return (
            <S.ChangeEmailPopUpContainer>
                <h2>Certifique-se de escrever um e-mail válido</h2>
                <S.EmailLabel for="email"><h3 style={{width: 'fit-content', margin: 0}}>Novo email:</h3></S.EmailLabel>
                <S.EmailInput ref={inputMail} type='email' id="email" name="email" placeholder={userEmail}/>
                <S.EmailEditButton onClick={async () => await changeEmailAPICall()}>Mudar</S.EmailEditButton>
                <S.Error style={{color: emailMessage.messageColor, width: '80%', textAlign: 'center'}}>{emailMessage.messageText}</S.Error>
            </S.ChangeEmailPopUpContainer>
        )
    }

    function handleClick(){
        setShowPopup(true)
    }

    function ChangePasswordComponent(props){
        const inputOldPassword = useRef(null)
        const inputNewPassword = useRef(null)
        const inputConfirmNewPassword = useRef(null)

        async function handleChangePasswordClick(){
            if( (inputNewPassword.current.value === inputConfirmNewPassword.current.value) && (inputOldPassword.current.value !== '') && (inputNewPassword.current.value !== '') && (inputConfirmNewPassword.current.value !== '') ){
                setplayPasswordLoading(true)
                setLoading(true)
                setMessage({messageText: 'Verificando suas credenciais', messageColor: 'black'})

                api.post('/editProfile', {
                    password: inputNewPassword.current.value,
                    oldPassword: inputOldPassword.current.value
                },{
                    headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
                }).then(res => {
                    setMessage({messageText: 'Troca de senhas bem sucedida!', messageColor: 'green'})
                    setLoading(false)
                    setTimeout(() => {
                        setplayPasswordLoading(false)
                        setLoading(false)
                        setMessage({messageText: '', messageColor: 'red'})
                    }, 3000)
                })
                  .catch(async erro => {
                      
                      setMessage({messageText: erro.response.data.message, messageColor: 'red'})
                      setplayPasswordLoading(false)
                      setLoading(false)
                      setTimeout(() => {
                        setMessage({messageText: '', messageColor: 'red'})
                    }, 3000)
                    })
            } else if(inputNewPassword.current.value !== inputConfirmNewPassword.current.value) {
                setMessage({messageText: 'As senhas não conferem', messageColor: 'red'})
                setTimeout(() => {
                    setMessage({messageText: '', messageColor: 'red'})
                }, 3000)
            } else if(inputOldPassword.current.value === '' || inputNewPassword.current.value === '' || inputConfirmNewPassword.current.value === ''){
                setMessage({messageText: 'Por favor, complete todos os campos!', messageColor: 'red'})
                setTimeout(() => {
                    setMessage({messageText: '', messageColor: 'red'})
                }, 3000)
            }
        }

        return (
            <>
                <S.PasswordLabel for="OldPassword"><h3 style={{width: 'fit-content', margin: 0}}>Senha antiga:</h3></S.PasswordLabel>
                <S.PasswordInput ref={inputOldPassword} type="Password" name="OldPassword"/>
                <S.PasswordLabel for="NewPassword"><h3 style={{width: 'fit-content', margin: 0}}>Nova senha:</h3></S.PasswordLabel>
                <S.PasswordInput ref={inputNewPassword} type="Password" name="NewPassword"/>
                <S.PasswordLabel for="ConfirmNewPassword"><h3 style={{width: 'fit-content', margin: 0}}>Confirme sua senha:</h3></S.PasswordLabel>
                <S.PasswordInput ref={inputConfirmNewPassword} type="Password" name="ConfirmNewPassword"/>
                <S.NewPasswordSendButton onClick={() => handleChangePasswordClick()}>Salvar</S.NewPasswordSendButton>
            </>
        )   
    }

    useEffect(() => {
        if(changeName){
            inputName.current.focus()
        }
            
    }, [changeName])

    useEffect(() => {
        async function getUserInfo(){
            if(sessionStorage.getItem('token')){
                const userInfo = await api.get('/userInfo', {
                    headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
                })
        
                setUser(userInfo.data)
                setUserName(userInfo.data.name)
                setUserEmail(userInfo.data.email)
            } else {
                history.push('/')
            }
        }

        getUserInfo()
        
    }, [])
    
    return (
        <>
            <Header />
            <Popup trigger={showPopup} setTrigger={setShowPopup}>
               
                <ChangeEmailPopUp />

            </Popup>

            {image ? (
            <S.AllCropperContainer>
                <S.CropperContainer>
                    <Cropper image={image} zoom={zoom} crop={crop} aspect={1} onCropChange={setCrop} onZoomChange={setZoom} onCropComplete={onCropComplete}/>
                </S.CropperContainer>

                <S.CropperContainerButtons>
                    <S.CropperButtons style={{'background-color': 'red'}} onClick={() => setImage(null)}>Cancelar</S.CropperButtons>
                    <S.CropperButtons onClick={async () => await onUpload()}>Upload</S.CropperButtons>
                </S.CropperContainerButtons>
            </S.AllCropperContainer>
        ) : ''}
            
            <S.Container>
                <S.SubContainer>

                    {/* Troca de imagem e nome*/}
                    <S.ImageChangerContainer>
                        
                        {user ? <S.ProfileImage src={user.profileImage.url} alt='Imagem do perfil'/> : ''}

                        <input type='file' accept='image/*' ref={inputImage} style={{display: 'none'}} onChange={onSelectFile}/>

                        <S.InputContainer>
                            <S.NameInput ref={inputName} type="text" value={userName} disabled={!changeName} onChange={e => setUserName(e.target.value)}/>
                        </S.InputContainer>

                        {changeName ? 
                        
                        <S.NameChangerButtonsContainer>
                            <S.NameChangerButtonsSubContainer>
                                <S.NameChangerButtons src={confirmImage} onClick={async () => await changeNameAPICall()} />
                                <S.NameChangerButtons src={cancelImage} onClick={() => {
                                    changingName(false)
                                }}/>
                            </S.NameChangerButtonsSubContainer>
                            <S.AnimationContainer className='AnimationContainer'>
                                { playNameLoading ? <Loading loading={loading} /> : ''}
                            </S.AnimationContainer>
                        </S.NameChangerButtonsContainer>
                        : 
                        <S.ImageChangerButtons>
                            <S.EditButton onClick={() => changingName(true)}>
                                Alterar nome
                            </S.EditButton>
                            <S.EditButton onClick={() => inputImageTrigger()} disabled={changeName}>
                                Alterar imagem
                            </S.EditButton>
                        </S.ImageChangerButtons>}
                    </S.ImageChangerContainer>

                    {/* Troca de email */}
                    <S.EmailChangerContainer>
                        <S.EmailLabel for="email"><h3 style={{width: 'fit-content', margin: 0}}>Email:</h3></S.EmailLabel>
                        <S.EmailInput ref={inputEmail} type="email" id="email" name="email" disabled={true} value={userEmail} onChange={e => setUserEmail(e.target.value)}/>
                        <S.EmailEditButton onClick={() => handleClick()}><S.EmailEditImage src={editImage}/></S.EmailEditButton>
                    </S.EmailChangerContainer>

                    {/* Troca de senha */}
                    <S.PasswordChangerContainer className='PasswordChangerContainer'>
                        <S.PasswordChangerSubContainer className='PasswordChangerSubContainer'>
                            <S.PasswordLabel for="Password"><h3 style={{width: 'fit-content', margin: 0}}>Password:</h3></S.PasswordLabel>
                            <S.PasswordInput type="Password" id="Password" name="Password" disabled={true} value={'********'} />
                            <S.PasswordEditButton onClick={() => setChangePassword(!changePassword)}><S.PasswordEditImage src={editImage}/></S.PasswordEditButton>

                            { changePassword ? <ChangePasswordComponent /> : ''}
                        </S.PasswordChangerSubContainer>

                        <S.AnimationContainer className='AnimationContainer'>
                            { playPasswordLoading ? <Loading loading={loading} /> : ''}
                            <S.Error style={{color: `${message.messageColor}`}}>{message.messageText}</S.Error>
                        </S.AnimationContainer>
                    </S.PasswordChangerContainer>
                </S.SubContainer>
            </S.Container>
        </>
        
    )
}

export default App