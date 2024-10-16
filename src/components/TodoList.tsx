import { FC } from "react";
import { TodoItem } from "./TodoItem";
import { Droppable } from "react-beautiful-dnd";
import { useTodos } from "../hooks/useTodos";
import { ITodo } from "../redux/slices/todoSlice";

interface Props {
  droppableId: string;
  
}

export const TodoList: FC<Props> = ({droppableId}) => {
  console.log(droppableId)

  const {todos,todoTodos,completeTodos}=useTodos()
  
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div className="todoContainer" {...provided.droppableProps} ref={provided.innerRef} >
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

