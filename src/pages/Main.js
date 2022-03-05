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
import Post from '../components/Post';
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Bottom from '../components/Bottom';
import Books from '../components/Books';




function Main(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state=>state.user);


    const tempImage = ["http://img.etoday.co.kr/pto_db/2017/06/20170630055356_1088133_710_340.jpg","https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1jPF/image/oRhdR-gw5pIPzXu74IiCpUAkBb4.jpg","https://post-phinf.pstatic.net/MjAyMjAyMjRfMTQg/MDAxNjQ1Njc3NzEzMDk0.ZY8y6TgCWsQn-9PtU2NgyzZIZXxvmxxKovYVpcKP2I8g.z04ffjM409tGuMHlukshDSCcKNvQw2Y0aL6WQG0ApYwg.JPEG/CT5-V_%EB%B8%94%EB%9E%99%EC%9C%99_%ED%8B%B0%EC%A0%80_1.jpg?type=w1200"];




    useEffect(() => {

    }, []);

    return (
        <Grid wrap>   
            <Header/>

            {/* <Grid>
                <Carousel width="320px" height="180px" imgURL={tempImage} />
            </Grid> */}

            {/* <Grid>
                <Text>추천 릴레이</Text>
                <Books book={tempImage}></Books>
            </Grid>     */}

            <Grid margin="10px">
                <Button theme="unfilled" >다음</Button>
                <Grid margin="10px"></Grid>
                <Input isTheme placeholder="placeholder" />
                <Grid margin="10px"></Grid>
                <Input isTheme type="radio" value="예시1" name="test" />
                <Input isTheme type="radio" value="예시2" name="test" />
                <Grid margin="10px"></Grid>
                <Input isTheme type="select" name="test1">
                    <option disabled selected>fruits 🍊</option>
                    <option value="apple">apple</option>
                    <option value="orange">orange</option>
                    <option value="grape">grape</option>
                    <option value="melon">melon</option>
                </Input>
            </Grid>

            <Bottom thisPage="main"/>

        </Grid>
    );
}




export default Main;