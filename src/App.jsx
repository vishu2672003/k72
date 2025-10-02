
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/navigation/Navbar'
import FullScreenNav from './components/navigation/FullScreenNav'


const App = () => {

  return (
    <div className='text-white overflow-x-hidden'>
         <Navbar /> 
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
   
    </div>
  )
}

export default App
