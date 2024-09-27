import React from 'react'
import Image from 'next/image'
import Shine from '@/assets/shine.svg'

const council = ({title,name,image}) => {
  return (
    <div>
    <div className="pt-10 pb-5 rounded-md first-letter:text-center text-burn font-serif font-extralight bg-wheat text-center">
        <Image alt="Shine" height={30} src={Shine} className='m-auto hover:rotate-45'></Image>
        <h4>{name}</h4>
        <p className='italic bottom-0'>{title}</p>
    </div>
    <div className='py-2 bg-black rounded-b-lg mx-1'/>
    </div>
  )
}

export default council