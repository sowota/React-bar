import React from 'react'
import {images} from '../constant/img'

export default function Subtitle({title}) {
  return (
    <div className='mb-4 flex flex-col'>
        <p className='text-white font-alt text-lg lg:text-2xl'>{title}</p>
        <img src={images.spoon} alt='spoon' className='self-start'/>
    </div>
  )
}
