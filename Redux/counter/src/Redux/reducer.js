import { ADD, SUB } from "./actionType";

export const reducer = (state,action) =>{

    switch(action.type){
        case ADD :{
            return{
                ...state,
                count: state.count + action.payload
            }
        }
        case SUB :{
            return{
                ...state,
                count: state.count - action.payload,
            }
        }
        default:{
            return state;
        }
    }
};