import React, { useReducer } from 'react'


const Count = () => {

    const initialState = {
        count : 0
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return {
                    ...state,
                    count: state.count + action.payload,
                };
            case "DECREMENT":
                return {
                    ...state,
                    count: state.count - action.payload,
                };
            default:
                throw Error(action.type);
        }
    }
    

    const[state, dispatch] = useReducer(reducer,initialState);
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count : {state.count}</h2>
      <button onClick={() =>{dispatch({type:"INCREMENT",payload:1})}}>Add</button>
      <button onClick={() =>{dispatch({type:"DECREMENT",payload:1})}}>Sub</button>
    </div>
  )
}

export default Count
