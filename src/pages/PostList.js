//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
import SwitchSelector from "react-switch-selector";

//import Actions
import { actionCreators as postActions } from "../redux/modules/post";


//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon


// impot Component
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import Post from '../components/Post';




function PostList() {
    // useDispatch = 생성한 action을 useDispatch를 통해 발생시킬 수 있다.
    const dispatch = useDispatch();
    // useNavigate = 다른 페이지로 이동해야 할 경우와 뒤로가기에 사용하는 Hook이다.
    const navigate = useNavigate();
    // useParams = URL 인자들의 key/value의 객체를 반환한다.
    const listType = useParams().listType;
    console.log(listType);
    // useSelector = connect 함수를 사용하지 않고도 리덕스의 상태를 조회할 수 있다. 사용법 => const 결과 = useSelector(상태 선택 함수);
    const _user = useSelector(state => state.user);
    const _post = useSelector(state => state.post);
    console.log(_post);
    // useState = useState 함수를 호출하면 배열을 반환한다. 첫 번재 원소(kind)는 현재 상태 값 변수, 두 번째 원소(setKind)는 상태 값을 갱신해주는 Setter 함수다. useState 괄호 안의 값은 상태의 초기 값이다.
    const [kind, setKind] = React.useState('recent');
    // scrollTo = 스크롤을 움직여주는 window의 내장 함수
    window.scrollTo(0,0)
    // useEffect = 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook
    React.useEffect(() => {
        dispatch(postActions.getRecent());
        dispatch(postActions.getRecommend());
        dispatch(postActions.getAll());
    }, []);
    // useEffect(function, deps) = function: 수행하고자 하는 작업, deps: 배열 형태이며, 배열 안에는 검사하고자 하는 특정 값 or 빈 배열
    React.useEffect(() => {window.scrollTo(0,0)}, [kind,listType]);


    return (
        <Grid wrap>
            <Header/>
            <Grid is_flex marginTop='70px' width="100%" flexDirection="column" alignItems="center">
            <Grid width='100%' is_flex justifyContent='space-between'>1
                {/* #{}{}의 안에 있는 첫번째 삼항 연산자는 listType이 'all'의 모든 속성과 같다면 '참여 가능 작품'을, 거짓이라면 ''을 나타내라, 두번째 삼항 연산자는 listType이 'recent'의 모든 속성과 같다면, 완결 작품을, 거짓이라면 ''을 나타내라는 의미 */}
                <Grid width='100%'><Text margin='0 0 -15px 20px'  fontSize='24px' fontWeight='700'>#{listType === 'all' ? '참여 가능 작품' : ''}{listType === 'recent' ? '완결 작품':''}</Text></Grid>
                {/* listType이 'recent'의 모든 속성과 같다면, <Grid>(최신순 또는 좋아요순)의 내용을, 거짓이라면 ''을 나타내라.라는 의미. */}
                {listType === 'recent'?
                <Grid is_flex margin='10px 10px 0 10px'>
                    {/* onClick 함수를 통해 '최신순'을 클릭하면 setKind('recent')를 실행 */}
                    <Text onClick={()=>setKind('recent')} fontSize='12px' color={kind==='recent'?"#000000":"#E0E0E0"}>최신순</Text>
                    {/* onClick 함수릁 통해 '좋아요순'을 클릭하면 setKind('recommend')를 실행 */}
                    <Text onClick={()=>setKind('recommend')} fontSize='12px' color={kind==='recommend'?"#000000":"#E0E0E0"}>좋아요순</Text>
                </Grid>:''}
                
            </Grid>
            <Grid is_flex flexDirection='column' alignItems='center' width="90%" marginTop='32px' gap='24px'>
                    {/* //Recent// */}
                    {/* map 메서드 = 반복문을 돌며 배열 안의 요소들을 1대1로 짝지어 주는 것. */}
                    {_post.recentPostList && listType === 'recent'?kind==='recent'?_post.recentPostList.map((v,i)=>{
                        const likeThis= v.postLikeClickersResponseDtoList
                        // reduce 메서드 = reduce(콜백함수, 초기값)와 같은 형태를 가지고 있으며, 배열의 각 요소가 주어진 콜백함수를 거치게 된다. 이 콜백함수를 리듀서(reducer) 라고 한다.
                        .reduce((X,V)=>
                            {   
                                return Object.values(V)[0]===_user.user.userKey?true:X}
                        ,false)
                        const markThis= v.bookmarkClickUserKeyResDtoList
                        .reduce((X,V)=>
                            {   
                                return Object.values(V)[0]===_user.user.userKey?true:X}
                        ,false)
                        return (
                            <Post bookmarkLikesCnt={v.bookmarkLikesCnt} key={i} category={v.categoryList} postKey={v.postKey} isMark={markThis} isLike={likeThis} first={v.paragraphResList[0].paragraph} like={v.postLikesCnt} title={v.title} url={v.postImageUrl}/>
                        )
                    }):
                    _post.recommendPostList.map((v,i)=>{
                        const likeThis= v.postLikeClickersResponseDtoList
                        .reduce((X,V)=>
                            {   
                                return Object.values(V)[0]===_user.user.userKey?true:X}
                        ,false)
                        const markThis= v.bookmarkClickUserKeyResDtoList
                        .reduce((X,V)=>
                            {   
                                return Object.values(V)[0]===_user.user.userKey?true:X}
                        ,false)
                        return (
                            <Post bookmarkLikesCnt={v.bookmarkLikesCnt} key={i} category={v.categoryList} postKey={v.postKey} isMark={markThis} isLike={likeThis} first={v.paragraphResList[0].paragraph} like={v.postLikesCnt} title={v.title} url={v.postImageUrl}/>
                        )
                    }):''}
                    {/* //All// */}
                    {_post.allPostList && listType === 'all'?_post.allPostList.map((v,i)=>{
                        const likeThis= v.postLikeClickersResponseDtoList
                        .reduce((X,V)=>
                            {   
                                return Object.values(V)[0]===_user.user.userKey?true:X}
                        ,false)
                        const markThis= v.bookmarkClickUserKeyResDtoList
                        .reduce((X,V)=>
                            {   
                                return Object.values(V)[0]===_user.user.userKey?true:X}
                        ,false)
                        return (
                            <Post bookmarkLikesCnt={v.bookmarkLikesCnt} key={i} category={v.categoryList} postKey={v.postKey} isMark={markThis} isLike={likeThis} first={v.paragraphResList[0].paragraph} like={v.postLikesCnt} title={v.title} url={v.postImageUrl}/>
                        )
                    }):''}
                </Grid>

            </Grid>
            <Grid height='100px' width='2px'/>
            <Bottom  thisPage="postList"/>
        </Grid>

    );
}


export default PostList;