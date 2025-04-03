import { Link } from "react-router-dom"
export default function About(){
    return<>
    <p>This To-Do List app is designed to help you stay organized and productive. Whether it's daily tasks, project deadlines, or personal reminders, this app makes it easy to manage everything in one place. With a clean and simple interface, you can quickly add, edit, and track your tasks without any hassle. Built using React, this app ensures a smooth user experience while keeping things lightweight and efficient. Stay focused, get things done, and take control of your day with this handy to-do list!</p>
    <h2>Ready to Add Task?</h2>
    <Link to="/"><button>Click here</button></Link>
    </>
}