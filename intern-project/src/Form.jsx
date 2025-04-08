import { useState } from "react"

export default function Form({addTask, taskInput, setTaskInput, inputRef}){
return <>
<form onSubmit={addTask}>
        <div>
          <h2>To-do List</h2>
          <input
            type="text"
            placeholder="Enter the task"
            value={taskInput}
            ref={inputRef}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button type='submit'>Add</button>
        </div>
        </form>
</>
}