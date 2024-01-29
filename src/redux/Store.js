import * as redux from "redux"
// import { createStore } from "redux";
import { combineReducers } from "redux";
import noteReducer from "./Reducer/NoteReducer";
import todoReducer from "./Reducer/TodoReducer";

// combining
const result = combineReducers({
    todoReducer,
   noteReducer 
})

export const store = redux.createStore(result);