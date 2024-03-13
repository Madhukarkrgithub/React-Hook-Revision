import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddAction, SubAction } from '../Redux/action';


const Counter = () => {

    const dispatch = useDispatch();

    const counter = useSelector((store) => store.count);
    // console.log(counter);

  return (
    <div>
      <h1>Counter App</h1>

      <h2>Count Value : {counter}</h2>
      <button onClick={()=> dispatch(AddAction(1))}>Add</button>
      <button onClick={()=> dispatch(SubAction(1))}>Sub</button>
    </div>
  )
}

export default Counter
