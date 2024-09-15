import React from 'react'

function Button(text,ref){
  return(
    <a className='bg-burn px-5 py-1 rounded-2xl font-mono font-extralight text-sm' href={ref}>{text}</a>
  )
}


const Heading = () => {
  return (
    <div className='bg-wheat py-2 px-4 text-black'>
      {Button("Home","./")}
    </div>
  )
}

export default Heading