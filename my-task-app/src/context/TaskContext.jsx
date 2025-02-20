import { createContext, useContext, useReducer } from 'react';

const initialState ={
    tasks : []
}

const TaskContext = createContext();

const TaskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'DELETE_TASK':
        return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload ? { ...task, completed: !task.completed } : task
          ),
        };
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  };
  

const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TaskReducer, initialState);
    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};





export { TaskContext, TaskProvider };

