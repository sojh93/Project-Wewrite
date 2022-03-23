import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";


// import Elements
import { Grid, Text} from "../elements";

//import Components
import Header from "../components/Header";
import Bottom from "../components/Bottom";
import NoticeAlarm from "../components/NoticeAlarm";
import NoticeBanner from "../components/NoticeBanner";

//import Actions
import { actionCreators as userActions } from '../redux/modules/user';

const Notice = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state => state.user);
    console.log(_user);
    const [index,setIndex] = React.useState(1);

    React.useEffect(()=>{
        dispatch(userActions.notice());
    },[])
    return(
        <>
    <Grid wrap>
        <Header isMain/>
        <Grid margin="70px 0 0 0" borderBottom='1px solid black' is_flex width='390px' height="40px">
                    <Grid height='35px' width='195px' textAlign='center' onClick={()=>setIndex(1)}><Text color="gray">알림</Text></Grid>
                    <Grid height='35px' width='195px' textAlign='center' onClick={()=>setIndex(2)}><Text color="gray">공지&#183;이벤트</Text></Grid>
        </Grid> 
        <Grid marginTop='-3px' borderRadius='1px' width="50%" height='1px' borderTop='3px solid black' transform={'translate(' + (- 1 + index)*100 + '%)'} transition='transform 0.5s ease 0.1s'/>

        <Grid is_flex width='200%' justifyContent='space-around' transform={'translate(' + (1 - index)*50 + '%)'} transition='transform 0.5s ease 0.1s'>
            <Grid is_flex flexDirection='column' width='45%'>
                {_user.noticeList?_user.noticeList.map((v,i)=>{
                    return (<NoticeAlarm key={i} title={v.postTitle} postKey={v.postKey} src={v.postUrl} msg={v.message}/>)
                }):''}
            </Grid>
            <Grid is_flex flexDirection='column' width='45%'>
                <NoticeBanner/>
                <NoticeBanner/>
            </Grid>
        </Grid>
        
        
    </Grid>
    <Bottom/>
    </>
    );
};

export default Notice;