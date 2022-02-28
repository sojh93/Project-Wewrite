import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel as Car } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Grid } from "../elements";

import {  Input, Image, Text, Button } from "../elements" 


const Carousel = (props) => {
  console.log(props);
  return (
    <>
      
    <Car
      autoPlay
      infiniteLoop
      useKeyboardArrows
      swipeable
      emulateTouch
      showThumbs={false}
      width={props.width}
      height={props.height}>
      {props.imgURL.map((item,i)=>(
        <Grid key={i} width={props.width} height={props.height}>
          <img style={{width : props.width, height : props.height}} src={item}/>
        </Grid>
      ))}
    </Car>
    </>
  );
}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Img />, rootElement);

export default Carousel;