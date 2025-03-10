import React from 'react'

const Person = ({name , age}) => {
  return (
    <div>
        <h1>Props</h1>
      <p>My name is : {name}</p>
      <p>My age is : {age}</p>
    </div>
  )
}

export default Person
