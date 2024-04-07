import React from 'react'
import "./Todo.css"
import { useState,useRef ,useEffect} from 'react'


function Todo() {
const [todo,setTodo] = useState('');
const [todos,setTodos]=useState([]);

const addTodo=()=>{
    setTodos([...todos,todo]);
    setTodo("")
    
}
const handleSumbmit=(e)=>{
e.preventDefault();
}
const inputRef=useRef("null");
useEffect(()=>{
inputRef.current.focus()
})

  return (
    <div className='container'>
      <h2>TODO  APP</h2>
      <form className='form-group' onSubmit={handleSumbmit}>
<input className='input' type="text"value={todo} ref={inputRef} placeholder='Enter Your Todo' onChange={(e)=>{
setTodo(e.target.value);
}}/>
<button onClick={addTodo}>ADD</button>
      </form   >

      <div>
        <ul className='list'>
           {
            todos.map((to)=>{
             return  <li>{to}</li>
            })
           }
        </ul>
      </div>
    </div>
  )
}

export default Todo
