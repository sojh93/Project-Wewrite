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

    return (

        <Grid wrap>   
            <Header isDetail postTitle={thisPost.title?thisPost.title:""}/>
            <Grid margin='60px 0 0 0' height=''>
                <Image width='100%' height='' src={thisPost.postImageUrl?thisPost.postImageUrl:""}/>
            </Grid>
            <Grid is_flex flexDirection='column' alignItems='center' margin="-4px 0 0 0" width='100%'> 
                <Grid margin='5px' width='90%'>
                    {thisPost.categoryList?thisPost.categoryList.map(v=>{
                        return (
                                <Chip margin="10px">{v.category}</Chip> 
                            )
                        }):''}
                            
                    <Grid is_flex justifyContent="space-between" alignItems="center" width='100%'>
                        <Text fontSize='24px'>{thisPost.title?thisPost.title:""}</Text>
                        <Grid is_flex>
                            <Text><ThumbUpOutlinedIcon/></Text>
                            <Text>{thisPost.postLikesCnt?thisPost.postLikesCnt:"0"}</Text>
                            <Text><BookmarkBorderOutlinedIcon/></Text>
                        </Grid>
                    </Grid>
                </Grid>
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
                    {thisPost.paragraphResDtoList?thisPost.paragraphResDtoList.map(v=>{
                        return(
                            <SwiperSlide>
                                <Paragraph nick={v.userInfoResDto.nickname} src={v.userInfoResDto.userProfileImage}/>
                            </SwiperSlide>
                        )
                    }):''}
                    
                </Swiper>
                </Grid>
                <Grid is_flex flexDirection='column' width='90%'>
                    {thisPost.paragraphResDtoList?thisPost.paragraphResDtoList.map(v=>{
                        console.log(v.userInfoResDto)
                        return(
                            <>
                            <Sentence contents={v.paragraph} src={v.userInfoResDto.userProfileImage}/>
                            </>
                        )
                    }):''}
                </Grid>
            </Grid>

            {thisPost.complete?
            '':
                <Grid marginTop='30px' is_flex flexDirection='column' alignItems='center'>
                    <Input height='200px' isTheme type='textarea'/>
                    <Button theme='unfilled'>작성하기</Button>
                </Grid>}


            <Grid height="100px"/>
            <Bottom thisPage="detail"/>
        </Grid>
    );
}


export default PostDetail;