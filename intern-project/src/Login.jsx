import { Navigate } from "react-router-dom"
import { useContext } from "react"
import {LoginContext} from "./LoginContext"

export default function Login({}){
    const {setIsAuthenticated, isAuthenticated} = useContext(LoginContext)
    const handleLogin=(e)=>{
        e.preventDefault()
        window.localStorage.setItem('Token', "loggedin")
        setIsAuthenticated(true);
    }
     if (isAuthenticated){
        return <Navigate to="/" replace/>
     }
    return <>
    <form action="">
        <h1>Please, Login to view Details</h1>
        <input type="text" placeholder="username"/>
        <input type="text" placeholder="password" />
        <button type="submit" onClick={handleLogin}>Log In</button>
    </form>
    </>
}