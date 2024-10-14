import { FC,useState } from 'react';
import { InputsFields } from './components/InputsFields';
import { Todo } from './module';
import { TodoList } from './components/TodoList';
import { DragDropContext } from 'react-beautiful-dnd';
export const App:FC=()=>{
  
  const[todos,setTodos]=useState<Todo[]>([]);
  const [completedTodos,setCompletedTodos]=useState<Todo[]>([]);

  return(
    <DragDropContext onDragEnd={()=>{}} > 
    
      <div>
        <span>taskify</span>
        <InputsFields todos={todos} setTodos={setTodos}/>
        <p>todoItems</p>
        <TodoList todos={todos} setTodos={setTodos} droppableId='todoItems'/>
         <p>done</p>
         <TodoList todos={completedTodos} setTodos={setCompletedTodos} droppableId='doneItems'/>
      </div>
    
    </DragDropContext>
  )
}