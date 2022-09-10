import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import ProjectsCard from "../components/projectsCard";
import SkillCard from "../components/skillCard";

export default function AboutMe() {
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
          I am currently enrolled at SRM in a four-year curriculum for BTECH in
          Computer Science and Engineering with a Specialization in Software
          Engineering. I firmly believe in the adage <span className="text-2xl ">&quot;Attitude is Altitude.&ldquo;</span>
          There will be times when I do not have a solution, but because of my
          positive attitude and problem-solving abilities, I am confident that I
          will be the first to solve it. I enjoy learning new technologies and
          creating new things.
        </p>
      </section>
      <aside className="col-span-1"></aside>


      <aside className="col-span-1"></aside>
      <section className="skill-section mt-20 w-full text-stark h-fit col-span-10 flex-col items-center  rounded-2xl ">
        <h1 className="  h-fit text-6xl text-center w-max mb-10">
          My Skills
        </h1>
        <div className="skills flex flex-wrap">
           
        <SkillCard src={"/cpp.png"} text={"CPP"} height={128} width={128}/>
         <SkillCard src={"/dsa.png"} text={"DSA"}height={128} width={128}/>
        <SkillCard src={"/html.png"} text={"HTML"}height={128} width={128}/>
        <SkillCard src={"/css.png"} text={"CSS"}height={128} width={128}/>
        <SkillCard src={"/tailwind.png"} text={"TailwindCSS"} height={128} width={128}/>
        <SkillCard src={"/javascript.png"} text={"Javascript"} height={128} width={128}/>
        <SkillCard src={"/bootstrap.png"} text={"BootStrap"} height={128} width={128}/>
        <SkillCard src={"/react.png"} text={"ReactJs"}height={128} width={128}/>
        <SkillCard src={"/nextjs.png"} text={"NextJs"}height={200} width={512}/>
        <SkillCard src={"/figma.png"} text={"Figma"}height={128} width={128}/>
        <SkillCard src={"/firebase.png"} text={"FireBase"}height={128} width={128}/>
        <SkillCard src={"/github.png"} text={"Github"}height={128} width={128}/>
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
      <div className="col-span-12 h-fit ">
        <Footer />
      </div>
    </div>
  );
}
