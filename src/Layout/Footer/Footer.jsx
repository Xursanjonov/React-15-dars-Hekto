import React from 'react'
import { Link } from 'react-router-dom'
import { FooterLists } from './components/footer-lists'

export const Footer = () => {
  return (
    <footer>
      <div className="footer pt-[3rem] pb-[5rem] bg-blue-100 text-black">
        <form className='px-[7.8rem] py-2.5'>
          <Link className="footer-title text-2xl">Hekto</Link>
          <div className="join">
            <input type="text" placeholder="Enter Email Address" className="input input-bordered input-secondary join-item rounded-md bg-white" />
            <button className="btn bg-pink-500 border-secondary hover:bg-success hover:border-secondary join-item rounded-md text-white text-lg px-6">Sign Up</button>
          </div>
          <p className=' mt-7'>Contact Info</p>
          <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </form>
        <FooterLists title={'Catagories'} text1={'Laptops & Computers'} text2={'Cameras & Photography'} text3={'Smart Phones & Tablets'} text4={'Video Games & Consoles'} text5={'Waterproof Headphones'} />
        <FooterLists title={'Customer Care'} text1={'My Account'} text2={'Discount'} text3={'Returns'} text4={'Orders History'} text5={'Order Tracking'} />
        <FooterLists title={'Pages'} text1={'Blog'} text2={'Browse the Shop'} text3={'Category'} text4={'Pre-Built Pages'} text5={'Visual Composer Elements'} text6={'WooCommerce Pages'} />
      </div>
      <footer className="footer flex items-center justify-evenly p-4 bg-purple-100 text-black">
        <aside>
          <p className='font-semibold text-gray-400'>©Webecy - All Rights Reserved</p>
        </aside>
        <aside className='flex items-center justify-around gap-2'>
          <i className="w-[1.6rem] h-[1.6rem] flex items-center justify-center rounded-full bg-blue-600 text-white text-md fa-brands fa-facebook-f"></i>
          <i className="w-[1.6rem] h-[1.6rem] flex items-center justify-center rounded-full bg-blue-600 text-white text-md fa-brands fa-instagram"></i>
          <i className="w-[1.6rem] h-[1.6rem] flex items-center justify-center rounded-full bg-blue-600 text-white text-md fa-brands fa-twitter"></i>
        </aside>
      </footer>
    </footer>
  )
}
