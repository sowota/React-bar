import React, {useState} from 'react'
import {images} from '../../constant/img'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import MobileNav from './MobileNav'


export default function Nav() {

    const [nav, setNav] = useState(false)
    console.log(nav)
    const handleOpen = () => {
        setNav(true)
    }
    const handleClose = () => {
        setNav(false)
    }
  return (
    <header className='bg-black/70 p-5 px-14 md:px-28 flex justify-between items-center w-screen fixed top-0 left-0 z-50 shadow-lg overflow-hidden'>
        <div className="w-[7rem]">
               <a href='#home'> <img src={images.logo} alt="logo"  /></a>
        </div>
        <nav className="hidden lg:flex items-center justify-center max-w-7xl mx-auto">
            
            <ul className="w-full flex justify-center items-center gap-x-8">
                <li className="relative"><a href="#home" className="link">Home</a></li>
                <li className="relative"><a href="#about" className="link">About</a></li>
                <li className="relative"><a href="#menu" className="link">Menu</a></li>
                <li className="relative"><a href="#awards" className="link">Awards</a></li>
                <li className="relative"><a href="#contact" className="link">Contact</a></li>
            </ul>
        
        </nav>

        <ul className='hidden md:inline-flex items-center gap-x-6'>
                <li><a href="#login" className="link hover:text-secondary hover:text-bold">Log in / Register</a></li>
                <div className='w-1 h-auto text-white'>
                    <img src={images.line} alt='line'/>
                </div>
                <li><a href="#book" className="link hover:text-secondary hover:text-bold">Book Table</a></li>
        </ul>

        <GiHamburgerMenu 
            className='w-[1.5rem] cursor-pointer text-white lg:hidden'
            onClick={()=>handleOpen()}
        />
        
       <MobileNav nav={nav} handleClose={handleClose} />
    </header>
  )
}
