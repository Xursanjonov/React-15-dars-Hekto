import React from 'react'

export const TopCategories = ({ url, alt, title, price }) => {
    return (
        <div className='topCategories w-[300px] h-[400px] flex flex-col justify-center gap-[30px]'>
            <figure className='topCategoriesCard p-[60px] rounded-full bg-violet-50'>
                <img className='object-contain' src={url} alt={alt ? alt : ''} />
            </figure>
            <div className="topCard-title pb-[1.4rem] flex flex-col items-center justify-center gap-3 text-blue-700">
                <h6 className='text-xl font-semibold'>{title}</h6>
                <p className='text-md'>${price}.00</p>
            </div>
        </div>
    )
}
