import styled from 'styled-components';
import React from "react";
import { borderRadius, height } from '@mui/system';

const Image = ({
    src,
    size,
    onClick,
    is_circle = false,
    is_square = false,
    ...props
    }) => {
    if(is_circle){
        return(
            <Circle onClick={onClick} src={src} style={ {...props,size,backgroundImage:`url(${src})`} }></Circle>
        )
    }
    if(is_square){
        return(
            <Square onClick={onClick} src={src} style={ {...props,size,backgroundImage:`url(${src})`} }></Square>
        )
    }

    return (
        <Default onClick={onClick} src={src} style={ {...props,backgroundImage:`url(${src})`} }></Default>
    )
}

const Default = styled.div`
    background-size : cover;
    background-position : center;
`;

const Circle = styled.div`
    width : ${props=>props.style.size + 'px'};
    height : ${props=>props.style.size + 'px'};
    border-radius : ${props=>props.style.size/2  + 'px'};
    background-size : cover;
    background-position : center;
`;

const Square = styled.div`
    width : ${props=>props.style.size + 'px'};
    height : ${props=>props.style.size + 'px'};
    border-radius : 10px;
    background-size : cover;
    background-position : center;
`;

export default Image;