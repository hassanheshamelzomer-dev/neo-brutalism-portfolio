import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-[#FAF8F5] py-20 px-4 border-b-[2.5px] border-black scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="card-brutal bg-white p-10 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 flex items-center gap-4 text-black uppercase tracking-tight">
                <span className="material-symbols-outlined text-6xl text-[#800020]">mail</span>
                Let's Connect
              </h2>
              <p className="text-xl mb-10 text-gray-900 font-bold bg-[#D4FF00] inline-block px-4 py-2 border-2 border-black rounded shadow-[2px_2px_0px_0px_#000]">
                I am open to new opportunities, collaborations, and discussions about software quality assurance and AI.
              </p>
              
              <div className="space-y-6 mb-10">
                <a href="mailto:hassan.heshamelzomer@gmail.com" className="flex items-center gap-5 text-xl font-bold text-black hover:underline group">
                  <div className="icon-box bg-[#FF5757] text-white group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">email</span>
                  </div>
                  hassan.heshamelzomer@gmail.com
                </a>
                <a href="tel:+201008752855" className="flex items-center gap-5 text-xl font-bold text-black hover:underline group">
                  <div className="icon-box bg-[#D8B4FE] text-black group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  +20 1008752855
                </a>
                <div className="flex items-center gap-5 text-xl font-bold text-black">
                  <div className="icon-box bg-[#7DD3FC] text-black">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  Giza, Egypt
                </div>
              </div>
              
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/hassan-hesham-b54bb8426" target="_blank" rel="noopener noreferrer" className="btn-brutal bg-[#D4FF00] text-black flex items-center gap-2">
                  <span className="material-symbols-outlined">work</span>
                  LinkedIn Profile
                </a>
              </div>
            </div>
            
            <form className="bg-white p-8 rounded-2xl border-[2.5px] border-black shadow-[8px_8px_0px_0px_#000] flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-[#D4FF00] rounded-full border-2 border-black flex items-center justify-center">
                  <span className="material-symbols-outlined font-bold">edit</span>
                </div>
                <h3 className="text-3xl font-bold text-black">Send a Message</h3>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-bold text-black text-lg">Name</label>
                <input type="text" id="name" placeholder="Your Name" className="input-brutal bg-[#FAF8F5]" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-bold text-black text-lg">Email</label>
                <input type="email" id="email" placeholder="your.email@example.com" className="input-brutal bg-[#FAF8F5]" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-bold text-black text-lg">Message</label>
                <textarea id="message" rows="4" placeholder="How can I help you?" className="input-brutal bg-[#FAF8F5] resize-none" required></textarea>
              </div>
              
              <button type="submit" className="btn-brutal bg-[#FF5757] text-white text-lg w-full mt-4 flex justify-center items-center gap-2 py-4">
                <span className="material-symbols-outlined">send</span>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
