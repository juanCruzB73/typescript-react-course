import { Dispatch, FC, useRef, useState } from "react";
import { useForm } from "../hooks/useForm"
import { Todo } from "../module";
import { TodoList } from "./TodoList";

interface Props{
    todos:Todo[];
    setTodos:Dispatch<React.SetStateAction<Todo[]>>;
}

export const InputsFields:FC<Props> = ({todos,setTodos}) => {

    const{inputField,onInputChange,formState,onResetForm}=useForm({
        inputField:''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(inputField){
            setTodos([...todos,{id:Date.now(),todo:inputField,isDone:false}])
            onResetForm();            
        }
        console.log(todos)   
      };
    //const inputRef=useRef<HTMLInputElement>(null);
    
  return (
    
    <form className="inputForm" onSubmit={handleSubmit} >
        <input name="inputField" value={inputField} onChange={onInputChange} type="text" className="inputFild"/>
        <button type="submit" className="inputButton">submit</button>
    </form>
    
    )
}
