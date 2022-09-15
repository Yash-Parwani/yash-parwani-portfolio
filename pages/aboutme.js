import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import SkillCard from "../components/skillCard";

export default function AboutMe() {
  const [skills,setSkills] = useState([]);
  useEffect(() => {
    async function getSkillsData(){
      try{
        const response = await fetch("http://localhost:3000/api/skills");
        const data = await response.json();
  
        setSkills(data);
      }catch(error){
        console.log("Error in fetching skills from api . Error msg :",error);
      }
         
    }
    getSkillsData();
   
    
  }, [])

  if(skills.length == 0){
    return(

      <p>Data loading</p>
    );
  }
  console.log(skills.data.linkedIn);
  return (
    <div className="bg-void grid grid-cols-12 max-h-full h-full">
      <Head>
        <title>Yash-Parwani/About-Me</title>
        <meta
          name="description"
          content="About Yash Kishore Parwani And his Skills"
        />
        <link rel="icon" href="/android-chrome.png" />
      </Head>

      {/* about me section */}
      <aside className="col-span-1"></aside>
      <section className="My skills text-stark h-fit col-span-10 flex flex-col items-center  ">
        <h1 className="  h-fit text-6xl text-center w-max mb-10">
          About Me
        </h1>

        <h2 className="text-5xl ">Hello, my name is Yash Parwani.</h2>
        <p className=" container text-xl mt-10">
          {skills.data.aboutDescStart}<span>{skills.data.aboutDescQuote}</span>{skills.data.aboutDescEnd}
          
        </p>
      </section>
      <aside className="col-span-1"></aside>


      <aside className="col-span-1"></aside>
      <section id="skill-section " className="mt-20 w-full text-stark h-fit col-span-10 flex-col  rounded-2xl ">
        <h1 className="  h-fit text-6xl w-full text-center mb-10">
          My Skills
        </h1>
        <div className="skills flex flex-wrap justify-center">
           
        {  skills.data.skillsArr.map((skill)=>{
          
          return <SkillCard key={skill.name} src={skill.src} text={skill.name} height={skill.height} width={skill.width}/>
        })} 
      
        
  
        
        </div>
      </section>
      <aside className="col-span-1"></aside>
        
      {/* resume section */}
      <aside className="col-span-1"></aside>
      <section className=" text-stark h-fit col-span-10 flex flex-col items-center  ">
        <h1 className="  h-fit text-6xl text-center w-max mb-10">
          Resume
        </h1>

      </section>
      <aside className="col-span-1"></aside>

      {/* footer */}
      <div className="col-span-12 h-fit w">
          <Footer linkedIn={skills.data.linkedIn} github = {skills.data.github}/>

      </div>
    </div>
  );
}
