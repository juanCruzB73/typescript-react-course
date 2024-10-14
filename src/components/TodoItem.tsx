import { useForm } from "../hooks/useForm";
import { FC, useState, Dispatch } from "react";
import { type Todo } from "../module";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: Dispatch<React.SetStateAction<Todo[]>>;
  todo: Todo;
  index: number;
}

export const TodoItem: FC<Props> = ({ index, todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false); // Edit mode default to false

  const { editTodo, onInputChange } = useForm({ editTodo: todo.todo });

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

  return (
    
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          onSubmit={onEditTodo}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input value={editTodo} onChange={onInputChange} name="editTodo" />
          ) : (
            <p>{todo.todo}</p>
          )}
          <span onClick={() => setEdit(!edit)}>edit</span>
          <span onClick={() => onDeleteTodo(todo.id)}>delete</span>
          <span onClick={() => onDoneTodo(todo.id)}>complete</span>
        </form>
      )}
    </Draggable>
  );
};
