//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import Actions


//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon


// impot Component
import Header from '../components/Header';
import Bottom from '../components/Bottom';




function PostList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
        <Grid wrap>
            <Header/>
            <Bottom thisPage="postList"/>
        </Grid>

    );
}


export default PostList;