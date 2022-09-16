import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectsCard = (props) => {
  const { name, desc, image, skills, github, status } = props;

  return (
    <div className="project-card  text-stark flex items-center ">
      <div className="project-description rounded-2xl py-2 ">
        <h3 className="text-center  text-4xl">{name}</h3>
        <p className="max-w-md mt-5">{desc}</p>
        <div className="skills-used flex justify-evenly max-w-sm mt-5 ">
          {skills.map(skill => {
         
          return <span key={skill} className="text-center  bg-zinc-700 rounded-xl w-24">
            {skill}
          </span>
          })}
          
          <div className="relative h-8 w-8">
            <Link href={github}>
              <button>
                <Image src="/github.png" layout="fill" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={`project-image relative h-80 w-52 -ml-24 `}>
        <Image src={image} layout="fill" />
      </div>
    </div>
  );
};

export default ProjectsCard;
