//import Library
import React from "react"
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//import Actions
import { actionCreators as userActions } from '../redux/modules/user';
import { actionCreators as postActions } from '../redux/modules/post';

//import elements
import { Button, Grid, Input, Image, Text } from "../elements"

//import Icon
// impot Component
import Header from "../components/Header"
import Bottom from "../components/Bottom"
function Write() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

            <Grid marginTop="100px" flexDirection="column">
                
                <Grid is_flex flexDirection='column' marginTop="30px">
                    <Grid>
                        <Grid is_flex flexDirection='column'>
                            <Input onChange={(e)=>setTitle(e.target.value)} width='100px' placeholder='제목' isTheme/>

                            <Input onChange={()=>setCategory(refCategory.current.value)} _ref={refCategory} isTheme type='select'>
                                <option value="0" key="0" disabled>장르</option>
                                <option value="판타지" key="1">판타지</option>
                                <option value="현판" key="2">현판</option>
                                <option value="로맨스" key="3">로맨스</option>
                                <option value="로판" key="4">로판</option>
                                <option value="무협" key="5">무협</option>
                            </Input>
                        </Grid>
                        <Grid is_flex margin="10px">
                            <Grid is_flex>
                                <img src={preview} width="20px" height="20px" text-align="center"/>
                                <div>
                                    <Button onClick={()=>{refFileInput.current.click()}} border="1px solid #dbdbdb" width = "120px" height="30px" fontSize="12px" fontWeight="600">표지 변경</Button>
                                    <input ref={refFileInput} onChange={selectFile} type="file" style={{display:'none'}}/>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid is_flex>
                            <Text>완성 문장 수 :</Text>
                            <Button onClick={()=>setSentenceCnt(sentenceCnt > 1 ?(sentenceCnt-1):sentenceCnt)}>down</Button>
                            <Text>{sentenceCnt}개</Text>
                            <Button onClick={()=>setSentenceCnt(sentenceCnt <15 ?(sentenceCnt+1):sentenceCnt)}>up</Button>
                        </Grid>
                            <Input onChange={(e)=>setSentence(e.target.value)} width='100px' placeholder='첫 문장' isTheme/>
                    </Grid>
                    <Grid is_flex>
                        <Text>표지 색상</Text>
                        <Button onClick={()=>setColor(color !== 0?(color-1):colorList.length-1)}>&lt;</Button>
                        {colorList[color]}
                        <Button onClick={()=>setColor((color+1)%(colorList.length))}>&gt;</Button>
                    </Grid>
                </Grid>
                <Grid margin="20px">
                    <Button onClick={submitPost} theme='unfilled'>게시하기</Button>
                </Grid>
            </Grid>
            <Bottom />
        </Grid>
    );
}
export default Write;