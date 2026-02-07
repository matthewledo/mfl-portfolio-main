import React, { useState } from "react";

// Updated Icons for a more technical, professional look
const CategoryIcons = {
  "Tech Stack & Performance": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-600 h-6 w-6">
      <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  "Methodology & Growth": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-600 h-6 w-6">
      <line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
  ),
  "Experience & Scalability": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-600 h-6 w-6">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const skills = {
    "Tech Stack & Performance": [
      "I architect high-performance ecommerce storefronts using React, Next.js, and Astro. My technical focus is on Core Web Vitals and Page Speed, leveraging Tailwind CSS for rapid, scalable UI and Node.js/Express for robust backend integrations and API management."
    ],
    "Experience & Scalability": [
      "With a background in startups and digital consultancies, I specialize in transforming Figma designs into high-converting web experiences. I prioritize mobile-first development and SEO-driven architecture to ensure high-traffic sites remain stable and visible."
    ],
    "Methodology & Growth": [
      "I operate within Agile frameworks (Scrum/Kanban), utilizing Git-flow for clean version control and Jira for project transparency. My workflow bridges the gap between technical development and business growth metrics like conversion rate optimization (CRO)."
    ]
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="flex flex-col items-center px-4 py-20 bg-slate-50">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-slate-900 text-center text-4xl md:text-5xl font-black tracking-tight mb-4">
          Core Expertise
        </h2>
        <p className="text-slate-600 text-center mb-12 text-lg">
          Insights into my technical approach and professional background.
        </p>

        <ul className="space-y-4">
          {Object.entries(skills).map(([category, [content]]) => (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                className={`group border transition-all duration-200 rounded-xl overflow-hidden ${
                  openItem === category 
                  ? "bg-white border-emerald-200 shadow-md" 
                  : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-4 p-5 cursor-pointer">
                  <div className={`p-2 rounded-lg transition-colors ${openItem === category ? 'bg-emerald-50' : 'bg-slate-50'}`}>
                    {CategoryIcons[category] || CategoryIcons["Tech Stack & Performance"]}
                  </div>
                  
                  <div className="flex grow items-center justify-between">
                    <span className={`text-lg font-bold transition-colors ${openItem === category ? 'text-emerald-700' : 'text-slate-900'}`}>
                      {category}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`h-5 w-5 transition-transform duration-300 text-slate-400 ${
                        openItem === category ? "rotate-180 text-emerald-600" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openItem === category
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-16 pb-6 text-slate-600 leading-relaxed">
                    {content}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsList;