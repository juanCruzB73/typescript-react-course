import { FC, useState } from "react";
import { InputsFields } from "./components/InputsFields";
import { Todo } from "./module";
import { TodoList } from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

export const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add;
    let active = [...todos];
    let complete = [...completedTodos];

    if (source.droppableId === "todoItems") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "todoItems") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setTodos(active);
    setCompletedTodos(complete);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      
        <h1>Taskify</h1>
        <InputsFields todos={todos} setTodos={setTodos} />

        
          <h2>Active Tasks</h2>
          <TodoList  todos={todos} setTodos={setTodos} droppableId="todoItems" />
        

        
          <h2>Completed Tasks</h2>
          <TodoList
            
            todos={completedTodos}
            setTodos={setCompletedTodos}
            droppableId="doneItems"
          />
        
        
    </DragDropContext>
  );
};
