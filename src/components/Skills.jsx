import React from 'react';

const Skills = () => {
  const categories = [
    {
      title: 'Programming Languages',
      color: 'bg-neo-lime',
      icon: 'code',
      skills: ['C++', 'Python', 'Java', 'JavaScript']
    },
    {
      title: 'QA & QC',
      color: 'bg-neo-coral',
      icon: 'bug_report',
      skills: ['Software Testing Fundamentals', 'Manual Testing', 'Test Cases', 'Bug Reporting']
    },
    {
      title: 'Frameworks & Tools',
      color: 'bg-neo-blue',
      icon: 'build',
      skills: ['React', 'Node.js', 'Tailwind CSS']
    },
    {
      title: 'Core Concepts',
      color: 'bg-neo-lavender',
      icon: 'psychology',
      skills: ['OOP', 'Algorithms', 'Problem Solving']
    }
  ];

  return (
    <section id="skills" className="w-full bg-white py-20 px-4 border-b-[3px] border-black scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12 flex items-center gap-4 text-black uppercase tracking-tight">
          <span className="material-symbols-outlined text-5xl md:text-6xl text-black">terminal</span>
          Technical Arsenal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="card-brutal p-8 flex flex-col h-full bg-neo-cream">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b-[3px] border-black">
                <div className={`icon-box ${cat.color} shrink-0`}>
                  <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-black">{cat.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className={`px-4 py-2 text-lg font-bold text-black border-2 border-black rounded-sm shadow-[2px_2px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#000] transition-all cursor-default ${cat.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
