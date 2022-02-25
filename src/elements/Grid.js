import React from "react";
import styled from "styled-components";

const Grid = ({
    border, borderRadius,
    
    width, height, margin, padding, gap,
    
    onClick,
    children,
    

    is_flex,
    ...props

}) => {

    console.log(props)
    return(
            <div onClick={onClick} style={border, borderRadius, width, height, margin, padding, gap,props}>
                {children}
            </div>

    )
}

export default Grid;