import React, {useCallback, useState} from "react";
import { useDropzone } from "react-dropzone";
import { UploadMessage, DropContainer, ImagePreview } from "./style"

function Drop({handleFile}) {
    const [image, setImage] = useState(null)

    const onDrop = useCallback(acceptedFiles => {
        
        handleFile(acceptedFiles[0])
        setImage(URL.createObjectURL(acceptedFiles[0]))

    }, [])

    const {getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({onDrop, accept: 'image/jpeg, image/png'})

    const renderDragMessage = (isDragActive, isDragReject) => {
        if(image){
            return <ImagePreview src={image}/>
        }

        if (!isDragActive) {
          return <UploadMessage>Arraste arquivos aqui...</UploadMessage>;
        }
    
        if (isDragReject) {
          return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
        }
        
        if(isDragActive && !isDragReject){
            return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
        }

        
    };


    //render
    return (
        <DropContainer isDragActive={isDragActive} isDragReject={isDragReject} {...getRootProps()}>
            <input {...getInputProps()} />
            {
                renderDragMessage(isDragActive, isDragReject)
            }
        </DropContainer>
    )
}

export default Drop