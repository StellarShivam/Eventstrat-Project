import React from "react";

const GridContent = ({ content }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-xl">
      {content.map((type, index) => (
        <div
          key={index}
          className="bg-[#DAE3EA] rounded-lg p-5 md:p-10 hover:shadow-md transition-shadow"
        >
          <h3 className="font-medium text-gray-900 mb-2">{type.title}</h3>
          <p className="text-gray-600 text-sm">{type.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GridContent;
