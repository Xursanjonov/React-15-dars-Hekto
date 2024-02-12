import React from 'react'

export const TrendingCard = ({url, title, price, sprice }) => {
    return (
        <div className='w-[300px] h-[300px] flex rounded-md items-center     justify-center flex-col hover:border-secondary hover:border-2 '>
            <figure className=''>
                <img src={url} />
            </figure>
            <div className="card-body text-center text-blue-500 font-semibold">
                <h6>{title}</h6>
                <p className="flex justify-center gap-4">
                    <span className=''>${price}.00</span>
                    <s className='text-gray-400'>${sprice}.00</s>
                </p>
            </div>
        </div>
    )
}
