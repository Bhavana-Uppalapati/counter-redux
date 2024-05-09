// import { ACTION_TYPES } from "../ActionCreators/ActionCreators";
import { ACTION_TYPES } from "../ActionTypes/ActionTypes1";

const initialState = {
    count : 0
}

export const CounterReducer = (state = initialState , action)=>{
    console.log(action)
    console.log(state)
    // switch(action.type){
    //     case ACTION_TYPES.increment : return {...state,count : state.count + action.payload};
        
    // }
    if(action.type == 'increment'){
          state.count = state.count + action.payload;
    }
    else{
        state.count = state.count - action.payload
    }
};