import React from 'react'
import "./Todo.css"
import { useState,useRef ,useEffect} from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoMdDoneAll } from 'react-icons/io';


function Todo() {
const [todo,setTodo] = useState('');
const [todos,setTodos]=useState([]);

const addTodo=()=>{
    setTodos([...todos,{list:todo,id:Date.now(),status:false}]);
    setTodo("")
    
}
const handleSumbmit=(e)=>{
e.preventDefault();
}
const inputRef=useRef("null");
useEffect(()=>{
inputRef.current.focus()
});
//delteting
const onDelete=(id)=>{
setTodos(todos.filter((to)=>{
  return(
    to.id!==id
)
}))
}
//completed
const onComplete=(id)=>{
let complete= todos.map((list)=>{
  if(list.id===id){
    return({...list,status: !list.status})
  }
  return list
})
setTodos(complete )
}

  return (
    <div className='container'>
      <h2>TODO  APP</h2>
      <form className='form-group' onSubmit={handleSumbmit}>
<input className='input' type="text"value={todo} ref={inputRef} placeholder='Enter Your Todo' onChange={(e)=>{
setTodo(e.target.value);
}}/>
<button onClick={addTodo}>ADD</button>
      </form   >

      <div className='list'>
        <ul >
           {
            todos.map((to)=>{
             return  (<li className='list-items'>
             <div className="list-item-list" id={to.status?"list-item":""}>
             {to.list}
             </div>

             <span>
              <IoMdDoneAll className='list-item-icons' id='complete' title='complete' onClick={()=>onComplete(to.id)}/>
              <FaEdit className='list-item-icons' id='edit' title='edit' />
              <MdDelete className='list-item-icons' id='delete' title='deltete' onClick={()=>onDelete(to.id)}/>
              </span>
              </li>)
            })
           }
        </ul>
      </div>
    </div>
  )
}

export default Todo
