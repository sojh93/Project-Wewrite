import React from "react";
import { Grid, Image,Text,Chip } from "../elements";



const BookCover = (props) => {

    return(
        
        <Grid position='relative' onClick={props.onClick} width='100%' height='100%' is_flex flexDirection='column' alignItems='center'>
            <Image zIndex='1' borderRadius='2px 6px 6px 0' width="220px" height='320px' src={props.src}/>
            <Grid borderRadius='5px' top='60px' zIndex='2' position='absolute' width='140px' height='180px' backgroundColor='white'>
                <Text>이딴게 갬성?</Text>    
            </Grid>
            <Grid zIndex='3' position='absolute' right='130px' width='2px' height='320px'  backgroundColor='#FFFFFF42' />
            <Grid zIndex='3' position='absolute' right='145px' width='2px' height='320px'  backgroundColor='#FFFFFF42' />
        </Grid>
        
    )
}

export default BookCover;