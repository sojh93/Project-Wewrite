import styled from 'styled-components';
import React from "react";
import { borderRadius, height } from '@mui/system';

const Image = ({
    src,
    height="50px",
    width="50px",
    onClick,
    is_circle = false,
    ...props
    }) => {

    if(is_circle){
        return(
            <Circle onClick={onClick} src={src} style={ {...props,height,width} }></Circle>
        )
    }

    return (
        <Default onClick={onClick} src={src} style={ {...props,height,width} }></Default>
    )
}

const Default = styled.img`
    
`;

const Circle = styled.img`
    border-radius : ${borderRadius?"25px":""};
`;

export default Image;