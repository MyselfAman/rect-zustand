import React from 'react'
import { useState } from 'react'
import  useTodoStore  from '../app/todoStore';

function AddTodo() {

    const  [todo, setTodo] = useState("");
    const addTodo = useTodoStore((state) => state.addTodo)

    function handleSubmit(){
        console.log(todo);
        if(!todo) return alert("Please enter a todo");

        addTodo({
            id: Math.ceil(Math.random() * 1000000),
            title: todo
        })
        setTodo("");
    }

  return (
    <div className='addTodo'>
        <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" name="Add Todo" id="todo" />
        <button className='button' onClick={() => handleSubmit()}>Add Todo</button>
    </div>
  )
}

export default AddTodo