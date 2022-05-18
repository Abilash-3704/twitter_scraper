import React from 'react'
import {FaChevronUp} from 'react-icons/fa'
import { HashLink as Link } from 'react-router-hash-link'

export default function NavUpButton() {
  return (
    <div className="bg-sky-500 rounded-full fixed bottom-1.5 right-1.5 text-2xl p-2">
        <Link to='#search' smooth>
        <FaChevronUp className='cursor-poointer'/>
        </Link>
    </div>
  )
}
