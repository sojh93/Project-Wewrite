//import Library
import React, { useEffect } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { FreeMode, Pagination,EffectCoverflow } from "swiper";

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
import BookCover from '../components/BookCover';




function Main(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);
    console.log(_user);

    const tempImage = ["http://img.etoday.co.kr/pto_db/2017/06/20170630055356_1088133_710_340.jpg","https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1jPF/image/oRhdR-gw5pIPzXu74IiCpUAkBb4.jpg","https://post-phinf.pstatic.net/MjAyMjAyMjRfMTQg/MDAxNjQ1Njc3NzEzMDk0.ZY8y6TgCWsQn-9PtU2NgyzZIZXxvmxxKovYVpcKP2I8g.z04ffjM409tGuMHlukshDSCcKNvQw2Y0aL6WQG0ApYwg.JPEG/CT5-V_%EB%B8%94%EB%9E%99%EC%9C%99_%ED%8B%B0%EC%A0%80_1.jpg?type=w1200"];




    React.useEffect(() => {
        if(_post.allPostList.length === 0){
            dispatch(postActions.getAll())
        }
        if(_post.recentPostList.length === 0){
            dispatch(postActions.getRecent())
        }
        if(_post.recommendPostList.length === 0){
            dispatch(postActions.getRecommend())
        }
        
    }, []);

    return (
        <>
            <Header isMain/>
        <Grid wrap>   

            <Grid is_flex flexDirection='column' alignItems='center' margin='60px 0 0 0'>

                <Grid width='100%' height='350px' backgroundSize='contain' backgroundImage='url("/default_img/bookBackGround.png")'>
                    <Swiper
                        style={{height : '320px', width : 'calc(100vw - 20px)', minWidth : '340px', maxWidth : '370px' ,margin : '10px'}}
                        rewind={true}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={5}
                        loop={false}
                        navigation={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 200,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <BookCover src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMDRfMzgg%2FMDAxNjM2MDMwMDg5MjE4.HBm6vUSuOILUtW4kXWK58VhyzQW8M9-LLPjFdaLCb5Ug.x3pkyDJl3W_bqs9IpyJnHYaciGuME_MyhX6N9F_sIW8g.JPEG.yunalee1997%2Fde05ada82ea284740579a16d209105c4.jpg&type=sc960_832"/>
                        </SwiperSlide>
                        <SwiperSlide>
                        <BookCover src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140514_128%2F1hwanee_1399994124116ooYOF_JPEG%2F1Recovered_May_13_2014_107.JPG&type=sc960_832"/>

                        </SwiperSlide>
                        <SwiperSlide><Image width="240px" height='320px' src="https://t1.daumcdn.net/cfile/blog/134C1D0D49CC27E117"/></SwiperSlide>
                        <SwiperSlide><Image width="240px" height='320px' src="https://image.aladin.co.kr/product/5686/87/cover500/s702536164_1.jpg"/></SwiperSlide>
                    </Swiper>

                </Grid>

                <Grid width='100%' height='290px' is_flex flexDirection='column'>
                    <Text margin='0px 10px' fontSize='24px' fontWeight='500'>새로운 이야기</Text>
                    <Swiper
                    style={{height : '230px', width : 'calc(100vw - 20px)', minWidth : '340px', maxWidth : '370px' ,margin : '10px'}}
                    slidesPerView={2.75}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    >
                        {_post.recentPostList.map((v,i)=>{
                            return (
                            <SwiperSlide key={v.postKey}>
                                <Books onClick={()=>{navigate(`/PostDetail/${v.postKey}`)}} category={v.categoryList} title={v.title} like={v.postLikesCnt} src={v.postImageUrl} key={v.postKey}/>
                            </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </Grid>

                

                <Grid width='100%'  is_flex flexDirection='column'>
                    <Text margin='0px 10px' fontSize='24px' fontWeight='500'>당신에게 추천해요</Text>
                    <Swiper
                    style={{height : '230px', width : 'calc(100vw - 20px)', minWidth : '340px', maxWidth : '370px' ,margin : '10px'}}
                    slidesPerView={2.75}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    >
                        {_post.recommendPostList.map((v,i)=>{
                            return (
                            <SwiperSlide key={v.postKey}>
                                <Books onClick={()=>{navigate(`/PostDetail/${v.postKey}`)}} category={v.categoryList} title={v.title} like={v.postLikesCnt} src={v.postImageUrl} key={v.postKey}/>
                            </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </Grid>

                <Grid width='100%'  is_flex flexDirection='column'>
                    <Text margin='0px 10px' fontSize='24px' fontWeight='500'>당신이 완성해주세요</Text>
                    <Swiper
                    style={{height : '230px', width : 'calc(100vw - 20px)', minWidth : '340px', maxWidth : '370px' ,margin : '10px'}}
                    slidesPerView={2.75}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    >
                        {_post.allPostList.map((v,i)=>{
                            return (
                            <SwiperSlide key={v.postKey}>
                                <Books onClick={()=>{navigate(`/PostDetail/${v.postKey}`)}} category={v.categoryList} title={v.title} like={v.postLikesCnt} src={v.postImageUrl} key={v.postKey}/>
                            </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </Grid>
            </Grid>

            <Grid height='65px'></Grid>
            <Bottom thisPage="main"/>

        </Grid>
        </>
    );
}


const Hover = styled.div`

`;

const Mark = styled.div`
    position : absolute;
    top : 10px;
    right : 10px;
    font-size : 15px;
    color : gray;
    display : none
`;

export default Main;