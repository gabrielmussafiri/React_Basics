import React from 'react'

const numbers = [1,2,3,4,5,6,7,8,9]
const List = () => {
  return (
    <div>
        <h1>List Rendering in React</h1>
      {numbers.map(number=>(
        <ul key={number}>
            <li>{number}</li>
        </ul>
      ))}
      
    </div>
  )
}

export default List
