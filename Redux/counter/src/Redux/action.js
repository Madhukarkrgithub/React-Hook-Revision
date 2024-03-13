import { ADD, SUB } from "./actionType"

export const AddAction = (payload) =>{
    return {type: ADD, payload: payload};
}

export const SubAction = (payload) =>{
    return {type: SUB, payload: payload};
}