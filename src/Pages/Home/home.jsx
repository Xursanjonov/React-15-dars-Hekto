import React from 'react'
import { HomePageHero } from './components/HomePageHero'
import { HomePageCards } from './components/homePageCards'
import { data } from './components/data'
import shopex1 from '../../assets/Shopex/shopex-1.png'
import shopex2 from '../../assets/Shopex/shopex-2.png'
import shopex3 from '../../assets/Shopex/shopex-3.png'
import shopex4 from '../../assets/Shopex/shopex-4.png'
import { Shopex } from './components/shopex'
import { Unique } from './components/Unique'

export const Home = () => {
  return (
    <>
      <HomePageHero />
      <section className='Featured bg-white px-4'>
        <h1 className='text-center text-4xl pt-8 bg-white text-black font-bold'>Featured Products</h1>
        <div className="px-[5rem] bg-transparent">
          <div className='w-full ps-1 py-12 gap-8 carousel bg-white'>
            {data.map((item) => (
              <HomePageCards id={item.id} img={item.url} price={item.price} />
            ))}
          </div>
        </div>
        <div className="bg-white w-full flex justify-center py-2 gap-2">
          <a href="#1" className="w-[2.5rem] h-[.5rem] bg-pink-500 rounded-md"></a>
          <a href="#5" className="w-[2.5rem] h-[.5rem] bg-pink-200 rounded-md"></a>
          <a href="#9" className="w-[2.5rem] h-[.5rem] bg-pink-200 rounded-md"></a>
          <a href="#13" className="w-[2.5rem] h-[.5rem] bg-pink-200 rounded-md"></a>
        </div>
      </section>
      <section className='Leatest'>
        <h1 className='text-center text-4xl pt-8 bg-white text-black font-bold'>Leatest Products</h1>
      </section>
      <section className='Shopex pt-14 bg-white'>
        <h1 className='text-center text-4xl py-4 text-black font-bold'>What Shopex Offer!</h1>
        <div className="shopex-div flex items-center justify-center gap-5 pt-[55px] pb-[135px] bg-white">
          <Shopex img={shopex1} />
          <Shopex img={shopex2} />
          <Shopex img={shopex3} />
          <Shopex img={shopex4} />
        </div>
      </section>
      <Unique />
    </>
  )
}
