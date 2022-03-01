//import Library
import React, { useEffect } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import Actions
import { actionCreators as mapActions } from "../redux/modules/map";

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon


// impot Component
import Post from '../components/Post';
import Header from '../components/Header'
import Carousel from '../components/Carousel'

// import KakaoMapScript from '../shared/kakaomap';
import Bottom from '../components/Bottom';




function Main(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const tempImage = ["http://img.etoday.co.kr/pto_db/2017/06/20170630055356_1088133_710_340.jpg","https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1jPF/image/oRhdR-gw5pIPzXu74IiCpUAkBb4.jpg"];


    
    useEffect(() => {

    }, []);

    return (
        <Grid wrap>   
            <Header/>

            <Grid>
                <Carousel width="320px" height="180px" imgURL={tempImage} />
            </Grid>

            <Grid>
                <Text>추천 릴레이</Text>
            </Grid>    


            <Bottom thisPage="main"/>

        </Grid>
    );
}




export default Main;