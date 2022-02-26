//import Library
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";


//import Modules
import Map from "./modules/map";


const middlewares = [thunk];
const rootReducer = combineReducers({
    map : Map,
});
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer,enhancer);

export default store;

