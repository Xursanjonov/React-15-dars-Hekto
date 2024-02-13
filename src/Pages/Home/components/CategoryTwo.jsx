import React from 'react'

export const CategoryTwo = ({url, text, sprice}) => {
    return (
        <div className="w-[270px] h-[74px] flex items-center justify-between bg-white hover:shadow-lg hover:shadow-pink-500">
            <figure className='w-[40%] h-[100%] bg-gray-100 flex items-center justify-center'>
                <img src={url} />
            </figure>
            <div className="card-titles px-2 text-blue-800">
                <h6 className='text-[1rem] font-semibold'>{text}</h6>
                <s className='text-[.8rem] font-medium'>${sprice}.00</s>
            </div>
        </div>
    )
}
