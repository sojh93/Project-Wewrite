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

// 소켓 통신
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { getCookie } from "../shared/Cookie";
import instance from "../shared/Request";



// impot Component
import Post from '../components/Post';
import Header from '../components/Header'
import Bottom from '../components/Bottom';
import Books from '../components/Books';
import BookCover from '../components/BookCover';




function Main(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);
    console.log(_post);


    //socket
    const sock = new SockJS("http://13.209.70.1/ws-alarm");
    // const sock = new SockJS("http://3.34.179.104/ws-stomp");
    // const sock = new SockJS("http://binscot.shop/ws-stomp");
    const ws = Stomp.over(sock);
    const token = getCookie('WW_user');

    var headers = {
        Authorization: token
    };

    function wsConnectSubscribe() {
        try {
            ws.connect(headers, () => {
                ws.subscribe(
                    // websocket 구독 url 콜백함수 header 
                    `/sub/alarm/${_user.user.userKey}`,
                    (data) => {
                        console.log(data.body)
                    },
                    headers
                );
            });
            console.log("success");
        } catch (error) {
            console.log(error);
        }
    }

    function wsDisConnectUnsubscribe() {
        if(!_user.is_login)
            return;

        try {
            ws.disconnect(() => {
                ws.unsubscribe("sub-0");
            }, headers);
            
        } catch (error) {
            console.log(error);
        }
    }
    React.useEffect(() => {
        if(_user.is_login){
            wsConnectSubscribe()
        }

        return (wsDisConnectUnsubscribe())
    },[_user.is_login]);

    React.useEffect(() => {

        dispatch(postActions.getAll())
        dispatch(postActions.getRecent())
        dispatch(postActions.getRecommend())
        
    },[ ]);

    return (
        <>
            <Header isMain/>
        <Grid wrap>   

            <Grid is_flex flexDirection='column' alignItems='center' margin='60px 0 0 0'>

                <Grid width='100%' height='380px'  backgroundColor='#E0E0E0AA' backgroundSize='contain'>
                    <Text margin='0px 10px' fontSize='24px' fontWeight='700'>추천작</Text>

                    <Swiper
                        style={{height : '320px', width : 'calc(100vw - 20px)', minWidth : '340px', maxWidth : '370px' ,margin : '10px',}}
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
                            
                        <SwiperSlide><BookCover src="https://t1.daumcdn.net/cfile/blog/134C1D0D49CC27E117"/></SwiperSlide>
                        <SwiperSlide><BookCover src="https://image.aladin.co.kr/product/5686/87/cover500/s702536164_1.jpg"/></SwiperSlide>
                    </Swiper>

                </Grid>

                <Grid width='100%' height='310px' marginTop='20px' is_flex flexDirection='column'>
                    <Text margin='0px 10px' fontSize='24px' fontWeight='700'>새로운 이야기</Text>
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
                            const likeThis= v.postLikeClickersResponseDtoList
                            .reduce((X,V)=>
                                {   
                                    return Object.values(V)[0]===_user.user.userKey?true:X}
                            ,false)
                            const markThis= v.bookmarkClickUserKeyResDtoList
                            .reduce((X,V)=>
                                {   
                                    return Object.values(V)[0]===_user.user.userKey?true:X}
                            ,false)
                            return (
                            <SwiperSlide key={v.postKey}>
                                <Books onClick={()=>{navigate(`/PostDetail/${v.postKey}`)}} bookmarkLikesCnt={v.bookmarkLikesCnt} isMark={markThis} category={v.categoryList} title={v.title} isLike={likeThis} like={v.postLikesCnt} src={v.postImageUrl} key={i} postKey={v.postKey}/>
                            </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </Grid>

                

                <Grid width='100%' height='310px' is_flex flexDirection='column'>
                    <Text margin='0px 10px' fontSize='24px' fontWeight='700'>당신에게 추천해요</Text>
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
                        {_post.recommendPostList?_post.recommendPostList.map((v,i)=>{
                            const likeThis= v.postLikeClickersResponseDtoList
                            .reduce((X,V)=>
                                {   
                                    return Object.values(V)[0]===_user.user.userKey?true:X}
                            ,false)
                            const markThis= v.bookmarkClickUserKeyResDtoList
                            .reduce((X,V)=>
                                {   
                                    return Object.values(V)[0]===_user.user.userKey?true:X}
                            ,false)
                            return (
                            <SwiperSlide key={v.postKey}>
                                <Books onClick={()=>{navigate(`/PostDetail/${v.postKey}`)}} bookmarkLikesCnt={v.bookmarkLikesCnt} isMark={markThis} category={v.categoryList} title={v.title} isLike={likeThis} like={v.postLikesCnt} src={v.postImageUrl} key={i} postKey={v.postKey}/>
                            </SwiperSlide>
                            )
                        }):''}
                    </Swiper>
                </Grid>

                <Grid width='100%'  is_flex flexDirection='column'>
                    <Text margin='0px 10px' fontSize='24px' fontWeight='700'>당신이 완성해주세요</Text>
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
                            const likeThis= v.postLikeClickersResponseDtoList
                            .reduce((X,V)=>
                                {   
                                    return Object.values(V)[0]===_user.user.userKey?true:X}
                            ,false)
                            const markThis= v.bookmarkClickUserKeyResDtoList
                            .reduce((X,V)=>
                                {   
                                    return Object.values(V)[0]===_user.user.userKey?true:X}
                            ,false)
                            return (
                            <SwiperSlide key={v.postKey}>
                                <Books onClick={()=>{navigate(`/PostDetail/${v.postKey}`)}} bookmarkLikesCnt={v.bookmarkLikesCnt} isMark={markThis} category={v.categoryList} title={v.title} isLike={likeThis} like={v.postLikesCnt} src={v.postImageUrl} key={i} postKey={v.postKey}/>
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