// Redux handleAction 관리하는 곳.
// Ducks구조에서 Reducer 파일안에 액션타입과 액션 생성자 함수를 함께 넣어서 관리하는데 이를 모듈(module)이라고 함.


import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";
import { commentApis } from "../../shared/api";
import { actionCreators as postActions } from "./post";



const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";


const getComment = createAction(GET_COMMENT, (post_id,comment_list)=>({post_id, comment_list}));
const addComment = createAction(ADD_COMMENT, (post_id,comment)=>({post_id,comment}));
const deleteComment = createAction(DELETE_COMMENT, (post_id,commentKey)=>({post_id,commentKey}));


const initialState = {
    list:{},
};
// 댓글 DB에서 가져오기
const getCommentDB = (post_id) => {
    return function (dispatch, {history}){
        console.log("댓글",post_id);

        commentApis.getComment(post_id)
        .then((res)=>{
            console.log("댓글 불러오기 성공",res);
            dispatch(getComment(post_id,res.data));
        }).catch((err)=>{
            console.log("댓글 불러오기 실패",err);
            history.replace("/main");
        })

    }
};
// 댓글 DB에 추가
const addCommentDB = (post_id,comment) => {
    return function (dispatch){
        console.log(post_id,comment);

        commentApis.addComment(post_id,comment)
        .then((res)=>{
            console.log("댓글 작성 성공",res);
            const commentKey = res.data;

            commentApis.getComment(post_id)
            .then((res)=>{
                const _comment = res.data.filter((item) => {
                    return item.commentKey === commentKey;
                });
                dispatch(addComment(post_id,_comment));

            }).catch((err)=>{
                console.log("댓글 불러오기 실패",err);
            });            
            window.alert("댓글 작성 성공")
        }).catch((err)=>{
            console.log("댓글 작성 실패",err);
        })
    }
};
// 댓글 DB에서 삭제하기
const deleteCommentDB = (post_id,commentKey) => {
    return function (dispatch){
        console.log(post_id, commentKey);

        commentApis.deleteComment(commentKey)
        .then((res)=>{
            console.log("댓글 삭제 성공",res);
            dispatch(deleteComment(post_id,commentKey));
            window.alert("댓글이 삭제되었습니다.")
        }).catch((err)=>{
            console.log("댓글 삭제 실패",err);
            window.alert("댓글 삭제에 실패했습니다.")
        })
    }
};


// handleActions 설정.(Get, Add, Delete)
export default handleActions ({
    [GET_COMMENT]: (state,action) => produce(state, (draft) => {
        const post_id = action.payload.post_id;
        const comment_list = action.payload.comment_list;
        draft.list[post_id] = comment_list;
    }),
    [ADD_COMMENT]: (state,action) => produce(state, (draft) => {
        const comment = action.payload.comment[0];
        draft.list[action.payload.post_id].push(comment);
    }),
    [DELETE_COMMENT]: (state,action) => produce(state, (draft) => {
        const post_id = action.payload.post_id;
        const commentKey = action.payload.commentKey;
        draft.list[post_id] = draft.list[post_id].filter(
          (el) => {
            if (el.commentKey === commentKey) {
              return false;
            }
            return true;
          }
        );
    }),    

},initialState)


const actionCreators = { //액션 생성자 내보내기
    getCommentDB,
    addCommentDB,
    deleteCommentDB,
};

export {actionCreators};