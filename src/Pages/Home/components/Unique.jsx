import React from 'react'
import homepage3 from '../../../assets/Home/homePage3.png'

export const Unique = () => {
  return (
      <section className='flex items-center justify-center shadow-xl py-8 bg-violet-100 text-black'>
          <figure className=''>
              <img src={homepage3} className='w-full' alt="Movie" />
          </figure>
          <div className="">
              <h2 className="card-title text-3xl font-bold">Unique Features Of leatest & <br /> Trending Poducts</h2>
              <p className='flex items-center gap-3 text-gray-400 font-semibold mt-4'>
                  <span className='w-[10px] h-[10px] bg-pink-500 rounded-full'></span>
                  All frames constructed with hardwood solids and laminates
              </p>
              <p className='flex items-center gap-3 text-gray-400 font-semibold'>
                  <span className='w-[10px] h-[10px] bg-blue-500 rounded-full'></span>
                  Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
              </p>
              <p className='flex items-center gap-3 text-gray-400 font-semibold'>
                  <span className='w-[10px] h-[10px] bg-green-500 rounded-full'></span>
                  Arms, backs and seats are structurally reinforced
              </p>
              <div className="btnlar flex items-center gap-4">
                  <button className='px-4 py-2 mt-[38px] rounded-sm text-white bg-pink-500'>Add To Cart</button>
                  <p className='px-4 py-2 mt-[38px] text-black flex flex-col'> <span className='font-semibold'>B&B Italian Sofa </span> <span>$32.00</span> </p>
              </div>
          </div>
      </section>
  )
}
