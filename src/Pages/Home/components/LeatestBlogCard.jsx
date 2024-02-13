import React from 'react'

export const LeatestBlogCard = ({url, name, date, title, text, btns}) => {
    return (
        <div className='leatestBlogCard w-[300px] flex flex-col justify-center gap-3 rounded-md bg-white hover:shadow-pink-500 hover:shadow-md'>
            <figure className='leatestBlogCard-img w-full object-contain'>
                <img className='rounded-md' src={url} alt="image 1" />
            </figure>
            <div className="leatestBlogCard-title px-2.5 pb-6">
                <div className="mt-2 mb-3 flex items-center justify-start gap-4 text-sm">
                    <p className='flex items-center gap-2'> <i className="text-pink-500 fa-solid fa-pen-nib"></i> <span>{name}</span> </p>
                    <p className='flex items-center gap-2'> <i class="text-orange-400 fa-solid fa-calendar-days"></i> <span>{date}</span> </p>
                </div>
                <h5 className='leatestBlogCard-text pb-2 text-md font-bold text-blue-800'>{title}</h5>
                <p className='text-sm font-medium text-gray-300'>{text}</p>
                <button className='leatestBlogCard-btn pt-3 font-medium border-b-[2px] text-blue-700 border-blue-700'>{btns}</button>
            </div>
        </div>
    )
}
