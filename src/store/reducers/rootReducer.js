
import { combineReducers } from "redux";
import todosReducer  from "./todoReducer";
import apiReducer from "./apiReducer"; 
export default combineReducers({
    todos: todosReducer,
    apiReducer: apiReducer
})
