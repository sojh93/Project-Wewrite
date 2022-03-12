//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

//import Actions
import { actionCreators as postActions } from "../redux/modules/post";

//import elements
import { Button, Grid, Input, Image, Text,Chip } from "../elements" 

//import Icon
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

// impot Component
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import Sentence from '../components/Sentence';
import Comment from '../components/Comment';
import Paragraph from "../components/Paragraph";



function PostDetail(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const _user = useSelector(state=> state.user);
    const _post = useSelector(state=> state.post);
    const postKey = useParams().postKey;
    const thisPost = _post.thisPost;


    React.useEffect(()=>{
        if(_post.thisPost.postKey !== postKey){
            dispatch(postActions.getOne(postKey));

        }
    },[])

    console.log(_post);
    console.log(_user);

    return (

        <Grid wrap>   
            <Header isDetail postTitle="누구세요?"/>
            <Grid margin='60px 0 0 0' height=''>
                <Image width='100%' height='' src={thisPost.postImageUrl?thisPost.postImageUrl:""}/>
            </Grid>
            <Grid is_flex flexDirection='column' alignItems='center' margin="-4px 0 0 0" width='100%'> 
                <Grid margin='5px' width='90%'>
                    <Chip margin="10px">테스트</Chip>
                    <Grid is_flex justifyContent="space-between" alignItems="center" width='100%'>
                        <Text fontSize='24px'>무서운 이야기</Text>
                        <Grid is_flex>
                            <Text><ThumbUpOutlinedIcon/></Text>
                            <Text>???</Text>
                            <Text><BookmarkBorderOutlinedIcon/></Text>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid width='90%' height='1px' borderBottom='1px solid'/>
                <Grid is_flex flexDirection='column' width='90%'>
                    <Text>참여자</Text>
                    <Swiper
                    style={{height : '68px', width : 'calc(100% - 20px)', margin : '10px'}}
                    slidesPerView={5}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Paragraph nick='1' src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA1MTlfMTAz%2FMDAxNDk1MTg4MjgyODc5.m2G06HHnnU6ecH9fgxBa49y_CAWRdET66-BHaDPyaH8g.EqJortjsZ1FSGUYuuMI0boDSCN4XtUTb6OV5kN7gYgkg.JPEG.nahe1234%2FIMG_4413.jpg&type=sc960_832'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Paragraph nick='2' src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMjZfNSAg%2FMDAxNjQwNDk2NDMwNjEy.KQSYCQjtbr93R6puwjZv3XBb927BTZa6HrWggnvfFjsg.I7SHh8UejjgOrY2PbT-ud4rDMLIvDBtTJPScyBq9W6kg.JPEG.betterbester79%2FIMG_5224.JPG&type=sc960_832'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Paragraph nick='3' src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMjlfMyAg%2FMDAxNjE2OTg4ODA4MjMz.8abxqorQhFPeI-TmKo3TsYCUpxawNAKCwimDD7FzooQg.lQkhZ0rPB03RMPdGabgZz1yhkNLR2xyvjdeTtPN3WSog.JPEG.gooddaykiki%2FIMG_5466.JPG&type=sc960_832'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Paragraph nick='4' src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMTNfMTg2%2FMDAxNjQyMDM3NTE1OTc5.UTfYs5s2LKeHfQlLIYIOFGW5jyKYPoUaerGkPToJ5Ysg.DwCj3l0SQ2I3qcV2T-YdeSetjBij4LOpfPtkXbQWAoog.JPEG.pola0216%2F%25B1%25D7%25C7%25D8%25BF%25EC%25B8%25AE%25B4%25C212%25C8%25B8%25B1%25E8%25B4%25D9%25B9%25CC%25C4%25DA%25C6%25AE03.jpg&type=sc960_832'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Paragraph nick='5' src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMThfMjQw%2FMDAxNjQyNDk5MTk5NTg0.TGQOj1wiTuvHW23KfmsWqlBqM9j3M0z0m8chhlBlTIsg.O9YpTNuc33BY1qJCg0ASF_750ME0NwKovQG6y6IVYtgg.JPEG.raheehair2900%2FScreenshot%25A3%25DF20220118%25A3%25AD182843%25A3%25DFNAVER.jpg&type=sc960_832'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Paragraph nick='6' src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjBfOTMg%2FMDAxNjQ1MzI1MTE1MjQw.SVXr8xT2ehQZztcvJx8XdN2Q5EfHQByQ-oC2vODW9_0g.mfK2BIZ5Jx2EzHS7anVPsY3APMIuY3O3XjSl8LN7X8Eg.JPEG.sunba0809%2F70fa0d298ba51808c7194ccd738b30da.jpg&type=sc960_832'/>
                    </SwiperSlide>
                </Swiper>
                </Grid>
                <Grid width='90%' height='1px' borderBottom='1px solid'/>
                <Grid is_flex flexDirection='column' width='90%'>
                    <Sentence contents="내용..내용이 이렇게 길게 길게 길이이일 게게 좀 더 길게게에에ㅔ" src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA1MTlfMTAz%2FMDAxNDk1MTg4MjgyODc5.m2G06HHnnU6ecH9fgxBa49y_CAWRdET66-BHaDPyaH8g.EqJortjsZ1FSGUYuuMI0boDSCN4XtUTb6OV5kN7gYgkg.JPEG.nahe1234%2FIMG_4413.jpg&type=sc960_832'/>
                    <Sentence contents="내용..." src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMjZfNSAg%2FMDAxNjQwNDk2NDMwNjEy.KQSYCQjtbr93R6puwjZv3XBb927BTZa6HrWggnvfFjsg.I7SHh8UejjgOrY2PbT-ud4rDMLIvDBtTJPScyBq9W6kg.JPEG.betterbester79%2FIMG_5224.JPG&type=sc960_832'/>
                    <Sentence contents="내용..." src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMjlfMyAg%2FMDAxNjE2OTg4ODA4MjMz.8abxqorQhFPeI-TmKo3TsYCUpxawNAKCwimDD7FzooQg.lQkhZ0rPB03RMPdGabgZz1yhkNLR2xyvjdeTtPN3WSog.JPEG.gooddaykiki%2FIMG_5466.JPG&type=sc960_832'/>
                </Grid>
                <Grid width='280px' height='1px' borderBottom="1px solid #00000040"/>               
            </Grid>
            <Grid height="100px"/>
            <Bottom thisPage="detail"/>
        </Grid>
    );
}


export default PostDetail;