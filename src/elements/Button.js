import React from "react";
import styled from "styled-components";


const Button = ({
    width, height, margin, padding,

    fontColor,
    fontSize,

    ref , onClick, disabled=false,

    children,
    ...props
}
    
) => {  

    return (
    <div>
        <Btn style={{width, height, margin, padding,fontColor,fontSize, ...props}} ref={ref} onClick={onClick} disabled={disabled}>{children}</Btn>
    </div>
    );
}

const Btn = styled.button`
    cursor : pointer;
`;


export default Button;