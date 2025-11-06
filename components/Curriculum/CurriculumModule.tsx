'use client'; // Đánh dấu đây là Client Component vì dùng useState

import { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle, Clock, Briefcase } from 'lucide-react';

interface CurriculumModuleProps {
    module: string;
    title: string;
    duration: string;
    description: string;
    topics: string[];
    project: {
        title: string;
        description: string;
    };
    moduleIndex: number; // Để xác định module nào sẽ mở mặc định
}

const CurriculumModule = ({
    module,
    title,
    duration,
    description,
    topics,
    project,
    moduleIndex,
}: CurriculumModuleProps) => {
    const [isOpen, setIsOpen] = useState(moduleIndex === 0); // Module đầu tiên mở mặc định

    return (
        <div className="bg-cardBg p-6 rounded-lg shadow-xl border border-transparent hover:border-primary transition-all duration-300">
        <button
            className="flex justify-between items-center w-full focus:outline-none text-textLight"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex flex-col items-start md:flex-row md:items-center gap-2 md:gap-4">
            <span className="text-lg font-bold text-primary shrink-0">{module}:</span>
            <h3 className="text-2xl font-bold">{title}</h3>
            <span className="text-textMuted text-sm flex items-center gap-1 md:ml-4">
                <Clock size={16} /> {duration}
            </span>
            </div>
            {isOpen ? (
            <ChevronDown className="text-primary shrink-0 ml-4" size={28} />
            ) : (
            <ChevronRight className="text-primary shrink-0 ml-4" size={28} />
            )}
        </button>

        {isOpen && (
            <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-textMuted leading-relaxed mb-6">{description}</p>

            <h4 className="text-xl font-semibold mb-4 text-textLight">Key Topics:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-textLight list-none p-0">
                {topics.map((topic, i) => (
                <li key={i} className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-2 shrink-0 mt-1" />
                    <span>{topic}</span>
                </li>
                ))}
            </ul>

            <div className="mt-8 bg-darkBg p-5 rounded-md border border-gray-700 flex flex-col md:flex-row items-center gap-4">
                <Briefcase size={40} className="text-accent shrink-0" />
                <div className="text-left">
                <h4 className="text-xl font-semibold text-accent mb-1">Project: {project.title}</h4>
                <p className="text-textMuted">{project.description}</p>
                </div>
            </div>
            </div>
        )}
        </div>
    );
};

export default CurriculumModule;