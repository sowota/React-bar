import React from 'react'
import {images } from '../../constant/img'
import Subtitle from './../Subtitle';
import Title from './../Title';

export default function Chef() {
  return (
    <section className="bg-bg bg-fixed p-common">
        <div className="w-[80%] max-w-6xl mx-auto grid gap-y-5 md:grid-cols-2 md:justify-items-center gap-x-20 place-items-start md:place-items-center">
            <div className="w-[70%] self-center md:w-auto ">
                <img src={images.chef} alt="chef" />
            </div>
            <div className="flex flex-col gap-y-8 justify-center">
                <div>
                    <Subtitle title="Chef's Word"/>
                    <Title title="What We Believe In"/>
                    <div className="flex gap-x-4">
                        <img src={images.quote} alt='quote' className="w-[2rem] self-start"/>
                        <p className="t-gray my-0 italic text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
                    </div>
                </div>
                <div className=''>
                    <p className="text-secondary">Kevin Luo</p>
                    <p className='text-light-gray text-xm'>Chef & Founder</p>
                </div>
                <div className="w-[45%] md:w-[60%] lg:w-[40%]">
                    <img src={images.sign} alt='sign' className='object-contain '/>
                </div>
            </div>
        </div>
    </section>
  )
}
