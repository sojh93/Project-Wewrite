//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import Modal from '@mui/material/Modal';

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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '330px',
    height: '600px',
    borderRadius:'5px',
    boxShadow: 24,
    p: 4,
};

function PostDetail(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const _user = useSelector(state=> state.user);
    const _post = useSelector(state=> state.post);
    const postKey = useParams().postKey;
    const thisPost = _post.thisPost;

    const [category,setCategory] = React.useState(null)


    //modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [Copen, setCOpen] = React.useState(false);
    const handleOpenC = () => setCOpen(true);
    const handleCloseC = () => setCOpen(false);
    

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
                <Image width='100%' height='400px' src={thisPost.postImageUrl?thisPost.postImageUrl:""}/>
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
                    style={{height : '74px', width : 'calc(100% - 20px)', margin : '10px'}}
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
                            <Sentence like={v.paragraphLikesCnt} contents={v.paragraph} src={v.userInfoResDto.userProfileImage}/>
                            </>
                        )
                    }):''}
                </Grid>
            </Grid>

            {thisPost.complete?
            '':
                <Grid marginTop='30px' is_flex flexDirection='column' alignItems='center'>
                    <Input height='200px' isTheme type='textarea'/>
                    <Button onClick={handleOpenC} theme='unfilled'>작성하기</Button>
                </Grid>}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid is_flex flexDirection='column' justifyContent='center' alignItems='center' {...style}>
                    <Text fontSize='24px' color='black' fontWeight='700'>소설을 완성했어요!</Text>
                    <Image margin='10px' width='50px' height='60px' src='/default_img/book2.png'></Image>
                    <Text margin="0px 0px" fontSize='16px' color='#7E7E7E' fontWeight='500'>추가 장르를 선택할 수 있습니다.</Text>
                    <Grid color='gray' margin='20px'>
                    <Grid is_flex justifyContent='space-between' gap='5px'>
                        <Button onClick={()=>{setCategory('판타지')}} fontSize='12px' width='70px' height='40px' theme={category==='판타지'?'filled':'unfilled'}>판타지</Button>
                        <Button onClick={()=>{setCategory('스릴러')}} fontSize='12px' width='70px' height='40px' theme={category==='스릴러'?'filled':'unfilled'}>스릴러</Button>
                        <Button onClick={()=>{setCategory('공포')}} fontSize='12px' width='70px' height='40px' theme={category==='공포'?'filled':'unfilled'}>공포</Button>
                        <Button onClick={()=>{setCategory('로맨스/멜로')}} fontSize='12px' width='70px' height='40px' theme={category==='로맨스/멜로'?'filled':'unfilled'}>로맨스 /<br/>멜로</Button>
                    </Grid>
                    <Grid is_flex justifyContent='space-between' margin='5px 0' gap='5px'>
                        <Button onClick={()=>{setCategory('액션')}} fontSize='12px' width='70px' height='40px' theme={category==='액션'?'filled':'unfilled'}>액션</Button>
                        <Button onClick={()=>{setCategory('코미디')}} fontSize='12px' width='70px' height='40px' theme={category==='코미디'?'filled':'unfilled'}>코미디</Button>
                        <Button onClick={()=>{setCategory('무협')}} fontSize='12px' width='70px' height='40px' theme={category==='무협'?'filled':'unfilled'}>무협</Button>
                        <Button onClick={()=>{setCategory('SF')}} fontSize='12px' width='70px' height='40px' theme={category==='SF'?'filled':'unfilled'}>SF</Button>
                    </Grid>
                    <Grid is_flex justifyContent='space-between'  gap='5px'>
                        <Button onClick={()=>{setCategory('추리/미스터리')}} fontSize='12px' width='70px' height='40px' theme={category==='추리/미스터리'?'filled':'unfilled'}>추리 /<br/>미스터리</Button>
                        <Button onClick={()=>{setCategory('드라마')}} fontSize='12px' width='70px' height='40px' theme={category==='드라마'?'filled':'unfilled'}>드라마</Button>
                        <Button onClick={()=>{setCategory('스포츠')}} fontSize='12px' width='70px' height='40px' theme={category==='스포츠'?'filled':'unfilled'}>스포츠</Button>
                        <Button onClick={()=>{setCategory('하이틴')}} fontSize='12px' width='70px' height='40px' theme={category==='하이틴'?'filled':'unfilled'}>하이틴</Button>
                    </Grid>
                    </Grid>
                    <Button theme='unfilled'>확인했어요!</Button>
                </Grid>
            </Modal>

            <Modal
                open={Copen}
                onClose={handleCloseC}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid is_flex flexDirection='column' justifyContent='center' alignItems='center' {...style}>
                    
                    <Grid>
                        <Text fontSize='24px' color='black' fontWeight='700'>댓글을 확인하세요</Text>
                    </Grid>

                    
                    <Image margin='10px' width='50px' height='50px' src='/default_img/talkIocn.png'></Image>
                    
                    <Grid margin='0px 20px' is_flex alignItems='flex-end' width='100%'>
                        <Text margin='5px 0 5px 10px' fontSize='16px' alignItems='center' fontWeight='500'>댓글</Text><Text fontSize='10px' color='#C4C4C4' fontWeight='400'>3</Text>
                    </Grid>

                    <Grid width='100%'>
                        <Comment/>
                    </Grid>
                    
                    <Input placeholder={'댓글 달기'} margin='20px' width='80%' isTheme></Input>
                    
                    <Button theme='unfilled'>작성하기</Button>
                </Grid>
            </Modal>

            <Grid height="100px"/>
            <Bottom thisPage="detail"/>
        </Grid>
    );
}


export default PostDetail;