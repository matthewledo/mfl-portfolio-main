import React, { useState } from "react";
import { HiChevronDown, HiCode, HiTrendingUp, HiAcademicCap, HiUsers } from "react-icons/hi";

const CategoryIcons = {
  "Technical Specialization": <HiCode className="h-6 w-6 text-emerald-600" />,
  "Ecommerce & SEO": <HiTrendingUp className="h-6 w-6 text-emerald-600" />,
  "My Formation": <HiAcademicCap className="h-6 w-6 text-emerald-600" />,
  "Strategic Collaboration": <HiUsers className="h-6 w-6 text-emerald-600" />,
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const skills = {
    "Technical Specialization": 
      "I specialize in Front-End Web Development using HTML, CSS, and JavaScript, with deep expertise in Shopify Liquid, Matrixify, and Algolia for enterprise-level ecommerce platforms.",
    "Ecommerce & SEO": 
      "I have a proven track record of managing technical SEO and executing large-scale email campaigns via Listrak to over 1.1M+ subscribers, ensuring alignment between onsite UX and outbound messaging.",
    "My Formation": 
      "I hold a Bachelor of Commerce (BComm) in Marketing from Concordia University. This academic background allows me to bridge the gap between technical development and business ROI.",
    "Strategic Collaboration": 
      "I work directly with VP and President-level stakeholders, internal Merchandising teams, and external vendors like Samsung and LG to launch high-revenue digital campaigns."
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 w-full">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 whitespace-nowrap">More About Me</h2>
        <div className="h-px bg-slate-200 w-full"></div>
      </div>

      <ul className="space-y-4">
        {Object.entries(skills).map(([category, content]) => (
          <li key={category} className="w-full">
            <button
              onClick={() => toggleItem(category)}
              className={`w-full flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
                openItem === category 
                ? "border-emerald-500 bg-emerald-50/30 ring-1 ring-emerald-500" 
                : "border-slate-200 bg-white hover:border-slate-300 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between p-5 w-full">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg transition-colors ${openItem === category ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {CategoryIcons[category]}
                  </div>
                  <span className={`text-lg font-bold transition-colors ${openItem === category ? 'text-emerald-700' : 'text-slate-800'}`}>
                    {category}
                  </span>
                </div>
                <HiChevronDown 
                  className={`h-6 w-6 text-slate-400 transition-transform duration-300 ${
                    openItem === category ? "rotate-180 text-emerald-500" : ""
                  }`} 
                />
              </div>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openItem === category
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-16 pb-6 text-slate-600 leading-relaxed text-base text-left">
                  {content}
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;