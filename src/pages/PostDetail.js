//import Library
import React from "react"
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import Modal from '@mui/material/Modal';

import moment from "moment";
import 'moment/locale/ko'

//import Actions
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as userActions } from "../redux/modules/user";

//import elements
import { Button, Grid, Input, Image, Text, Chip } from "../elements"

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

// 소켓 통신
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { getCookie } from "../shared/Cookie";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '330px',
    height: '600px',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
};

function PostDetail(props) {
    moment.locale('ko');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);
    const postKey = useParams().postKey;
    const thisPost = _post.thisPost;
    console.log(thisPost);
    const refInput = React.useRef(null);

    // console.log(thisPost);

    const users = thisPost.paragraphResDtoList ? thisPost.paragraphResDtoList.reduce((x, v, i) => {
        let tempList = []
        if (x.length === 0) {
            return [{ nickname: v.userInfoResDto.nickname, userProfileImage: v.userInfoResDto.userProfileImage }]
        } else {
            for (let i of x) {
                tempList.push(i.nickname)
            }

            if (tempList.includes(v.userInfoResDto.nickname)) {
                return x;
            } else {
                x.push({ nickname: v.userInfoResDto.nickname, userProfileImage: v.userInfoResDto.userProfileImage })
                return x;
            }
        }

    }, []) : '';

    const [category, setCategory] = React.useState(null);
    const [calcTime,setTime] = React.useState('-');
    const interval = React.useRef(null);
    // if(thisPost.paragraphStartTime !==null){
    //     interval.current = setInterval(() => {
    //             console.log(thisPost.paragraphStartTime)
    //             let t1 = new Date(thisPost.paragraphStartTime);
    //             setTime(moment.duration(moment()-t1).asSeconds());
    //             console.log(calcTime);
    //         }, 1000);
    //     }

    //modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [Copen, setCOpen] = React.useState(false);
    const handleOpenC = () => setCOpen(true);
    const handleCloseC = () => setCOpen(false);

    //socket
    // const sock = new SockJS("http://13.209.70.1/ws-stomp");
    // const sock = new SockJS("http://3.34.179.104/ws-stomp");
    const sock = new SockJS("http://binscot.shop/ws-stomp");
    const ws = Stomp.over(sock);
    const token = getCookie('WW_user');

    //contents
    const [contents, setContents] = React.useState('');
    // const [isWriting, setIsWriting] = React.useState(false);
    // const [writer, setWriter] = React.useState(null);
    
    //setIsWriting(_post.thisPost.writing);
    //setWriter(_post.thisPost.writer);
    let writer = _post.thisPost.writer;
    let isWriting = _post.thisPost.writing;


    var headers = {
        Authorization: token
    };

    React.useEffect(() => {
        
        if (_post.thisPost.postKey !== postKey) {
            dispatch(postActions.getOne(postKey));
            
        }
        if(!_user.is_login){
            dispatch(userActions.check())
        }
        wsConnectSubscribe();
        
        return () => { wsDisConnectUnsubscribe() };
    }, [])


    function wsConnectSubscribe() {
        try {
            ws.connect(headers, () => {
                ws.subscribe(
                    // websocket 구독 url 콜백함수 header 
                    `/sub/api/chat/rooms/${postKey}`,
                    (data) => {
                        const tempData = data.body.split(",");

                        if(data.body.split(',')[0].split('\"')[3] === 'ENTER'){
                            console.log('Enter');
                        }
                        if(data.body.split(',')[0].split('\"')[3] === 'START'){
                            console.log('START');
                            // setWriter(data.body.split(',')[6].split('\"')[3])
                            // setIsWriting(true);
                            setTimeout(()=>{dispatch(postActions.getOne(postKey));},1000)
                            
                        }
                        if(data.body.split(',')[0].split('\"')[3] === 'TALK'){
                            console.log('TALK');
                            // setWriter(null)
                            // setIsWriting(false);
                            setTimeout(()=>{dispatch(postActions.getOne(postKey));},1000)
                        }
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
        try {
            ws.disconnect(() => {
                ws.unsubscribe("sub-0");
            }, headers);
        } catch (error) {
            console.log(error);
        }
    }

    // 웹소켓이 연결될 때 까지 실행하는 함수
    function waitForConnection(ws, callback) {
        setTimeout(
            function () {
                // 연결되었을 때 콜백함수 실행
                if (ws.ws.readyState === 1) {
                    callback();
                    // 연결이 안 되었으면 재호출
                } else {
                    waitForConnection(ws, callback);
                }
            },
            1 // 밀리초 간격으로 실행
        );
    }

    // 메시지 보내기
    function sendParagraph() {
        if(!_user.is_login){
            console.log('로그인이 필요합니다.')
            return;
        }
        try {

            const data = {
                type: "TALK",
                postId: postKey,
                userName: _user.user.username,
                userId: _user.user.userKey,
                paragraph: contents,
                nickName: _user.user.nickname,
            };
            console.log(data);
            refInput.current.value='';
            // 로딩 중
            waitForConnection(ws, function () {
                ws.send("/pub/paragraph/complete", headers, JSON.stringify(data));
            });
        } catch (error) {
            console.log(error);
            console.log(ws.ws.readyState);
        }
    }

    function startParagraph() {
        if(!_user.is_login){
            console.log('로그인이 필요합니다.')
            return;
        }
        try {

            const data = {
                type: "START",
                postId: postKey,
                userName: _user.user.username,
                userId: _user.user.userKey,
                nickName: _user.user.nickname,
            };
            console.log(data);

            waitForConnection(ws, function () {
                ws.send("/pub/paragraph/complete", headers, JSON.stringify(data));
                // setIsWriting(true);

            });
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <Grid wrap>
            <Header isDetail postTitle={thisPost.title ? thisPost.title : ""} />
            <Grid margin='60px 0 0 0' height=''>
                <Image width='100%' height='400px' src={thisPost.postImageUrl ? thisPost.postImageUrl : ""} />
            </Grid>
            <Grid is_flex flexDirection='column' alignItems='center' margin="-4px 0 0 0" width='100%'>
                <Grid margin='10px' width='90%'>
                    {thisPost.categoryList ? thisPost.categoryList.map((v,i) => {
                        return (
                            <Chip key={i}>{v.category}</Chip>
                        )
                    }) : ''}

                    <Grid is_flex justifyContent="space-between" alignItems="center" width='100%'>
                        <Text fontSize='24px'>{thisPost.title ? thisPost.title : ""}</Text>

                    </Grid>
                </Grid>

                <Grid is_flex flexDirection='column' width='90%'>
                    {thisPost.paragraphResDtoList ? thisPost.paragraphResDtoList.map(v => {
                        return (
                            <Sentence like={v.paragraphLikesCnt} contents={v.paragraph} src={v.userInfoResDto.userProfileImage} />
                        )
                    }) : ''}
                </Grid>
                {thisPost.complete ?
                    '' :
                    <Grid marginTop='30px' width='100vw' is_flex flexDirection='column' alignItems='center'>
                        <Input _ref={refInput} placeholder= {isWriting?'내용을 작성해주세요.':'아래 버튼을 눌러 작성을 시작해주세요.'} onChange={(e) => { setContents(e.target.value) }} width='350px' height='100px' isTheme type='textarea' />
                        
                        {isWriting?
                        writer===_user.user.nickname?
                        <Grid><Text>제한 시간 {calcTime} 남았습니다.</Text></Grid>:
                        <Grid><Text>다른 유저가 작성중입니다.</Text></Grid>:''}
                        {isWriting?
                        writer===_user.user.nickname?
                        <Button margin='20px' marginTop='10px' onClick={sendParagraph} theme='unfilled'>작성하기</Button>:
                        <Button margin='20px' marginTop='10px' backgroundColor='#CECECE' borderColor='#CECECE' color='#FFFFFF' theme='unfilled'>작성하기</Button>:
                        <Button margin='20px' marginTop='10px' onClick={startParagraph} theme='unfilled'>작성 시작하기</Button>}
                    </Grid>}

                <Grid width='350px' height='1px' borderTop='1px solid #CECECE' />

                <Grid is_flex flexDirection='column' alignItems='center' width='100%'>
                    <Text marginTop='10px' width='90%'>참여자</Text>
                    <Swiper
                        style={{ height: '74px', width: 'calc(90% - 20px)', margin: '10px' }}
                        slidesPerView={5}
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        {thisPost.paragraphResDtoList ? users.map(v => {

                            return (
                                <SwiperSlide>
                                    <Paragraph nick={v.nickname} src={v.userProfileImage} />
                                </SwiperSlide>
                            )
                        }) : ''}

                    </Swiper>
                </Grid>
                <Grid width='350px' height='1px' borderTop='1px solid #CECECE' />
                <Grid>
                    <Grid is_flex>
                        <Text><ThumbUpOutlinedIcon /></Text>
                        <Text>{thisPost.postLikesCnt ? thisPost.postLikesCnt : "0"}</Text>
                        <Text><BookmarkBorderOutlinedIcon /></Text>
                    </Grid>
                </Grid>

            </Grid>

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
                            <Button onClick={() => { setCategory('판타지') }} fontSize='12px' width='70px' height='40px' theme={category === '판타지' ? 'filled' : 'unfilled'}>판타지</Button>
                            <Button onClick={() => { setCategory('스릴러') }} fontSize='12px' width='70px' height='40px' theme={category === '스릴러' ? 'filled' : 'unfilled'}>스릴러</Button>
                            <Button onClick={() => { setCategory('공포') }} fontSize='12px' width='70px' height='40px' theme={category === '공포' ? 'filled' : 'unfilled'}>공포</Button>
                            <Button onClick={() => { setCategory('로맨스/멜로') }} fontSize='12px' width='70px' height='40px' theme={category === '로맨스/멜로' ? 'filled' : 'unfilled'}>로맨스 /<br />멜로</Button>
                        </Grid>
                        <Grid is_flex justifyContent='space-between' margin='5px 0' gap='5px'>
                            <Button onClick={() => { setCategory('액션') }} fontSize='12px' width='70px' height='40px' theme={category === '액션' ? 'filled' : 'unfilled'}>액션</Button>
                            <Button onClick={() => { setCategory('코미디') }} fontSize='12px' width='70px' height='40px' theme={category === '코미디' ? 'filled' : 'unfilled'}>코미디</Button>
                            <Button onClick={() => { setCategory('무협') }} fontSize='12px' width='70px' height='40px' theme={category === '무협' ? 'filled' : 'unfilled'}>무협</Button>
                            <Button onClick={() => { setCategory('SF') }} fontSize='12px' width='70px' height='40px' theme={category === 'SF' ? 'filled' : 'unfilled'}>SF</Button>
                        </Grid>
                        <Grid is_flex justifyContent='space-between' gap='5px'>
                            <Button onClick={() => { setCategory('추리/미스터리') }} fontSize='12px' width='70px' height='40px' theme={category === '추리/미스터리' ? 'filled' : 'unfilled'}>추리 /<br />미스터리</Button>
                            <Button onClick={() => { setCategory('드라마') }} fontSize='12px' width='70px' height='40px' theme={category === '드라마' ? 'filled' : 'unfilled'}>드라마</Button>
                            <Button onClick={() => { setCategory('스포츠') }} fontSize='12px' width='70px' height='40px' theme={category === '스포츠' ? 'filled' : 'unfilled'}>스포츠</Button>
                            <Button onClick={() => { setCategory('하이틴') }} fontSize='12px' width='70px' height='40px' theme={category === '하이틴' ? 'filled' : 'unfilled'}>하이틴</Button>
                        </Grid>
                    </Grid>
                    <Button onClick={sendParagraph} theme='unfilled'>확인했어요!</Button>
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
                        <Comment />
                    </Grid>

                    <Input placeholder={'댓글 달기'} margin='20px' width='80%' isTheme></Input>

                    <Button theme='unfilled'>작성하기</Button>
                </Grid>
            </Modal>

            <Grid height="100px" />
            <Bottom thisPage="detail" />
        </Grid>
    );
}


export default PostDetail;