"use client";
import { ChevronRight, ChevronDown, CheckCircle, Sparkles } from "lucide-react";
import { useState } from "react";

const modules = [
    {
        title: "Module 1: HTML & CSS Fundamentals",
        description: "Nắm vững cấu trúc website, styling với Tailwind CSS.",
        lessons: [
            "Build responsive layouts",
            "CSS Grid & Flexbox",
            "Introduction to Tailwind CSS",
        ],
    },
    {
        title: "Module 2: JavaScript & DOM Manipulation",
        description: "Học JavaScript cơ bản và cách tương tác với DOM.",
        lessons: ["Core JS concepts", "DOM Events", "Create dynamic UIs"],
    },
    {
        title: "Module 3: React.js - The Basics",
        description: "Xây dựng giao diện người dùng hiện đại với React.",
        lessons: ["Components & Props", "State & Hooks", "Routing with React Router"],
    },
    {
        title: "Module 4: Backend with Node.js & Express",
        description: "Phát triển API và xử lý logic phía server.",
        lessons: [
            "RESTful APIs",
            "Authentication & Authorization",
            "Database Integration (MongoDB)",
        ],
    },
];

export default function CourseCurriculumPreview() {
    const [openModule, setOpenModule] = useState<number | null>(0);
    const toggleModule = (index: number) =>
        setOpenModule(openModule === index ? null : index);

    return (
        <section className="relative py-24 bg-[#0F172A] text-[#E2E8F0] overflow-hidden border-t border-0.5 border-[#6366F1]/20">

            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,#6366F1_0%,transparent_70%),
            radial-gradient(circle_at_80%_80%,#8B5CF6_0%,transparent_70%)]">
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(99,103,241,0.1)_0%,transparent_100%),radial-gradient(circle_at_60%_60%,rgba(249,116,23,0.1)_0%,transparent_100%)]"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-3">
                        <Sparkles size={32} className="text-[#F97316]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
                        Khám phá lộ trình học tập của bạn
                    </h2>
                    <p className="text-lg text-[#94A3B8]">
                        Từng bước chinh phục hành trình học <span className="text-[#F97316]">30 ngày</span>.
                    </p>
                </div>

                {/* timeline layout */}
                <div className="relative before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:bg-linear-to-b before:from-[#6366F1] before:via-[#8B5CF6] before:to-[#F97316] before:opacity-70">
                {modules.map((module, index) => {
                    const isOpen = openModule === index;
                    const isLeft = index % 2 === 0;
                    return (
                    <div
                        key={index}
                        className={`relative mb-14 flex flex-col md:flex-row ${
                        isLeft ? "md:justify-start" : "md:justify-end"
                        }`}
                    >
                        {/* Dot index */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#6366F1] border-4 border-[#0F172A] flex items-center justify-center z-10">
                        <span className="text-[11px] font-bold text-white">
                            {index + 1}
                        </span>
                        </div>

                        {/* Card */}
                        <div
                        className={`md:w-[46%] mt-8 md:mt-0 ${
                            isLeft ? "md:mr-auto md:pl-0" : "md:ml-auto md:pr-0"
                        }`}
                        >
                        <div
                            className={`bg-[#1E293B] rounded-2xl shadow-lg p-6 md:p-8 border border-transparent hover:border-[#6366F1]/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition duration-300`}
                        >
                            <button
                            className="flex justify-between items-center w-full text-left"
                            onClick={() => toggleModule(index)}
                            >
                            <h3 className="text-xl md:text-2xl font-semibold text-[#E2E8F0]">
                                {module.title}
                            </h3>
                            {isOpen ? (
                                <ChevronDown className="text-[#6366F1]" size={26} />
                            ) : (
                                <ChevronRight className="text-[#6366F1]" size={26} />
                            )}
                            </button>

                            {/* content */}
                            {isOpen && (
                            <div className="mt-4 pt-4 border-t border-[#334155]">
                                <p className="text-[#94A3B8] mb-3">
                                {module.description}
                                </p>
                                <ul className="space-y-2">
                                {module.lessons.map((lesson, i) => (
                                    <li
                                    key={i}
                                    className="flex items-center text-[#94A3B8]"
                                    >
                                    <CheckCircle
                                        size={18}
                                        className="text-[#22c55e] mr-2 shrink-0"
                                    />
                                    <span>{lesson}</span>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            )}
                        </div>
                        </div>
                    </div>
                    );
                })}
                </div>

                <div className="text-center mt-20">
                    <button className="bg-[#6366F1] hover:bg-[#8B5CF6] text-white font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(99,102,241,0.4)] transition duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
                        Explore Full Curriculum <ChevronRight size={22} />
                    </button>
                </div>
            </div>
        </section>
    );
}
