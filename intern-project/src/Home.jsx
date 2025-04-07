import { useState, useEffect, useRef} from "react";
import 'devextreme/dist/css/dx.light.css'
import {Link} from 'react-router-dom';
import Form from './Form'
import TableForm from "./tableForm";
export default function Home(){  
    const [tasks, setTask] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const inputRef = useRef(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      const data = window.localStorage.getItem('TASKS')
      if (data){
        setTask(JSON.parse(data))
        setLoading(false)
      } else {
        const fetchData = async ()=>{
          try{
            const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
            const result = await response.json()
            const todos = result.map(todo=>({
              id: todo.id,
              text: todo.title,
              completed: todo.completed ? "completed":"pending"
            }))
            setTask(todos)
          } catch(error){
            console.error(error.message)
          } finally{
            setLoading(false)
          }
        };

        fetchData()
      }

    }, [])

    useEffect(()=>{
      if (tasks.length > 0)
      window.localStorage.setItem('TASKS', JSON.stringify(tasks))
    }, [tasks])
   
    if(loading) return <p>Loading tasks...</p>
    const addTask = (e) => {
      e.preventDefault()
      if (taskInput) {
        setTask([
          ...tasks,
          { id: tasks.length + 1, text: taskInput, completed:"pending" },
        ]);
       setTaskInput('')
      } else {
        inputRef.current.focus();
  
      }
    };
  
    const completeTask = (id) => {
      setTask(
        tasks.map((task) =>
          task.id === id ? { ...task, completed:"pending"?"completed":"pending" } : task
        )
      );
    };
    const deleteTask = (id) =>{
        setTask(
            tasks.filter((task)=>
                task.id !== id)
        )
    }
    const editTask = (id) =>{
      tasks.map((task)=>{
        if(task.id === id){
          setTaskInput(task.text)
        }
      }), 
      deleteTask(id)
    }
    
    return (
      <>
      <Form setTaskInput={setTaskInput} taskInput={taskInput} inputRef={inputRef} addTask={addTask}/>
        {tasks.length === 0 ? (
          <p>No Tasks Left</p>
        ) : (
            // {/* {tasks.map((task) => (
            //   <>
            //   <li><span
            //     key={task.id}
            //     style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            //   >
            //     {task.text}</span>
            //     <button onClick={() => completeTask(task.id)}>Complete</button>
            //     <button onClick={() => editTask(task.id)}>Edit</button>
            //     <button onClick={() => deleteTask(task.id)}>Delete</button>
            //   </li>
            //   <hr/>
            //   </>
            // ))} */}
            <>

            

            <TableForm tasks={tasks} completeTask={completeTask} editTask={editTask} deleteTask={deleteTask}/>
            </>

        )}
        <Link to="/about" style={{textDecoration: "none"}}>
        <p style={{backgroundColor: "black", color:"white", display:"inline", padding:"10px", borderRadius:"5px"}}>What does this app do?</p>
        </Link>
      </>
    );
  }