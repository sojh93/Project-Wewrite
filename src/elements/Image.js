import styled from 'styled-components';
import React from "react";

const Image = ({
    src,

    width, height, margin, padding,

    onClick,
    }) => {


    return (
        <img onClick={onClick} src={src} style={ width, height, margin, padding }></img>
    )
}


export default Image;