import React from 'react'

function Button(text,ref){
  return(
    <div className='inline-block'>
    <a className="bg-burn mx-1 text-wheat hover:bg-olive px-5 border-4 border-wheat py-1 rounded-2xl font-mono font-extralight text-sm" href={ref}>{text}</a>
    </div>
  )
}


const Heading = () => {
  return (
    <div className='relative z-50'> 
      <div className='bg-wheat absolute w-full -z-10 h-[16px] text-black'/>
      <div className='py-1 px-3'>
        {Button("Home","./")}
        {Button("Club List","./#Club-List")}
      </div>
    </div>
  )
}

export default Heading