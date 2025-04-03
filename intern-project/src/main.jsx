import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DevExtreme from './DevExtreme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <DevExtreme/> */}
  </StrictMode>,
)
