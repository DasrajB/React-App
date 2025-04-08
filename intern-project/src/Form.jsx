import { useState } from "react"

export default function Form({addTask, taskInput, setTaskInput, inputRef}){
return <>
<form onSubmit={addTask}>
        <div style={{textAlign: "center"}}>
          <h1 style={{color:"#392983"}}>To-do List</h1>
          <input
            type="text"
            placeholder="Enter the task"
            value={taskInput}
            ref={inputRef}
            onChange={(e) => setTaskInput(e.target.value)}
            style={{fontSize: "16px", padding:"5px 8px"}}
          />
          <button type='submit' className="btn">Add</button>
        </div>
        </form>
</>
}