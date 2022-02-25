import React from "react";
import styled from "styled-components";

const Grid = ({
    border, borderRadius,
    
    width, height, margin, padding, gap,
    
    onClick,
    children,
    

    is_flex,


}) => {

    return(
            <div onClick={onClick} style={border, borderRadius, width, height, margin, padding, gap}>
                {children}
            </div>

    )
}

export default Grid;