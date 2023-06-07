import axios from "axios"
import { Todo } from "./constanst";

type newTodoType = {
    title:string,
    status:boolean
}

export const addTodo = async(newTodo: newTodoType) => {
    try {
        console.log(newTodo)
        axios.post("http://localhost:8080/todos",newTodo)

        
    } catch (error) {
        console.log(error);
        
    }
}

export const getTodos = async() => {
    try {
        let res = await axios.get('http://localhost:8080/todos')
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const toggleTodo = async( status:boolean,id:number) => {
   let res = await axios.patch(`http://localhost:8080/todos/${id}`,{status : !status})
   return res.data;
}