import React from 'react'
import "./Todo.css"
import { useState, useRef, useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoMdDoneAll } from 'react-icons/io';

function Todo() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const addTodo = () => {
    if (todo !== '') {
      setTodos([...todos, { list: todo, id: Date.now(), status: false }]);
      setTodo("")
    }
    if (editId) {
      const editTodo = todos.find((todo) => todo.id === editId);
      const updateTodo = todos.map((to) => to.id === editTodo.id ? (to = { id: to.id, list: todo }) : (to = { id: to.id, list: to.list })
      )
      setTodos(updateTodo
      )
      setEditId(0);
      setTodo("")
    }
  }


  const handleSumbmit = (e) => {
    e.preventDefault();
  }
  const inputRef = useRef("null");
  useEffect(() => {
    inputRef.current.focus()
  });
  useEffect(()=>{
    console.log("");
    return (console.log("unmounting"))
  },[])
  //delteting
  const onDelete = (id) => {
    setTodos(todos.filter((to) => {
      return (
        to.id !== id
      )
    }))
  }
  //completed
  const onComplete = (id) => {
    let complete = todos.map((list) => {
      if (list.id === id) {
        return ({ ...list, status: !list.status })
      }
      return list
    })
    setTodos(complete)
  }

  //Edit
  const onEdit = (id) => {
    const editTodo = todos.find((to) => to.id === id);
    setTodo(editTodo.list)
    setEditId(editTodo.id)

  }
  return (
    <div className='container'>
      <h2>TODO  APP</h2>
      <form className='form-group' onSubmit={handleSumbmit}>
        <input className='input' type="text" value={todo} ref={inputRef} placeholder='Enter Your Todo' onChange={(e) => {
          setTodo(e.target.value);
        }} />
        <button onClick={addTodo}>{editId ? "EDIT" : "ADD"}</button>
      </form   >
      

      <div className='list'>
        <ul >
          {
            todos.map((to) => {
              return (<li className='list-items'>
                <div className="list-item-list" id={to.status ? "list-item" : ""}>
                  {to.list}
                </div>

                <span>
                  <IoMdDoneAll className='list-item-icons' id='complete' title='complete' onClick={() => onComplete(to.id)} />
                  <FaEdit className='list-item-icons' id='edit' title='edit' onClick={() => { onEdit(to.id) }} />
                  <MdDelete className='list-item-icons' id='delete' title='deltete' onClick={() => onDelete(to.id)} />
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
