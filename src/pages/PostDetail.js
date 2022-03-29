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
import { actionCreators as staticActions } from '../redux/modules/static';

//import elements
import { Button, Grid, Input, Image, Text, Chip } from "../elements"

// impot Component
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import Sentence from '../components/Sentence';
import Comment from '../components/Comment';
import Paragraph from "../components/Paragraph";
import Timer from "../components/Timer";

// 소켓 통신
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { getCookie } from "../shared/Cookie";
import instance from "../shared/Request";

import _ from "lodash";


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
const styleComment = {
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
    const is_login = useSelector(state=> state.user.is_login)
    const alrt = useSelector(state=> state.static.LoginModal)
    // console.log(thisPost);
    const refInput = React.useRef(null);

    // console.log(thisPost);

    const users = thisPost.paragraphResDtoList ? thisPost.paragraphResDtoList.reduce((x, v, i) => {
        let tempList = []
        if (x.length === 0) {
            return [{ nickname: v.userInfoResDto.nickname, userProfileImage: v.userInfoResDto.userProfileImage, userKey : v.userInfoResDto.userKey }]
        } else {
            for (let i of x) {
                tempList.push(i.nickname)
            }

            if (tempList.includes(v.userInfoResDto.nickname)) {
                return x;
            } else {
                x.push({ nickname: v.userInfoResDto.nickname, userProfileImage: v.userInfoResDto.userProfileImage, userKey : v.userInfoResDto.userKey })
                return x;
            }
        }

    }, []) : '';


    //lodash
    const debounce = _.debounce((k) =>  {
        setContents(k)
    }
    , 700);
    const keyPress = React.useCallback(debounce, []);

    const [category, setCategory] = React.useState(null);
    const [timer,setTimer] = React.useState(false);

    const [comment,setComment] = React.useState('');
    const commentRef = React.useRef();

    //modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [Copen, setCOpen] = React.useState(false);
    const handleOpenC = () => setCOpen(true);
    const handleCloseC = () => setCOpen(false);

    //socket
    const sock = new SockJS(`${process.env.REACT_APP_DATABASE_BASEURL}ws-stomp`);
    const ws = Stomp.over(sock);
    const token = getCookie('WW_user');

    //contents
    const [contents, setContents] = React.useState('');
    let writer = _post.thisPost.writer;
    let isWriting = _post.thisPost.writing;



    const isLike= thisPost.postLikeClickersResponseDtoList?
            thisPost.postLikeClickersResponseDtoList
            .reduce((X,V)=>
                {   
                    return Object.values(V)[0]===_user.user.userKey?true:X}
            ,false):false;
    const isMark= thisPost.bookmarkClickUserKeyResDtoList?
    thisPost.bookmarkClickUserKeyResDtoList
    .reduce((X,V)=>
        {   
            return Object.values(V)[0]===_user.user.userKey?true:X}
    ,false):false;

    const likePost =() =>{
        if(!is_login){
            if(alrt){
                dispatch(staticActions.idCheck());
            }
            return;
        }
        dispatch(postActions.likePost(postKey));
        console.log('done');
    }
    const markPost = () =>{
        if(!is_login){
            if(alrt){
                dispatch(staticActions.idCheck());
            }
            return;
        }
        dispatch(postActions.markPost(postKey));
        console.log('done');
    }
    const addComment = () =>{
        if(comment===''){
            return;
        }
        dispatch(postActions.addComment(comment,postKey));
        commentRef.current.value='';
        setComment('');
        dispatch(postActions.getOne(postKey));
    }
    

    var headers = {
        Authorization: token
    };

    React.useEffect(() => {
        setTimeout(()=>{
            console.log('1분 경과');
        },60000)
        dispatch(postActions.getOne(postKey));

        if(!_user.is_login){
            dispatch(userActions.check())
        }
        wsConnectSubscribe();
        
        return () => { 
            cancelParagraph();
            wsDisConnectUnsubscribe();
            };
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
                            setTimeout(()=>{dispatch(postActions.getOne(postKey));},500)
                            setTimer(true);
                            console.log(timer);
                            setTimeout(()=>{
                                if(writer===_user.user.nickname){
                                    wsDisConnectUnsubscribe();
                                    window.location.reload();
                                }
                            },1000*60*15)
                        }
                        if(data.body.split(',')[0].split('\"')[3] === 'TALK'){
                            console.log('TALK');
                            // setWriter(null)
                            // setIsWriting(false);
                            setTimeout(()=>{window.location.reload()},500)
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
            cancelParagraph();
            
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
        if(contents===''){
            window.alert("문장을 입력해주세요.");
            return;
        }
        if(thisPost.limitCnt - 1 === thisPost.paragraphResDtoList.length){
            handleOpen()
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
            setContents('');
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

    function finishParagraph() {
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

        }
        setTimeout(()=>{
            dispatch(postActions.completePara(postKey,category));
                        handleClose()},300)
        setTimeout(()=>{
            dispatch(postActions.getOne(postKey));
                        handleClose()},500)
    }

    function cancelParagraph() {
        console.log(isWriting, writer===_user.user.nickname)
        if(writer===_user.user.nickname){
            instance({
                method : "post",
                url : `/cancelIsWriting/${postKey}`,
                data : {},
                headers : {
                    "Content-Type": "application/json;charset-UTF-8",
                    'Authorization' : token,
                }
            }).then(res=>{
                console.log(res);
            });
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
                    <Grid is_flex justifyContent='space-between'>
                        <Grid>
                        {thisPost.categoryList ? thisPost.categoryList.map((v,i) => {
                            return (
                                <Chip margin='0 5px 0 0' key={i}>{v.category}</Chip>
                            )
                        }) : ''}
                        </Grid>
                    
                    {thisPost.complete?"":<Text margin="0">작성 가능 문단 수 {thisPost.paragraphResDtoList?thisPost.paragraphResDtoList.length:""} / {thisPost.limitCnt?thisPost.limitCnt:""}</Text>}
                    </Grid>

                    <Grid is_flex justifyContent="space-between" alignItems="center" width='100%'>
                        <Text fontSize='24px'>{thisPost.title ? thisPost.title : ""}</Text>
                    </Grid>
                </Grid>

                <Grid is_flex flexDirection='column' width='90%'>
                    {thisPost.paragraphResDtoList ? thisPost.paragraphResDtoList.map(v => {
                        const likeThis= v.paragraphLikesClickUserKeyResDtoList
                        .reduce((X,V)=>
                            {   
                                return Object.values(V)[0]===_user.user.userKey?true:X}
                        ,false)
                        return (
                            <Sentence paraKey={v.paragraphKey} isLike={likeThis} like={v.paragraphLikesCnt} contents={v.paragraph} src={v.userInfoResDto.userProfileImage} />
                        )
                    }) : ''}
                </Grid>
                {thisPost.complete ?
                    '' :
                    <Grid marginTop='30px' width='100%' is_flex flexDirection='column' alignItems='center'>
                        <Input _ref={refInput} display={isWriting?writer===_user.user.nickname?'':'none':'none'} placeholder= {isWriting?writer===_user.user.nickname?'내용을 작성해주세요.':'다른 유저가 작성중입니다.':'아래 버튼을 눌러 작성을 시작해주세요.'} onChange={(e) => { keyPress(e.target.value) }} width='350px' height='100px' isTheme type='textarea' />
                        
                        {isWriting?
                        writer===_user.user.nickname?
                        <Grid is_flex alignItems='center'><Text>제한 시간</Text> <Timer min='15'/> <Text>남았습니다.</Text></Grid>:
                        <Grid><Text>{thisPost.writer?thisPost.writer:'unknown'}님이 작성중입니다.</Text></Grid>:''}
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
                                    <Paragraph nick={v.nickname} userKey={v.userKey} src={v.userProfileImage} />
                                </SwiperSlide>
                            )
                        }) : ''}

                    </Swiper>
                </Grid>
                <Grid width='350px' height='1px' borderTop='1px solid #CECECE' />
                <Grid>
                    <Grid is_flex alignItems='center'>
                        <Image cursor="pointer" onClick={likePost} width='20px' height='20px' margin='4px' src={isLike?'/Icon/thumbs-up-filled.png':'/Icon/thumbs-up.png'}/>   
                        <Text fontSize='12px' color='#7E7E7E'>{thisPost.postLikesCnt ? thisPost.postLikesCnt : "0"}</Text>
                        <Image cursor="pointer" width='14px' onClick={markPost} height='18px' margin='6px' src={isMark?'/Icon/bookmark_filled.png':'/Icon/bookmark.png'}/>
                        <Text fontSize='12px' color='#7E7E7E'>{thisPost.bookmarkLikesCnt ? thisPost.bookmarkLikesCnt : "0"}</Text>
                        <Grid cursor="pointer" is_flex onClick={handleOpenC}>
                            <Image width='16px' height='16px' margin='6px' src={props.isMark?'/Icon/talk.png':'/Icon/talk.png'}/>
                            <Text fontSize='12px'  color='#7E7E7E'>댓글보기</Text>
                        </Grid>
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
                            <Button onClick={() => { setCategory('로맨스') }} fontSize='12px' width='70px' height='40px' theme={category === '로맨스' ? 'filled' : 'unfilled'}>로맨스</Button>
                        </Grid>
                        <Grid is_flex justifyContent='space-between' margin='5px 0' gap='5px'>
                            <Button onClick={() => { setCategory('액션') }} fontSize='12px' width='70px' height='40px' theme={category === '액션' ? 'filled' : 'unfilled'}>액션</Button>
                            <Button onClick={() => { setCategory('코미디') }} fontSize='12px' width='70px' height='40px' theme={category === '코미디' ? 'filled' : 'unfilled'}>코미디</Button>
                            <Button onClick={() => { setCategory('무협') }} fontSize='12px' width='70px' height='40px' theme={category === '무협' ? 'filled' : 'unfilled'}>무협</Button>
                            <Button onClick={() => { setCategory('SF') }} fontSize='12px' width='70px' height='40px' theme={category === 'SF' ? 'filled' : 'unfilled'}>SF</Button>
                        </Grid>
                        <Grid is_flex justifyContent='space-between' gap='5px'>
                            <Button onClick={() => { setCategory('추리') }} fontSize='12px' width='70px' height='40px' theme={category === '추리' ? 'filled' : 'unfilled'}>추리</Button>
                            <Button onClick={() => { setCategory('드라마') }} fontSize='12px' width='70px' height='40px' theme={category === '드라마' ? 'filled' : 'unfilled'}>드라마</Button>
                            <Button onClick={() => { setCategory('스포츠') }} fontSize='12px' width='70px' height='40px' theme={category === '스포츠' ? 'filled' : 'unfilled'}>스포츠</Button>
                            <Button onClick={() => { setCategory('하이틴') }} fontSize='12px' width='70px' height='40px' theme={category === '하이틴' ? 'filled' : 'unfilled'}>하이틴</Button>
                        </Grid>
                    </Grid>
                    <Button onClick={finishParagraph} theme='unfilled'>확인했어요!</Button>
                </Grid>
            </Modal>

            <Modal
                open={Copen}
                onClose={handleCloseC}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid is_flex flexDirection='column' justifyContent='flex-start' alignItems='center' {...styleComment}>

                    <Grid marginTop='35px'>
                        <Text fontSize='24px' color='black' fontWeight='700'>댓글을 확인하세요</Text>
                    </Grid>

                    <Grid width='70px' height='77px'>
                        <Image width='70px' height='77px' src='/default_img/talkIocn.png'></Image>
                    </Grid>
                    <Grid margin='0px 20px' is_flex alignItems='flex-end' width='100%'>
                        <Text margin='5px 0 5px 10px' fontSize='16px' alignItems='center' fontWeight='500'>댓글</Text><Text fontSize='10px' color='#C4C4C4' fontWeight='400'>{thisPost.commentList?thisPost.commentList.length:'0'}</Text>
                    </Grid>

                    <Grid width='100%' overflow='scroll' height="300px">
                        {thisPost.commentList?thisPost.commentList.map((v)=>{
                            return(<Comment commentInfo={v} date={moment(v.commentModifiedAt).format('lll')}/>)
                        }):''}
                    </Grid>
                    <Grid width='100%' is_flex flexDirection='column' alignItems='center'>
                        <Input _ref={commentRef} placeholder={'댓글 달기'} onChange={(e)=>{setComment(e.target.value)}} margin='20px' width='90%' isTheme></Input>

                        <Button onClick={addComment} theme='unfilled'>작성하기</Button>
                    </Grid>
                    <Grid height='30px'/>
                </Grid>
            </Modal>

            <Grid height="100px" />
            <Bottom thisPage="detail" />
        </Grid>
    );
}


export default PostDetail;
