import React from "react";
import { Grid, Image,Text, Chip } from "../elements";



const BookCover = (props) => {

    return(
        
        <Grid position='relative' onClick={props.onClick} width='100%' height='100%' is_flex flexDirection='column' alignItems='center'>
            <Image borderRadius='2px 6px 6px 0' width="100%" height='100%' src={props.src}/>
            <Grid backgroundColor='#FFFFFF00' position='absolute' top='250px' left='10px' is_flex flexDirection='column'>
                <Text color='#FFFFFF' fontSize='20px' fontWeight='700' >{props.title}</Text>
                <Text color='#FFFFFF' fontSize='14px' fontWeight='400' >{props.para}</Text>
                <Grid backgroundColor='#FFFFFF00' margin='2px' marginTop='5px' is_flex alignItems='flex-start'>
                {props.category?props.category.map((v,i)=>{
                    return (
                        <Chip margin='5px 5px 5px 0' key={i}>{v.category}</Chip>
                    )
                }):""}
            </Grid>
            </Grid>
        </Grid>
        
    )
}

export default BookCover;