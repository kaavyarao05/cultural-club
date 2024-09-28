import React from 'react'
import Image from 'next/image'
import Shine from "@/assets/shine.svg"
import ShineFill from "@/assets/shinefill.svg"
import Img1 from '@/public/teachersday/1.jpeg'
import Img2 from '@/public/teachersday/2.jpeg'
import Img3 from '@/public/teachersday/3.jpeg'
import Img4 from '@/public/teachersday/4.jpeg'
import Img5 from '@/public/teachersday/5.jpeg'
import Img6 from '@/public/teachersday/6.jpeg'
import Img7 from '@/public/teachersday/7.jpeg'
import Img8 from '@/public/teachersday/8.jpeg'


const page = () => {
  return (
    <div className='bg-black top-0 z-10 min-w-full'>
        <div className="block h-fit">
      <Image alt="Shine symbol outline" src={Shine} width={65} className='-hue-rotate-60 absolute mr-10 invert sm:right-[13%] -right-[1%] hover:scale-110 hover:rotate-45 transition:all translate-y-28'></Image>
      <Image alt="Shine symbol" src={ShineFill} width={26} className='-hue-rotate-60 absolute mr-10 invert sm:right-[10%] -right-[2%] hover:rotate-45 transition:all  translate-y-28'></Image>
      <Image alt="Shine symbol" src={ShineFill} width={80} className='-hue-rotate-60 absolute -ml-10 invert left-[20%] sm:left-[20%]  hover:scale-110 hover:rotate-45 translate-y-56'></Image>
      <Image alt="Shine symbol" src={ShineFill} width={30}  className='-hue-rotate-60 absolute -ml-10 invert left-[15%] sm:left-[20%] hover:rotate-45 transition:all  translate-y-56'></Image>
      <div className="text-center px-5 py-40">
        <h1 className=" text-wheat font-serif text-[40px] font-bold">Teachers Day</h1>
        <h6 className="text-mustard -m-2 font-semibold font-mono">5 September 2024</h6>
      </div>
    </div>
        <div className="grid gap-y-5 mx-6 py-5 m-auto justify-center">
            <Image alt="Teachers Day" src={Img8} width={640} height={427}></Image>
            <Image alt="Teachers Day" src={Img7} width={640} height={427}></Image>
            <Image alt="Teachers Day" src={Img6} width={640} height={427}></Image>
            <Image alt="Teachers Day" src={Img5} width={640} height={427}></Image>
            <Image alt="Teachers Day" src={Img4} width={640} height={427}></Image>
            <Image alt="Teachers Day" src={Img3} width={640} height={427}></Image>
            <Image alt="Teachers Day" src={Img2} width={640} height={427}></Image>
            <Image alt="Teachers Day" src={Img1} width={640} height={427}></Image>
        </div>
    </div>
    
  )
}

export default page