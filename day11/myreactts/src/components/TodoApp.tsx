import React, { useEffect, useState } from 'react'
import { TodoInput } from './TodoInput'
import { getTodos } from '../api'
import { TodoItem } from './TodoItem';
import { Todo, TodoType } from '../constanst';
// import {Todo} from '../c'

export const TodoApp = () => {

    const [todos,setTodos] = useState<TodoType[]>([]);

    const [change,setChange] = useState<boolean>(false)

    const handleUpdate = () => {
        setChange(prev => !prev)
    }

    useEffect(()=> {
        getTodos().then((res)=>{
            setTodos(res);
        })
    },[change])

  return (
    <div>
        <TodoInput/>
        <div style={{display:"grid" , gridTemplateColumns:"repeat(2,1fr)"}}>

        {todos?.map((el)=>{
            return <TodoItem key={el.id} {...el} /*handleUpdate={handleUpdate}*/  setTodos={setTodos}  />
        })
    }
    </div>
    </div>
  )
}
//el={el} id={el.id} instead of this pass like {...el} by speading