import React from 'react';

const TopAppBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-black text-2xl tracking-tighter uppercase flex items-center gap-2">
          <div className="w-8 h-8 bg-[#D4FF00] border-2 border-black rounded shadow-[2px_2px_0px_0px_#000]"></div>
          Hassan Hesham
        </div>
        <nav className="hidden md:flex gap-8 font-bold text-lg">
          <a href="#about" className="hover:text-[#FF5757] hover:underline underline-offset-4 decoration-4 transition-colors">About</a>
          <a href="#experience" className="hover:text-[#FF5757] hover:underline underline-offset-4 decoration-4 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-[#FF5757] hover:underline underline-offset-4 decoration-4 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#FF5757] hover:underline underline-offset-4 decoration-4 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#FF5757] hover:underline underline-offset-4 decoration-4 transition-colors">Contact</a>
        </nav>
        <button className="md:hidden flex items-center justify-center p-2 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] transition-all bg-[#D8B4FE]">
          <span className="material-symbols-outlined font-bold">menu</span>
        </button>
      </div>
    </header>
  );
};

export default TopAppBar;
