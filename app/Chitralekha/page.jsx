import React from 'react'
import Faculty from '../components/faculty'
import Council from '../components/council';
import SmallButton from '../components/SmallButton'
import Image from "next/image";
import Shine from "@/assets/shine.svg"
import ShineFill from "@/assets/shinefill.svg"
import ArrowDown from "@/assets/arrowdown.svg"

const page = () => {
  return (
    <div className='bg-black top-0 absolute z-10 min-w-full'>
      <div className="block h-fit">
      <Image alt="Shine symbol outline" src={Shine} width={65} className='-hue-rotate-60 absolute mr-10 invert sm:right-[13%] -right-[1%] hover:scale-110 hover:rotate-45 transition:all translate-y-28'></Image>
      <Image alt="Shine symbol" src={ShineFill} width={26} className='-hue-rotate-60 absolute mr-10 invert sm:right-[10%] -right-[2%] hover:rotate-45 transition:all  translate-y-28'></Image>
      <Image alt="Shine symbol" src={ShineFill} width={80} className='-hue-rotate-60 absolute -ml-10 invert left-[20%] sm:left-[20%]  hover:scale-110 hover:rotate-45 translate-y-56'></Image>
      <Image alt="Shine symbol" src={ShineFill} width={30}  className='-hue-rotate-60 absolute -ml-10 invert left-[15%] sm:left-[20%] hover:rotate-45 transition:all  translate-y-56'></Image>
      <div className="text-center px-5 py-40">
        <h1 className=" text-wheat font-serif text-[40px] font-bold">Chitralekha</h1>
        <h6 className="text-mustard -m-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] font-semibold font-mono">Fine Art Club</h6>
      </div>
    </div>
      <h4 className='italic text-wheat text-center mb-5'>The Faculty Coordinators</h4>
      <div className='grid sm:mb-3 mb-40 sm:grid-cols-2 grid-rows-2 gap-5 sm:gap-8 mx-[22%]'>
        <Faculty name="Ms Prajna K" title="Assistant Professor"/>
        <Faculty name="Ms Anarghya S" title="Lecturer"/>
      </div>
      <Image alt="Arrow down" src={ArrowDown} width={200} className="invert absolute -my-36 -scale-x-100 brightness-50 right-[10px] sm:visible"></Image>
 
      <div className='bg-olive text-center border-burn border-y-[10px] text-mustard'>
      <h4 className='italic pt-20 sm:pt-10 text-center mb-5'>The Student Coordinators</h4>
        <div className='grid pt-5 sm:grid-cols-2 grid-rows-2 pb-5 gap-5 sm:gap-8 mx-[22%]'>
          <Council name="Adithi K N" title="CSE"/>
          <Council name="Shreya D Suvarna" title="CSE"/>
      </div>
      </div>
        <div className='text-center py-10'>
        <SmallButton  text="Instagram" href="https://www.instagram.com/chitralekha_sjec"/>
        </div>
    </div>
  )
}

export default page