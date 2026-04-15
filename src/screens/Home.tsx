import * as React from "react";
import { ChevronDown, Mail } from "lucide-react";
import { projects } from "../data/projects";
import WelcomeModal from "../components/WelcomeModal";

import { navigate } from "wouter/use-browser-location";

const Home = () => {
  const [showWelcome, setShowWelcome] = React.useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("team") === "vcarb";
  });

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <WelcomeModal isOpen={showWelcome} onClose={() => setShowWelcome(false)} />
      <div className="w-full h-screen flex flex-col lg:grid lg:grid-cols-12">
        <div className="w-full lg:h-full h-1/2 flex flex-col items-center justify-center lg:col-span-6 col-span-12 gap-8 px-4">
          <h1 className="text-6xl lg:text-9xl font-bold">Fran</h1>
          <p className="text-lg lg:text-3xl text-center">
            Fotógrafo independiente de Córdoba, Argentina. Aficionado por la fotografía de carreras
            y paisajes.
          </p>
          <div className="flex gap-6 items-center">
            <a href="https://instagram.com/franmper" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg hover:opacity-70 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              @franmper
            </a>
            <a href="https://instagram.com/fran.mtsph" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg hover:opacity-70 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              @fran.mtsph
            </a>
            <a href="mailto:fran.mper@gmail.com" className="flex items-center gap-2 text-lg hover:opacity-70 transition-opacity">
              <Mail className="w-6 h-6" />
              fran.mper@gmail.com
            </a>
          </div>
          <ChevronDown className="w-12 h-12 animate-bounce" />
        </div>
        <img
          className="w-full lg:h-full h-1/2 object-cover lg:col-span-6 col-span-12 "
          src="/photo.jpeg"
          alt="Fran Peralta"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-6">
        <h2 className="text-4xl lg:text-6xl font-bold">Projectos</h2>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-6 place-items-center">
          {[...projects].sort((a, b) => a.order - b.order).map((project) => (
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
