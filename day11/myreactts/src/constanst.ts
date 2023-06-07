

// export type Todo = {
//     id : number;
//     title:string;
//     status:boolean
// }
export type Todo = {
    
    title:string;
    status:boolean
}

export interface TodoType extends Todo {
    id:number
}