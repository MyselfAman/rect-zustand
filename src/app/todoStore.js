import {create} from 'zustand'
import {devtools , persist} from 'zustand/middleware'
const store = (set)=>({
    todos : [],
    addTodo: (todo) => {
        set((state) => ({
            todos : [...state.todos , todo]
            
        }))
    },
    removeTodo : (todoId) => {
        set((state) => ({
            todos : state.todos.filter(todo => todo.id !== todoId)
        }))
    },
    toggleTodo: (todoId) => {
        set((state) => ({
            todos : state.todos.map((todo)=> todo.id === todoId ? {...todo, completed : !todo.completed} : todo)
        }))
        


    }
})


const useTodoStore = create(
    devtools(
        persist(store, {
            name: "todos",
        })
    )
)


export default useTodoStore 





