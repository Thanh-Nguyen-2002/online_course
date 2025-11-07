"use client";

import { Linkedin, Twitter, Github, ChevronRight, Star, Building2, Cog, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function InstructorSpotlight() {
    return (
        <section className="relative py-14 bg-white text-[#1E293B] overflow-hidden">

            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/3 w-md h-112 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-1/3 right-1/4 w-[24rem] h-96 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute top-2/3 left-1/2 w-[20rem] h-80 bg-[#F97316] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-snug text-[#1E293B]">
                    Gặp Gỡ Người Hướng Dẫn Của Bạn
                </h2>
                <p className="text-lg text-[#1E293B]/70 mb-16">
                    Học hỏi từ chuyên gia trong ngành và truyền cảm hứng từ kinh nghiệm thực chiến.
                </p>

                <div className="bg-white rounded-2xl shadow-lg border border-[#0EA5E9]/10 backdrop-blur-sm max-w-5xl mx-auto 
                    flex flex-col md:flex-row items-center md:items-start gap-10 p-10 
                    transition duration-500 hover:shadow-[0_0_50px_rgba(14,165,233,0.2)] hover:border-[#0EA5E9]/30">

                    <div className="relative w-52 h-52 shrink-0 mx-auto md:mx-0">
                        <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#0EA5E9] to-[#0369A1] opacity-30 blur-2xl animate-pulse-slow"></div>
                        <div className="relative z-10 w-52 h-52 rounded-full overflow-hidden border-4 border-[#0EA5E9] shadow-[0_0_25px_rgba(14,165,233,0.3)]">
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
                        <h3 className="text-3xl font-bold mb-2 text-[#1E293B]">
                            Thành Nguyễn
                        </h3>
                        <p className="text-[#0EA5E9] text-lg font-semibold mb-5">
                            Lead Full-Stack Developer & Mentor
                        </p>

                        <ul className="text-[#1E293B]/70 space-y-2 mb-8">
                            <li className="flex items-center gap-2">
                                <Star className="text-yellow-500 w-5 h-5" />
                                <span>10+ năm kinh nghiệm trong Web Development</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Building2 className="text-blue-500 w-5 h-5" />
                                <span>Từng là Senior Engineer tại Google & Meta</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Cog className="text-green-500 w-5 h-5" />
                                <span>Chuyên về React, Node.js, và Cloud Architectures</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <Lightbulb className="text-amber-500 w-5 h-5" />
                                <span>Đam mê giảng dạy và truyền cảm hứng cho thế hệ mới</span>
                            </li>
                        </ul>

                        <div className="flex gap-5 mb-8">
                            <a href="#" className="text-[#0EA5E9] hover:text-[#0369A1] transition-all duration-300 transform hover:scale-110">
                                <Linkedin size={28} />
                            </a>
                            <a href="#" className="text-[#0EA5E9] hover:text-[#0369A1] transition-all duration-300 transform hover:scale-110">
                                <Twitter size={28} />
                            </a>
                            <a href="#" className="text-[#0EA5E9] hover:text-[#0369A1] transition-all duration-300 transform hover:scale-110">
                                <Github size={28} />
                            </a>
                        </div>

                        <button className="group bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white font-bold py-3 px-8 rounded-full 
                            shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all duration-300 flex items-center gap-2">
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