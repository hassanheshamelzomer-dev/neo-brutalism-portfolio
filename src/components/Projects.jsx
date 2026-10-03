import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio website built with React, Tailwind CSS, and Google Material Symbols. Features a custom Neo-Materialism design system blending Material 3 elements with Neo-Brutalist visual overlays.",
      image: "web",
      tags: [
        { name: "React", color: "bg-neo-blue text-black" },
        { name: "Tailwind CSS", color: "bg-neo-lavender text-black" },
        { name: "JavaScript", color: "bg-neo-lime text-black" }
      ],
      link: "#",
      iconBoxColor: "bg-neo-coral"
    }
  ];

  return (
    <section id="projects" className="w-full bg-[#BAE6FD] py-20 px-4 border-b-[3px] border-black scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12 flex items-center gap-4 text-black uppercase tracking-tight">
          <span className="material-symbols-outlined text-5xl md:text-6xl text-black">folder_special</span>
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <a key={index} href={project.link} className="card-brutal card-brutal-hover p-0 overflow-hidden flex flex-col h-full bg-white group cursor-pointer block">
              <div className="h-48 md:h-56 bg-neo-coral border-b-[3px] border-black flex items-center justify-center p-6 relative">
                <div className="absolute top-4 left-4 icon-box bg-neo-lime">
                  <span className="material-symbols-outlined text-2xl">code</span>
                </div>
                <span className="material-symbols-outlined text-8xl text-black opacity-80 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl md:text-3xl font-black text-black">{project.title}</h3>
                  <span className="icon-box w-10 h-10 md:w-10 md:h-10 bg-neo-lime group-hover:bg-neo-blue transition-colors">
                    <span className="material-symbols-outlined">arrow_outward</span>
                  </span>
                </div>
                
                <p className="text-black mb-8 flex-grow font-medium text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`text-sm md:text-base font-bold px-3 py-1.5 rounded-sm border-2 border-black shadow-[2px_2px_0px_0px_#000] ${tag.color}`}>
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
          
          <div className="rounded-sm border-[3px] border-dashed border-black bg-white/50 p-0 overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform">
            <div className="h-48 md:h-56 flex items-center justify-center p-6 border-b-[3px] border-dashed border-black bg-neo-cream">
              <span className="material-symbols-outlined text-8xl text-black opacity-40">construction</span>
            </div>
            <div className="p-8 flex-grow flex flex-col items-center justify-center text-center bg-white/80">
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-black">More Projects Coming Soon</h3>
              <p className="text-black font-medium text-lg">Currently building new projects to showcase my skills in AI and Software QC.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
