//import Library
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import _, { set } from "lodash";
import imageCompression from "browser-image-compression";

//import Actions
import { actionCreators as postActions } from '../redux/modules/post';

//import elements
import { Button, Grid, Input, Image, Text } from "../elements"

// impot Component
import Header from "../components/Header"
import Bottom from "../components/Bottom"
import Slider from '@mui/material/Slider';
import Modal from '@mui/material/Modal';


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
    const _user = useSelector(state=>state.user);

    var foo = new File(["foo"], "foo.txt", {
        type: "text/plain",
    });
    const [upload,setUpload] =React.useState(foo);
    
    //lodash
    const debounce = _.debounce((k) => setSentenceCnt(k), 500);
    const keyPress = React.useCallback(debounce, []);
    
    //modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        if(title===''){
            window.alert('제목을 입력해주세요');
            return;
        }
        if(sentence===''){
            window.alert('내용을 입력해주세요');
            return;
        }
        if(category===null){
            window.alert('카테고리를 선택해주세요');
            return;
        }
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const colorList = ['black','white','pink','sky']
    const refFileInput = React.useRef();
    
    const [title,setTitle] = React.useState('');
    const [color,setColor] = React.useState(0);
    const [sentence,setSentence] = React.useState('');
    const [sentenceCnt,setSentenceCnt] = React.useState(2);
    const [category,setCategory] = React.useState(null)
    const [preview,setPreview] = React.useState('/default_img/inputImage.png');

    const handlingDataForm = async dataURI => {
        // dataURL 값이 data:image/jpeg:base64,~~~~~~~ 이므로 ','를 기점으로 잘라서 ~~~~~인 부분만 다시 인코딩
        const byteString = atob(dataURI.split(",")[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ia], {
            type: "image/jpeg"
        });
        const file = new File([blob], `${_user.user.userKey}${Math.random()* 100 % 100}.jpg`);
        
        console.log(file);
        setUpload(file);
    };

    const actionImgCompress = async (fileSrc) => {
        console.log("압축 시작");
        const options = {
            maxSizeMB: 2,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
        };
        try {
            // 압축 결과
            const compressedFile = await imageCompression(fileSrc, options);
            const reader = new FileReader();
            reader.readAsDataURL(compressedFile);
            reader.onloadend = () => {
                // 변환 완료!
                const base64data = reader.result;
                // formData 만드는 함수
                handlingDataForm(base64data);
            };
        } catch (error) {
            console.log(error);
        }
    };
    
    const selectFile = (e) =>{
        const reader = new FileReader();
        const file = refFileInput.current.files[0];
        actionImgCompress(file);
        reader.readAsDataURL(file);
        reader.addEventListener("load",function () {
            setPreview(reader.result);
        })
        
    }

    const check = ()=>{
        if(title===''){
            window.alert('제목을 입력해주세요');
            return;
        }
        if(sentence===''){
            window.alert('내용을 입력해주세요');
            return;
        }
        if(category===null){
            window.alert('카테고리를 선택해주세요');
            return;
        }
        submitPost()
    }

    const submitPost =()=>{
        const postData = new FormData();
        postData.append("title", title);
        postData.append("color", colorList[color]);
        postData.append("limitCnt", sentenceCnt);
        postData.append("category", category);
        postData.append("paragraph", sentence);
        postData.append("postImageUrl",upload);

        dispatch(postActions.addPost(postData));
        dispatch(postActions.getAll())
        setTimeout(()=>{navigate('/')},500);
    }


    return (
        <Grid wrap>
            <Header isWrite/>

            <Grid is_flex marginTop="100px" marginBottom='100px' alignItems='center' flexDirection="column">
                
                <Grid>
                    <Image src={preview} width="130px" height="150px"/>
                    <Button onClick={()=>{refFileInput.current.click()}} border="1px solid #dbdbdb" width = "130px" height="30px" fontSize="12px" fontWeight="600">표지 변경하기</Button>
                    <input ref={refFileInput} onChange={selectFile} type="file" accept="image/*" style={{display:'none'}}/>
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
                        <Button onClick={()=>{setCategory('로맨스')}} fontSize='12px' width='75px' height='40px' theme={category==='로맨스'?'filled':'unfilled'}>로맨스</Button>
                    </Grid>
                    <Grid is_flex justifyContent='space-between'>
                        <Button onClick={()=>{setCategory('액션')}} fontSize='12px' width='75px' height='40px' theme={category==='액션'?'filled':'unfilled'}>액션</Button>
                        <Button onClick={()=>{setCategory('코미디')}} fontSize='12px' width='75px' height='40px' theme={category==='코미디'?'filled':'unfilled'}>코미디</Button>
                        <Button onClick={()=>{setCategory('무협')}} fontSize='12px' width='75px' height='40px' theme={category==='무협'?'filled':'unfilled'}>무협</Button>
                        <Button onClick={()=>{setCategory('SF')}} fontSize='12px' width='75px' height='40px' theme={category==='SF'?'filled':'unfilled'}>SF</Button>
                    </Grid>
                    <Grid is_flex justifyContent='space-between'>
                        <Button onClick={()=>{setCategory('추리')}} fontSize='12px' width='75px' height='40px' theme={category==='추리'?'filled':'unfilled'}>추리</Button>
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
                    <Button onClick={check} theme='unfilled'>확인했어요!</Button>
                </Grid>
            </Modal>
        </Grid>
    );
}
export default Write;