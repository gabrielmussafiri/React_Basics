import React, { useEffect, useState } from 'react'

const BasicEffects = () => {
    const [count , setCount] = useState(0)
    const [data, setData] = useState([])
    useEffect(()=>{
        document.title = ` The Count ${count}`
       async function getData(){
        const reponse = await fetch("http://jsonplaceholder.typicode.com/posts")
        const data = await reponse.json()
        setData(data)
       }
       getData()

    }, [count])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
        {
            data.map((d)=>(
                <li key={d.id}>{d.title}</li>
            ))
        }
      
    </div>
  )
}

export default BasicEffects
