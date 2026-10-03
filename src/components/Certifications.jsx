import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" className="w-full bg-[#EADCFE] py-20 px-4 border-b-[2.5px] border-black scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 flex items-center gap-4 text-black uppercase tracking-tight">
          <span className="material-symbols-outlined text-5xl text-[#800020]">workspace_premium</span>
          Courses & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-brutal flex flex-col justify-between">
            <div>
              <div className="icon-box bg-[#7DD3FC] mb-6">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-black">Software Testing Track</h3>
              <p className="text-gray-900 font-bold bg-white px-3 py-1 inline-block border-2 border-black rounded shadow-[2px_2px_0px_0px_#000]">
                Digital Egypt Pioneers Initiative (DEPI)
              </p>
            </div>
          </div>
          
          <div className="card-brutal flex flex-col justify-between">
            <div>
              <div className="icon-box bg-[#D4FF00] mb-6">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-black">Object-Oriented Programming & Problem Solving</h3>
              <p className="text-gray-900 font-bold bg-white px-3 py-1 inline-block border-2 border-black rounded shadow-[2px_2px_0px_0px_#000]">
                Academic Coursework & Self-Paced Training
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
