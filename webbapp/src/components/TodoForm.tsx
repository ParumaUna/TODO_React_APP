import React, { useState } from "react";

interface TodoFormProps {
  onAdd: (task: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [task, setTask] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task.trim()) {
      onAdd(task.trim());
      setTask("");
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input className="inputField" type="text" value={task} onChange={handleChange} />
      <button className="submitbtn"type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
