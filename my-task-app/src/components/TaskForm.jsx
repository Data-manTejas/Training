import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskForm = () => {
  const [taskText, setTaskText] = useState('');
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch({
        type: 'ADD_TASK',
        payload: { id: Date.now(), text: taskText, completed: false },
      });
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
