import React from 'react'

const ProjectCard = (props) => {
  return (
    
          <>
            <div className='lg:w-1/2 group h-full transition-all relative rounded-none overflow-hidden hover:rounded-[60px]'>
            <img className='h-full w-full object-cover' src={props.image1} alt="" />
            <div className='top-0 opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center left-0 bg-black/10 h-full w-full'>
              <h2 className='text-6xl uppercase border-4 not-first: pt-4 px-4 font-[font1] rounded-full text-white border-white'>Vior le projets</h2>
            </div>
             </div>
               <div className='lg:w-1/2 group h-full transition-all relative rounded-none overflow-hidden hover:rounded-[60px]'>
            <img className='h-full w-full object-cover' src={props.image2} alt="" />
            <div className='top-0 opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center left-0 bg-black/10 h-full w-full'>
              <h2 className='text-6xl uppercase border-4 not-first: pt-4 px-4 font-[font1] rounded-full text-white border-white'>Vior le projets</h2>
            </div>
              
          
          </div>
          </>
         
  )
}

export default ProjectCard
