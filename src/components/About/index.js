import React from 'react'
import Title from './../Title';
import {images} from '../../constant/img'
import Button from '../Button';

export default function About() {
  return (
    <div id="about" className="bg-bg bg-fixed grid place-items-center p-common md:h-screen">
        <div className="relative grid items-center  w-[80%] md:w-[95%] max-w-6xl mx-auto">
            <div className="relative h-full ">
                <div className="w-full h-full">
                    <img src={images.g} className="mx-auto h-full" alt="background"/>
                </div>
                <div className="absolute -top-10 left-[68%] md:-top-[8rem] h-[20rem] md:left-[47%] md:h-[40rem] lg:h-[44rem] lg:left-[48%] lg:-top-[9rem]" >
                    <img src={images.knife} className="h-full" alt="knife"/>
                </div>
            </div>
            <div className="md:absolute top-80 left-0 flex flex-col md:top-[1rem] h-full md:flex-row md:gap-x-[10rem] lg:gap-x-[15rem] w-full">
                <div className="grid max-w-lg ">
                    <div className="text-secondary font-alt md:text-right text-3xl md:text-5xl lg:text-6xl">
                        About Us    
                    </div>
                    <div className="md:justify-self-end md:self-start md:rotate-180">
                        <img src={images.spoon} alt="spoon" className="object-contain"/>
                    </div>
                    <p className="t-gray md:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                    <button className='bg-secondary px-8 font-alt font-bold mb-10 justify-self-start md:justify-self-end btn'>Know More</button>
                </div>
                <div className="grid max-w-lg">
                    <div className="text-secondary font-alt text-3xl md:text-5xl lg:text-6xl">
                        Our History
                    </div>
                    <div className="">
                        <img src={images.spoon} alt="spoon" className="object-contain md:text-right"/>
                    </div>
                    <p className="t-gray">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                    
                    <button className='bg-secondary justify-self-start px-8 font-alt font-bold mb-10 btn'>Know More</button>
                   
                </div>
            </div>
        </div>
    </div>
  )
}
