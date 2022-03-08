import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//API
import instance from "../../shared/Request";
import { getCookie } from "../../shared/Cookie";

//action
const SET_POST = "SET_POST";

//action creatos
const setPost = createAction(SET_POST, (postList,postType) => ({ postList,postType }));

//initialState
const initialState = {
    postType : null,
    Post_list : [],
};


//middleware actions
const getAll=() =>{
    return async function (dispatch,getState){
        instance({
            method : "get",
            url : "/posts/incomplete",
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8"
            }
        }).then(res=>{
            console.log(res);
            // dispatch(setPost(res.data.))

            dispatch(setPost(res.data,'all'));
        });
    }
}

const getRecent=() =>{
    return async function (dispatch,getState){
        instance({
            method : "get",
            url : "/posts/recent",
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8"
            }
        }).then(res=>{
            console.log(res);
            // dispatch(setPost(res.data.))

            dispatch(setPost(res.data,'recent'));
        });
    }
}
const getRecommend=() =>{
    return async function (dispatch,getState){
        instance({
            method : "get",
            url : "/posts/recommend",
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8"
            }
        }).then(res=>{
            console.log(res);
            dispatch(setPost(res.data,'recommend'));
        });
    }
}

const addPost=(postData) =>{
    return async function (dispatch,getState){
        const token = getCookie('WW_user');
        

        const postData = new FormData();
        var file = new File(["foo"], "foo.txt", {
            type: "text/plain",
        });
        postData.append("title", "제목");
        postData.append("color", 'red');
        postData.append("limitCnt", 15);
        postData.append("category", '장르');
        postData.append("postImageUrl",file);

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

//reducer
export default handleActions(
    {
        [SET_POST]: (state, action) =>
        produce(state, (draft) => {
            draft.list = [...action.payload.postList];
        }),
        
    },
    initialState
);


//action creator export
const actionCreators = {
    getAll,
    getRecommend,
    addPost,


};

export { actionCreators };