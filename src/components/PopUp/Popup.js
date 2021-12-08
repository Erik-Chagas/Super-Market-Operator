import React from "react";
import * as S from './styled'

function Popup(props){
    return (props.trigger) ? (
        <S.PopupExternalDiv>
            <S.PopupInner>
                <S.PopupCloseButton onClick={() => props.setTrigger(false)}>
                    <h1 style={{margin: 0}}>x</h1>
                </S.PopupCloseButton>
                {props.children}
                
            </S.PopupInner>
        </S.PopupExternalDiv>
    ) : '';
}

export default Popup