import React from 'react'
import chiroq from '../../../assets/Home/homePage1.png'
import stol from '../../../assets/Home/homePage2.png'
import stol3 from '../../../assets/Home/homePage3.png'
import { Buttun } from '../../../Components/Buttun/buttun'

export const HeroSliderItem = ({id, img}) => {
  return (
    <div id={id} className="carousel-item relative w-full flex items-center justify-center">
      <img className='w-[300px] absolute top-[-4rem] left-[-1rem]' src={chiroq} alt="" />
      <div className='ps-[5rem]'>
        <p className='text-pink-500 font-semibold'>Best Furniture For Your Castle....</p>
        <h1 className="text-5xl font-bold w-[40rem] text-black">New Furniture Collection Trends in 2020</h1>
        <p className="py-6 w-[36rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
          in phasellus non in justo.</p>
        <Buttun title={'Get Started'} />
      </div>
      <img src={img} className="max-w-lg" />
    </div>
  )
}

export const HomePageHero = () => {
  return (
    <main>
      <div className="carousel w-full bg-purple-100 pt-[4rem]">
        <HeroSliderItem id={'homeHero1'} img={stol} />
        <HeroSliderItem id={'homeHero2'} img={stol3} />
        <HeroSliderItem id={'homeHero3'} img={stol} />
      </div>
      <div className="pb-[1.4rem] flex items-center justify-center gap-4 bg-purple-100">
        <a href="#homeHero1" className='w-[12px] h-[12px] border-2 border-pink-500 rounded-none rotate-45 bg-pink-500'></a>
        <a href="#homeHero2" className='w-[12px] h-[12px] border-2 border-pink-500 rounded-none rotate-45'></a>
        <a href="#homeHero3" className='w-[12px] h-[12px] border-2 border-pink-500 rounded-none rotate-45'></a>
      </div>
    </main>
  )
}
