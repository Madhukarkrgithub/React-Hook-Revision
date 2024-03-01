import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../context/Count'

const Count = () => {

    const countState = useContext(CountContext);

  return (
    <div>
        <h2>Count : {countState.count}</h2>
      <button onClick={() =>countState.setCount(countState.count+1)}>Increment</button>
      <button onClick={() =>countState.setCount(countState.count-1)}>Decrement</button>
    </div>
  )
}

export default Count
