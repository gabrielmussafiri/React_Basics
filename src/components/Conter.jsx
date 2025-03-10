import React, { useState } from 'react'

const Conter = () => {
    const [count ,setCount] = useState(0)

    const handleIncrement = ()=>{
        setCount(count +1)
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={handleIncrement}>Increment</button>
      
    </div>
  )
}

export default Conter
