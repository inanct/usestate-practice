import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col justify-center items-center border mt-11'>
        <h1>Counter</h1>
        <p>Count value: {count}</p>
        <button className='border bg-blue-800 text-white p-2 rounded-lg' onClick={()=> setCount(count+1 )}>Increment</button>
    </div>
  )
}

export default Counter