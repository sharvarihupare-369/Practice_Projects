import React, { Dispatch, SetStateAction } from 'react'
import { Todo, TodoType } from '../constanst'
import { toggleTodo } from '../api'

interface TodoItemProps extends TodoType {
    //  handleUpdate : () => void ;
    // handleUpdate is function and returning nothing so void
    // handleUpdate : () => Todo[];
    // if it returns array of todos
    setTodos: Dispatch<SetStateAction<TodoType[]>>
}

// export const TodoItem = ({id,title,status, handleUpdate}:TodoItemProps) => {
export const TodoItem = ({id,title,status, setTodos}:TodoItemProps) => {
    const handleToggle = () => {
       toggleTodo(status, id ).then((res)=>{
        // handleUpdate()
        // setTodos((prev: SetStateAction<TodoType[]>) => [...prev, res])
        setTodos((prev) =>{
            return prev.map((el) => el.id === id ? res : el);
        } )
       });
    }
  return (
    <div style={{border:"1px solid black" , margin:"10px"}}>
        <h2 >{title}</h2>
        <p>{status ? "completed" : "not completed"}</p>
        <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}
