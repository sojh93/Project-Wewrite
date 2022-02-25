import { size } from "lodash";
import React from "react";
import styled from "styled-components";

const Text = ({
    fontSize,fontColor,fontWeight,

    margin,padding,

    onClick, children,   
    }) => {

    return (
        <p onClick style={fontSize,fontColor,fontWeight, margin, padding}>{children}</p>
    );
}


export default Text;