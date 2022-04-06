import React from 'react'
import Button from '../Button'
import Subtitle from '../Subtitle'
import Title from '../Title'
import { images } from './../../constant/img';

export default function Contact() {
  return (
    <section id="contact" className="bg-bg bg-fixed p-common">
        <div className="w-[80%] max-w-6xl mx-auto grid place-items-start md:place-items-center md:grid-cols-2 gap-x-[2rem] lg:gap-x-[9rem]">
            <div className="">
                <div className="lg:mb-16">
                    <Subtitle title='Contact'/>
                    <Title title='Find Us'  />
                </div>
                <p className="t-gray">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                <div className='grid gap-y-4 mb-6 lg:mb-16' >
                    <p className="text-secondary font-alt text-base md:text-lg  lg:text-2xl">Opening Hours</p>
                    <p className="whiteText">Mon - Fri: 10:00 am - 02:00 am</p>
                    <p className="whiteText">Sat - Sun: 10:00 am - 03:00 am</p>
                </div>
                <Button name="Visit Us"/>
            </div>
            <div className="w-[70%] md:w-auto">
                <img src={images.contact} alt="contact" className="w-full"/>
            </div>
        </div>
    </section>
  )
}
