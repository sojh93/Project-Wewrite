//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import Actions


//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon


// impot Component

//import Actions


//import axios
import instance from "../shared/Request";


function Main(props) {
    const color = (props=>props.theme.color);
    
    console.log(props)
    return (
        <Grid>
            <P>312</P>
        </Grid>

    );
}

const P = styled.p`
    background-color : ${props=>props.theme.color.primary}
`;


export default Main;