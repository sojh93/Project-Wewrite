import styled from "styled-components";

const Input = ({
    border,borderRadius,

    width, height, margin, padding,

    defaultValue,type,placeholder,

    onChange,ref,
    ...props

    
    }
    ) => {

    return (
        <input type={type} onChange={onChange} ref={ref} placeholder={placeholder} defaultValue={defaultValue} style={ props,border,borderRadius, width, height, margin, padding}/>
    );
}


export default Input;