import React from 'react'
import Title from '../Title';
import Subtitle from './../Subtitle';
import MenuItem from './MenuItem';
import {wine} from '../../constant/wine'
import {cocktail} from '../../constant/cocktail'
import {images} from '../../constant/img'
import Button from '../Button';

export default function Special() {
  return (
    <section id='menu' className="bg-primary py-[4rem] px-8 xl:px-48 ">
        <div className="flex flex-col items-center gap-y-8 lg:gap-y-16">
            <div className='mb-4 flex flex-col item-center justify-center '>
                <p className='text-white font-alt text-lg lg:text-2xl'>
                    Menu That Fits You Platte
                </p>
                <img src={images.spoon} alt='spoon' className='self-center'/>
            </div>
            <Title title="Today's Special" />
            
            <div className="grid gap-y-8 gap-x-12 justify-items-center lg:grid-cols-3 lg:items-start">
            {/* Wine */}    
                <div className="w-full">
                    <h2 className="specialMenu">Wine & Beer</h2>
                    <div className="grid gap-5 md:gap-10">
                        {wine.map(drink=> (
                            <MenuItem drink={drink} key={drink.name}/>
                        ))}
                    </div>
                </div>
            {/* image */}
                <div className="w-[60%] min-h-[500px] lg:w-[85%] self-end">
                    <img src={images.menu} alt="menu" className="w-full h-full"/>
                </div>
            {/* Cocktail */}
                <div className="">
                    <h2 className="specialMenu">Cocktails</h2>
                    <div className="grid gap-5 md:gap-10">
                        {cocktail.map(drink=> (
                            <MenuItem drink={drink}/>
                        ))}
                    </div>
                </div>
            </div>
            <Button name='View More'/>
        </div>

    </section>
  )
}
