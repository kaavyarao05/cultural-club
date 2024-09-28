import React from 'react'
import SmallButton from './SmallButton'

const Backbar = () => {
  return (
    <div className='bg-black'>
        <div className='-my-[5px] text-right pr-3'>
            <SmallButton text={"Go To Top"} href={"#Head"}></SmallButton>
        </div>
        <div className='w-full h-3 bg-wheat'>

        </div>
    </div>
  )
}

export default Backbar