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

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

export default function Bottom() {
    const [value, setValue] = React.useState(0);

    return (
        <Grid position="absolute" bottom="0px">
        <BottomNavigation
            showLabels
            value={value}
            sx={{ width:"320px", height:"50px"}}
            onChange={(event, newValue) => {
            setValue(newValue);
            
            }}
        >
            <BottomNavigationAction label="Main" icon={<WidgetsOutlinedIcon />} />
            <BottomNavigationAction label="Bookmark" icon={<BookmarkBorderOutlinedIcon />} />
            <BottomNavigationAction label="TimeLine" icon={<PersonOutlineOutlinedIcon />} />
            <BottomNavigationAction label="Mypage" icon={<HomeOutlinedIcon />} />
        </BottomNavigation>
        </Grid>
    );
} 

