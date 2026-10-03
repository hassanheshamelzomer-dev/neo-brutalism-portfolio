import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio website built with React, Tailwind CSS, and Google Material Symbols. Features a custom Neo-Materialism design system blending Material 3 elements with Neo-Brutalist visual overlays.",
      image: "web",
      tags: [
        { name: "React", color: "bg-[#7DD3FC] text-black" },
        { name: "Tailwind CSS", color: "bg-[#D8B4FE] text-black" },
        { name: "JavaScript", color: "bg-[#D4FF00] text-black" }
      ],
      link: "#",
      iconBoxColor: "bg-[#FF5757]"
    }
  ];

  return (
    <section id="projects" className="w-full bg-[#BAE6FD] py-20 px-4 border-b-[2.5px] border-black scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 flex items-center gap-4 text-black uppercase tracking-tight">
          <span className="material-symbols-outlined text-5xl text-[#800020]">folder_special</span>
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="card-brutal p-0 overflow-hidden flex flex-col h-full bg-white">
              <div className="h-56 bg-[#FF5757] border-b-[2.5px] border-black flex items-center justify-center p-6 relative">
                <div className="absolute top-4 left-4 icon-box bg-[#D4FF00]">
                  <span className="material-symbols-outlined text-2xl">code</span>
                </div>
                <span className="material-symbols-outlined text-8xl text-white opacity-80">{project.image}</span>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-3xl font-bold mb-4 text-black">{project.title}</h3>
                <p className="text-gray-900 mb-8 flex-grow font-medium text-lg leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`text-sm font-bold px-3 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] ${tag.color}`}>
                      {tag.name}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} className="btn-brutal bg-[#D4FF00] text-black text-center w-full inline-block">
                  View Project Details
                </a>
              </div>
            </div>
          ))}
          
          <div className="card-brutal p-0 overflow-hidden flex flex-col h-full bg-black text-white">
            <div className="h-56 bg-gray-900 border-b-[2.5px] border-white flex items-center justify-center p-6">
              <span className="material-symbols-outlined text-8xl opacity-50 text-white">construction</span>
            </div>
            <div className="p-8 flex-grow flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl font-bold mb-4 text-white">More Projects Coming Soon</h3>
              <p className="text-gray-300 font-medium text-lg">Currently building new projects to showcase my skills in AI and Software QC.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
