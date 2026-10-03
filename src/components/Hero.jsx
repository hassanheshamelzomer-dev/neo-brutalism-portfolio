import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="w-full bg-neo-lavender py-16 md:py-24 px-4 border-b-[3px] border-black">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black mb-4 text-black uppercase tracking-tighter leading-[1.1]">
            Hassan <br className="hidden md:block"/> Hesham
          </h1>
          <h2 className="text-lg md:text-2xl font-bold mb-6 text-black bg-neo-coral px-4 py-2 border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_#000] inline-block">
            Software QC Engineer & AI Student
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-900 font-medium leading-relaxed max-w-xl">
            Ensuring high-quality software through robust testing methodologies. 
            Passionate about Artificial Intelligence and building resilient systems.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#projects" className="btn-brutal bg-neo-lime text-black">
              <span className="material-symbols-outlined mr-2">work</span>
              View Projects
            </a>
            <a href="#contact" className="btn-brutal bg-white text-black">
              <span className="material-symbols-outlined mr-2">mail</span>
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="flex-shrink-0 relative mt-8 md:mt-0">
          {/* Decorative background blocks to add brutalist flair and fix spacing */}
          <div className="absolute top-4 -right-4 w-48 h-48 md:w-64 md:h-64 bg-neo-blue border-[3px] border-black rounded-sm"></div>
          <div className="w-48 h-48 md:w-64 md:h-64 bg-neo-lime border-[3px] border-black shadow-[8px_8px_0px_0px_#000] rounded-sm overflow-hidden flex items-center justify-center relative z-10">
            <span className="material-symbols-outlined text-8xl md:text-[120px] text-black">engineering</span>
          </div>
        </div>
      </div>
      
      {/* Anchored FAB for CV download */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 group">
        <a href="#" className="fab-brutal bg-neo-blue text-black hover:bg-neo-lime relative">
          <span className="material-symbols-outlined">download</span>
          <span className="absolute right-full mr-4 bg-white border-2 border-black px-3 py-1 font-bold shadow-[2px_2px_0px_0px_#000] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity rounded-sm pointer-events-none hidden md:block">
            Download CV
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
