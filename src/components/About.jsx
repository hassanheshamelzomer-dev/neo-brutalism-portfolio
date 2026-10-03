import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full bg-[#FAF8F5] py-20 px-4 border-b-[2.5px] border-black scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 flex items-center gap-4 text-black uppercase tracking-tight">
          <span className="material-symbols-outlined text-5xl text-[#800020]">school</span>
          Education
        </h2>
        <div className="card-brutal flex flex-col md:flex-row gap-6 items-start">
          <div className="icon-box bg-[#D8B4FE] shrink-0">
            <span className="material-symbols-outlined text-3xl">account_balance</span>
          </div>
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
              <div>
                <h3 className="text-3xl font-bold text-black mb-2">Bachelor of Science in Computers and Artificial Intelligence</h3>
                <p className="text-xl text-gray-800 font-bold bg-[#D4FF00] px-2 py-1 inline-block border-2 border-black rounded shadow-[2px_2px_0px_0px_#000]">
                  Cairo National University (CNU)
                </p>
              </div>
              <div className="text-right md:text-left shrink-0">
                <span className="chip-brutal bg-white !cursor-default inline-block">
                  Expected Graduation: 2029
                </span>
              </div>
            </div>
            <p className="text-lg flex items-center gap-2 font-bold bg-[#7DD3FC] text-black px-4 py-2 rounded-xl border-[2.5px] border-black w-fit shadow-[2px_2px_0px_0px_#000]">
              <span className="material-symbols-outlined">trending_up</span>
              Current Status: 2nd Year Student
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
