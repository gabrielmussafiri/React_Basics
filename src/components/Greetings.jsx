import React from 'react'

const Greetings = () => {
    const message = "Hello, world!"
    const TodayDate = new Date()
  return (
    <div>
      <h1>Dynamic Variable In react</h1>
      <h3>{message}</h3>
      <p>Today date is : {TodayDate.getDate()}</p>
    </div>
  )
}

export default Greetings
