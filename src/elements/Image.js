import styled from 'styled-components';
import React from "react";

const Image = ({
    src,
    onClick,
    ...props
    }) => {


    return (
        <img onClick={onClick} src={src} style={ {...props} }></img>
    )
}


export default Image;