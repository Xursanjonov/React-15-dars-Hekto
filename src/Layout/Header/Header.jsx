import React from 'react'
import { tabs } from './Data'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header bg-white text-black'>
      <div className="header-top px-[8rem] py-2 flex items-center justify-between bg-violet-500 text-white">
        <ul className='flex items-center justify-center gap-4'>
          <li className='flex items-center justify-center gap-4'>
            <i className="fa-regular fa-envelope text-lg"></i>
            <p>mhhasanul@gmail.com</p>
          </li>
          <li className='flex items-center justify-center gap-4'>
            <i className="fa-solid fa-phone-volume"></i>
            <p>(12345)67890</p>
          </li>
        </ul>
        <ul className='flex items-center justify-center gap-4'>
          <select className="select-secondary bg-violet-500 w-[5rem]">
            <option value="english">English</option>
            <option value="uzbek">Uzbek</option>
            <option value="Rus">Rus</option>
          </select>
          <select className="select-primary bg-violet-500 w-[5rem]">
            <option value="english">English</option>
            <option value="uzbek">Uzbek</option>
            <option value="Rus">Rus</option>
          </select>
          <button className='btn-outline text-white flex items-center justify-center gap-2 px-2 py-1'>Login <i className="fa-solid fa-user"></i></button>
          <button className='btn-outline text-white flex items-center justify-center gap-2 px-2 py-1'>Wishlist <i className="fa-solid fa-heart"></i></button>
          <button className='btn-outline text-white flex items-center justify-center gap-2 px-2 py-1'><i className="fa-solid fa-shopping-cart"></i></button>
        </ul>
      </div>
      <div className="header-bottom px-[7.8rem] py-2.5 flex items-center justify-between">
        <Link to={"/"} className='text-2xl font-bold'>Hekto</Link>
        <ul className="header-b-center flex items-center justify-center gap-6">
          {tabs?.map((item) => (
            <li>
              <Link className='link font-semibold' key={item.path} to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="header-b-end">
          <p className='flex items-center justify-center bg-cyan-300'>
            <input id="search" className='input input-sm rounded-none input-bordered input-secondary bg-white' type="search" name="searchInput" />
            <i className="fa-solid fa-search bg-pink-500 text-white flex items-center px-3 py-2"></i>
          </p>
        </div>
      </div>
    </header>
  )
}
