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

  const onDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo: Todo) => todo.id !== id));
  };

  const onDoneTodo = (id: number) => {
    setTodos(
      todos.map((todo: Todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone, // Toggle isDone flag
          };
        }
        return todo;
      })
    );
  };
*/
export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    onAddTodo: (state,action:PayloadAction<ITodo>) => {
      state.todos=[...state.todos,{id:action.payload.id,todo:action.payload.todo,isDone:action.payload.isDone}]
      
    },
    onDoneTodo: (state) => {
      
    },
    onDeleteTodo: (state, action) => {
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { onAddTodo, onDoneTodo, onDeleteTodo } = todoSlice.actions

export default todoSlice.reducer