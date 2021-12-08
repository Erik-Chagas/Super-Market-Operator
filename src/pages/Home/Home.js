import React from "react";
import * as S from './styled'
import Header from "../../components/header/HeaderHandle/header";
import HomeImage from '../../assets/images/HomeImage.svg'
import Products from '../../assets/images/Products.svg'
import './style.css'

function App(props){

    return (
        <>
            <Header></Header>

            <globalStyles />

            <S.SectionOne>
                <S.SubSectionOne>
                    <S.Text>Gerencie seu negócio.</S.Text>
                    <S.HomeImage src={HomeImage}/>
                    <S.DicasContainer>
                        <S.Dicas>
                            <S.DicasText>Organize e armazene seu estoque de produtos</S.DicasText>
                            <S.DicasImages src={Products} alt='Produto'/>
                        </S.Dicas>
                    </S.DicasContainer>
                </S.SubSectionOne>
            </S.SectionOne>
        </>
        
    )
}

export default App