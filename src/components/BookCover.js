import React from "react";
import { Grid, Image,Text, Chip } from "../elements";



const BookCover = (props) => {

    return(
        
        <Grid position='relative' onClick={props.onClick} width='100%' height='100%' is_flex flexDirection='column' alignItems='center'>
            <Image zIndex='1' borderRadius='2px 6px 6px 0' width="100%" height='100%' src={props.src}/>

        </Grid>
        
    )
}

export default BookCover;