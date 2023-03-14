import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const Application: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (task: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        task,
        completed: false,
      },
    ]);
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
};

export default Application;

