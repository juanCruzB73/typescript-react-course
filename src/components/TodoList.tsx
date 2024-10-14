import React, { Dispatch, FC, useState } from "react"
import { type Todo } from "../module"
import { TodoItem } from "./TodoItem";
import { Droppable } from "react-beautiful-dnd";

interface Props{
    todos:Todo[];
    setTodos:Dispatch<React.SetStateAction<Todo[]>>;
    droppableId:string;
  }

export const TodoList:FC<Props> = ({todos,setTodos,droppableId}) => {
    
    return (
      <div>
        <Droppable droppableId={droppableId} >  
          {
            (provided)=>(
                  <div ref={provided.innerRef}{...provided.droppableProps}>
                    { 
                      todos.map((todo: Todo,index) => (
                      <TodoItem  index={index} key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />  
                    ))
                    }
                    {provided.placeholder}
                  </div>
            ) 
          }
        </Droppable> 
      </div>
      );
    };
    
