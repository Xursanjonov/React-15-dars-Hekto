import React from 'react'

export const TrendingCard = ({url, title, price, sprice }) => {
    return (
        <div className='w-[280px] py-4 flex rounded-md items-center bg-gray-100 justify-center flex-col hover:border-secondary hover:border-2 '>
            <figure className=''>
                <img src={url} />
            </figure>
            <div className="card-body text-center text-blue-800">
                <h6 className='text-xl font-semibold'>{title}</h6>
                <p className="flex justify-center gap-4">
                    <span className='font-medium'>${price}.00</span>
                    <s className='text-gray-300'>${sprice}.00</s>
                </p>
            </div>
        </div>
    )
}
