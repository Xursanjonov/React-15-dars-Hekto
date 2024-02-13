import React from 'react'
import homeBHero from '../../../assets/Home/homeBottonHero.png'

export const HomeBottonHero = () => {
    return (
        <div className="hero min-h-96" style={{ backgroundImage: `url(${homeBHero})` }}>
            <div className="hero-overlay bg-opacity-10"></div>
            <div className="max-w-md flex flex-col items-center justify-center">
                <h1 className="w-[500px] text-center mb-5 text-3xl font-bold text-blue-800">Get Leatest Update By Subscribe Our Newslater</h1>
                <button className="py-2 px-4 text-lg text-center rounded-md text-white bg-pink-600">Shop Now</button>
            </div>
        </div>
    )
}
