import { FC, Dispatch } from "react";
import { TodoItem } from "./TodoItem";
import { Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../redux/store/store';
import { useTodos } from "../hooks/useTodos";
import { ITodo } from "../redux/slices/todoSlice";

interface Props {
  droppableId: string;
  
}

export const TodoList: FC<Props> = ({droppableId}) => {
  console.log(droppableId)

  const {todoTodos,completeTodos}=useTodos()
  

  const dispatch=useDispatch<AppDispatch>();
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef} style={{ minHeight: '100px', border: '1px solid lightgray', background: 'lightgrey' }}>
          {
          droppableId=="todoItems"?
          (todoTodos.map((todo:ITodo, index:number) => (
              <TodoItem key={todo.id} index={index} todo={todo} />
            )))
            :
            (completeTodos.map((todo:ITodo, index:number) => (
              <TodoItem key={todo.id} index={index} todo={todo} />
            ))
            )
            }
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

