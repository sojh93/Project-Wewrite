import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//API
import instance from "../../shared/Request";
import { getCookie } from "../../shared/Cookie";

//action
const SET_POST = "SET_POST";
const SET_ONE = "SET_ONE";
const LIKE = "LIKE";
const MARK ="MARK";
const USER_POST = "USER_POST";
const LIKE_PARA = "LIKE_PARA";

//action creators
const setPost = createAction(SET_POST, (postList,postType) => ({ postList,postType }));
const setOnePost = createAction(SET_ONE, (postData) => ({ postData }));
const setUserPost = createAction(USER_POST, (postList) => ({ postList }));
const like = createAction(LIKE, (postData) => ({ postData }));
const mark = createAction(MARK, (postData,postKey) => ({ postData,postKey }));
const like_Para = createAction(LIKE_PARA, (postData) => ({ postData }));

//initialState
const initialState = {
    allPostList : [],
    recentPostList : [],
    recommendPostList : [],
    themePostList : [],
    userPostList : {},
    thisPost : {postKey:null},
};


//middleware actions
const getAll=() =>{
    return async function (dispatch,getState){
        instance({
            method : "get",
            url : "/posts/incomplete?page=0&size=30",
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8"
            }
        }).then(res=>{
            // dispatch(setPost(res.data.))

            dispatch(setPost(res.data,'all'));
        });
    }
}

const getRecent=() =>{
    return async function (dispatch,getState){
        instance({
            method : "get",
            url : "/posts/recent?page=0&size=30",
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8"
            }
        }).then(res=>{
            // dispatch(setPost(res.data.))

            dispatch(setPost(res.data,'recent'));
        });
    }
}
const getRecommend=() =>{
    return async function (dispatch,getState){
        instance({
            method : "get",
            url : "/posts/recommend?page=0&size=30",
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8"
            }
        }).then(res=>{
            dispatch(setPost(res.data,'recommend'));
        });
    }
}

const getTheme=(theme) =>{
    return async function (dispatch,getState){
        console.log(theme);
        instance({
            method : "post",
            url : "/category/posts?page=0&size=30",
            data : {
                category : theme
                },
            headers : {
                "Content-Type": "application/json;charset-UTF-8"
            }
        }).then(res=>{
            console.log(res)
            dispatch(setPost(res.data,'theme'));
        });
    }
}

const addPost=(postData) =>{
    return async function (dispatch,getState){
        const token = getCookie('WW_user');

        instance({
            method : "post",
            url : "/posts",
            data : postData,
            headers : {
                "Content-Type": "multipart/form-data",
                'authorization' : token,
            }
        }).then(res=>{
            console.log(res);
        });
    }
}


const getOne=(postKey) =>{
    return async function (dispatch,getState){
        const token = getCookie('WW_user');

        instance({
            method : "get",
            url : `/posts/${postKey}`,
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                'authorization' : token,
            }
        }).then(res=>{
            dispatch(setOnePost(res.data));
        });
    }
}

const likePost=(postKey) =>{
    return async function (dispatch,getState){
        const token = getCookie('WW_user');

        instance({
            method : "post",
            url : `/postLikes/${postKey}`,
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                'authorization' : token,
            }
        }).then(res=>{
            console.log(res);
            dispatch(like(res.data));
        });
    }
}

const markPost=(postKey) =>{
    return async function (dispatch,getState){
        const token = getCookie('WW_user');

        instance({
            method : "post",
            url : `/bookmark/${postKey}`,
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                'authorization' : token,
            }
        }).then(res=>{
            console.log(res.data);
            dispatch(mark(res.data,postKey))
        });
    }
}

const userPost=(pageUserKey) =>{
    return async function (dispatch,getState){
        instance({
            method : "get",
            url : `/posts/userPage/${pageUserKey}?page=0&size=30`,
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8"
            }
        }).then(res=>{
            dispatch(setUserPost(res.data));
            console.log(res.data);
        })
    }
}

const likePara=(paragraphKey) =>{
    return async function (dispatch,getState){
        const token = getCookie('WW_user');
        console.log(paragraphKey)
        instance({
            method : "post",
            url : `/paragraph/likes/${paragraphKey}`,
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                'authorization' : token,
            }
        }).then(res=>{
            console.log(res.data);
            dispatch(like_Para(res.data));
        })
    }
}

const completePara=(postKey,category) =>{
    return async function (dispatch,getState){
        const token = getCookie('WW_user');
        instance({
            method : "patch",
            url : `/posts/complete/${postKey}`,
            data : {category},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                'authorization' : token,
            }
        }).then(res=>{
            console.log(res.data);
        })
    }
}

const addComment=(comment,post_id) =>{
    return async function (dispatch,getState){
        const token = getCookie('WW_user');
        instance({
            method : "post",
            url : `/comment/${post_id}`,
            data : {comment},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                'authorization' : token,
            }
        }).then(res=>{
            console.log(res.data);
        })
    }
}
//reducer
export default handleActions(
    {
        [SET_POST]: (state, action) =>
        produce(state, (draft) => {
            draft[`${action.payload.postType}PostList`] = [...action.payload.postList];
        }),
        [SET_ONE]: (state, action) =>
        produce(state, (draft) => {
            draft.thisPost = {...action.payload.postData};
        }),
        [LIKE]: (state, action) =>
        produce(state, (draft) => {
            draft.allPostList.map((v,i)=>{

                if(action.payload.postData.postId === v.postKey){
                    v.postLikeClickersResponseDtoList = action.payload.postData.postLikeClickersResponseDtos;
                    v.postLikesCnt = action.payload.postData.totalLike
                }else{return v}
            });
            draft.recentPostList.map((v,i)=>{
                if(action.payload.postData.postId === v.postKey){
                    v.postLikeClickersResponseDtoList = action.payload.postData.postLikeClickersResponseDtos;
                    v.postLikesCnt = action.payload.postData.totalLike
                }else{return v}
            });
            draft.recommendPostList.map((v,i)=>{
                if(action.payload.postData.postId === v.postKey){
                    v.postLikeClickersResponseDtoList = action.payload.postData.postLikeClickersResponseDtos;
                    v.postLikesCnt = action.payload.postData.totalLike
                }else{return v}
            });
            if(draft.userPostList.postResponseDtoList)
            {draft.userPostList.postResponseDtoList.map((v,i)=>{
                if(action.payload.postData.postId === v.postKey){
                    v.postLikeClickersResponseDtoList = action.payload.postData.postLikeClickersResponseDtos;
                    v.postLikesCnt = action.payload.postData.totalLike
                }else{return v}
            });}
            if(draft.thisPost.postKey===action.payload.postKey){
                draft.thisPost.postLikeClickersResponseDtoList = action.payload.postData.postLikeClickersResponseDtos;
                draft.thisPost.postLikesCnt = action.payload.postData.totalLike
            }
        }),
        [MARK]: (state, action) =>
        produce(state, (draft) => {
            draft.allPostList.map((v,i)=>{
                if(action.payload.postKey === v.postKey){
                    v.bookmarkClickUserKeyResDtoList = action.payload.postData.bookmarkClickUserKeyResDtos;
                    v.bookmarkLikesCnt = action.payload.postData.bookmarkCnt
                }else{return v}
            });
            draft.recentPostList.map((v,i)=>{
                if(action.payload.postKey === v.postKey){
                    v.bookmarkClickUserKeyResDtoList = [...action.payload.postData.bookmarkClickUserKeyResDtos];
                    v.bookmarkLikesCnt = action.payload.postData.bookmarkCnt
                }else{return v}
            });
            draft.recommendPostList.map((v,i)=>{
                if(action.payload.postKey === v.postKey){
                    v.bookmarkClickUserKeyResDtoList = action.payload.postData.bookmarkClickUserKeyResDtos;
                    v.bookmarkLikesCnt = action.payload.postData.bookmarkCnt
                }else{return v}
            });
            if(draft.userPostList.postResponseDtoList){
            draft.userPostList.postResponseDtoList.map((v,i)=>{
                if(action.payload.postKey === v.postKey){
                    v.bookmarkClickUserKeyResDtoList = action.payload.postData.bookmarkClickUserKeyResDtos;
                    v.bookmarkLikesCnt = action.payload.postData.bookmarkCnt
                }else{return v}
            });}
            if(draft.thisPost.postKey===action.payload.postKey){
                console.log(state.thisPost);
                draft.thisPost.bookmarkClickUserKeyResDtoList = action.payload.postData.bookmarkClickUserKeyResDtos;
                draft.thisPost.bookmarkLikesCnt = action.payload.postData.bookmarkCnt
            }
        }),
        [USER_POST]: (state, action) =>
        produce(state, (draft) => {
            draft.userPostList = {...action.payload.postList};
        }),
        [LIKE_PARA]: (state, action) =>
        produce(state, (draft) => {
            draft.thisPost.paragraphResDtoList.map((v,i)=>{
                if(v.paragraphKey === action.payload.postData.paragraphKey){
                    v.paragraphLikesClickUserKeyResDtoList = [...action.payload.postData.paragraphLikesClickUserKeyResDtoList];
                    v.paragraphLikesCnt = action.payload.postData.paragraphTotalLikes;
                }
            })
        }),
        
    },
    initialState
);


//action creator export
const actionCreators = {
    getAll,
    getRecent,
    getRecommend,
    addPost,
    getOne,
    likePost,
    userPost,
    markPost,
    likePara,
    completePara,
    getTheme,
    addComment,


};

export { actionCreators };