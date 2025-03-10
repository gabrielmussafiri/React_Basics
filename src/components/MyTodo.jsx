import React, { useState } from 'react'

const MyTodo = () => {
   

    const[todos , setTodos] = useState([]);
    const[inputValue, setInputValue] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim()){
            setTodos([...todos , inputValue])
            setInputValue('')

        }
       

    }

    const handleChange = (e) => {
        setInputValue(e.target.value)

    }

    const handleDelete =(indexToDelete)=>{
        
        setTodos(todos.filter((_,index)=> index !== indexToDelete))
        
    }
  return (
    <div >
        <h1>Welcome To MyTodo</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Add a new task" />
            <button type="submit">Add Task</button>
        </form>
        <ul >
        {
            todos.map((todo ,index)=>(
                
                    <li key={index} >{todo} <span onClick={()=>handleDelete(index)}>❌</span></li>
                    
               
            ))
        }
        </ul>
      
    </div>
  )
}

export default MyTodo
