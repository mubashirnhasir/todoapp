import { createContext, useContext } from "react";

// Create context using createContext from react
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

// Use todo by implementing TodoContext
export const useTodo = ()=>{
    return useContext(TodoContext)
}
// Exporting Provider to Wrap the items / childrens inside.
export const TodoProvider = TodoContext.Provider


