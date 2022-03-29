import React from "react";
import { SwiperSlide } from "swiper/react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

import { Grid, Image,Text,Chip } from "../elements";



import { actionCreators as userActions } from '../redux/modules/user';
import { actionCreators as postActions } from '../redux/modules/post';
import { actionCreators as staticActions } from '../redux/modules/static';

import LoginBanner from "./LoginBanner";

const Books = React.memo((props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const is_login = useSelector(state=> state.user.is_login)
    const alrt = useSelector(state=> state.static.LoginModal)


    const control = (s,limit) =>{
        if(s.length > limit){
            return (s.slice(0,limit)+'...')
        }
        else{
            return s
        }
    }

    const likePost =() =>{
        if(!is_login){
            if(alrt){
                dispatch(staticActions.idCheck());
            }
            return;
        }
        dispatch(postActions.likePost(props.postKey));
        console.log('done');
    }
    const markPost =() =>{
        if(!is_login){
            if(alrt){
                dispatch(staticActions.idCheck());
            }
            return;
        }
        dispatch(postActions.markPost(props.postKey));
        console.log('done');
    }
    return(
        <Grid width='100%' height='100%' is_flex flexDirection='column' alignItems='center'>
            <Image cursor='pointer' onClick={props.onClick} border='1px solid #C4C4C4' boxSizing ='border-box' borderRadius='5px' width='100%' minHeight='140px' maxHeight='150px' height='150px' src={props.src}/>

            <Grid onClick={props.onClick} width='100%' height='26px' is_flex alignItems='flex-start'>
                <Text cursor='pointer' margin='3px' width='auto' fontSize='16px' color='black'>
                    {control(props.title,8)}
                    </Text>
            </Grid>
            <Grid margin='2px' marginTop='5px' width='100%' is_flex alignItems='flex-start'>
                {props.category?props.category.map((v,i)=>{
                    return (
                        <Chip marginRight='5px' key={i}>{v.category}</Chip>
                    )
                }):""}
            </Grid>

            <Grid is_flex fontSize='15px' width='100%' margin='0' marginTop='3px' alignItems='center' fontWeight='300'>
                <Image cursor='pointer' onClick={likePost} width='20px' height='20px' margin='0px' src={props.isLike?'/Icon/thumbs-up-filled.png':'/Icon/thumbs-up.png'}/>
                <Text width='35px' margin="0 " fontSize='12px' color={props.isLike?'#6454FF':'#7E7E7E'}>{props.like}</Text>
                <Image cursor='pointer' width='14px' onClick={markPost} height='18px' margin='0px' src={props.isMark?'/Icon/bookmark_filled.png':'/Icon/bookmark.png'}/>
                <Text margin="0 5px" fontSize='12px' color={props.isLike?'#7E7E7E':'#7E7E7E'}>{props.bookmarkLikesCnt}</Text>
            </Grid>
        </Grid>
    )
})

export default Books;