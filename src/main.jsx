import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stair from './components/comman/Stair.jsx'
import NavContext from './context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Stair >
   <NavContext>
     <App />
   </NavContext>
    </Stair>
    </BrowserRouter>
   
  </StrictMode>,
)
