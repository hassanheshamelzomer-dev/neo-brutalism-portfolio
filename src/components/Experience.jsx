import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-neo-lime py-20 px-4 border-b-[3px] border-black scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12 flex items-center gap-4 text-black uppercase tracking-tight">
          <span className="material-symbols-outlined text-5xl md:text-6xl text-black">work_history</span>
          Experience & Training
        </h2>
        <div className="card-brutal card-brutal-hover p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
          <div className="icon-box bg-neo-coral text-black shrink-0">
            <span className="material-symbols-outlined text-3xl">computer</span>
          </div>
          <div className="flex-grow w-full">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-5 border-b-[3px] border-black pb-5">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-black mb-3">Software Testing Trainee</h3>
                <p className="text-lg md:text-xl text-black font-bold bg-neo-blue px-3 py-1 inline-block border-2 border-black rounded-sm shadow-[2px_2px_0px_0px_#000]">
                  Digital Egypt Pioneers Initiative (DEPI) – Round 5
                </p>
              </div>
              <div className="shrink-0">
                <span className="chip-brutal bg-neo-lavender !cursor-default text-black text-lg px-4">
                  Present
                </span>
              </div>
            </div>
            <ul className="space-y-3 text-lg font-medium text-black">
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined mt-1 font-black">arrow_forward</span>
                <span>Participating in hands-on technical training focused on software testing methodologies, quality assurance, and test case design.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined mt-1 font-black">arrow_forward</span>
                <span>Collaborating with peers on practical software engineering concepts, execution routines, and defect reporting practices.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
