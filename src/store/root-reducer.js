import { combineReducers } from "redux";
import { homeReducer } from "../components/Home/reducer";
import { editTodoReducer } from "../components/EditTodo/reducer";

const reducers = combineReducers({ homeReducer, editTodoReducer });

export default reducers;
