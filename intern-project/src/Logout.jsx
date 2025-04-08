import { useContext } from "react"
import { LoginContext } from "./LoginContext"
import { Navigate } from "react-router-dom"

export default function Logout(){
    const {isAuthenticated, setIsAuthenticated} = useContext(LoginContext)
    function handleLogout(){
       window.localStorage.removeItem("Token")
       setIsAuthenticated(false)
    }
    if(!isAuthenticated){
        return <Navigate to="/login"/>
    }
    return <>
    <button onClick={handleLogout}>LogOut</button>
    </>
}