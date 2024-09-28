import React from 'react'
import Image from 'next/image'

const polaroid = ({src, width,height,alt,className,caption="Placeholder Text"}) => {
  return (
    <div className={className}>
        <div className='border-black duration-500 border-[0.5px] hover:scale-105 transition-all shadow-sm shadow-black shadow-'>
        <Image 
        className='border-white border-8'
        src={src} width={width} height={height} alt={alt}></Image>
        <h2 className='font-mono italic text-black -my-1 bg-white py-2 px-2 h-12'>{caption}</h2>
        </div>
    </div>
    )
}

export default polaroid