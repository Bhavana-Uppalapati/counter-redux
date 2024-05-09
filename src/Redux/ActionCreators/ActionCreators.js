import { ACTION_TYPES } from "../ActionTypes/ActionTypes1"

export const Increment = ()=>{
   return {
    type : ACTION_TYPES.increment,
    payload: 1
   }
};
export const Decrement = ()=>{
      return {
        type : ACTION_TYPES.decrement,
        payload : 1
      }
};