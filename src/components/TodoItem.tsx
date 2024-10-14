import { useForm } from "../hooks/useForm";
import Form from "../final/10-tasks/Form";
import { FC,useState,Dispatch } from "react";
import { type Todo } from "../module"
import { Draggable } from "react-beautiful-dnd";

interface Props{
    todos:Todo[];
    setTodos:Dispatch<React.SetStateAction<Todo[]>>;
    todo:Todo;
    index:number
}

export const TodoItem:FC<Props> = ({index,todo,todos,setTodos}) => {
    
    const [edit,setEdit]=useState<Boolean>(true);
    //const [editTodo,setEditTodo]=useState<string>('');

    const {editTodo,onInputChange}=useForm({editTodo:''})
    
    const onEditTodo=(e:React.FormEvent)=>{
        console.log("Form submit prevented")
        e.preventDefault();
        console.log("Form submit prevented")
        setTodos(
            todos.map((t: Todo) => {
                if (t.id === todo.id) {
                    return {
                        ...t,
                        todo: editTodo, // Toggle isDone flag
                    };
                }
                return t; // Return original todo if id doesn't match
            })
        );
        setEdit(!edit)
    }
    const onDeleteTodo=(id:number)=>{
        setTodos(
            todos.filter((todo:Todo)=>todo.id !== id)
        )
    }

    const onDoneTodo = (id: number) => {
    setTodos(
      todos.map((todo: Todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone, // Toggle isDone flag
          };
        }
        return todo; // Return original todo if id doesn't match
      })
    );
  };
  
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
    {
      (provided)=>(
          <form onSubmit={onEditTodo} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
            {edit?<input value={editTodo} onChange={onInputChange} name="editTodo"/>:<p>{todo.todo}</p>}
            <span >edit</span>
            <span onClick={ ()=>onDeleteTodo(todo.id) }>delete</span>
            <span onClick={ ()=>onDoneTodo(todo.id) }>complete</span>
            </form>
        )
    }
    </Draggable>
  )
}


