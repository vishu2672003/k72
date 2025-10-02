import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] mt-72 lg:mt-0 pt-5 text-center'>
      <div className='lg:text-[9.5vw] text-[11.5vw] uppercase lg:leading-[8vw] leading-[10vw] flex justify-center items-center' >L'étincelle</div>
      <div className='lg:text-[9.5vw] text-[11.5vw] uppercase lg:leading-[8vw] leading-[10vw] flex justify-center items-center'>qui  <div className='h-[8vw] rounded-full overflow-hidden'><Video /></div> génère</div>
      <div className='lg:text-[9.5vw] text-[11.5vw] uppercase lg:leading-[8vw] leading-[10vw] flex justify-center items-center'>la créativité</div>
    </div>
  )
}

export default HomeHeroText
