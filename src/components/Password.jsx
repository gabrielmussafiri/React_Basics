import React from 'react'

const ValidPassword = ()=><h1>Valid Password</h1>
const InvalidePassword = ()=><h1>Invalid Password</h1>

const Password = ({isValid}) => 
  
    isValid ? <ValidPassword/> : <InvalidePassword/>


export default Password
