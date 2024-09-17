import React from 'react'

const SmallButton = ({text,href}) => {
  return (
    <a className="bg-burn text-wheat hover:bg-olive px-5 border-4 border-wheat py-1 rounded-2xl font-mono font-extralight text-sm" href={href}>{text}</a>
  )
}

export default SmallButton