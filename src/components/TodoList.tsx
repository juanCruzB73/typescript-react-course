import { FC, Dispatch } from "react";
import { TodoItem } from "./TodoItem";
import { Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../redux/store/store';

interface Props {
  droppableId: string;
}

export const TodoList: FC<Props> = ({droppableId}) => {

  const todos=useSelector((state:RootState)=>state.todos.todos)
  const dispatch=useDispatch<AppDispatch>();

  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef} style={{ minHeight: '100px', border: '1px solid lightgray', background: 'lightgrey' }}>
          {todos.map((todo, index) => (
              <TodoItem key={todo.id} index={index} todo={todo} />
            ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

