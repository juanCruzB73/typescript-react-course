import {  FC } from "react";
import { useForm } from "../hooks/useForm"
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store/store';
import { onAddTodo } from "../redux/slices/todoSlice";


export const InputsFields:FC = () => {
    
    const dispatch=useDispatch<AppDispatch>();


    const{inputField,onInputChange,onResetForm}=useForm({
        inputField:''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(inputField){
            dispatch(onAddTodo({id:Date.now(),todo:inputField,isDone:false}))
            onResetForm();           
        }   
      };
    
  return (
    <div className="inputField">
    <h1>Taskify</h1>
    <form className="inputForm" onSubmit={handleSubmit} >
        <input name="inputField" placeholder="Add todo"  value={inputField} onChange={onInputChange} type="text" className="inputFild"/>
        <button type="submit" className="inputButton">submit</button>
    </form>
    </div>
    )
}
