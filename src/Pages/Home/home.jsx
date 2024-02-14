import React from 'react'
import { HomePageHero } from './components/HomePageHero'
import { HomePageCards } from './components/homePageCards'
import { data } from '../../Data/data'
import { Shopex } from './components/shopex'
import { Unique } from './components/Unique'
import { Leatest } from './components/Leatest'
import { Link, NavLink } from 'react-router-dom'
import tabCategory from '../../Router/productTabs'
import { TrendingCard } from './components/TrendingCard'
import { CategoryTwo } from './components/CategoryTwo'
import { TrendingCategory } from './components/TrendingCategory'
import { TopCategories } from './components/TopCategories'
import { HomeBottonHero } from './components/HomeBottonHero'
import shopex1 from '../../assets/Shopex/shopex-1.png'
import shopex2 from '../../assets/Shopex/shopex-2.png'
import shopex3 from '../../assets/Shopex/shopex-3.png'
import shopex4 from '../../assets/Shopex/shopex-4.png'
import hamkorlar from '../../assets/Home/homilar.png'
import { LeatestBlogCard } from './components/LeatestBlogCard'
import { nanoid } from 'nanoid'

export const Home = () => {

  const categoryClick = (e) => {
    e.preventDefault();

  }
  return (
    <>
      <HomePageHero />
      <section className='Featured bg-white px-4'>
        <h1 className='text-center text-4xl pt-8 bg-white text-black font-bold'>Featured Products</h1>
        <div className="px-[5rem] bg-transparent">
          <div className='w-full ps-1 py-12 gap-8 carousel bg-white'>
            {data.map((item) => (
              <HomePageCards key={item.id} id={item.id} img={item.url} price={item.price} />
            ))}
          </div>
        </div>
        <div className="bg-white w-full flex justify-center py-2 gap-2">
          <a key="item1" href="#1" className="w-[2.5rem] h-[.5rem] bg-pink-500 rounded-md"></a>
          <a key="item5" href="#5" className="w-[2.5rem] h-[.5rem] bg-pink-200 rounded-md"></a>
          <a key="item9" href="#9" className="w-[2.5rem] h-[.5rem] bg-pink-200 rounded-md"></a>
          <a key="item13" href="#13" className="w-[2.5rem] h-[.5rem] bg-pink-200 rounded-md"></a>
        </div>
      </section>
      <section className='Leatest w-full'>
        <h1 className='text-center text-4xl pt-8 bg-white text-blue-500 font-bold'>Leatest Products</h1>
        <div className='py-5 font-semibold flex items-center justify-center gap-4 bg-white text-lg'>
          {tabCategory?.map((item) => (
            <NavLink onClick={categoryClick} key={item.id} to={`/${item.path}`} className='text-blue-500'>{item.name}</NavLink>
          ))}
        </div>
        <ul className='carousel w-[100%] py-8 px-[8rem] bg-white grid grid-cols-3 gap-12'>
          {data.map((item) => (
            item.category == "NewArrival" ?
              <Leatest key={item} url={item.url} text2={item.text2} price={item.price} sprice={item.sprice} /> : ''
          ))}
        </ul>
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
      <section className='bg-white py-[8rem]'>
        <h1 className='text-center text-4xl py-8 bg-white text-blue-500 font-bold'>Trending Products</h1>
        <div className="py-[40px] flex items-center justify-center gap-[30px] bg-white">
          {data?.map((item) => (
            item.categoryName == 'Trending Products' ? <TrendingCard key={item.id} url={item.url} title={item.title} price={item.price} sprice={item.sprice} /> : ''
          ))}
        </div>
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center justify-center gap-8">
            {data?.map((item) => (
              item.category == 'Trending Products' ? <TrendingCategory text={item.text} btn={item.btn} url={item.url} /> : ''
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            {data?.map((item) => (
              item.categoryTwo == 'Trending Products' ?
                <CategoryTwo url={item.url} text={item.text} sprice={item.sprice} /> : ''
            ))}
          </div>
        </div>
      </section>
      <section className='Discount'>
        <h1 className='text-center text-4xl py-8 bg-white text-blue-600 font-bold'>Discount Item</h1>
      </section>
      <section className='Discount pt-[5rem] pb-[10rem] bg-white'>
        <h1 className='text-center text-4xl py-8 bg-white text-blue-600 font-bold'>Top Categories</h1>
        <div className="w-full py-4 flex items-center justify-around bg-white">
          {data?.map((item) => (
            item.id = 32 ? item?.products?.map((product) => (
              <TopCategories key={product.id} url={product.url} title={product.title} price={product.price} />
            )) : ''
          ))}
        </div>
        <div className="carusel-btns flex items-center pt-[4rem] justify-center gap-5">
          <p className='w-3 h-3 rounded-full bg-pink-500'></p>
          <p className='w-3 h-3 rounded-full bg-pink-300'></p>
          <p className='w-3 h-3 rounded-full bg-pink-300'></p>
        </div>
      </section>
      <HomeBottonHero />
      <section className='py-[6rem] flex items-center justify-center bg-white'>
        <img src={hamkorlar} alt="" />
      </section>
      <section className='pb-[115px] bg-white px-[5rem]'>
        <h1 className='text-center text-4xl py-8 bg-white text-blue-600 font-bold'>Leatest Blog</h1>
        <div className="mt-[5rem] flex items-center justify-center gap-[56px]">
          {data?.map((item)=> (
            item.category == 'Leatest Blog' ? <LeatestBlogCard key={item.id} id={item.id} url={item.url} name={item.name} date={item.date} title={item.title} text={item.text} btns={item.btns} /> : ''
          ))}
        </div>
      </section>
    </>
  )
}
