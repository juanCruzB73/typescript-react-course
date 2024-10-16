import { FC } from "react";
import { InputsFields } from "./components/InputsFields";
import { TodoList } from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { EmptyTodos } from "./components/EmptyTodos";
import { useDispatch } from 'react-redux'
import { AppDispatch } from './redux/store/store';
import {  onDoneTodo, onOrganizeTodo } from "./redux/slices/todoSlice";
import { useTodos } from "./hooks/useTodos";
export const App: FC = () => {

  const {todos,todoTodos,completeTodos}=useTodos()


  const dispatch=useDispatch<AppDispatch>();
  
  const onDragEnd = (result: DropResult) => {
    console.log(result);
    

    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    let active = [...todos];
    //let completed = [...completeTodos]
    if(destination.droppableId===source.droppableId){
      let [draggedItem]= active.splice(source.index, 1);
      active.splice(destination.index, 0,draggedItem);
      dispatch(onOrganizeTodo(active));
    }else{
      let [draggedItem]= active.splice(source.index, 1);
      dispatch(onDoneTodo(draggedItem.id))
      active.splice(destination.index, 0,draggedItem);
    }
    //dispatch(onOrganizeTodo(completed));
    
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h1>Taskify</h1>
      <InputsFields />
      <h2>Active Tasks</h2>
      {todoTodos.length===0?<EmptyTodos droppableId="noTodos"/>:<TodoList droppableId="todoItems" />}
      <h2>Completed Tasks</h2>
      {completeTodos.length===0?<EmptyTodos droppableId="noTodosComplete"/>:<TodoList droppableId="doneItems" />}
      
    </DragDropContext>
  );
};
