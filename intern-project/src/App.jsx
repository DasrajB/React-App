import { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import DevExtreme from './DevExtreme';

export default function App() {
  return<>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/devextreme" element={<DevExtreme/>}/>
   </Routes>
   </BrowserRouter>
  </>
}
