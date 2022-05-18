import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  return (
    <div className='flex-col justify-between bg-header bg-center bg-cover h-screen'>
        <h1 className='text-6xl text-center '>Twitter Scraper</h1>
        <div className='absolute bottom-1.5 inset-x-0'>
        <div className='flex justify-center w-full text-6xl text-center  animate-bounce '><Link to='#search' smooth><FaChevronDown className='cursor-pointer'/></Link></div>
        </div>

    </div>
  )
}
