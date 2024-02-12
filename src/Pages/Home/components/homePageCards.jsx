import React from 'react'
import '../home.css'

export const HomePageCards = ({id, img, price}) => {
    return (
        <div id={id} className="carousel-item w-[19rem] card mx-auto bg-gray-100 text-black hover:bg-blue-500 hover:text-white">
            <figure className="object-contain w-full h-[15rem] bg-white p-[3rem]">
                <img className="bg-white" src={img} alt="Shoes" />
            </figure>
            <button className='card-btns w-[8rem] hidden items-center justify-center mx-auto mt-[-3rem] py-2 bg-green-500 text-white'>View Details</button>
            <div className="card-icons-div px-6 py-[.3rem] text-blue-500 absolute top-4 hidden items-center justify-start gap-4">
                <i className="fa-solid fa-shopping-cart"></i>
                <i className="fa-solid fa-heart"></i>
                <i className="fa-solid fa-search-plus"></i>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-pink-500 text-2xl font-bold mb-2">Cantilever chair</h2>
                <p className='flex items-center justify-center gap-2'>
                    <span className="w-[1.4rem] h-[.5rem] bg-lime-500 rounded-md"></span>
                    <span className="w-[1.4rem] h-[.5rem] bg-pink-500 rounded-md"></span>
                    <span className="span-blue-gold w-[1.4rem] h-[.5rem] bg-blue-500 rounded-md"></span>
                </p>
                <p>Code - Y523201</p>
                <p>${price}.00</p>
            </div>
        </div>
    )
}
