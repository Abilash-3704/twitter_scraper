import React from 'react'
import HashLoader from "react-spinners/HashLoader";

export default function Spinner() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center ">
        <HashLoader size={50} color={'#00acee'} className='min-h-full' />
    </div>
  )
}
