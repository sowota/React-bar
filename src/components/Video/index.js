import React, { useRef, useState } from 'react'
import {images} from '../../constant/img'
import {CgPlayButton, CgPlayPause} from 'react-icons/cg'

export default function Video() {

    const videoRef = useRef()
    const [isPlaying, setIsPlaying] = useState(false)

    const playVideo = () =>{
        setIsPlaying(prevState => !prevState)

        if(isPlaying){
            videoRef.current.pause()
        }else{
            videoRef.current.play()
        }
    }
     

  return (
    <section className="relative w-dcreen overflow-hidden">
        <video
            src={images.video}
            loop
            controls={false}
            muted
            type="video/mp4"
            ref={videoRef}
            className='relative w-full h-full object-center'
        />
        <div className='absolute inset-0 grid place-content-center bg-black/50'>
            {isPlaying ?
                <div className="cursor-pointer border border-secondary rounded-full w-16 h-16 grid place-content-center lg:w-32 lg:h-32 "  onClick={playVideo}>
                    <CgPlayPause fontSize={70} color='white'  />
                </div>
            
            :
                <div className="cursor-pointer border border-secondary rounded-full w-16 h-16 grid place-content-center lg:w-32 lg:h-32 "  onClick={playVideo}>
                    <CgPlayButton fontSize={70} color='white'/>
                </div>
            
            }
        </div>
    </section>
  )
}
