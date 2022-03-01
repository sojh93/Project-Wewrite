//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import SwitchSelector from "react-switch-selector";

//import Actions


//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon


// impot Component
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import Post from '../components/Post';




function PostList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const options = [
        {
            label: "추천",
            value: "recommend",
            width : "100px",
        },
        {
            label: "최신",
            value: "recent",
            width : "100px",
        }
    ];
    const onChange = (newValue) => {
        console.log(newValue);
    };
    
    const initialSelectedIndex = options.findIndex(({value}) => value === "recommend");

    return (
        <Grid wrap>
            <Header/>

            <Grid margin="15px" width="100px" height="30px">
                <SwitchSelector
                    onChange={onChange}
                    options={options}
                />
            </Grid>

            <Grid>
                <Post/>
            </Grid>


            <Bottom thisPage="postList"/>
        </Grid>

    );
}


export default PostList;