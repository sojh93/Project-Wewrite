import styled from "styled-components";

//import icons
import { FiXCircle } from "react-icons/fi";

//import MUI
import TextField from '@mui/material/TextField';
import { chain } from "lodash";
import { Children } from "react";


const Input = ({
    border,borderRadius,

    width, height, margin, padding,

    defaultValue,type,placeholder,

    onChange,ref,

    isTheme=false,
    id, label, name, value,


    hover,
    children,
    ...props

    
    }
    ) => {

        
        if(isTheme){
            
            if(type === 'radio'){
                return (
                    <WrapRadio style={{...props}}>
                    <label>
                        <div><Radio type='radio' name={name} value={value}/><span>{value}</span></div>
                    </label>
                    </WrapRadio>
                )
            }
            if(type === 'select'){
                return (
                    <Wrap>
                        <Select name={name}>
                            {children}
                        </Select>
                    </Wrap>
                )
            }
            
            else{
                return(
                    <Wrap>
                        <ThemeInput
                            type={type}
                            onChange={onChange}
                            ref={ref}
                            placeholder={placeholder}
                        />
                        <MarkX><FiXCircle/></MarkX>
                        
                    </Wrap>
                )
            }



        
    }


    return (
        <input type={type} onChange={onChange} ref={ref} placeholder={placeholder} defaultValue={defaultValue} style={ {border,borderRadius, width, height, margin, padding, ...props}}/>
    );
}

const Wrap = styled.div`
    position : relative;
`;

const ThemeInput = styled.input`
    border : 1.5px solid #9E9E9E;
    border-radius : 5px;
    
    width : 300px;
    height : 40px;

    box-sizing: border-box;

    &:focus-visible{
        & + div { display : block }
        outline : none;
        border : 1.5px solid ${props => props.theme.mainTheme.primary};
    }
`;

const WrapRadio = styled.div`
    display: inline-flex;
    align-items: center;
    height : 30px;
    &>label{
        font-size : 13px;
        &>div{
            display : flex;
            align-items : center;
        }
    }
`;

const Radio = styled.input`
    width : 16px;
    height : 16px;
    appearance: none;

    margin : 3px 5px 0px 5px;
    
    border : 1.5px solid #9E9E9E;
    border-radius : 16px;

    &:checked::before{
        content :"";
        display : block;

        width : 10px;
        height : 10px;
        margin : 12.5%;
        padding : 0px;
        border-radius : 6px;

        background-color : ${props => props.theme.mainTheme.primary};
    }


`;


const Select = styled.select`
    outline : none;
    appearance: none;
    width: 200px;
    height: 40px;
    border : 1.5px solid #9E9E9E;
    border-radius: 4px;
    box-sizing: border-box;

    background : url('/default_img/downArrow.jpg') calc(100% - 5px) center no-repeat;
    background-size: 20px;

    &:focus{

        border : 1.5px solid ${props => props.theme.mainTheme.primary};
    }
`;



const MarkX = styled.div`
    position : absolute;
    top : 10px;
    right : 10px;
    font-size : 15px;
    color : gray;
    display : none
`;
export default Input;