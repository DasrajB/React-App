import { useState } from 'react';

export default function App() {
  const [tasks, setTask] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput) {
      setTask([
        ...tasks,
        { id: tasks.length + 1, text: taskInput, completed: false },
      ]);
      setTaskInput('');
    }
  };

  const completeTask = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };
  const deleteTask = (id) =>{
      setTask(
          tasks.filter((task)=>
              task.id !== id)
      )
  }

  return (
    <>
      <div>
        <h1>To-do List</h1>
        <input
          type="text"
          placeholder="Enter the task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      {tasks.length === 0 ? (
        <p>No Tasks Left</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
              <button onClick={() => completeTask(task.id)}>Complete</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
