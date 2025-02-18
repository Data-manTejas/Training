
import React, { useState, useEffect } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editTask, setEditTask] = useState("");

  useEffect(() => {
    getToDoListData();
  }, []);

  function getToDoListData() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }

  function addData() {
    if (newTask.trim() !== "") {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setNewTask("");
    }
  }

  function editData(index) {
    setEditIndex(index);
    setEditTask(tasks[index]);
  }

  function saveEdit() {
    if (editTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = editTask;
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setEditIndex(-1);
      setEditTask("");
    }
  }

  function removeData(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addData}>Add</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={() => setEditIndex(-1)}>Cancel</button>
              </div>
            ) : (
              <div>
                <span>{task}</span>
                <button onClick={() => editData(index)}>Edit</button>
                <button onClick={() => removeData(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
