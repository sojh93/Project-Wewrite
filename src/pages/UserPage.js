    //import Library
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
import SwitchSelector from "react-switch-selector";

//import Actions

//import elements
import { Button, Grid, Input, Image, Text } from "../elements";

//import Icon

// impot Component
import Header from "../components/Header";
import Bottom from "../components/Bottom";
import Post from "../components/Post";

const UserPage = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);

    const pageUserKey = useParams().userKey;
    console.log(pageUserKey);

    const [index,setIndex] = React.useState(1);



    return (
    <Grid wrap>
            <Header isUserPage UserName="jennni"/>
            <Grid is_flex flexDirection='column' alignItems='center' width="100%" padding="0" marginTop="100px">
                
                <Image is_circle size='100' src='https://postfiles.pstatic.net/MjAyMjAyMjBfNDMg/MDAxNjQ1MzMwOTg2MTA0.rb5fjI1Aegjp3RHNgmq0PixnyLmCrZeusNM9jbQgdE8g.mD9oTu5zdLKXrs_JmKZv-X7ErwfIlmA76i-qEZvEvYIg.JPEG.sunba0809/467d8490bad8651e3e84d231c2c51e25.jpg?type=w966'/>
    
                <Text margin="5px 5px 0px 5px" fontSize="12px">
                    [호칭]
                </Text>

                <Text margin="5px 5px 0px 5px" fontSize="24px">
                    닉네임
                </Text>

                <Text margin="5px" fontSize="8px" width="150px">
                    소개글: 안녕하세요 저는 지중해의 몰타 섬이
                    고향인 말티즈라고 해요. 먹을 걸 내놓아라. 혹시
                    알아? 귀여워질지? 난 참지 않아!!
                </Text>

                <Grid borderBottom='1px solid black' is_flex width='100%'>
                    <Grid height='35px' width='33%' textAlign='center' onClick={()=>setIndex(1)}><Text>내 참여작</Text></Grid>
                    <Grid height='35px' width='33%' textAlign='center' onClick={()=>setIndex(2)}><Text>북마크한 작품</Text></Grid>
                    <Grid height='35px' width='33%' textAlign='center' onClick={()=>setIndex(3)}><Text>좋아요한 작품</Text></Grid>
                </Grid> 
                <Grid marginTop='-2px' width="34%" height='1px' borderTop='3px solid black' transform={'translate(' + (- 2 + index)*100 + '%)'} transition='transform 0.5s ease 0.1s'/>


                <Grid is_flex flexDirection='column' alignItems='center' width="90%" marginTop='15px' gap='10px'>
                    <Post/>
                    <Post/>
                </Grid>
            </Grid>
            <Bottom thisPage="myPage" />
        </Grid>
    );
};

export default UserPage;
