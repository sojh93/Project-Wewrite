import React from "react";
import { Grid, Image,Text, Chip } from "../elements";



const BookCover = (props) => {


    const control = (s,limit) =>{
        if(s.length > 50){
            return (s.slice(0,limit)+'...')
        }
        else{
            return s
        }
    }

    return(
        <>
        
        <Grid position='relative' onClick={props.onClick} width='100%' height='100%' is_flex flexDirection='column' alignItems='center'>
            <Image borderRadius='2px 6px 6px 0' width="100%" height='100%' src={props.src}/>
            <Grid backgroundColor='#000000aa' background = 'repeating-linear-gradient(#0000, #000)'  width='100%' height='280px' position='absolute' top='220px' left='0px' is_flex flexDirection='column'>
                <Grid backgroundColor='#0000' margin='10px' marginTop='40px'>
                    <Text color='#FFFFFF' fontSize='20px' fontWeight='700' >{props.title}</Text>
                    <Text color='#FFFFFF' fontSize='14px' fontWeight='400' >{control(props.para,50)}</Text>
                    <Grid backgroundColor='#FFFFFF00' margin='2px' marginTop='5px' is_flex alignItems='flex-start'>
                    {props.category?props.category.map((v,i)=>{
                        return (
                            <Chip margin='5px 5px 5px 0' key={i}>{v.category}</Chip>
                        )
                    }):""}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default BookCover;