import Image from "next/image";
import Shine from "@/assets/shine.svg"
import ShineFill from "@/assets/shinefill.svg"


function title(){
  return(
    <div className="block h-fit bg-black">
      
      {/*<Image className="absolute sm:-translate-y-1/4 -z-9 max-w-full" src={TitleImage} ></Image>*/}
      <Image src={Shine} width={65} className='-hue-rotate-60 absolute mr-10 invert sm:left-[10%] left-[14%] translate-y-32'></Image>
      <Image src={ShineFill} width={26} className='-hue-rotate-60 absolute mr-10 invert sm:left-[8%] left-[10%] translate-y-32'></Image>
      <Image src={ShineFill} width={80} className='-hue-rotate-60 absolute mr-10 invert -right-[8%] sm:right-[10%] translate-y-60'></Image>
      <Image src={ShineFill} width={30}  className='-hue-rotate-60 absolute mr-10 invert -right-[8%] sm:right-[10%] translate-y-60'></Image>
      <div className="text-center px-5 py-40">
        <h1 className="text-wheat font-serif drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] font-bold">Cultural Club</h1>
        <h6 className="text-mustard -m-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] font-semibold font-mono">St Joseph Engineering College, Mangalore</h6>
      </div>
    </div>
  )
}

function clubButton(text){
  return(
    <div className="text-black bg-mustard py-3 px-10">
      <a href={text}>{text}</a>
    </div>
  )
}

function Objectives(){
  return(
    <div className="-my-5 ">
      <h4 className="bg-mustard pt-3 px-5 rounded-t text-black">Objectives</h4>
      <p className="py-3 px-5 bg-mustard font-serif font-extralight rounded-b text-black">
        To nurture the inclusive community through art, literature and culture.
        To mould the personality of students and expose them to a wide range of cultural
        events throughout the year. 
      </p>
    </div>
  )
}

function Responsibilities(){
  return(
    <div className="my-10 ">
      <h4 className="bg-mustard pt-3 px-3 sm:px-5 rounded-t text-black">Responsibilities</h4>
      <p className="py-3 px-3 sm:px-5 bg-mustard rounded-b text-black">
        To conduct various competitions related to art, literature, music and dance. 
        To improve the communication and organizational skills of the club members. 
        To engage students in their interested club and encourage them to take part in 
        various cultural activities.
      </p>
    </div>
  )
}

function Activities(){
  return(
    <div>
      <h4>Activities</h4>
      <p>
      Promoting a vibrant campus experience through organizing innumerable activities 
      pertaining to the performing arts and cultural activities bringing people from all 
      walks, interests, and ethnicity come together in ways that stimulate lifelong 
      learning, and community interaction. 
      The club has conducted the following activities in the year 2023-24 
      1. Inauguration of the clubs – 5 April 2024 
      2. Art exhibition for Tiara – 9 May 2024- 11 May 2024 
      3. Competitions like face painting, short movie and nature photography 
      on account of World Environment Day – 5 June 2024 
      4. Talk on “Environmental Sustainability on Khadi and Handloom 
      sector” on the account of the world environment day – 7 June 2024 
      5. Teachers’ Day Celebration – 5 September 2024
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-w-full">
      {title()}
      <div className="sm:inline-grid grid-cols-2 gap-3 sm:gap-7 px-[5%] sm:px-[10%]">
        {Objectives()}
        {Responsibilities()}
      </div>
      <div className="bg-olive text-mustard">
        {Activities()}
      </div>
    </div>
  );
}
