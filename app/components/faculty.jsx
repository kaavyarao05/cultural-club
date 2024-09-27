import React from 'react'
import Image from 'next/image'
import Shine from '@/assets/shinefill.svg'

const faculty = ({title,name}) => {
  return (
    <div className="pt-10 pb-5 rounded-md first-letter:text-center text-olive font-serif font-extralight bg-mustard text-center">
        <Image height={30} src={Shine} className='m-auto hover:rotate-45'></Image>
        <h4>{name}</h4>
        <p className='italic bottom-0'>{title}</p>
        
    </div>
  )
}

export default faculty