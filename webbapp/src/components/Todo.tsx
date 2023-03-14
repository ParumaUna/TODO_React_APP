import React from "react";
import { FaTrash } from 'react-icons/fa';

interface TodoProps {
  id: number;
  task: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ id, task, completed, onToggle, onDelete }) => {
  return (
    <li className ='Checkbox'>
      <input type="checkbox" checked={completed} onChange={() => onToggle(id)} />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</span>
      <button className="deletebtn"onClick={() => onDelete(id)}>
        <FaTrash/>
      </button>
    </li>
  );
};

export default Todo;
