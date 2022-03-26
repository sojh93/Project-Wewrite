import React from "react";
import styled from "styled-components";

const Grid = ({
    onClick,
    onSubmit,
    children,
    is_flex,
    _ref,
    kakao=false,
    wrap,
    notice,
    ...props

}) => {
    if(wrap){
        return(
            <Wrap style={{display:"flex"}}>
                <div onClick={onClick} style={{...props}}>
                    {children}
                </div>
            </Wrap>
        )
    }
    if(notice){
        return(
            <WrapNotice style={{display:"flex"}}>
                <div onClick={onClick} style={{...props}}>
                    {children}
                </div>
            </WrapNotice>
        )
    }
    if(is_flex){
        return(
            <Flex ref={_ref} onClick={onClick} onSubmit={onSubmit} style={{...props}}>
                {children}
            </Flex>
        )
    }
    if(kakao){
        return(
            <Kakao onClick={onClick} style={{...props}}>
                {children}
            </Kakao>
        )
    }
    return(
            <Div onClick={onClick} style={{...props}}>
                {children}
            </Div>

    )
}

const Wrap = styled.div`
    width : 100vw;
    max-width : 420px;
    min-width : 360px;
    height : ${props => props.theme.size.height};
    background-color : ${props => props.theme.mainTheme.tertiary};
    overflow : hidden;
    flex-direction : column;
    overflow : auto;
    ::-webkit-scrollbar { 
    display: none; 
    }
`;

const WrapNotice = styled.div`
    width : 100vw;
    max-width : 390px;
    min-width : 360px;
    height : ${props => props.theme.size.height};
    background-color : ${props => props.theme.mainTheme.tertiary};
    overflow : hidden;
    flex-direction : column;
    overflow: hidden;
    ::-webkit-scrollbar { 
    display: none;
    }
`;

const Div = styled.div`
    background-color : ${props => props.theme.mainTheme.tertiary};
    box-sizing : border-box;
`;

const Flex = styled.div`
    display : flex;
    background-color : ${props => props.theme.mainTheme.tertiary};
    box-sizing : border-box;
`;

const Kakao = styled.div`
    display : flex;
    background-image : url('/default_img/kakao_login_medium_wide.png');
    background-size : cover;
    background-position : center;
    box-sizing : border-box;
`;

export default Grid;