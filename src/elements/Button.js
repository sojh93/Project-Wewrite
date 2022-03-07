import React from "react";
import styled from "styled-components";


const Button = ({
    width, height, margin, padding,

    fontColor,
    fontSize,

    ref , onClick, disabled=false,

    theme,type=null,

    children,
    ...props
}
    
) => {  
    if(theme === 'filled'){
        return (
            <div>
                <Filled style={{width, height, margin, padding,fontColor,fontSize, ...props}} ref={ref} onClick={onClick} disabled={disabled}>{children}</Filled>
            </div>
        )
    }
    if(theme === 'unfilled'){
        return (
            <div>
                <Unfilled type={type} style={{width, height, margin, padding,fontColor,fontSize, ...props}} ref={ref} onClick={onClick} disabled={disabled}>{children}</Unfilled>
            </div>
        )
    }
    return (
    <div>
        <Btn style={{width, height, margin, padding,fontColor,fontSize, ...props}} ref={ref} onClick={onClick} disabled={disabled}>{children}</Btn>
    </div>
    );
}

const Btn = styled.button`
    cursor : pointer;
`;
const Filled = styled.button`
    width : 120px;
    height : 50px;
    border-radius : 5px;
    border : 0px;
    font-size : 16px;
    font-weight : 700;
    background-color : ${props => props.theme.mainTheme.primary};
    color : ${props => props.theme.mainTheme.tertiary};
    cursor : pointer;
`;

const Unfilled = styled.button`
    width : 120px;
    height : 50px;
    border-radius : 5px;
    border : 1.5px solid ${props => props.theme.mainTheme.primary};
    font-size : 16px;
    font-weight : 700;
    background-color : ${props => props.theme.mainTheme.tertiary};
    color : ${props => props.theme.mainTheme.primary};
    cursor : pointer;

    &:hover {
        background-color : ${props => props.theme.mainTheme.primary};
        color : ${props => props.theme.mainTheme.tertiary};
        border : 0px;
    }
`;


export default Button;