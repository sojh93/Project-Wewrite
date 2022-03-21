// Redux handleAction 관리하는 곳.
// Ducks구조에서 Reducer 파일안에 액션타입과 액션 생성자 함수를 함께 넣어서 관리하는데 이를 모듈(module)이라고 함.


import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//API
import instance from "../../shared/Request";

// Cookie
import { getCookie } from "../../shared/Cookie";



//action
const SET_COMMENT = "SET_COMMENT";

//action creators
const setComment = createAction(SET_COMMENT, (postId) => ({ postId }));

//initialState
const initialState = {
  
};

// 댓글 DB에 추가
// const addCommentDB = (postId,comment) => {
//     return function (dispatch){
//         console.log(postId,comment);

//         commentApis.addComment(postId,comment)
//         .then((res)=>{
//             console.log("댓글 작성 성공",res);
//             const commentId = res.data;

//             commentApis.getComment(postId)
//             .then((res)=>{
//                 const _comment = res.data.filter((item) => {
//                     return item.commentId === commentId;
//                 });
//                 dispatch(addComment(postId,_comment));

//             }).catch((err)=>{
//                 console.log("댓글 불러오기 실패",err);
//             });            
//             window.alert("댓글 작성 성공")
//         }).catch((err)=>{
//             console.log("댓글 작성 실패",err);
//         })
//     }
// };

const addComment = (postId) => {
    return async function (dispatch){
        const token = getCookie('WW_user');

        instance({
            method : "post",
            url : "/comment",
            data : postId,
            headers : {
                "Content-Type": "multipart/form-data",
                'authorization' : token,
            }
        }).then(res=>{
            dispatch(setComment(res.data));
        });
        
    };
    
};

// handleActions 설정.(Get, Add, Delete)
export default handleActions ({
   
    [SET_COMMENT]: (state,action) => produce(state, (draft) => {
            draft.thisPost = {...action.payload.postId};
        }),
        
    },
    initialState
)
const actionCreators = { //액션 생성자 내보내기
    addComment,
};

export {actionCreators};