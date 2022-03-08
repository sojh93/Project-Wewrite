//import Library
import React, { useEffect } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

//import Actions
import { actionCreators as userActions } from '../redux/modules/user';
import { actionCreators as postActions } from '../redux/modules/post';

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon


// impot Component
import Post from '../components/Post';
import Header from '../components/Header'
import Bottom from '../components/Bottom';
import Carousel from '../components/Carousel'
import Books from '../components/Books';




function Main(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);
    console.log(_post);

    const tempImage = ["http://img.etoday.co.kr/pto_db/2017/06/20170630055356_1088133_710_340.jpg","https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1jPF/image/oRhdR-gw5pIPzXu74IiCpUAkBb4.jpg","https://post-phinf.pstatic.net/MjAyMjAyMjRfMTQg/MDAxNjQ1Njc3NzEzMDk0.ZY8y6TgCWsQn-9PtU2NgyzZIZXxvmxxKovYVpcKP2I8g.z04ffjM409tGuMHlukshDSCcKNvQw2Y0aL6WQG0ApYwg.JPEG/CT5-V_%EB%B8%94%EB%9E%99%EC%9C%99_%ED%8B%B0%EC%A0%80_1.jpg?type=w1200"];




    React.useEffect(() => {
        if(_post.allPostList.length === 0){
            console.log('1');
            dispatch(postActions.getAll())
        }
        if(_post.recentPostList.length === 0){
            console.log('2');
            dispatch(postActions.getRecent())
        }
        if(_post.recommendPostList.length === 0){
            console.log('3');

            dispatch(postActions.getRecommend())
        }
        
    }, []);

    return (
        <Grid wrap>   
            <Header/>
            <Grid margin='50px 0 0 0'>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide><Image onClick={()=>{navigate('/finishedDetail/1')}} width="240px" height='320px' src="https://mblogthumb-phinf.pstatic.net/MjAyMDAxMTNfMTgx/MDAxNTc4ODgyMTUyNDM0.-e4N7j1acrwnIcYy3K5psSxVpgIqFz011hXhNSvWU9Ig.d6ykhZtXhz28aJ6r2tXvz2oPXmTcfU_oC7v-M6kGAi0g.JPEG.mkparang/%EC%B4%9D%EA%B7%A0%EC%87%A0.jpg?type=w800"/></SwiperSlide>
                    <SwiperSlide><Image width="240px" height='320px' src="https://image.yes24.com/goods/3361501/XL"/></SwiperSlide>
                    <SwiperSlide><Image width="240px" height='320px' src="https://t1.daumcdn.net/cfile/blog/134C1D0D49CC27E117"/></SwiperSlide>
                    <SwiperSlide><Image width="240px" height='320px' src="https://image.aladin.co.kr/product/5686/87/cover500/s702536164_1.jpg"/></SwiperSlide>
                </Swiper>
            </Grid>

            <Grid margin ="30px 0">
                이쯤에 대충 무슨 텍스트가 들어가겠지
                <Swiper
                    style={{height : 100, width : 320}}
                    slidesPerView={3}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><Image width='100%' height='100%' src="https://mblogthumb-phinf.pstatic.net/MjAyMDAxMTNfMTgx/MDAxNTc4ODgyMTUyNDM0.-e4N7j1acrwnIcYy3K5psSxVpgIqFz011hXhNSvWU9Ig.d6ykhZtXhz28aJ6r2tXvz2oPXmTcfU_oC7v-M6kGAi0g.JPEG.mkparang/%EC%B4%9D%EA%B7%A0%EC%87%A0.jpg?type=w800"/></SwiperSlide>
                    <SwiperSlide><Image width='100%' height='100%' src="https://image.yes24.com/goods/3361501/XL"/></SwiperSlide>
                    <SwiperSlide><Image width='100%' height='100%' src="https://t1.daumcdn.net/cfile/blog/134C1D0D49CC27E117"/></SwiperSlide>
                    <SwiperSlide><Image width='100%' height='100%' src="https://image.aladin.co.kr/product/5686/87/cover500/s702536164_1.jpg"/></SwiperSlide>
                </Swiper>
            </Grid>
            <Grid margin ="30px 0">
                모든 게시물
                <Swiper
                    style={{height : 100, width : 320}}
                    slidesPerView={3}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {_post.allPostList.map((v,i)=>{
                        return (<SwiperSlide><Image width='100%' height='100%' key={v.postKey} src={v.postImageUrl}/></SwiperSlide>)
                    })}
                </Swiper>
            </Grid>
            <Grid margin ="30px 0">
                이쯤에 대충 무슨 텍스트가 들어가겠지
                <Swiper
                    style={{height : 100, width : 320}}
                    slidesPerView={3}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><Image width='100%' height='100%' src="https://mblogthumb-phinf.pstatic.net/MjAyMDAxMTNfMTgx/MDAxNTc4ODgyMTUyNDM0.-e4N7j1acrwnIcYy3K5psSxVpgIqFz011hXhNSvWU9Ig.d6ykhZtXhz28aJ6r2tXvz2oPXmTcfU_oC7v-M6kGAi0g.JPEG.mkparang/%EC%B4%9D%EA%B7%A0%EC%87%A0.jpg?type=w800"/></SwiperSlide>
                    <SwiperSlide><Image width='100%' height='100%' src="https://image.yes24.com/goods/3361501/XL"/></SwiperSlide>
                    <SwiperSlide><Image width='100%' height='100%' src="https://t1.daumcdn.net/cfile/blog/134C1D0D49CC27E117"/></SwiperSlide>
                    <SwiperSlide><Image width='100%' height='100%' src="https://image.aladin.co.kr/product/5686/87/cover500/s702536164_1.jpg"/></SwiperSlide>
                    <SwiperSlide><Image width='100%' height='100%' src="https://mblogthumb-phinf.pstatic.net/MjAyMDAxMTNfMTgx/MDAxNTc4ODgyMTUyNDM0.-e4N7j1acrwnIcYy3K5psSxVpgIqFz011hXhNSvWU9Ig.d6ykhZtXhz28aJ6r2tXvz2oPXmTcfU_oC7v-M6kGAi0g.JPEG.mkparang/%EC%B4%9D%EA%B7%A0%EC%87%A0.jpg?type=w800"/></SwiperSlide>
                    <SwiperSlide><Image width='100%' height='100%' src="https://image.yes24.com/goods/3361501/XL"/></SwiperSlide>
                    <SwiperSlide><Image width='100%' height='100%' src="https://t1.daumcdn.net/cfile/blog/134C1D0D49CC27E117"/></SwiperSlide>
                    <SwiperSlide><Image width='100%' height='100%' src="https://image.aladin.co.kr/product/5686/87/cover500/s702536164_1.jpg"/></SwiperSlide>
                </Swiper>
            </Grid>
            {/* <Grid>
                <Carousel width="320px" height="180px" imgURL={tempImage} />
            </Grid> */}

            {/* <Grid>
                <Text>추천 릴레이</Text>
                <Books book={tempImage}></Books>
            </Grid>     */}

            {/* <Grid margin="100px 10px">
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
            </Grid> */}

            <Bottom thisPage="main"/>

        </Grid>
    );
}




export default Main;