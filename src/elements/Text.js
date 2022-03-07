import { size } from "lodash";
import React from "react";
import styled from "styled-components";

const Text = ({
    onClick, children, margin='5px',
    ...props
    }) => {
    return (
        <p onClick={onClick} style={{...props,margin,wordBreak : 'keep-all'}}>{children} </p>
    );
}


export default Text;