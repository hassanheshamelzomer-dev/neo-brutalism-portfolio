import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-[#E6F99D] py-20 px-4 border-b-[2.5px] border-black scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 flex items-center gap-4 text-black uppercase tracking-tight">
          <span className="material-symbols-outlined text-5xl text-[#800020]">work_history</span>
          Experience & Training
        </h2>
        <div className="card-brutal flex flex-col md:flex-row gap-6 items-start">
          <div className="icon-box bg-[#FF5757] text-white shrink-0">
            <span className="material-symbols-outlined text-3xl">computer</span>
          </div>
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6 border-b-[2.5px] border-black pb-6">
              <div>
                <h3 className="text-3xl font-bold text-black mb-2">Software Testing Trainee</h3>
                <p className="text-xl text-black font-bold bg-[#7DD3FC] px-2 py-1 inline-block border-2 border-black rounded shadow-[2px_2px_0px_0px_#000]">
                  Digital Egypt Pioneers Initiative (DEPI) – Round 5
                </p>
              </div>
              <div className="shrink-0">
                <span className="chip-brutal bg-[#D8B4FE] !cursor-default text-black">
                  Present
                </span>
              </div>
            </div>
            <ul className="space-y-4 text-lg font-medium text-gray-900">
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined mt-1 text-[#800020] font-bold">arrow_forward</span>
                <span>Participating in hands-on technical training focused on software testing methodologies, quality assurance, and test case design.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined mt-1 text-[#800020] font-bold">arrow_forward</span>
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
