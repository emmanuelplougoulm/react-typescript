import React from "react";

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (event: any, id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={(event) => props.onDeleteTodo(event, todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
