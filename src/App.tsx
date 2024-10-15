import { FC } from "react";
import { InputsFields } from "./components/InputsFields";
import { TodoList } from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { EmptyTodos } from "./components/EmptyTodos";
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './redux/store/store';
import { onAddTodo } from "./redux/slices/todoSlice";

export const App: FC = () => {

  const todos=useSelector((state:RootState)=>state.todos.todos)
  const dispatch=useDispatch<AppDispatch>();
  
  const onDragEnd = (result: DropResult) => {

    console.log("Drag End Result:", result);
    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    let add;
    let active = [...todos];
    //let complete = [...completedTodos];

    if (source.droppableId === "todoItems") {    
      add = active[source.index];
      console.log(add);
      //active.splice(source.index, 1);
    } else {
    //add = complete[source.index];
    //complete.splice(source.index, 1);
    }

    if (destination.droppableId === "todoItems") {
      console.log(add);
      //dispatch(onAddTodo(add))
    } else {
      //complete.splice(destination.index, 0, add);
    }

    
    
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h1>Taskify</h1>
      <InputsFields />
      <h2>Active Tasks</h2>
      {todos.length===0?<EmptyTodos droppableId="noTodos"/>:<TodoList droppableId="todoItems" />}
      <h2>Completed Tasks</h2>
      
      
    </DragDropContext>
  );
};
