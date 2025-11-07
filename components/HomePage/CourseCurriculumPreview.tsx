"use client";
import { ChevronRight, ChevronDown, CheckCircle, Sparkles } from "lucide-react";
import Link from "next/link";
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
        <section className="relative py-14 bg-white text-[#1E293B] overflow-hidden">

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-3">
                        <Sparkles size={32} className="text-[#F43F5E]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-4 text-[#1E293B]">
                        Khám phá lộ trình học tập của bạn
                    </h2>
                    <p className="text-lg text-[#1E293B]/70">
                        Từng bước chinh phục hành trình học <span className="text-[#F43F5E]">30 ngày</span>.
                    </p>
                </div>

                <div className="relative before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:bg-gradient-to-b before:from-[#0EA5E9] before:via-[#0369A1] before:to-[#F43F5E] before:opacity-70">
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
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#0EA5E9] border-4 border-white flex items-center justify-center z-10">
                                <span className="text-[11px] font-bold text-white">
                                    {index + 1}
                                </span>
                            </div>

                            <div
                                className={`md:w-[46%] mt-8 md:mt-0 ${
                                    isLeft ? "md:mr-auto md:pl-0" : "md:ml-auto md:pr-0"
                                }`}
                            >
                                <div
                                    className={`bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-[#0EA5E9]/10 
                                    hover:border-[#0EA5E9]/30 hover:shadow-[0_0_25px_rgba(14,165,233,0.2)] transition duration-300`}
                                >
                                    <button
                                        className="flex justify-between items-center w-full text-left cursor-pointer"
                                        onClick={() => toggleModule(index)}
                                    >
                                        <h3 className="text-xl md:text-2xl font-semibold text-[#1E293B]">
                                            {module.title}
                                        </h3>
                                        {isOpen ? (
                                            <ChevronDown className="text-[#0EA5E9]" size={26} />
                                        ) : (
                                            <ChevronRight className="text-[#0EA5E9]" size={26} />
                                        )}
                                    </button>

                                    {isOpen && (
                                        <div className="mt-4 pt-4 border-t border-[#0EA5E9]/10">
                                            <p className="text-[#1E293B]/70 mb-3">
                                                {module.description}
                                            </p>
                                            <ul className="space-y-2">
                                                {module.lessons.map((lesson, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-center text-[#1E293B]/70"
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
                    <Link href="/curriculum">
                         <button className="bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white font-bold py-4 px-10 rounded-full 
                        text-lg shadow-[0_0_20px_rgba(244,63,94,0.3)] transition duration-300 transform hover:scale-105 
                        flex items-center gap-2 mx-auto cursor-pointer">
                            Explore Full Curriculum <ChevronRight size={22} />
                        </button>
                    </Link>
                   
                </div>
            </div>
        </section>
    );
}