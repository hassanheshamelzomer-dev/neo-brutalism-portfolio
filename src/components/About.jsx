import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full bg-neo-cream py-20 px-4 border-b-[3px] border-black scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12 flex items-center gap-4 text-black uppercase tracking-tight">
          <span className="material-symbols-outlined text-5xl md:text-6xl text-black">school</span>
          Education
        </h2>
        <div className="card-brutal card-brutal-hover p-8 md:p-10 flex flex-col gap-6 items-start">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4 pb-6 border-b-[3px] border-black">
            <div className="flex items-center gap-4">
              <div className="icon-box bg-neo-lavender shrink-0">
                <span className="material-symbols-outlined text-3xl">account_balance</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-black leading-tight">
                Bachelor of Science in Computers and AI
              </h3>
            </div>
            <span className="text-xl text-black font-bold bg-neo-lime px-4 py-2 border-[3px] border-black rounded-sm shadow-[4px_4px_0px_0px_#000] shrink-0 transform -rotate-2">
              Graduation: 2029
            </span>
          </div>
          
          <div className="flex flex-wrap gap-4 w-full">
             <span className="chip-brutal bg-white !cursor-default text-lg px-5 py-3">
              Cairo National University (CNU)
            </span>
            <span className="chip-brutal bg-neo-blue !cursor-default text-lg px-5 py-3">
              <span className="material-symbols-outlined text-xl">trending_up</span>
              2nd Year Student
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
