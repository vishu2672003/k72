import React from 'react'
import ProjectCard from '../components/agence/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {

  const projects = [{
    image1:'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000',
    image2:'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b'
  },{
    image1:'https://k72.ca/images/teamMembers/MEGGIE_640X290_2.jpg?w=640&h=290&s=547adc6f80885f8627de0683f7e03362',
    image2:'https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5'
  },{
    image1:'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99',
    image2:'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124'
  },
{
  image1:'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
  image2:'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996'
},{
  image1:'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
  image2:'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47'
},{
  image1:'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda',
  image2:'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14'
}]

gsap.registerPlugin(ScrollTrigger)

useGSAP(function(){
  gsap.from('.hero',{
    height:'120px',
    stagger:{
      amount:2
    },
    scrollTrigger:{
      trigger:'.lol',
      start:'top 100%',
      end:'top -300%',
      scrub:true
    }
  })
})
  return (
    <div className='lg:p-4 p-2 mb-[100vh] bg-white text-black'>
      <div className='pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2></div>
        <div className='lol -lg:mt-20 '>
       {projects.map(function (elem,idx){
        return <div key={idx} className='hero w-full lg:h-[1040px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
         <ProjectCard image1={elem.image1} image2={elem.image2} />
         </div>
       })}
        </div>
    </div>
  )
}

export default Projects
