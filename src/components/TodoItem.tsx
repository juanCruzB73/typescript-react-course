import { useForm } from "../hooks/useForm";
import { FC, useState } from "react";
import { type Todo } from "../module";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from 'react-redux'
import { onDeleteTodo, onDoneTodo, onEditTodo } from "../redux/slices/todoSlice";
import { AppDispatch } from "../redux/store/store";

interface Props {
  todo: Todo;
  index: number;
}

export const TodoItem: FC<Props> = ({ index, todo}) => {

  const [edit, setEdit] = useState<boolean>(false); // Edit mode default to false

  const { editTodo, onInputChange } = useForm({ editTodo: todo.todo });

  const dispatch=useDispatch<AppDispatch>();

  const EditTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(onEditTodo({id:todo.id,todo:editTodo,isDone:todo.isDone}))
    setEdit(!edit); // Toggle edit mode after updating
  };
 
  
  return (
    
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form onSubmit={EditTodo}
          
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input value={editTodo} onChange={onInputChange} name="editTodo" />
          ) : (
            <p>{todo.todo}</p>
          )}
          <span onClick={() => setEdit(!edit)} >edit</span>
          <span onClick={()=>dispatch(onDeleteTodo(todo.id))}>delete</span>
          <span onClick={()=>dispatch(onDoneTodo(todo.id))}>complete</span>
        </form>
      )}
    </Draggable>
  );
};
