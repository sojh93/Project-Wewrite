import React from "react";
import { SwiperSlide } from "swiper/react";
import { Grid, Image,Text,Chip } from "../elements";

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';


const Books = (props) => {

    return(
        
        <Grid onClick={props.onClick} width='100%' height='100%' is_flex flexDirection='column' alignItems='center'>
            <Image width='100%' minHeight='140px' maxHeight='150px' height='150px' src={props.src}/>

            <Grid width='100%' height='26px' is_flex alignItems='flex-start'>
                <Text margin='3px' width='auto' fontSize='16px' color='black'>
                    {props.title}
                    </Text>
            </Grid>
            <Grid margin='2px' width='100%' is_flex alignItems='flex-start'>
                <Chip >장르</Chip>
            </Grid>

            <Grid is_flex fontSize='15px' color='#7E7E7E' fontWeight='300'>
                <Text><ThumbUpOutlinedIcon/></Text>
                <Text>{props.like}</Text>
                <Text><BookmarkBorderOutlinedIcon/></Text>
                <Text>???</Text>

            </Grid>
        </Grid>
        
    )
}

export default Books;