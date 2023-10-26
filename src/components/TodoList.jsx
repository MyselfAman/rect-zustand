import React from 'react'
import useTodoStore from '../app/todoStore'

function TodoList() {
   const {todos , removeTodo , toggleTodo} = useTodoStore((state)=>({
    todos : state.todos,
    removeTodo : state.removeTodo,
    toggleTodo : state.toggleTodo
   }))


  return (
    <div>
        {/* {todos} */}
        <div>
            {
                todos.map((todo) => {
                    return (
                        <div key={todo.id} className='todolist'>
                            <input type="checkbox" onChange={()=> toggleTodo()} checked={todo.completed} name="Completed" id="complete" />
                            <p>{todo?.title}</p>
                            <button className='button' onClick={()=>{

                                removeTodo(todo.id)
                            }}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TodoList