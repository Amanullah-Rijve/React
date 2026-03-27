import React, { useState } from 'react'
import './App.css'

function Counter() {
    const [count,setCount] = useState(0);
  return (
    <div className='container' >
        <p>Current Count Vlaue {count} </p>
        <button className='btn' onClick={()=> setCount(count+1)} >Increase</button>
        <button className='btn' onClick={()=>setCount(count-1)}  >decrease</button>
        <button className='btn' onClick={()=>setCount(0)} >Reset</button>
    </div>
  )
}

export default Counter