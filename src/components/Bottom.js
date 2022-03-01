//import Lidrary
import React from 'react'

//import MUI
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

//import Icon
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import WidgetsIcon from '@mui/icons-material/Widgets';

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

export default function Bottom() {
    const [value, setValue] = React.useState(0);

    return (
        <Grid position="absolute" bottom="0px">
            <Grid is_flex align-items="center" justify-content="space-around" width="320px" >
                <Text><WidgetsOutlinedIcon/></Text>
                <Text><BookmarkBorderOutlinedIcon/></Text>
                <Text><AddCircleOutlineOutlinedIcon/></Text>
                <Text><HomeOutlinedIcon/></Text>
                <Text><PersonOutlineOutlinedIcon/></Text>
            </Grid>
        </Grid>
    );
} 

