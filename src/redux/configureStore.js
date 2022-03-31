//import Library
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";


//import Modules
import User from './modules/user';
import Post from './modules/post';
import Static from "./modules/static";


const middlewares = [thunk];
const rootReducer = combineReducers({
    user : User,
    post : Post,
    static : Static,
});
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer,enhancer);

export default store;

