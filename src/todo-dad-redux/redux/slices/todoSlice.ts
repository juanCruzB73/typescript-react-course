import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ITodo{
    id:number;
    todo:string;
    isDone:boolean;
}

interface ITodoState{
    todos:ITodo[];
}

const initialState:ITodoState={
    todos:[],
}

/*
const onEditTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos(
      todos.map((t: Todo) => {
        if (t.id === todo.id) {
          return {
            ...t,
            todo: editTodo, // Update the todo text
          };
        }
        return t; // Return original todo if id doesn't match
      })
    );
    setEdit(!edit); // Toggle edit mode after updating
  };
*/
export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    onAddTodo: (state,action:PayloadAction<ITodo>) => {
      state.todos=[...state.todos,{id:action.payload.id,todo:action.payload.todo,isDone:action.payload.isDone}]
      
    },
    onOrganizeTodo:(state,action:PayloadAction<ITodo[]>)=>{
      state.todos=action.payload;
    },
    onDoneTodo: (state,action:PayloadAction<number>) => {
      const todo=state.todos.find(todo=>todo.id===action.payload)
      if(todo){
        todo.isDone=!todo.isDone
      }
    },
    onDeleteTodo: (state, action:PayloadAction<number>) => {
      state.todos=state.todos.filter((todo) => todo.id !== action.payload)
    },
    onEditTodo:(state, action:PayloadAction<ITodo>)=>{
      const todo=state.todos.find((todo:ITodo)=>todo.id===action.payload.id)
      if(todo){
        todo.todo=action.payload.todo;
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { onAddTodo, onOrganizeTodo, onDoneTodo, onDeleteTodo,onEditTodo } = todoSlice.actions

export default todoSlice.reducer