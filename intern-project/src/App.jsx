import { createContext, useContext, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Login from './Login'
import {LoginContext} from './LoginContext';
import ProtectedRoute from './ProtectedRoute';
import Logout from './Logout';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return<>
  
   <BrowserRouter>
   <LoginContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
   <Routes>
    <Route path="/" element={<ProtectedRoute><Home/><Logout/></ProtectedRoute>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
   </LoginContext.Provider>
   </BrowserRouter>
  </>
}
