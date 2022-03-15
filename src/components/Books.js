import React from "react";
import { SwiperSlide } from "swiper/react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

import { Grid, Image,Text,Chip } from "../elements";

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import { actionCreators as userActions } from '../redux/modules/user';
import { actionCreators as postActions } from '../redux/modules/post';

const Books = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const likePost =() =>{
        dispatch(postActions.likePost(props.postKey));
        console.log('done');
    }
    return(
        
        <Grid width='100%' height='100%' is_flex flexDirection='column' alignItems='center'>
            <Image onClick={props.onClick} border='1px solid #C4C4C4' boxSizing ='border-box' borderRadius='5px' width='100%' minHeight='140px' maxHeight='150px' height='150px' src={props.src}/>

            <Grid onClick={props.onClick} width='100%' height='26px' is_flex alignItems='flex-start'>
                <Text margin='3px' width='auto' fontSize='16px' color='black'>
                    {props.title}
                    </Text>
            </Grid>
            <Grid margin='2px' width='100%' is_flex alignItems='flex-start'>
                {props.category?props.category.map((v,i)=>{
                    return (
                        <Chip key={i}>{v.category}</Chip>
                    )
                }):""}
            </Grid>

            <Grid is_flex fontSize='15px' color={props.isLike?'#6454FF':'#7E7E7E'} margin='10px 0' alignItems='center' fontWeight='300'>
                {props.isLike?<Text height='25px' margin="0 5px" color='#6454FF'><ThumbUpIcon onClick={likePost}/></Text>:<Text height='25px' margin="0 5px"><ThumbUpOutlinedIcon onClick={likePost}/></Text>}
                <Text margin="0 5px" fontSize='12px' color={props.isLike?'#6454FF':'#7E7E7E'}>{props.like}</Text>
                <Text height='25px' margin="0 5px" fontSize='12px' color={props.isLike?'#7E7E7E':'#7E7E7E'}><BookmarkBorderOutlinedIcon/></Text>
                <Text margin="0 5px" fontSize='12px' color={props.isLike?'#7E7E7E':'#7E7E7E'}>???</Text>

            </Grid>
        </Grid>
        
    )
}

export default Books;