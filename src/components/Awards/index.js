import React from 'react'
import {images} from '../../constant/img'
import Subtitle from '../Subtitle'
import Title from '../Title'

export default function Awards() {
  return (
    <section id='awards' className="bg-bg bg-fixed p-common" >
        <div className='w-[5rem] lg:w-[9rem]'>
            <img src={images.mark} alt="mark" className="w-full"/>
        </div>
        <div className="grid gap-y-16 md:grid-cols-2 md:gap-x-16 w-[80%] max-w-6xl mx-auto items-center place-items-start md:place-items-center">
            <div className="flex flex-col gap-y-8 md:gap-y-16">
                <div className="grid place-content-center md:place-content-start">
                    <Subtitle title="Awards & Recognition"/>
                    <Title title="Our Laurels" />
                </div>
                <div className="grid gap-y-8 place-content-center md:grid-cols-2 md:gap-x-8">
                    <div className="flex gap-4 items-center">
                        <div className="w-20">
                            <img src={images.award2} alt="2" className="w-full"/>
                        </div>
                        <div>
                            <h3 className="text-secondary font-alt text-2xl">Bib Gourmond</h3>
                            <p className='text-light-gray text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-20">
                            <img src={images.award1} alt="1" className="w-full"/>
                        </div>
                        <div>
                            <h3 className="text-secondary font-alt text-2xl">Rising Star</h3>
                            <p className='text-light-gray text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-20">
                            <img src={images.award5} alt="5" className="w-full"/>
                        </div>
                        <div>
                            <h3 className="text-secondary font-alt text-2xl">AAA Hospitality</h3>
                            <p className='text-light-gray text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="w-20">
                            <img src={images.award3} alt="3" className="w-full"/>
                        </div>
                        <div>
                            <h3 className="text-secondary font-alt text-2xl">Outstanding Chef</h3>
                            <p className='text-light-gray text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[70%] lg:h-auto md:w-auto">
                <img src={images.laurels} className="w-full h-full" alt='laurels' />
            </div>
        </div>

    </section>
  )
}
