import React from "react";
import styled from "styled-components";

const Grid = ({
    onClick,
    children,
    is_flex,
    kakao=false,
    wrap,
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
    if(is_flex){
        return(
            <Flex onClick={onClick} style={{...props}}>
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
    max-width : 390px;
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