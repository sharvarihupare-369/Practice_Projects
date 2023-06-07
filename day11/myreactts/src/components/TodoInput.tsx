import React, { useState } from 'react'
import { addTodo } from '../api'

export const TodoInput = () => {

    const [title,setTitle] = useState<string>('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
      setTitle(e.target.value)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const newTodo = {
        title,
        status:false
      }
      addTodo(newTodo)
    //   console.log(title)
        setTitle("")
    }

  return (
    <div>
       <form action='' onSubmit={handleSubmit}>
        <input type='text' value={title} onChange={handleChange} />
        {/* <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} /> */}
        <button>Add Todo</button>
       </form>
    </div>
  )
}
