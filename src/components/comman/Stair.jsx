
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stair = (props) => {

  const currentPath = useLocation().pathname   // used for getting currentpath of page we visit provided by react router dom

  const stairParentRef = useRef(null);

  const tl = gsap.timeline() // we use this because we want to show animatim orderwise

  const pageRef = useRef(null)

  useGSAP(function(){
     tl.to(stairParentRef.current,{
      display:'block'
    })
    tl.from('.stair',{   // this is used for targeting stair animation from st to end
      height:0,
      stagger:{
        amount:-0.25
      }
    })
    tl.to('.stair',{
      y:'100%',
      stagger:{
        amount:-0.25
      }
    })
     tl.to(stairParentRef.current,{
      display:'none'
    })
    tl.to('.stair',{
      y:'0%',
    })   
    
    gsap.from(pageRef.current,{
      opacity:0,
      delay:1.3,
      scale:1.2
    })
  },[currentPath])     // dependency to provide animation on path changing [] using
  return (
  <div>
      <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0'>
    <div className='h-full w-full flex fixed'>
    <div className='stair h-full w-1/5 bg-black'></div>
    <div className='stair h-full w-1/5 bg-black'></div>
    <div className='stair h-full w-1/5 bg-black'></div>
    <div className='stair h-full w-1/5 bg-black'></div>
    <div className='stair h-full w-1/5 bg-black'></div>
     </div>
   </div>
   <div ref={pageRef}>
    {/* first of all we create app child for stairs in main then we acces it using props child */}
    {props.children}  
   </div>
  </div>
  )
}

export default Stair
