import React from "react";
import styled from "styled-components";

// import elements
import { Image, Grid, Button, Input, Text} from "../elements/index";

// import components
import Header from "../components/Header";

// import redux


// import default image
import blank from "../image/blank.jpg"


const Mywrite = (props) => {
  
 

  return (
    <Grid wrap>
        <Header/>
            <Grid is_flex align-items="center" margin="10px 0 0 0" flexDirection="column" height="90px" width="320px">
               
            <Button algin-items="right" margin="5px 0 0 245px" width="60px">완료</Button>
                <Image src={blank} width="70px" height="70px"/>
                <Button>프로필 사진 추가하기</Button>
            
                <Grid margin="20px 0 10px 0">
                    <Text>닉네임</Text>
                    <Input></Input>
                </Grid>
                <Grid margin="10px">
                    <Text>소개</Text>
                    <Input height="50px"></Input>
                </Grid>
                <Grid margin="10px">
                    <Text>비밀번호</Text>
                    <Input type="password"></Input>
                </Grid>
                <Grid margin="10px">
                    <Text>비밀번호 확인</Text>
                    <Input type="password"></Input>
                </Grid>
                <Button margin="20px" width="90px">프로필수정 완료</Button>
            </Grid>

        </Grid>
  );
};



export default Mywrite;
