import React from 'react'
import Video from '../components/agence/home/Video'
import HomeHeroText from '../components/agence/home/HomeHeroText'
import HomeBotttomText from '../components/agence/home/HomeBotttomText'

const Home = () => {
  return (
    <div>
    <div className='h-screen w-screen fixed'>
          <Video />
    </div>
    <div className='h-screen w-screen relative flex flex-col justify-between pb-5 overflow-hidden'>
        <HomeHeroText />
        <HomeBotttomText />

    </div>
    </div>
  )
}

export default Home
