//import { useReducer } from 'react'

export interface Todo{
    id:number;
    todo:string;
    isDone:boolean;
}



export type Actions=
    |{type:"add";payload:string}
    |{type:"remove";payload:number}
    |{type:"done";payload:number}


export const TodoReducer=(state:Todo[],action:Actions)=>{
    switch(action.type){
        case "add":
            return[
                ...state,
                {id:Date.now(),todo:action.payload,isDone:false}
            ];
        case "remove":
            return state.filter((todo:Todo)=>todo.id !== action.payload);
        case "done":
            return state.map((todo: Todo) => {
                if (todo.id === action.payload) {
                  return {
                    ...todo,
                    isDone: !todo.isDone, // Toggle isDone flag
                  };
                }
                return todo; // Return original todo if id doesn't match
              })
        default:
            return state;
        }
    }
//export module
