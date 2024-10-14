import { FC, Dispatch } from "react";
import { Todo } from "../module";
import { TodoItem } from "./TodoItem";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: Dispatch<React.SetStateAction<Todo[]>>;
  droppableId: string;
}

export const TodoList: FC<Props> = ({ todos, setTodos, droppableId }) => {
  console.log(droppableId,typeof droppableId)
  return (
    <div>
      {(todos.length === 0)?
        (<p>No tasks yet</p>):
        (<Droppable droppableId={droppableId}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {(
            todos.map((todo, index) => (
              <TodoItem
                key={todo.id}
                index={index}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))
          )}
          {provided.placeholder}
    </div>
  )}
  </Droppable>)
        }
    
  </div>
  
  );
};
