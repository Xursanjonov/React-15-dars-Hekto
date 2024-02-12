import React from 'react'

export const Leatest = ({url, text2, price, sprice}) => {
  return (
      <div className='w-[340px] h-[340px] hover:border-secondary hover:border-2 flex flex-col justify-center items-center rounded-md bg-white text-black'>
          <figure>
              <img src={url} />
          </figure>
          <div className="px-2 mt-5 flex font-semibold items-cent gap-8 justify-between">
              <p className='text-blue-500'>{text2}</p>
              <p className='flex items-center justify-center gap-2 text-sm'>
                  <span className='text-blue-500'>${price}.00</span>
                  <s className='text-red-500'>${sprice}.00</s>
              </p>
          </div>
      </div>
  )
}
