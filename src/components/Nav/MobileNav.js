import React from 'react'
import {MdOutlineRestaurantMenu} from 'react-icons/md'

export default function MobileNav({nav, handleClose}) {
  return (
    <nav className={nav? 'open': 'hidden'}>
      <MdOutlineRestaurantMenu fontSize={27} className='text-secondary absolute top-16 right-20 cursor-pointer' onClick={()=>handleClose()}/>
      <ul className="flex flex-col justify-center items-center gap-y-8 ">
          <li className="relative" onClick={()=>handleClose()}><a href="#home" className="nav-link">Home</a></li>
          <li className="relative" onClick={()=>handleClose()}><a href="#about" className="nav-link">About</a></li>
          <li className="relative" onClick={()=>handleClose()}><a href="#menu" className="nav-link">Menu</a></li>
          <li className="relative" onClick={()=>handleClose()}><a href="#awards" className="nav-link">Awards</a></li>
          <li className="relative" onClick={()=>handleClose()}><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  )
}
