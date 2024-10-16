import { FC } from "react";
import { InputsFields } from "./components/InputsFields";
import { TodoList } from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useDispatch } from 'react-redux'
import { AppDispatch } from './redux/store/store';
import {  onDoneTodo, onOrganizeTodo } from "./redux/slices/todoSlice";
import { useTodos } from "./hooks/useTodos";
import { EmptyTodos } from "./components/EmptyTodos";
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
    if(destination.droppableId===source.droppableId){
      let [draggedItem]= active.splice(source.index, 1);
      active.splice(destination.index, 0,draggedItem);
      dispatch(onOrganizeTodo(active));

    }else{
      let [draggedItem]= active.splice(source.index, 1);
      dispatch(onDoneTodo(draggedItem.id));
      active.splice(destination.index, 0,draggedItem);
      
    }
  };

  return (

    <DragDropContext onDragEnd={onDragEnd}>
      <InputsFields />
      {
        todos.length>0?
        (<div className="boards">
          <div className="boardContainer">
            <h2>Active Tasks</h2>
            <TodoList droppableId="todoItems" />
        </div>
        <div className="boardContainer">
          <h2>Completed Tasks</h2>
          <TodoList droppableId="doneItems" />
        </div>
      </div>):
      (<div className="boards">
        <div className="boardContainer">
          <h2>Active Tasks</h2>
      </div>
      <div className="boardContainer">
        <h2>Completed Tasks</h2>
      </div>
    </div>)
      }
    </DragDropContext>

  );
};
