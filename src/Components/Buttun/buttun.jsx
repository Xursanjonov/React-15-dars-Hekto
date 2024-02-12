import React from 'react'

export const Buttun = ({title}) => {
  return (
      <button className='btn bg-pink-600 text-lg text-white px-[2.4rem] border-pink-600 rounded-md hover:bg-success hover:border-success hover:text-black'>{title}</button>
  )
}
