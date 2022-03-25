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
const LIKE_POST = "LIKE_POST";
const BOOKMARK_POST = "BOOKMARK_POST";

//action creatos
const setPost = createAction(SET_POST, (postList,postType,size,start) => ({ postList,postType,size,start }));
const setOnePost = createAction(SET_ONE, (postData) => ({ postData }));
const setUserPost = createAction(USER_POST, (postList) => ({ postList }));
const like = createAction(LIKE, (postData) => ({ postData }));
const mark = createAction(MARK, (postData,postKey) => ({ postData,postKey }));
const like_Para = createAction(LIKE_PARA, (postData) => ({ postData }));
const like_Post = createAction(LIKE_POST, (postList) => ({ postList }));
const setUserBookmark = createAction(BOOKMARK_POST, (postList) => ({ postList }));


//initialState
const initialState = {
    paging : { start : null, next : null, size : 6, page : null},
    allPostList : [],
    recentPostList : [],
    recommendPostList : [],
    bestPostList : [],
    themePostList : [],
    userPostList : {},
    bookmarkList : [],
    likeList : [],
    thisPost : {postKey:null},
};


//middleware actions
const getAll=(start=0,size=30) =>{
    return async function (dispatch,getState){
        instance({
            method : "get",
            url : `/posts/incomplete?page=${start}&size=${size}`,
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

const getRecent=(start=0,size=30) =>{
    return async function (dispatch,getState){
        instance({
            method : "get",
            url : `/posts/recent?page=${start}&size=${size}`,
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
const getRecommend=(start=0,size=30) =>{
    return async function (dispatch,getState){
        instance({
            method : "get",
            url : `/posts/recommend?page=${start}&size=${size}`,
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8"
            }
        }).then(res=>{
            dispatch(setPost(res.data,'recommend'));
        });
    }
}

const getBest=() =>{
    return async function (dispatch,getState){
        instance({
            method : "get",
            url : "/posts/viewMain",
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8"
            }
        }).then(res=>{
            dispatch(setPost(res.data,'best'));
        });
    }
}


const getTheme=(theme,start=0,size=30) =>{
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
            instance({
                method : "get",
                url : `/posts/incomplete?page=0&size=6`,
                data : {},
                headers : {
                    "Content-Type": "application/json;charset-UTF-8"
                }
            }).then(res=>{
                dispatch(setPost(res.data,'all'));
            });
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
const likePostList=(postKey) =>{
    return async function (dispatch,getState){
        const token = getCookie('WW_user');
        instance({
            method : "get",
            url : `/posts/viewMyLikesPost?page=0&size=30`,
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                'authorization' : token,
            }
        }).then(res=>{
            dispatch(like_Post(res.data));
            console.log(res.data);
        })
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

const userBookmark=() =>{
    return async function (dispatch,getState){
        const token = getCookie('WW_user');
        instance({
            method : "get",
            url : `/bookmark?page=0&size=30`,
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                'authorization' : token,
            }
        }).then(res=>{
            dispatch(setUserBookmark(res.data));
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
        console.log("카테고리",category);
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
            // draft.paging.page = action.payload.postType;
            // draft.paging.start += action.payload.start;
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
            if(draft.thisPost.postKey===action.payload.postData.postId){
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
            if(draft.thisPost.postKey===action.postData.postId){
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
        [BOOKMARK_POST]: (state, action) =>
        produce(state, (draft) => {
            draft.bookmarkList = [...action.payload.postList];
        }),
        [LIKE_POST]: (state, action) =>
        produce(state, (draft) => {
            draft.likeList = [...action.payload.postList];
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
    userBookmark,
    getBest,
    likePostList


};

export { actionCreators };