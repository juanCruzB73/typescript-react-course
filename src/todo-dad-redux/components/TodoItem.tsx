import { useForm } from "../hooks/useForm";
import { FC, useState } from "react";
import { type Todo } from "../module";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from 'react-redux'
import { onDeleteTodo, onDoneTodo, onEditTodo } from "../redux/slices/todoSlice";
import { AppDispatch } from "../redux/store/store";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

interface Props {
  todo: Todo;
  index: number;
}

export const TodoItem: FC<Props> = ({ index, todo}) => {
  console.log(todo.id);
  
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
        <form onSubmit={EditTodo} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className="task">
          <div>
            {edit ? (
              <input value={editTodo} onChange={onInputChange} name="editTodo" />
            ) : (
              <p>{todo.todo}</p>
            )}
          </div>
          <div>
            <span className="material-symbols-outlined" onClick={() => setEdit(!edit)} ><EditIcon></EditIcon></span>
            <span className="material-symbols-outlined" onClick={()=>dispatch(onDeleteTodo(todo.id))}><DeleteIcon></DeleteIcon></span>
            <span className="material-symbols-outlined" onClick={()=>dispatch(onDoneTodo(todo.id))}><DoneOutlineIcon/></span>
          </div>
        </form>
      )}
    </Draggable>
  );
};