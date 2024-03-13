import React from 'react'
import { useDispatch } from 'react-redux'

const Counter = () => {

    const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter App</h1>

      <h2>Count Value : {0}</h2>
      <button onClick={()=> dispatch({type:"ADD",payload:1})}>Add</button>
      <button onClick={()=> dispatch({type:"SUB",payload:1})}>Sub</button>
    </div>
  )
}

export default Counter
