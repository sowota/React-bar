import React from 'react'
import {images} from '../../constant/img'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {BsInstagram} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'

export default function Carousel() {

    const items =[
        <div className="group relative carousel cursor-pointer">
            <img src={images.gallery1} className="object-cover h-full w-full  " alt='soup' />
            <div className="overlay">
                <FiInstagram className="overlayIcon"/>
            </div>
            

        </div>,
        <div className="group relative carousel cursor-pointer">
            <img src={images.gallery2} className="object-cover h-full w-full" alt='egg'/>
            <div className="overlay">
                <FiInstagram className="overlayIcon"/>
            </div>
        </div>,
        <div className="group relative carousel cursor-pointer">
            <img src={images.gallery3} className="object-cover h-full w-full" alt='drink'/>
            <div className="overlay">
                <FiInstagram className="overlayIcon"/>
            </div>
        </div>,
        <div className="group relative carousel cursor-pointer">
            <img src={images.gallery4} className="object-cover h-full w-full" alt='ramen noodle'/>
            <div className="overlay">
                <FiInstagram className="overlayIcon"/>
            </div>
        </div>
    ]

    const responsive ={
        0:{
            items:1
        },
        743:{
            items:2

        },
        
        1023:{
            items:3
        },
        1500:{
            items:4
        }



    }
  return (
    <div className="w-full overflow-hidden">
            <AliceCarousel 
            
                mouseTracking 
                items={items}
                responsive={responsive}
                disableButtonsControls={true}
                disableDotsControls={true}
                autoPlay={true}
                autoPlayInterval={3000}
                infinite={true}
           
            
            />
    </div>
  )
}
