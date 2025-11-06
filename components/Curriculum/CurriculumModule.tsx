"use client";

import { useState } from "react";
import {
    ChevronDown,
    ChevronRight,
    CheckCircle,
    Clock,
    Briefcase,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    moduleIndex: number;
}

export default function CurriculumModule({
    module,
    title,
    duration,
    description,
    topics,
    project,
    moduleIndex,
}: CurriculumModuleProps) {
    const [isOpen, setIsOpen] = useState(moduleIndex === 0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
        >

            <div
                className={`relative ml-6 p-px rounded-2xl transition-all duration-500 ${
                isOpen
                    ? "bg-linear-to-r from-[#6366F1] via-[#8B5CF6] to-[#F97316] shadow-[0_0_25px_rgba(99,102,241,0.25)]"
                    : "bg-[#1E293B]"
                }`}
            >
                <div className="bg-[#1E293B] rounded-2xl p-6 md:p-8 cursor-pointer hover:bg-[#1E293B]/90 transition-all duration-300">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex justify-between items-center w-full text-left cursor-pointer"
                    >
                        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                            <span className="text-lg font-bold text-[#6366F1] tracking-wide">
                                {module}
                            </span>
                            <h3 className="text-2xl font-bold text-[#E2E8F0]">
                                {title}
                            </h3>
                            <span className="flex items-center gap-1 text-sm text-[#94A3B8] md:ml-2">
                                <Clock size={16} /> {duration}
                            </span>
                        </div>

                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isOpen ? (
                                <ChevronDown
                                    size={26}
                                    className="text-[#F97316] transition-transform"
                                />
                            ) : (
                                <ChevronRight
                                    size={26}
                                    className="text-[#6366F1] transition-transform"
                                />
                            )}
                        </motion.div>
                    </button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                key="content"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="mt-6 border-t border-[#334155]/60 pt-6">
                                    <p className="text-[#94A3B8] mb-6 leading-relaxed">
                                        {description}
                                    </p>

                                    <h4 className="text-lg font-semibold mb-3 text-[#E2E8F0]">
                                        🔑 Chủ đề chính:
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-[#E2E8F0]">
                                        {topics.map((topic, i) => (
                                            <li key={i} className="flex items-start">
                                                <CheckCircle
                                                size={18}
                                                className="text-[#10B981] mr-2 mt-1 shrink-0"
                                                />
                                                <span>{topic}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 bg-[#0F172A] border border-[#6366F1]/40 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-5 shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-500">
                                        <div className="relative">
                                            <div className="absolute inset-0 blur-md bg-linear-to-r from-[#6366F1] to-[#F97316] opacity-50 rounded-full"></div>
                                            <Briefcase
                                                size={42}
                                                className="text-[#F97316] relative z-10"
                                            />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-xl font-semibold text-[#F97316] mb-1">
                                                Project: {project.title}
                                            </h4>
                                            <p className="text-[#94A3B8] leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
