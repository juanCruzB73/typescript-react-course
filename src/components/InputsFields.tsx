import { Dispatch, FC } from "react";
import { useForm } from "../hooks/useForm"
import { Todo } from "../module";
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../redux/store/store';
import { onAddTodo } from "../redux/slices/todoSlice";


export const InputsFields:FC = () => {

    const todos=useSelector((state:RootState)=>state.todos.todos)
    const dispatch=useDispatch<AppDispatch>();


    const{inputField,onInputChange,onResetForm}=useForm({
        inputField:''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(inputField){
            dispatch(onAddTodo({id:Date.now(),todo:inputField,isDone:false}))
            /*setTodos([...todos,{id:Date.now(),todo:inputField,isDone:false}])*/ 
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
