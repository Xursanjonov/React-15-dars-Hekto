import React from 'react'
import '../home.css'

export const Shopex = ({img}) => {
  return (
      <div className="card card-shopex w-64 bg-white text-black">
          <figure className="px-10 pt-10">
              <img src={img} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
              <h2 className="card-title">24/7 Support</h2>
              <p className='text-gray-300 w-[13rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
      </div>
  )
}
