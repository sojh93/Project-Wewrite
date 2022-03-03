//import Library
import React from "react"
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import Actions
//import elements
import { Button, Grid, Input, Image, Text } from "../elements"
//import Icon
// impot Component
import Header from "../components/Header"
import Bottom from "../components/Bottom"
function Write() {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    return (
        <Grid wrap>
            <Header />
            <Grid flex-direction="row">
                <Grid margin-top="30px">
                    <Button justifyContent="flex-end">게시하기</Button>
                </Grid>
                <Grid is_flex margin-top="30px">
                    <Grid>
                        <Grid is_flex>
                            <Text>제목 :</Text>
                            <Input />
                        </Grid>
                        <Grid is_flex>
                            <Text>표지 :</Text>
                            <Grid is_flex>
                                {/* <img src={} width="20px" height="20px" text-align="center"/> */}
                                <Text>파일 선택하기</Text>
                            </Grid>
                        </Grid>
                        <Grid is_flex>
                            <Text>완성 문장 수 :</Text>
                            <select>
                                <option key="1" value="1">1</option>
                                <option key="2" value="2">2</option>
                                <option key="3" value="3">3</option>
                                <option key="4" value="4">4</option>
                                <option key="5" value="5">5</option>
                            </select>
                            <Text>개</Text>
                        </Grid>
                        <Grid is_flex>
                            <Text>첫 문장 :</Text>
                            <Input />
                        </Grid>
                    </Grid>
                    <Grid>
                        {/* <img src={} alt="표지 미리보기" width="50px" height="50px" /> */}
                        <Button alignItems="center">pick</Button>
                        <Text>표지 색상</Text>
                    </Grid>
                </Grid>
            </Grid>
            <Bottom />
        </Grid>
    );
}
export default Write;