//import Library
import React from "react"
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import _, { set } from "lodash";

//import Actions
import { actionCreators as userActions } from '../redux/modules/user';
import { actionCreators as postActions } from '../redux/modules/post';

//import elements
import { Button, Grid, Input, Image, Text } from "../elements"

//import MUI
import Slider from '@mui/material/Slider';
import Modal from '@mui/material/Modal';


// impot Component
import Header from "../components/Header"
import Bottom from "../components/Bottom"

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

function Write() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const testRef = React.useRef();
    
    //lodash
    const debounce = _.debounce((k) => setSentenceCnt(k), 500);
    const keyPress = React.useCallback(debounce, []);
    
    //modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //title
    const [title,setTitle] = React.useState(null);

    //book cover color
    const colorList = ['black','white','pink','sky']
    const [color,setColor] = React.useState(0);

    //first sentence
    const [sentence,setSentence] = React.useState(null);

    //set sentence count
    const [sentenceCnt,setSentenceCnt] = React.useState(2);
    
    //category
    const [category,setCategory] = React.useState(null)

    //book cover image
    const refFileInput = React.useRef();
    const [preview,setPreview] = React.useState(null);

    const selectFile = (e) =>{
        const reader = new FileReader();
        const file = refFileInput.current.files[0];
        reader.readAsDataURL(file);
        reader.addEventListener("load",function () {
            setPreview(reader.result);
        })

        console.log('헷')

    }

    const openModal = ()=>{
        
    }

    const submitPost =()=>{


        const postData = new FormData();
        postData.append("title", title);
        postData.append("color", colorList[color]);
        postData.append("limitCnt", sentenceCnt);
        postData.append("category", category);
        postData.append("paragraph", sentence);
        postData.append("postImageUrl",refFileInput.current.files[0]);

        console.log(sentence);
        dispatch(postActions.addPost(postData));
        dispatch(postActions.getAll())
        navigate('/');
    }


    return (
        <Grid wrap>
            <Header isWrite/>

            <Grid is_flex marginTop="100px" marginBottom='100px' alignItems='center' flexDirection="column">
                
                <Grid>
                    <img src={preview?preview:'/default_img/inputImage.png'} width="130px" height="150px"/>
                    <Button onClick={()=>{refFileInput.current.click()}} border="1px solid #dbdbdb" width = "130px" height="30px" fontSize="12px" fontWeight="600">표지 변경하기</Button>
                    <input ref={refFileInput} onChange={selectFile} type="file" accept="image/*,.jpg,.png,.fif,.jfif,.jpeg,.tif,.webp" style={{display:'none'}}/>
                </Grid>

                <Grid width='90%'>
                    <Text>제목</Text>
                    <Input onChange={(e)=>setTitle(e.target.value)} width='100%' placeholder='제목' isTheme/>
                </Grid>

                <Grid margin='20px 0' width='90%'>
                    <Text>첫 문장 작성하기</Text>
                    <Input onChange={(e)=>setSentence(e.target.value)} width='100%' height='100px' isTheme type='textarea'/>
                </Grid>

                <Grid margin='20px 0' width='80%'>
                    <Text>완성 문장 수</Text>
                    <Grid is_flex width='100%'>
                    <Slider
                        size="small"
                        defaultValue={2}
                        aria-label="Small"
                        step={1}
                        min={2}
                        max={10}
                        valueLabelDisplay="auto"
                        marks={
                            [{value : 2, label:'2개'},{value : 10, label:'10개'}]
                        }
                        onChange={(e)=>{
                            keyPress(e.target.value)}}
                    />
                    </Grid>
                </Grid>

                <Grid is_flex flexDirection='column' margin='20px 0' width='90%' gap='10px'>
                    <Text>카테고리</Text>
                    <Grid is_flex justifyContent='space-between'>
                        <Button onClick={()=>{setCategory('판타지')}} fontSize='12px' width='75px' height='40px' theme={category==='판타지'?'filled':'unfilled'}>판타지</Button>
                        <Button onClick={()=>{setCategory('스릴러')}} fontSize='12px' width='75px' height='40px' theme={category==='스릴러'?'filled':'unfilled'}>스릴러</Button>
                        <Button onClick={()=>{setCategory('공포')}} fontSize='12px' width='75px' height='40px' theme={category==='공포'?'filled':'unfilled'}>공포</Button>
                        <Button onClick={()=>{setCategory('로맨스')}} fontSize='12px' width='75px' height='40px' theme={category==='로맨스'?'filled':'unfilled'}>로맨스 /<br/>멜로</Button>
                    </Grid>
                    <Grid is_flex justifyContent='space-between'>
                        <Button onClick={()=>{setCategory('액션')}} fontSize='12px' width='75px' height='40px' theme={category==='액션'?'filled':'unfilled'}>액션</Button>
                        <Button onClick={()=>{setCategory('코미디')}} fontSize='12px' width='75px' height='40px' theme={category==='코미디'?'filled':'unfilled'}>코미디</Button>
                        <Button onClick={()=>{setCategory('무협')}} fontSize='12px' width='75px' height='40px' theme={category==='무협'?'filled':'unfilled'}>무협</Button>
                        <Button onClick={()=>{setCategory('SF')}} fontSize='12px' width='75px' height='40px' theme={category==='SF'?'filled':'unfilled'}>SF</Button>
                    </Grid>
                    <Grid is_flex justifyContent='space-between'>
                        <Button onClick={()=>{setCategory('추리')}} fontSize='12px' width='75px' height='40px' theme={category==='추리'?'filled':'unfilled'}>추리 /<br/>미스터리</Button>
                        <Button onClick={()=>{setCategory('드라마')}} fontSize='12px' width='75px' height='40px' theme={category==='드라마'?'filled':'unfilled'}>드라마</Button>
                        <Button onClick={()=>{setCategory('스포츠')}} fontSize='12px' width='75px' height='40px' theme={category==='스포츠'?'filled':'unfilled'}>스포츠</Button>
                        <Button onClick={()=>{setCategory('하이틴')}} fontSize='12px' width='75px' height='40px' theme={category==='하이틴'?'filled':'unfilled'}>하이틴</Button>
                    </Grid>
                </Grid>
                
                <Button onClick={handleOpen} theme='unfilled'>게시하기</Button>
            </Grid>
            <Bottom />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid is_flex flexDirection='column' justifyContent='center' alignItems='center' {...style}>
                    <Text fontSize='24px' color='black' fontWeight='700'>마지막으로 확인해주세요!</Text>
                    <Image margin='10px' width='50px' height='50px' src='/default_img/book.png'></Image>
                    <Grid color='gray' margin='20px'>
                        <Text fontSize='14px' color='black' fontWeight='700'>유의사항</Text>
                        <Text fontSize='14px'> - 같은 사람이 연속으로 릴레리를 이어갈 수 없어요.</Text>
                        <Text fontSize='14px'> - 한 번 더는 한 소설 당 한 번만 가능해요.</Text>
                        <Text fontSize='14px'> - 최소 2명 이상 참여해야요.</Text>
                        <Text fontSize='14px'> - 문장 삭제는 뒤에 문장이 달리지 않았을 경우에만 가능해요.</Text>
                    </Grid>
                    <Button onClick={submitPost} theme='unfilled'>확인했어요!</Button>
                </Grid>
            </Modal>
        </Grid>
    );
}
export default Write;