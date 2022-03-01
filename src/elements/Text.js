import { size } from "lodash";
import React from "react";
import styled from "styled-components";

const Text = ({
    onClick, children,   
    ...props
    }) => {
    console.log(onClick);
    return (
        <p onClick={onClick} style={{...props}}>{children}</p>
    );
}


export default Text;