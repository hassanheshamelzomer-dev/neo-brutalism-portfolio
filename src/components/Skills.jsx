import React, { useState } from 'react';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const skillsData = [
    { name: 'C++', category: 'Programming Languages', icon: 'code', color: 'bg-[#D4FF00]' },
    { name: 'Python', category: 'Programming Languages', icon: 'terminal', color: 'bg-[#7DD3FC]' },
    { name: 'Java', category: 'Programming Languages', icon: 'coffee', color: 'bg-[#FF5757]' },
    { name: 'JavaScript', category: 'Programming Languages', icon: 'javascript', color: 'bg-[#D8B4FE]' },
    
    { name: 'Object-Oriented Programming (OOP)', category: 'Technical Concepts', icon: 'account_tree', color: 'bg-[#7DD3FC]' },
    { name: 'Software Testing Fundamentals', category: 'Technical Concepts', icon: 'bug_report', color: 'bg-[#FF5757]' },
    { name: 'Algorithms', category: 'Technical Concepts', icon: 'function', color: 'bg-[#D4FF00]' },
    { name: 'Problem Solving', category: 'Technical Concepts', icon: 'extension', color: 'bg-[#D8B4FE]' },
    
    { name: 'Manual Testing', category: 'QA & Testing', icon: 'fact_check', color: 'bg-[#FF5757]' },
    { name: 'Test Cases', category: 'QA & Testing', icon: 'rule', color: 'bg-[#D4FF00]' },
    { name: 'Bug Reporting', category: 'QA & Testing', icon: 'report', color: 'bg-[#7DD3FC]' },
    
    { name: 'React', category: 'Web & Frameworks', icon: 'web', color: 'bg-[#D8B4FE]' },
    { name: 'Node.js', category: 'Web & Frameworks', icon: 'dns', color: 'bg-[#D4FF00]' },
    { name: 'Tailwind CSS', category: 'Web & Frameworks', icon: 'style', color: 'bg-[#7DD3FC]' },

    { name: 'Teamwork', category: 'Soft Skills', icon: 'groups', color: 'bg-[#FF5757]' },
    { name: 'Critical Thinking', category: 'Soft Skills', icon: 'psychology', color: 'bg-[#D8B4FE]' },
    { name: 'Adaptability', category: 'Soft Skills', icon: 'transform', color: 'bg-[#D4FF00]' },
    { name: 'Communication', category: 'Soft Skills', icon: 'chat', color: 'bg-[#7DD3FC]' },
  ];

  const filters = ['All', 'Programming Languages', 'Technical Concepts', 'QA & Testing', 'Web & Frameworks', 'Soft Skills'];

  const filteredSkills = activeFilter === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="w-full bg-[#EADCFE] py-20 px-4 border-b-[2.5px] border-black scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 flex items-center gap-4 text-black uppercase tracking-tight">
          <span className="material-symbols-outlined text-5xl text-[#800020]">psychology</span>
          Skills & Expertise
        </h2>
        
        <div className="mb-10 flex flex-wrap gap-4">
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`chip-brutal ${activeFilter === filter ? 'bg-[#FF5757] text-white shadow-[2px_2px_0px_0px_#000] translate-x-[2px] translate-y-[2px]' : 'bg-white text-black hover:bg-[#D4FF00]'}`}
            >
              {activeFilter === filter && <span className="material-symbols-outlined text-sm">check</span>}
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="card-brutal flex items-center gap-4 py-4 !shadow-[4px_4px_0px_0px_#000] hover:!translate-x-[2px] hover:!translate-y-[2px] hover:!shadow-[2px_2px_0px_0px_#000]">
              <div className={`w-12 h-12 rounded-lg border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000] shrink-0 ${skill.color} ${skill.color === 'bg-[#FF5757]' ? 'text-white' : 'text-black'}`}>
                <span className="material-symbols-outlined text-2xl">{skill.icon}</span>
              </div>
              <span className="text-xl font-bold text-black">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
