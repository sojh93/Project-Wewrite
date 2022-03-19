//import Library
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";


//import Modules
import User from './modules/user';
import Post from './modules/post';
import Comment from './modules/comment';


const middlewares = [thunk];
const rootReducer = combineReducers({
    user : User,
    post : Post,
    comment : Comment,
});
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer,enhancer);

export default store;

