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


// impot Component
import Header from "../components/Header"
import Bottom from "../components/Bottom"



function Write() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const debounce = _.debounce((k) => console.log(k), 500);
    const keyPress = React.useCallback(debounce, []);
    


    const [title,setTitle] = React.useState(null);

    const colorList = ['black','white','pink','sky']
    const [color,setColor] = React.useState(0);

    const [sentence,setSentence] = React.useState(null);

    const [sentenceCnt,setSentenceCnt] = React.useState(1);
    
    const refCategory = React.useRef();
    const [category,setCategory] = React.useState(null)

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

    const submitPost =()=>{
        const postData = new FormData();
        postData.append("title", title);
        postData.append("color", colorList[color]);
        postData.append("limitCnt", sentenceCnt);
        postData.append("category", category);
        postData.append("postImageUrl",refFileInput.current.files[0]);

        dispatch(postActions.addPost(postData));
    }


    return (
        <Grid wrap>
            <Header />

            <Grid is_flex marginTop="100px" alignItems='center' flexDirection="column">
                
                <Grid>
                    <img src={preview?preview:'/default_img/inputImage.png'} width="130px" height="150px"/>
                    <Button onClick={()=>{refFileInput.current.click()}} border="1px solid #dbdbdb" width = "130px" height="30px" fontSize="12px" fontWeight="600">표지 변경하기</Button>
                    <input ref={refFileInput} onChange={selectFile} type="file" style={{display:'none'}}/>
                </Grid>

                <Grid>
                    <Text>제목</Text>
                    <Input onChange={(e)=>setTitle(e.target.value)} width='90vw' placeholder='제목' isTheme/>
                </Grid>

                <Grid margin='20px 0'>
                    <Text>첫 문장 작성하기</Text>
                    <Input onChange={(e)=>setSentence(e.target.value)} width='90vw' height='100px' isTheme/>
                </Grid>

                <Grid margin='20px 0'>
                    <Text>완성 문장 수</Text>
                    <Grid is_flex width='90vw'>
                    <Slider
                        size="small"
                        defaultValue={1}
                        aria-label="Small"
                        step={1}
                        min={1}
                        max={10}
                        valueLabelDisplay="auto"
                        marks={
                            [{value : 1, label:'1개'},{value : 10, label:'10개'}]
                        }
                        onChange={(e)=>{
                            keyPress(e.target.value)}}
                    />
                    </Grid>
                </Grid>

                <Grid is_flex margin='20px 0' width='90vw'>
                    <Text>카테고리</Text>
                    
                </Grid>
                
                <Button onClick={submitPost} theme='unfilled'>게시하기</Button>
                
            </Grid>
            <Bottom />
        </Grid>
    );
}
export default Write;