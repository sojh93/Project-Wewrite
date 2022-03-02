//import Library
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";


//import Modules
import Map from "./modules/map";
import User from './modules/user';


const middlewares = [thunk];
const rootReducer = combineReducers({
    map : Map,
    user : User,
});
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer,enhancer);

export default store;

