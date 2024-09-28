import React from 'react'
import SmallButton from './SmallButton'

function Button(text,ref){
  return(
    <div className='inline-block'>
    <SmallButton text={text} href={ref}></SmallButton>
    </div>
  )
}


const Heading = () => {
  return (
    <div id="Head" className='relative z-50 bg-black'> 
      <div className='bg-wheat absolute w-full -z-10 h-[16px] text-black'/>
      <div className='py-1 px-3'>
        {Button("Home","/")}
        {Button("Club List","/#Club-List")}
      </div>
    </div>
  )
}

export default Heading