import React, { useState } from "react";
import "./index.css";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskCounter, setTaskCounter] = useState(1);

  const fetchSingleTaskFromAPI = async () => {
    try {
      if (taskCounter > 10) {
        alert("All tasks have been fetched!");
        return;
      }
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${taskCounter}`);
      const data = await response.json();
      setTasks((prevTasks) => [...prevTasks, data]);
      setTaskCounter((prevCounter) => prevCounter + 1);
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  };

  const addTask = async () => {
    if (taskTitle.trim()) {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: taskTitle,
            completed: false,
          }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to add task.");
        }
  
        const newTask = await response.json();
  
        // Assign a unique ID locally (since the API may not provide one)
        newTask.id = Date.now(); // Use timestamp to ensure uniqueness
  
        // Add the new task to the state
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setTaskTitle(""); // Clear the input field
      } catch (error) {
        console.error("Error adding task:", error);
        alert("Failed to add the task. Please try again.");
      }
    } else {
      alert("Task title cannot be empty!");
    }
  };
  
  

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, updatedTitle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, title: updatedTitle } : task
      )
    );
  };

  const deleteAllTasks = () => {
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      setTasks([]);
      setTaskCounter(1);
    }
  };

  return (
    <div className="todo-container">
      <h1>To-Do App</h1>
      <div className="controls">
        <button onClick={fetchSingleTaskFromAPI}>Fetch Task</button>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter task title"
        />
        <button onClick={addTask}>Add Task</button>
        <button onClick={deleteAllTasks}>Delete All Tasks</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <input
              type="text"
              value={task.title}
              onChange={(e) => editTask(task.id, e.target.value)}
            />
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

