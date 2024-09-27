import React from 'react'
import Image from 'next/image'
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
    <div>
        <h3 className="text-center my-12 text-wheat font-serif font-bold">Teacher's Day</h3>
        <div className='grid gap-y-5 mx-6 my-8 m-auto justify-center'>
            <Image unoptimised alt="Teachers Day" src={Img8} width={640} height={427}></Image>
            <Image unoptimised alt="Teachers Day" src={Img7} width={640} height={427}></Image>
            <Image unoptimised alt="Teachers Day" src={Img6} width={640} height={427}></Image>
            <Image unoptimised alt="Teachers Day" src={Img5} width={640} height={427}></Image>
            <Image unoptimised alt="Teachers Day" src={Img4} width={640} height={427}></Image>
            <Image unoptimised alt="Teachers Day" src={Img3} width={640} height={427}></Image>
            <Image unoptimised alt="Teachers Day" src={Img2} width={640} height={427}></Image>
            <Image unoptimised alt="Teachers Day" src={Img1} width={640} height={427}></Image>
        </div>
    </div>
    
  )
}

export default page