//import Library
import React, { useEffect } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination, EffectFade, Navigation } from "swiper";

//import CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./styles.css";

//import Actions
import { actionCreators as postActions } from '../redux/modules/post';

//import elements
import { Grid, Image, Text } from "../elements"

// impot Component
import Header from '../components/Header'
import Bottom from '../components/Bottom';
import Books from '../components/Books';
import BookCover from '../components/BookCover';
import Popular from '../components/popular';


function Main(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);

    React.useEffect(() => {
        dispatch(postActions.getAll(0,6));
        dispatch(postActions.getRecent(0,6));
        dispatch(postActions.getRecommend(0,6));
        dispatch(postActions.getBest());
    }, []);

    return (
        <Grid wrap>
            <Header isMain />
            <Grid is_flex flexDirection='column' alignItems='center' margin='60px 0 0'>
                <Grid width='100%' height='400px' backgroundColor='#E0E0E0AA' backgroundSize='contain'>
                    <Swiper
                        style={{ height: '400px', width: '100%', minWidth: '340px', }}
                        rewind={true}
                        effect={"fade"}
                        grabCursor={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 200,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        navigation={false}
                        pagination={true}
                        modules={[Autoplay, EffectFade, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {_post.recommendPostList.map((v, i) => {
                            if(i>5){
                                return null;
                            }
                            return (
                                <SwiperSlide key={v.postKey}>
                                    <BookCover onClick={() => { navigate(`/PostDetail/${v.postKey}`) }} category={v.categoryList} title={v.title} para={v.paragraphResList[0].paragraph} src={v.postImageUrl} key={i} postKey={v.postKey} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </Grid>

                <Image onClick={()=>{window.open("https://forms.gle/mDoHthCZaxLt4js87", '_blank')}}  cursor="pointer" width='100%' height='83px' src='/banner/mainBanner.png'/>
                <Grid width='100%' height='310px' marginTop='20px' is_flex flexDirection='column'>
                    <Grid is_flex>
                        <Text margin='0px 10px' fontSize='24px' fontWeight='700'>새로운 이야기</Text>
                        <Text cursor='pointer' onClick={()=>{navigate('/postlist/recent')}} margin='13px 0 0 0' color="#888888" fontSize="14px">더보기 +</Text>
                    </Grid>
                    
                    <Swiper
                        style={{ height: '230px', width: 'calc(100vw - 20px)', minWidth: '340px', maxWidth: '400px', margin: '10px' }}
                        slidesPerView={2.75}
                        spaceBetween={20}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="mySwiper"
                    >
                        {_post.recentPostList.map((v, i) => {
                            const likeThis = v.postLikeClickersResponseDtoList
                                .reduce((X, V) => {
                                    return Object.values(V)[0] === _user.user.userKey ? true : X
                                }
                                    , false)
                            const markThis = v.bookmarkClickUserKeyResDtoList
                                .reduce((X, V) => {
                                    return Object.values(V)[0] === _user.user.userKey ? true : X
                                }
                                    , false)
                            return (
                                <SwiperSlide key={v.postKey}>
                                    <Books onClick={() => { navigate(`/PostDetail/${v.postKey}`) }} bookmarkLikesCnt={v.bookmarkLikesCnt} isMark={markThis} category={v.categoryList} title={v.title} isLike={likeThis} like={v.postLikesCnt} src={v.postImageUrl} key={i} postKey={v.postKey} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </Grid>


                <Grid width='100%' height='10px' backgroundColor='#F9FAFB'/>
                <Grid width='100%' backgroundColor='#E0E0E0' height='500px' is_flex flexDirection='column'>
                    <Text margin='10px' marginTop='30px' fontSize='24px' fontWeight='700'>당신에게 추천해요</Text>
                    <Grid backgroundColor='#E0E0E0' width='100%' is_flex flexDirection='column' alignItems='center' gap='20px'>
                        {_post.bestPostList?_post.bestPostList.map((v,i)=>{
                            return (
                                <Popular key={i} title={v.title} postKey={v.postKey} comment={v.commentList[0].comment}></Popular>
                            )
                        }):''}

                    </Grid>
                </Grid>
                <Grid width='100%' height='10px' backgroundColor='#F9FAFB'/>
                
                <Grid width='100%' is_flex flexDirection='column'>
                    <Grid is_flex>
                        <Text margin='0px 10px' fontSize='24px' fontWeight='700'>당신이 완성해주세요</Text>
                        <Text cursor='pointer' onClick={()=>{navigate('/postlist/all')}} margin='13px 0 0 0' color="#888888" fontSize="14px">더보기 +</Text>
                    </Grid>
                    <Swiper
                        style={{ height: '230px', width: 'calc(100vw - 20px)', minWidth: '340px', maxWidth: '400px', margin: '10px' }}
                        slidesPerView={2.75}
                        spaceBetween={20}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="mySwiper"
                    >
                        {_post.allPostList.map((v, i) => {
                            const likeThis = v.postLikeClickersResponseDtoList
                                .reduce((X, V) => {
                                    return Object.values(V)[0] === _user.user.userKey ? true : X
                                }
                                    , false)
                            const markThis = v.bookmarkClickUserKeyResDtoList
                                .reduce((X, V) => {
                                    return Object.values(V)[0] === _user.user.userKey ? true : X
                                }
                                    , false)
                            return (
                                <SwiperSlide key={v.postKey}>
                                    <Books onClick={() => { navigate(`/PostDetail/${v.postKey}`) }} bookmarkLikesCnt={v.bookmarkLikesCnt} isMark={markThis} category={v.categoryList} title={v.title} isLike={likeThis} like={v.postLikesCnt} src={v.postImageUrl} key={i} postKey={v.postKey} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </Grid>
            </Grid>
            <Grid>
                <Image width='100%' height='800px' src='/banner/howTo.png'/>
            </Grid>

            <Grid height='65px'></Grid>
            <Bottom thisPage="main"/>
        </Grid>
    );
}

export default Main;