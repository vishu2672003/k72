import React from 'react'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Agence = () => {
  const imageDivRef = useRef(null);  // by using this we get the refernece of image div
  const imageRef = useRef(null);

  const imagesArray = [
   
    
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',

  ]

  gsap.registerPlugin(ScrollTrigger)  // we use this for using scroll trigger


// use npm gsap for install gsap and use npm i @gsap/react for installing react gsap dependencies
  // hook used for animation by using gsap animation library
  useGSAP(function(){
    gsap.to(imageDivRef.current,{    // we will using it to get the element
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:'top 4%',
        end:'top -70%',
        pin:true,
        // pinSpacing:true,
        // pinReparent:true,
        pinType:'transform',
        scrub:1,
        anticipatePin:1,
        invalidateOnRefresh:true,
        // we use on update function for printing the elem when it scrolls
        onUpdate:(elem) =>{ 
          let imageIndex;    // when we scroll it updates basically elem.progress is basially the progress when we scroll 
         if(elem.progress < 1) // we use 1 bec total val of progress is 1 st 0 and end 1 
          {
            imageIndex = Math.floor(elem.progress * imagesArray.length)
         }else{
          imageIndex = imagesArray.length - 1  // it is the last ind or img of array
         }
         imageRef.current.src = imagesArray[imageIndex]

        }                
      }
      
    })
  })

  return (
  <div className='bg-white text-black'>
     <div className='section1 relative py-1'>
    <div ref={imageDivRef} className='lg:h-[20vw] h-[30vw] lg:w-[15vw] w-[25vw] overflow-hidden lg:left-[30vw] left-[30vw] lg:rounded-3xl rounded-xl lg:top-96 -top-80 absolute'>
        <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
    </div>
     <div className='relative font-[font2]'>
      <div className='lg:mt-[55vh] mt-[30vh]'>
        <h1 className='text-[19vw] uppercase leading-[15vw] text-center'>Soixan7e <br /> Douze </h1>
      </div>
      <div className='lg:pl-[40%] lg:mt-20 p-3'>
        <p className='lg:text-6xl leading-tight text-xl mt-3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
    </div>
   </div>
   <div className='section2 h-screen'>
   </div>
  </div>

  )
}

export default Agence
