import React from 'react'

export const TrendingCategory = ({ text, btn, url }) => {
    return (
        <div className="w-[420px] h-[280px] px-8 flex flex-col justify-center bg-pink-50 hover:shadow-lg hover:shadow-pink-500">
            <div className="card-titles font-semibold">
                <h6 className='text-xl text-blue-800'>{text}</h6>
                <button className="text-md text-pink-500 border-b-pink-500 border-[1px]">{btn}</button>
            </div>
            <figure className='flex items-center justify-end'>
                <img src={url} />
            </figure>
        </div>
    )
}
