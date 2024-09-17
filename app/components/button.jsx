import React from 'react'

const button = ({text,href}) => {
  return (
    <div><a className="sm:inline text-center block hover:scale-110 border-4 border-wheat hover:bg-olive font-serif mx-2 font-extralight text-wheat bg-burn py-3 px-5 my-5 rounded-3xl" href={href}>{text}</a></div>
  )
}

export default button