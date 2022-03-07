import styled from 'styled-components';
import React from "react";

const Chip = ({
    height="20px",
    width ='100%',
    onClick,
    children,
    ...props
    }) => {


    return (
        <Default style={{...props, height}}><span style={{padding : "10px"}}>{children}</span></Default>
    )
}

const Default = styled.div`
    background-color : #424242;
    color : ${props => props.theme.mainTheme.tertiary};
    border-radius : 5px;
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    font-size : 12px;
`;



export default Chip;