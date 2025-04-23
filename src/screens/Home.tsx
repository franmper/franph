import { ChevronDown } from "lucide-react";
import { projects } from "../data/projects";

import { navigate } from "wouter/use-browser-location";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="w-full h-screen flex flex-col lg:grid lg:grid-cols-12">
        <div className="w-full lg:h-full h-1/2 flex flex-col items-center justify-center lg:col-span-6 col-span-12 gap-8 px-4">
          <h1 className="text-6xl lg:text-9xl font-bold">Fran</h1>
          <p className="text-lg lg:text-3xl text-center">
            I'm an independent photographer based in Córdoba, Argentina. And this is my work
          </p>
          <ChevronDown className="w-12 h-12 animate-bounce" />
        </div>
        <img
          className="w-full lg:h-full h-1/2 object-cover lg:col-span-6 col-span-12 "
          src="/photo.jpeg"
          alt="Fran Peralta"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-6">
        <h2 className="text-4xl lg:text-6xl font-bold">Projects</h2>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-6 place-items-center">
          {projects.map((project) => (
            <div
              className="w-10/12 h-64 my-4 relative lg:col-span-6 xl:col-span-4 2xl:col-span-3 cursor-pointer group/project"
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <h3 className="text-3xl font-bold absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#252945] from-25% to-transparent p-4 group-hover/project:from-30%">
                {project.title}
              </h3>
              <img className="w-full h-full object-cover" src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
