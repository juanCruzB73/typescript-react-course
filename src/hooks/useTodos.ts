import { useSelector } from 'react-redux'
import { ITodo } from '../redux/slices/todoSlice';
import { RootState } from '../redux/store/store';



export const useTodos = () => {
  
    const todos=useSelector((state:RootState)=>state.todos.todos)

    const todoTodos=todos.filter((todo:ITodo)=>!todo.isDone)

    const completeTodos=todos.filter((todo:ITodo)=>todo.isDone)
    
    return {
    todos,todoTodos,completeTodos,
  }
}