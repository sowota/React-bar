import React from 'react'
import Button from '../Button';
import Subtitle from '../Subtitle'
import Title from './../Title';
import { images } from './../../constant/img';

export default function Newsletter() {
  return (
    <section className="bg-bg bg-fixed py-[4rem] px-8 xl:px-48">
        <div className="w-[80%] max-w-6xl mx-auto grid place-items-center">
        <div className='mb-4 flex flex-col'>
          <p className='text-white font-alt text-lg lg:text-2xl'>Newsletter</p>
          <img src={images.spoon} alt='spoon' className='self-center'/>
        </div>
            <Title title='Subscribe To Our Newsletter'/>
            <p className='text-white text-base'>And never miss latest updates!</p>
            <div className="flex flex-col justify-center items-center gap-y-4 md:flex-row w-full gap-x-8 mt-8 md:mt-16">
                <input type='text' placeholder='Email Address' className='w-full max-w-[635px] py-2 px-3 self-start border-0 outline-none focus:ring focus:ring-secondary outline-1 outline-[#F5EFDB] placeholder:font-alt placeholder:text-light-gray bg-primary text-white'/>
                <Button name='Subscribe' />
            </div>
        </div>
    </section>
  )
}
