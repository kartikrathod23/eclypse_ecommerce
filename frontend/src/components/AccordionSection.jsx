import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "Size & Fit",
      content: "This garment is tailored for a slim fit. True to size.",
    },
    {
      title: "Delivery & Returns",
      content: "Free delivery within 3-5 business days. 30-day return policy.",
    },
    {
      title: "How This Was Made",
      content: "Made with sustainably sourced wool and ethical labor practices.",
    },
  ];

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white divide-y divide-gray-700 mt-20">
      {sections.map((section, index) => (
        <div key={index}>
          <button
            onClick={() => toggleSection(index)}
            className="w-full h-40 flex justify-between items-center px-4 py-4 text-left focus:outline-none"
          >
            <span className="text-3xl">{section.title}</span>
            {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-2xl text-gray-300">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;
