import { createStore } from "redux";
import { CounterReducer } from "../Reducer/Reducer";
export const ReduxStore =  createStore( CounterReducer,{});