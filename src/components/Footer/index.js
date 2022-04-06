import React from 'react'
import {BsInstagram,BsTwitter } from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {images } from '../../constant/img'


export default function Footer() {
  return (
    <footer className='bg-primary p-common'>
      <div className='grid place-items-center gap-y-8 gap-x-8 md:grid-cols-3 mb-5 md:mb-12 lg:mb-16 '>
        <div className='flex flex-col items-center gap-y-3'>
          <h3 className='text-[#F5EFDB] font-alt text-2xl md:text-3xl lg:text-4xl'>Contact Us</h3>
          <div className='grid justify-items-center' >
            <p className='text-light-gray text-xs md:text-base'>9 W 53rd St, New York, NY 10019, USA</p>
            <p className='text-light-gray text-xs md:text-base'>+1 212-344-1230</p>
            <p className='text-light-gray text-xs md:text-base'>+1 212-554-1230</p>
          </div>
        </div>
        <div className='flex flex-col items-center gap-y-3'>
          <h2 className='font-alt uppercase text-secondary text-3xl md:text-6xl'>Gerícht</h2>
          <div className='flex flex-col justify-center'>
            <p className='text-white text-center text-x md:text-base'>"The best way to find yourself is to lose yourself in the service of others.”</p>
            <div className='self-center my-4'>
              <img src={images.spoon} alt='spoon' className='object-contain' />
            </div>
            <div className="flex gap-x-4 justify-center">
              <FaFacebookF className='socialIcons'/>
              <BsInstagram  className='socialIcons'/>
              <BsTwitter  className='socialIcons'/>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-y-3'>
          <h3 className='text-[#F5EFDB] font-alt text-2xl md:text-3xl lg:text-4xl'>Working Hours</h3>
          <div>
            <p className='text-light-gray text-xs md:text-base'>Monday-Friday: 08:00 am -12:00 am</p>
            <p className='text-light-gray text-xs md:text-base'>Saturday-Sunday: 07:00am -11:00 pm</p>
           
          </div>
        </div>
      </div>
        <p className='text-light-gray text-center text-xs md:text-base col-span-3'>2021 Gerícht. All Rights reserved.</p>
    </footer>
  )
}
