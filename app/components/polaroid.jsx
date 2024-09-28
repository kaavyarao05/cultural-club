import React from 'react'
import Image from 'next/image'

const polaroid = ({src, width,height,alt,className,caption}) => {
  return (
    <div className={className}>
    <Image 
    className='border-white border-8'
    src={src} width={width} height={height} alt={alt}></Image>
    <h2 className='text-black -my-1 bg-white py-2 px-2 h-12'>{caption}</h2>
    </div>
  )
}

export default polaroid