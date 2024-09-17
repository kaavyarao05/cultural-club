import Image from "next/image";
import Shine from "@/assets/shine.svg"
import ShineFill from "@/assets/shinefill.svg"
import ArrowDown from "@/assets/arrowdown.svg"

function title(){
  return(
    <div className="block h-fit">
      
      {/*<Image className="absolute sm:-translate-y-1/4 -z-9 max-w-full" src={TitleImage} ></Image>*/}
      <Image src={Shine} width={65} className='-hue-rotate-60 absolute mr-10 invert sm:left-[10%] left-[20%] hover:scale-110 hover:rotate-45 transition:all translate-y-32'></Image>
      <Image src={ShineFill} width={26} className='-hue-rotate-60 absolute mr-10 invert sm:left-[8%] left-[15%] hover:rotate-45 transition:all  translate-y-32'></Image>
      <Image src={ShineFill} width={80} className='-hue-rotate-60 absolute mr-10 invert -right-[5%] sm:right-[10%]  hover:scale-110 hover:rotate-45 translate-y-60'></Image>
      <Image src={ShineFill} width={30}  className='-hue-rotate-60 absolute mr-10 invert -right-[5%] sm:right-[8%] hover:rotate-45 transition:all  translate-y-60'></Image>
      <div className="text-center px-5 py-40">
        <h1 className=" text-wheat font-serif drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] font-bold">Cultural Club</h1>
        <h6 className="text-mustard -m-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] font-semibold font-mono">St Joseph Engineering College, Mangalore</h6>
      </div>
    </div>
  )
}

function clubButton(text){
  return(
      <a className="sm:inline text-center block hover:scale-110 border-4 border-wheat hover:bg-olive font-serif mx-2 font-extralight text-wheat bg-burn py-3 px-5 my-5 rounded-3xl" href={text}>{text}</a>
  )
}

function Objectives(){
  return(
    <div className="-my-5 ">
      <h4 className="bg-mustard hover:text-olive transition-all lg:mx-10 pt-3 px-5 rounded-t text-black">Objectives</h4>
      <p className="py-3 px-5 hover:text-olive transition-all bg-mustard lg:mx-10 font-serif font-extralight rounded-b text-black">
        To nurture the inclusive community through art, literature and culture. <br />
        To mould the personality of students and expose them to a wide range of cultural
        events throughout the year. 
      </p>
    </div>
  )
}

function Responsibilities(){
  return(
    <div className="sm:my-20 my-10 sm:mb-0 mb-32">
      <h4 className="bg-mustard hover:text-olive lg:mx-10 transition-all pt-3 px-3 sm:px-5 rounded-t text-black">Responsibilities</h4>
      <p className="py-3 hover:text-olive transition-all lg:mx-10 px-3 sm:px-5 bg-mustard font-serif font-extralight rounded-b text-black">
        To conduct various competitions related to art, literature, music and dance. <br />
        To improve the communication and organizational skills of the club members. <br />
        To engage students in their interested club and encourage them to take part in 
        various cultural activities.
      </p>
    </div>
  )
}

function activitylist(title,date,text){
  return(
    <li>
      <div className="p-3 my-10 hover:scale-105 transition-all relative mb-0 bg-wheat z-20 rounded ">  
        <div className="black"></div>
        <Image src={ShineFill} width={20} className='sm:mr-5 mr-2 my-1 -hue-rotate-60 inline -right-[5%] sm:right-[10%]'></Image>
        <h4 className="text-burn inline">
          {title}
        </h4>
        <div className="text-olive mx-10 italic text-[13px]">
          {date}
        </div>
      </div>
      <div className="text-mustard bg-black mx-2 leading-4 p-2 text-xs rounded-b-xl">
        {text}
      </div>
    </li>
  )
}

function Activities(){
  return(
    <div className="font-serif font-extralight">
      <h4 className="text-center text-[45px] text-black translate-y-16 -translate-x-[3px]">Activities</h4>
      <h4 className="text-center text-[45px] relative z-20">Activities</h4>
      <p className=" px-[5%] py-3 text-center font-serif font-extralight italic text-wheat leading-[18px]">
        Promoting a vibrant campus experience through organizing innumerable activities 
        pertaining to the performing arts and cultural activities bringing people from all 
        walks, interests, and ethnicity come together in ways that stimulate lifelong 
        learning, and community interaction. <br />
      </p>
      <p className="px-[5%] py-3 mb-16 text-center font-serif italic text-mustard leading-[18px]">
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
      <div className="sm:inline-grid grid-cols-2 sm:mb-32 mb-40 gap-3 lg:gap-0 sm:gap-7 px-[5%] lg:px-[20%] sm:px-[10%]">
        {Objectives()}
        {Responsibilities()}
      </div>
      <Image src={ArrowDown} width={200} className="invert absolute -my-36 brightness-50 sm:visible"></Image>
      <div className="h-[10px] w-full bg-burn"/>
      <div className="bg-olive pb-28 text-mustard px-10 pt-10 py-8">  
        {Activities()}
      </div>
      <div className="h-[10px] w-full bg-burn"/>
      <h1 id="Club-List" className="text-wheat font-serif drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-[50px] font-bold text-center mt-10">Clubs</h1>
      <Image src={Shine} width={65} className='-hue-rotate-60 absolute mr-10 invert sm:left-[10%] left-[10%] hover:scale-110 hover:rotate-45 sm:-translate-y-10 transition:all'></Image>
      <Image src={ShineFill} width={26} className='-hue-rotate-60 absolute invert sm:left-[8%] left-[8%] hover:rotate-45 transition:all sm:translate-y-2 translate-y-20'></Image>
      <Image src={ShineFill} width={80} className='-hue-rotate-60 absolute mr-10 invert -right-[3%] sm:right-[3%]  hover:scale-110 hover:rotate-45 sm:translate-y-0 translate-y-60'></Image>
      <Image src={ShineFill} width={30}  className='-hue-rotate-60 absolute mr-10 invert -right-[5%] sm:right-[3%] hover:rotate-45 sm:translate-y-0 transition:all  translate-y-60'></Image>
      <div className="flex justify-center mb-32 my-10">
        <div className="">
          {clubButton("Abhaya")}
          {clubButton("Chitralekha")}
          {clubButton("Sourabha")}
        </div>
      </div>
    </div>
  );
}