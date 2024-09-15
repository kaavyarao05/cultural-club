import Image from "next/image";
import Shine from "@/assets/shine.svg"
import ShineFill from "@/assets/shinefill.svg"
import ArrowDown from "@/assets/arrowdown.svg"

function title(){
  return(
    <div className="block h-fit bg-black">
      
      {/*<Image className="absolute sm:-translate-y-1/4 -z-9 max-w-full" src={TitleImage} ></Image>*/}
      <Image src={Shine} width={65} className='-hue-rotate-60 absolute mr-10 invert sm:left-[10%] left-[20%] translate-y-32'></Image>
      <Image src={ShineFill} width={26} className='-hue-rotate-60 absolute mr-10 invert sm:left-[8%] left-[15%] translate-y-32'></Image>
      <Image src={ShineFill} width={80} className='-hue-rotate-60 absolute mr-10 invert -right-[5%] sm:right-[10%] translate-y-60'></Image>
      <Image src={ShineFill} width={30}  className='-hue-rotate-60 absolute mr-10 invert -right-[5%] sm:right-[10%] translate-y-60'></Image>
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
      <p className="py-3 px-3 sm:px-5 bg-mustard font-serif font-extralight rounded-b text-black">
        To conduct various competitions related to art, literature, music and dance. 
        To improve the communication and organizational skills of the club members. 
        To engage students in their interested club and encourage them to take part in 
        various cultural activities.
      </p>
    </div>
  )
}

function activitylist(title,date,text){
  return(
    <li>
      <div className="p-3 hover:scale-105 transition-all relative mb-0 bg-wheat z-20 rounded my-3">  
        <div className="black"></div>
        <Image src={ShineFill} width={20} className='sm:mr-5 mr-2 my-1 -hue-rotate-60 inline -right-[5%] sm:right-[10%]'></Image>
        <h4 className="text-burn inline">
          {title}
        </h4>
        <div className="text-olive mx-10 italic text-[13px]">
          {date}
        </div>
      </div>
      <div className="text-mustard bg-black mx-2 p-2 text-sm rounded-b-xl">
        {text}
      </div>
    </li>
  )
}

function Activities(){
  return(
    <div className="font-serif font-extralight">
      <h4 className="text-center text-[35px] text-black translate-y-14 -translate-x-[3px]">Activities</h4>
      <h4 className="text-center text-[35px] relative z-20">Activities</h4>
      <p className=" px-[5%] font-serif font-extralight italic">
        Promoting a vibrant campus experience through organizing innumerable activities 
        pertaining to the performing arts and cultural activities bringing people from all 
        walks, interests, and ethnicity come together in ways that stimulate lifelong 
        learning, and community interaction.
        The club has conducted the following activities in the year 2023-24 
      </p>
      <ul className="">
          <div className="sm:mr-[30%] mr-[8%]">
            {activitylist("Inauguration of the clubs","5 April 2024 ")}
          </div>
          <div className="sm:ml-[30%] ml-[8%]">
            {activitylist("Art exhibition for Tiara","9 May 2024 - 11 May 2024")}
          </div>
          <div className="sm:mr-[30%] mr-[8%]">
            {activitylist("World Environment Day","5 June 2024 ","Competitions like face painting, short movie and nature photography on account of World Environment Day")}
          </div>
          <div className="sm:ml-[30%] ml-[8%]">
            {activitylist("World Environment Day"," 7 June 2024 ","Talk on “Environmental Sustainability on Khadi and Handloom sector” on the account of the world environment day")}
          </div>
          <div className="sm:mr-[30%] mr-[8%]">
            {activitylist("Teachers’ Day Celebration","5 September 2024")}
          </div>
        </ul>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-w-full bg-black top-0 absolute z-10">
      {title()}
      <div className="sm:inline-grid grid-cols-2 mb-10 gap-3 sm:gap-7 px-[5%] sm:px-[10%]">
        {Objectives()}
        {Responsibilities()}
      </div>
      <Image src={ArrowDown} width={200} className="invert absolute sm:-my-36 brightness-50 sm:visible invisible"></Image>
      <div className="bg-olive text-mustard px-10 pt-10 py-10">
        {Activities()}
      </div>
    </div>
  );
}
