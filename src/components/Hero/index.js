import React from 'react'
import Subtitle from './../Subtitle';
import Button from './../Button';
import {images} from '../../constant/img'

export default function Hero() {
  return (
    <div id='home' className="bg-primary p-common w-screen overflow-hidden ">
        <div className="w-[80%] max-w-6xl mx-auto flex flex-col items-center mt-[6rem] md:flex-row justify-between gap-x-[10vw]">
            <div className=' max-w-lg'>
                <Subtitle title='Chase The New Flavour'/>
                <h1 className='text-secondary font-alt text-5xl lg:text-7xl leading-tight'>The key to Fine dining</h1>
                <p className='t-gray my-8 lg:text-base'>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
                <Button name="Explore Menu"/>
            </div>
            <div className="max-w-[30rem]">
                <img src={images.welcome} alt="welcome" className="object-cover w-full" />
            </div>
        </div>
    </div>
  )
}
