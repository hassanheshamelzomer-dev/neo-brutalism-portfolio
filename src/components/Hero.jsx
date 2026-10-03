import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="w-full bg-[#EFE5FF] py-20 px-4 border-b-[2.5px] border-black">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-[#D4FF00] rounded-full border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] mb-8 overflow-hidden flex items-center justify-center">
          <span className="material-symbols-outlined text-6xl text-black">person</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black uppercase tracking-tight">
          Hassan Hesham <span className="text-[#800020]">Hassan Zaki</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-black bg-[#FF5757] text-white px-4 py-1 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] inline-block">
          Software QC Engineer & Developer
        </h2>
        <p className="max-w-2xl text-lg mb-10 text-gray-900 font-medium leading-relaxed">
          Motivated Artificial Intelligence student at Cairo National University and Software Testing Trainee at DEPI. Aspiring AI Engineer and Tech Entrepreneur with a solid foundation in core programming, object-oriented principles, and structured problem-solving. Seeking opportunities to apply technical skills in software quality assurance and intelligent systems development while acquiring practical industry experience.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="btn-brutal bg-[#D4FF00] text-black flex items-center gap-2">
            <span className="material-symbols-outlined">work</span>
            View Projects
          </a>
          <a href="#contact" className="btn-brutal bg-white text-black flex items-center gap-2">
            <span className="material-symbols-outlined">mail</span>
            Contact Me
          </a>
        </div>
        
        {/* Anchored FAB for CV download */}
        <div className="fixed bottom-8 right-8 z-40">
          <a href="#" title="Download CV" className="fab-brutal bg-[#7DD3FC] text-black hover:bg-[#D8B4FE]">
            <span className="material-symbols-outlined">download</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
