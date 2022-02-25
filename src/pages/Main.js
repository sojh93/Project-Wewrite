//import Library
import React, { useEffect } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import Actions

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon


// impot Component
import KakaoMapScript from '../shared/kakaomap';

//import axios
import instance from "../shared/Request";


function Main(props) {
    useEffect(() => {
        KakaoMapScript();
    }, []);

    return (
        <div id='myMap' style={{
            width: '100vw',
            height: '100vh'
        }}></div>
    );
}

const P = styled.p`
    background-color : ${props=>props.theme.color.primary}
`;


export default Main;