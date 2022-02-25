import React from "react";
import styled from "styled-components";


const Button = ({
    width, height, margin, padding,

    fontColor,
    fontSize,

    ref , onClick, disabled,

    children,
    
}
    
) => {

    return (
    <div>
        <Btn style={width, height, margin, padding,fontColor,fontSize} ref={ref} onClick={onClick} disabled>{children}</Btn>
    </div>
    );
}

const Btn = styled.button`
    cursor : pointer;
`;


export default Button;