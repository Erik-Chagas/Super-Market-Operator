import React, { useState, useContext, useEffect } from "react";
import { authContext } from "../../context/auth";
import * as S from './styled'

function Produto(props){

    return (
        <S.Container>
            <S.SubContainer>
                <S.ProductName><b>Nome:</b> {props.name}</S.ProductName>
                <S.ProductPrice><b>Preço:</b> {props.preco}</S.ProductPrice>
                <S.ProductQuantity><b>Quantidade:</b> {props.quantidade}</S.ProductQuantity>
                <S.ProductDescription><b>Descrição:</b> {props.descricao}</S.ProductDescription>
                
                <S.ProductImageContainer>
                    <S.ProductImage src={props.image} />
                </S.ProductImageContainer>
            </S.SubContainer>
            
        </S.Container>
    )
}

export default Produto