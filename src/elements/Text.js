import { size } from "lodash";
import React from "react";
import styled from "styled-components";


const Text = ({
    onClick, children, margin='5px',
    ...props
    }) => {
    return (
        <P onClick={onClick} style={{...props,margin,wordBreak : 'keep-all'}}>{children} </P>
    );
}

const P = styled.p`
`;


export default Text;