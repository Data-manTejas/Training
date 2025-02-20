import React, { useContext, useMemo, useCallback } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext);

  const totalCompletedTasks = useMemo(() => {
    return state.tasks.filter((task) => task.completed).length;
  }, [state.tasks]);

  const toggleTask = useCallback(
    (id) => {
      dispatch({ type: "TOGGLE_TASK", payload: id });
    },
    [dispatch]
  );

  const deleteTask = useCallback(
    (id) => {
      dispatch({ type: "DELETE_TASK", payload: id });
    },
    [dispatch]
  );

  return (
    <div>
      <h2>Task List</h2>
      {state.tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {state.tasks.map((task) => (
            <li key={task.id}>
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
              <button onClick={() => toggleTask(task.id)}>Toggle</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total Completed Tasks: {totalCompletedTasks}</p>
    </div>
  );
};

export default TaskList;
