import React from 'react'
import { Link } from 'react-router-dom'

const HomeBotttomText = () => {
  return (
    <div className='font-[font2] flex justify-center items-center gap-2'>
      <p className='absolute lg:w-[17vw] w-64 right-0 lg:right-14 bottom-20 lg:bottom-66 font-[font1] lg:text-2xl text-xs lg:leading-relaxed leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
        <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-48 flex items-center px-3 pt-1 lg:px-10 border-white rounded-full uppercase'>
             <Link className='text-[5vw] lg:mt-6' to='/projects'>Projects</Link>
        </div>
        <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-48 flex items-center px-3 pt-1 lg:px-10 border-white rounded-full uppercase'>
             <Link className='text-[5vw] lg:mt-6' to='/agence'>Agence</Link>
        </div>
      
    </div>
  )
}

export default HomeBotttomText
