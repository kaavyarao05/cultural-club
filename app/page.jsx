import Image from "next/image";

function title(){
  return(
    <div className="block p-20 text-center bg-blue-950">
      <h3 className="font-serif text-yellow-400">Cultural Club</h3>
      <h6>St Joseph Engineering College</h6>
    </div>
  )
}

function test(){
  console.log("yay");
}

function clubButton(text){
  return(
    <div className="clubbutton" >
      <a href={text}>{text}
      <p >Text</p></a>
    </div>
  )
}

function Objectives(){
  return(
    <div>
      <h4>Objectives</h4>
      <p>
        To nurture the inclusive community through art, literature and culture.
        To mould the personality of students and expose them to a wide range of cultural
        events throughout the year. 
      </p>
    </div>
  )
}

function Responsibilities(){
  return(
    <div>
      <h4>Responsibilities</h4>
      <p>
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
    <div>
      {title()}
      {Objectives()}
      {Responsibilities()}
      {Activities()}
      <div>
        {clubButton("Chitralekha")}
        {clubButton("Abhaya")}
        {clubButton("Sourabha")}
      </div>
    </div>
  );
}
