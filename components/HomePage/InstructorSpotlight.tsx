"use client";

import { Linkedin, Twitter, Github, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function InstructorSpotlight() {
    return (
        <section className="relative py-24 bg-[#0F172A] text-[#E2E8F0] overflow-hidden border-t border-0.5 border-[#6366F1]/20">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,#6366F1_0%,transparent_70%),
                radial-gradient(circle_at_80%_80%,#8B5CF6_0%,transparent_70%)]">
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1)_0%,transparent_70%),radial-gradient(circle_at_80%_80%,rgba(249,115,22,0.1)_0%,transparent_70%)]"></div>

            <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
                    Gặp Gỡ Người Hướng Dẫn Của Bạn
                </h2>
                <p className="text-lg text-[#94A3B8] mb-16">
                    Học hỏi từ chuyên gia trong ngành và truyền cảm hứng từ kinh nghiệm thực chiến.
                </p>

                <div className="bg-[#1E293B] rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.15)] border border-[#6366F1]/20 backdrop-blur-sm max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 p-10 transition duration-500 hover:shadow-[0_0_50px_rgba(139,92,246,0.35)] hover:border-[#8B5CF6]/40">

                    <div className="relative w-52 h-52 shrink-0 mx-auto md:mx-0">
                        <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#6366F1] to-[#8B5CF6] opacity-40 blur-2xl animate-pulse-slow"></div>
                        <div className="relative z-10 w-52 h-52 rounded-full overflow-hidden border-4 border-[#6366F1] shadow-[0_0_25px_rgba(99,102,241,0.4)]">
                        <Image
                            src="/images/anhdaidien.jpg"
                            alt="Instructor Portrait"
                            width={208}
                            height={208}
                            className="object-cover w-full h-full"
                        />
                        </div>
                    </div>
                    <div className="text-left flex-1">
                        <h3 className="text-3xl font-bold mb-2 text-[#E2E8F0]">
                            Thành Nguyễn
                        </h3>
                        <p className="text-[#6366F1] text-lg font-semibold mb-5">
                            Lead Full-Stack Developer & Mentor
                        </p>

                        <ul className="text-[#94A3B8] space-y-2 mb-8">
                            <li>🌟 10+ năm kinh nghiệm trong Web Development</li>
                            <li>🏢 Từng là Senior Engineer tại Google & Meta</li>
                            <li>⚙️ Chuyên về React, Node.js, và Cloud Architectures</li>
                            <li>💡 Đam mê giảng dạy và truyền cảm hứng cho thế hệ mới</li>
                        </ul>

                        <div className="flex gap-5 mb-8">
                            <a
                                href="#"
                                className="text-[#6366F1] hover:text-[#8B5CF6] transition-all duration-300 transform hover:scale-110"
                            >
                                <Linkedin size={28} />
                            </a>
                            <a
                                href="#"
                                className="text-[#6366F1] hover:text-[#8B5CF6] transition-all duration-300 transform hover:scale-110"
                            >
                                <Twitter size={28} />
                            </a>
                            <a
                                href="#"
                                className="text-[#6366F1] hover:text-[#8B5CF6] transition-all duration-300 transform hover:scale-110"
                            >
                                <Github size={28} />
                            </a>
                        </div>

                        <button className="group bg-[#F97316] hover:bg-[#fb923c] text-white font-bold py-3 px-8 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-300 flex items-center gap-2">
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                Khám phá hồ sơ giảng viên
                            </span>
                            <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}
