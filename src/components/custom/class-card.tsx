import React from "react";

interface ClassCardProps {
  title: string;
  subtitle: string;
  tas: string;
}

const ClassCard: React.FC<ClassCardProps> = ({ title, subtitle, tas }) => {
  return (
    <div className="bg-gradient-to-r from-[#e53e3e] to-[#c53030] rounded-lg shadow-md p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-gray-200 text-sm">{subtitle}</p>
      </div>
      <div className="flex items-center justify-between mt-[5rem]">
        <p className="text-gray-200 text-sm">{tas} Teacher Assistants</p>
      </div>
    </div>
  );
};

export default ClassCard;
