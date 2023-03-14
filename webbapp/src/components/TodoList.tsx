import React from "react";
import Todo from "./Todo";

interface TodoListProps {
  todos: {
    id: number;
    task: string;
    completed: boolean;
  }[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} task={todo.task} completed={todo.completed} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;

