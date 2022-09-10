import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import ProjectsCard from "../components/projectsCard";


export default function Home() {
  return (
    <div className="bg-void grid grid-cols-12 max-h-full h-full">
      <Head>
        <title>Yash-Parwani</title>
        <meta name="description" content="Yash Parwani Portfolio" />
        <link rel="icon" href="/android-chrome.png" />
      </Head>
      {/* hero section */}
      <aside className="col-span-1 "></aside>
      <section className="hero-section h-screen col-span-11 grid grid-cols-3 ">
        <article className="col-span-1 h-screen  text-stark">
          <div className="py-20">
            <h2 className="text-fuchsia-800  text-center text-6xl">
              A Developer
            </h2>
            <p className=" max-w-4xl max-w-4xl py-8 text-2xl ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="main-ctas grid grid-cols-2 gap-2">
              <a href="#projects" >
                <button className="rounded-full text-center text-3xl bg-jewel hover:bg-darkJewel text-stark py-2 h-16">
                  Projects
                </button>
              </a>
              <Link href="#">
                <button className="rounded-full text-center text-3xl bg-fuchsia-800  text-stark py-2 h-16">
                  About Me
                </button>
              </Link>
            </div>
          </div>
        </article>
        <aside className="col-span-2  flex justify-end h-fit">
          <div className="">
            <Image src="/Jason-2fuchsia-1.png" width={760} height={680} />
          </div>
        </aside>
      </section>
      {/* projects section */}
      <aside className="col-span-1"></aside>
      <section id = "projects " className="h-screen col-span-10 flex flex-col items-center  ">
       <h1 className="text-stark  h-fit text-6xl text-center w-max mb-10">Projects</h1>
      <div className="flex flex-wrap justify-evenly items-center">
          <ProjectsCard/>
          <ProjectsCard/>
          <ProjectsCard/>
          <ProjectsCard/>
      </div> 
      
           
           
       
      
       
      </section>
      <aside className="col-span-1"></aside>
      <section className="text-stark text-center w-fit mt-10">
        <div>
          <h1 className="text-7xl w-128">Like What you see?</h1>
          <h3 className="text-4xl mt-5">Lets Work Together</h3>
          <Link href="#" >
                <button className="rounded-full text-center text-3xl mt-10 w-52 bg-jewel mx-auto text-stark py-2 h-16">
                  Contact Me
                </button>
              </Link>

        </div>
      </section>
      {/* footer */}
      <div className="col-span-12 h-fit w">
          <Footer />

      </div>
      
    
    </div>
  );
}
