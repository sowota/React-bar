import React, { useEffect, useState } from 'react'
import {images} from '../constant/img'

export default function ScrollToTop() {

    const[isVisible, setIsVisible] = useState(false)

    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 450){
                setIsVisible(true)
            }else{
                setIsVisible(false)
            }
        } )

    }, [])




  return (
    <div className={`flex flex-col items-center fixed bottom-10 right-8 cursor-pointer ${isVisible? '': 'hidden'}`}
        onClick={scrollToTop}
    >
        <img src={images.goldLine} alt="scroll to top" className="self-center"/>
        <p className="font-alt text-secondary text-base md:text-lg lg:text-xl">TOP</p>
    </div>
  )
}
