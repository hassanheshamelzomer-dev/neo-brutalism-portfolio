import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12 border-t-[4px] border-[#D4FF00]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-black mb-2 uppercase tracking-tight">Hassan Hesham</h2>
          <p className="text-[#D8B4FE] font-bold text-lg">Software QC Engineer & AI Student</p>
        </div>
        
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/hassan-hesham-b54bb8426" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#FF5757] text-white rounded-xl border-[2.5px] border-white flex items-center justify-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#fff] transition-all">
            <span className="material-symbols-outlined font-bold">work</span>
          </a>
          <a href="mailto:hassan.heshamelzomer@gmail.com" className="w-12 h-12 bg-[#7DD3FC] text-black rounded-xl border-[2.5px] border-white flex items-center justify-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#fff] transition-all">
            <span className="material-symbols-outlined font-bold">mail</span>
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t-2 border-gray-800 text-center text-gray-400 font-bold">
        <p>&copy; {currentYear} Hassan Hesham Hassan Zaki. All rights reserved.</p>
        <p className="mt-2 text-sm text-[#D4FF00]">Designed with Neo-Brutalism & Neo-Materialism</p>
      </div>
    </footer>
  );
};

export default Footer;
