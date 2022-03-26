import styled from "styled-components";

//import icons
import { FiXCircle } from "react-icons/fi";

//import MUI
import TextField from '@mui/material/TextField';
import { chain } from "lodash";
import { Children } from "react";


const Input = ({

    defaultValue,type,placeholder,disabled=false,

    onChange,onClick,_ref,ref,

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
                        <div><Radio type='radio' ref={_ref} name={name} value={value}/><span>{value}</span></div>
                    </label>
                    </WrapRadio>
                )
            }
            if(type === 'select'){
                return (
                    <Wrap>
                        <Select
                        onChange={onChange}
                        ref={_ref}
                        placeholder={placeholder}
                        name={name}>
                            {children}
                        </Select>
                    </Wrap>
                )
            }
            if(type === 'pwd'){
                return (
                    <Wrap>
                        <PasswordChange
                        type='password'
                        className="Password"
                        onChange={onChange}
                        ref={_ref}
                        placeholder={placeholder}
                        name={name}>
                            {children}
                        </PasswordChange>
                    </Wrap>
                )
            }
            if(type === 'textarea'){
                return(
                <Wrap>
                    <ThemeTextarea
                                disabled={disabled}
                                placeholder={placeholder}
                                defaultValue={defaultValue}
                                onChange={onChange}
                                onClick ={onClick}
                                ref={_ref}
                                style={{...props}}
                            />
                </Wrap>
                )
            }
            
            else{
                return(
                    
                        <ThemeInput
                            type={type}
                            onChange={onChange}
                            defaultValue={defaultValue}
                            ref={_ref}
                            placeholder={placeholder}
                            style={{...props}}
                        />
                    
                )
            }



        
    }


    return (
        <input type={type} onChange={onChange} ref={ref} placeholder={placeholder} defaultValue={defaultValue} style={ {...props}}/>
    );
}

const Wrap = styled.div`
`;

const ThemeInput = styled.input`
    border : 1.5px solid #9E9E9E;
    border-radius : 5px;
    
    width : 300px;
    height : 40px;
    padding : 15px;

    box-sizing: border-box;

    &:focus-visible{
        outline : none;
        border : 1.5px solid ${props => props.theme.mainTheme.primary};
    }
`;

const PasswordChange = styled.input`
    border-bottom : 1px solid #e0e0e0;
    width : 350px;
    height : 60px;
    padding : 15px;
    box-sizing: border-box;
    resize: none;
    border-left-color: white;
    border-top-color: white;
    border-right-color: white;
    border: none;
    &:focus-visible{
        & + div { display : block }
        outline : none;
        border : none;
    }
    }
`


const ThemeTextarea = styled.textarea`
    border : 1.5px solid #9E9E9E;
    border-radius : 5px;
    
    width : 300px;
    height : 40px;
    padding : 15px;
    

    box-sizing: border-box;
    resize: none;
    outline : none;

    &:focus-visible{
        & + div { display : block }
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




export default Input;