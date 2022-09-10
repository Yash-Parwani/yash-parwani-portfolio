import React from "react";
import Image from "next/image";


const ProjectsCard = () => {

  return (
    <div className="project-card  text-stark flex items-center ">
      <div className="project-description rounded-2xl py-2 ">
        <h3 className="text-center  text-4xl">Ipod Clone</h3>
        <p className="max-w-md mt-5">
          A Tribute to the OG music player, implementing all functionality it
          served
        </p>
        <div className="skills-used flex justify-evenly max-w-sm mt-5 ">
          <h4 className="bg-zinc-700 px-2 rounded-md w-fit">React</h4>
          <h4 className="bg-zinc-700 px-2 rounded-md w-fit">Javascript</h4>
          <h4 className="bg-zinc-700 px-2 rounded-md w-fit">CSS</h4>
          <div className="relative h-8 w-8">
            <Image src="/github.png" layout="fill"/>
            </div>
        </div>
      </div>
      <div className={`project-image relative h-80 w-52 -ml-24 `}>
        <Image src="/Ipod-White.png" layout="fill" />
      </div>
    </div>
  );
};

export default ProjectsCard;
