import React from 'react'
import Button from '../Button'
import Subtitle from '../Subtitle'
import Title from '../Title'

import Carousel from './Carousel';

export default function Gallery() {
  return (
    <section className="bg-bg bg-fixed py-16 pl-16" >
        <div className="w-[80%] mx-auto grid gap-x-16 md:grid-cols-9 lg:w-full">
            <div className="col-span-4 lg:col-span-3">
                <div>
                    <Subtitle title='Instagram'/>
                    <Title title='Photo Gallery'/>
                </div>
            
                <p className="t-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            
                <Button name='View More'/>
            </div>
            <div className='col-span-5 lg:col-span-6 overflow-hidden'>
                <Carousel/>
            </div>
        </div>
    </section>
  )
}
