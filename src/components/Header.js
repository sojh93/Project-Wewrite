//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination,EffectCoverflow } from "swiper";
//import Actions


//import elements
import {  Grid, Input, Image, Text } from "../elements" 

//import Mui
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Modal from '@mui/material/Modal';

//import Icon
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

// impot Component


//import Actions




const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '600px',
        borderRadius:'5px',
        boxShadow: 24,
        p: 4,
    };

    React.useEffect(async() => {

    },[]);
    

    if(props.isMain)
    return(
            <Grid >
                <Grid zIndex='9' boxShadow='rgb(217 217 217) 0px 2px 5px' position="absolute" top="0px"  backgroundColor="#F9FAFB"  is_flex alignItems="center" justifyContent='space-between' boxSizing="border-box" padding="0" width ="100vw" minWidth ="360px" maxWidth ="390px" height='60px' margin='0'  >
                    <Grid backgroundColor="#F9FAFB" is_flex border="0">
                        <Tooltip title="장르 고르기"><IconButton onClick={handleOpen} sx={{width:"50px", height : "50px"}}><DensityMediumIcon  sx={{ width:"15px", height : "15px", margin :"10px"}}/></IconButton></Tooltip>    
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Grid is_flex justifyContent='center' alignItems='center' {...style}>
                                <Swiper
                                    direction={"vertical"}
                                    style={{height : '500px', width : '100px',margin : '10px'}}
                                    slidesPerView={6}
                                    spaceBetween={0}
                                    freeMode={true}
                                    loop={true}
                                    grabCursor={true}
                                    effect={"coverflow"}
                                    coverflowEffect={{
                                        rotate: 10,
                                        stretch: 5,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: false,
                                    }}
                                    pagination={{
                                    clickable: true,
                                    }}
                                    modules={[FreeMode, EffectCoverflow, Pagination]}
                                    className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <Text onClick={(e)=>console.log(e.target.innerHTML)}>스릴러</Text>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Text onClick={(e)=>console.log(e.target.innerHTML)}>공포</Text>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Text onClick={(e)=>console.log(e.target.innerHTML)}>로맨스</Text>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Text onClick={(e)=>console.log(e.target.innerHTML)}>판타지</Text>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Text onClick={(e)=>console.log(e.target.innerHTML)}>액션</Text>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Text onClick={(e)=>console.log(e.target.innerHTML)}>코미디</Text>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Text onClick={(e)=>console.log(e.target.innerHTML)}>무협</Text>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Text onClick={(e)=>console.log(e.target.innerHTML)}>SF</Text>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Text onClick={(e)=>console.log(e.target.innerHTML)}>미스테리</Text>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Text onClick={(e)=>console.log(e.target.innerHTML)}>스포츠</Text>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Text onClick={(e)=>console.log(e.target.innerHTML)}>하이틴</Text>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Text onClick={(e)=>console.log(e.target.innerHTML)}>어드벤쳐</Text>
                                        </SwiperSlide>
                                </Swiper>
                            </Grid>
                        </Modal>
                    </Grid>
                    <Grid backgroundColor="#F9FAFB" is_flex border="0">
                        <Tooltip title="알람"><IconButton sx={{width:"50px", height : "50px"}}><NotificationsNoneOutlinedIcon  sx={{ margin :"10px"}}/></IconButton></Tooltip>    
                    </Grid>
                </Grid>
            </Grid>

    );
    
    if(props.isDetail){
        return(
            <Grid>
                <Grid zIndex='9' boxShadow='rgb(217 217 217) 0px 2px 5px' position="absolute" top="0px"  backgroundColor="#F9FAFB"  is_flex alignItems="center" justifyContent='space-between' boxSizing="border-box" padding="0" width ="100vw" minWidth ="360px" maxWidth ="390px" height='60px' margin='0'  >
                    <Grid is_flex backgroundColor="#F9FAFB" border="0">
                        <Tooltip title="뒤로가기"><IconButton  onClick={()=>{navigate(-1)}} sx={{width:"50px", height : "50px"}}><KeyboardArrowLeftIcon sx={{ width:"15px", height : "15px", margin :"10px"}}/></IconButton></Tooltip>    
                    </Grid>
    
                    <Grid backgroundColor="#F9FAFB">
                        <Text>{props.postTitle}</Text>
                    </Grid>
    
                    <Grid backgroundColor="#F9FAFB" width='50px' height='50px' is_flex border="0">
                    </Grid>
                </Grid>
            </Grid>
        );
    }
    if(props.isChangePassword){
        return(
            <Grid>
                <Grid zIndex='9' boxShadow='rgb(217 217 217) 0px 2px 5px' position="absolute" top="0px"  backgroundColor="#F9FAFB"  is_flex alignItems="center" justifyContent='space-between' boxSizing="border-box" padding="0" width ="100vw" minWidth ="360px" maxWidth ="390px" height='60px' margin='0'  >
                    <Grid is_flex border="0" backgroundColor="#F9FAFB">
                        <Tooltip title="뒤로가기"><IconButton  onClick={()=>{navigate(-1)}} sx={{width:"50px", height : "50px", margin:"0"}}><KeyboardArrowLeftIcon sx={{ width:"15px", height : "15px", margin :"0 10px 0px 10px"}}/></IconButton></Tooltip>    
                    </Grid>
    
                    <Grid backgroundColor="#F9FAFB">
                        <Text margin="0" backgroundColor="#F9FAFB">{props.ChangePassword}</Text>
                    </Grid>
    
                    <Grid backgroundColor="#F9FAFB" is_flex border="0">
                        <Tooltip title="저장"><Text color="#6454FF" margin="0 20px 0 0" padding="0">저장</Text></Tooltip>    
                    </Grid>
                </Grid>
            </Grid>
        );
    }
    
    if(props.isUserPage){
        return(
            <Grid>
                <Grid zIndex='9' boxShadow='rgb(217 217 217) 0px 2px 5px' position="absolute" top="0px"  backgroundColor="#F9FAFB"  is_flex alignItems="center" justifyContent='space-between' boxSizing="border-box" padding="0" width ="100vw" minWidth ="360px" maxWidth ="390px" height='60px' margin='0'  >
                    <Grid backgroundColor="#F9FAFB" is_flex border="0">
                        <Tooltip title="뒤로가기"><IconButton onClick={()=>{navigate(-1)}} sx={{width:"50px", height : "50px"}}><KeyboardArrowLeftIcon sx={{ width:"15px", height : "15px", margin :"10px"}}/></IconButton></Tooltip>    
                    </Grid>
    
                    <Grid backgroundColor="#F9FAFB">
                        <Text>{props.UserName}</Text>
                    </Grid>
    
                    <Grid backgroundColor="#F9FAFB" is_flex border="0" >
                        <Tooltip title="설정"><IconButton  onClick={()=>{navigate('/modifyprofile')}} sx={{width:"50px", height : "50px"}}><SettingsOutlinedIcon  sx={{ margin :"10px"}}/></IconButton></Tooltip>    
                    </Grid>
                </Grid>
            </Grid>
        );
    }
    if(props.isEditUser){
        return(
            <Grid>
                <Grid zIndex='9' boxShadow='rgb(217 217 217) 0px 2px 5px' position="absolute" top="0px"  backgroundColor="#F9FAFB"  is_flex alignItems="center" justifyContent='space-between' boxSizing="border-box" padding="0" width ="100vw" minWidth ="360px" maxWidth ="390px" height='60px' margin='0'  >
                    <Grid is_flex backgroundColor="#F9FAFB" border="0">
                        <Tooltip title="뒤로가기"><IconButton onClick={()=>{navigate(-1)}} sx={{width:"50px", height : "50px"}}><KeyboardArrowLeftIcon sx={{ width:"15px", height : "15px", margin :"10px"}}/></IconButton></Tooltip>    
                    </Grid>
    
                    <Grid backgroundColor="#F9FAFB">
                        <Text color="#7E7E7E">프로필 수정</Text>
                    </Grid>
    
                    <Grid backgroundColor="#F9FAFB" is_flex border="0" >
                    <Tooltip title="저장"><Text color="#6454FF" margin="0 20px 0 0" padding="0">완료</Text></Tooltip>    
                    </Grid>
                </Grid>
            </Grid>
        );
    }
    if(props.isWrite){
        return(
            <Grid>
                <Grid zIndex='9' boxShadow='rgb(217 217 217) 0px 2px 5px' position="absolute" top="0px"  backgroundColor="#F9FAFB"  is_flex alignItems="center" justifyContent='space-between' boxSizing="border-box" padding="0" width ="100vw" minWidth ="360px" maxWidth ="390px" height='60px' margin='0'  >
                    <Grid is_flex backgroundColor="#F9FAFB" border="0">
                        <Tooltip title="뒤로가기"><IconButton  onClick={()=>{navigate(-1)}} sx={{width:"50px", height : "50px"}}><KeyboardArrowLeftIcon sx={{ width:"15px", height : "15px", margin :"10px"}}/></IconButton></Tooltip>    
                    </Grid>
    
                    <Grid backgroundColor="#F9FAFB">
                        <Text>게시글 작성하기</Text>
                    </Grid>
    
                    <Grid width='50px' height='50px' backgroundColor="#F9FAFB" is_flex border="0">
                    </Grid>
                </Grid>
            </Grid>
        );
    }
    
    return(
        <Grid>
            <Grid zIndex='9' boxShadow='rgb(217 217 217) 0px 2px 5px' position="absolute" top="0px"  backgroundColor="#F9FAFB"  is_flex alignItems="center" justifyContent='space-between' boxSizing="border-box" padding="0" width ="100vw" minWidth ="360px" maxWidth ="390px" height='60px' margin='0'  >
                <Grid is_flex backgroundColor="#F9FAFB" border="0">
                    <Tooltip title="뒤로가기"><IconButton  onClick={()=>{navigate(-1)}} sx={{width:"50px", height : "50px"}}><KeyboardArrowLeftIcon sx={{ width:"15px", height : "15px", margin :"10px"}}/></IconButton></Tooltip>    
                </Grid>

                <Grid>
                </Grid>

                <Grid width='50px' height='50px' backgroundColor="#F9FAFB" is_flex border="0">
                </Grid>
            </Grid>
        </Grid>
    );
}


export default Header;