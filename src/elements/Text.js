import { size } from "lodash";
import React from "react";
import styled from "styled-components";

const Text = ({
    fontSize,fontColor,fontWeight,

    margin,padding,

    onClick, children,   
    ...props
    }) => {

    return (
        <p onClick style={props,fontSize,fontColor,fontWeight, margin, padding}>{children}</p>
    );
}


export default Text;