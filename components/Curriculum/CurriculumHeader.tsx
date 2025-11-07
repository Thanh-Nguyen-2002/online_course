"use client";

import { BookOpenText, Target, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function CurriculumHeader() {
    return (
        <section className="relative overflow-hidden bg-white text-center py-12 md:py-36">

            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-20 w-96 h-96 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F43F5E] rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
            </div> 

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto mb-8 w-24 h-24 flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-linear-to-r from-[#0EA5E9] to-[#0369A1] rounded-full blur-md opacity-80 animate-pulse-slow"></div>
                    <BookOpenText size={56} className="text-[#1E293B] relative z-10" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
                >
                    <span className="bg-linear-to-r from-[#0EA5E9] via-[#0369A1] to-[#F43F5E] bg-clip-text text-transparent">
                        Lộ Trình Học Toàn Diện
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-[#1E293B]/70 max-w-2xl mx-auto mb-8"
                >
                    Hành trình từ người mới bắt đầu đến chuyên gia Full-Stack.  
                    Từng module được thiết kế khoa học, thực tế và truyền cảm hứng.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex items-center justify-center gap-3 text-[#1E293B] text-base md:text-lg"
                >
                    <Target size={26} className="text-[#F43F5E]" />
                    <span>Gồm hơn 8 Module – 250+ Giờ Nội Dung Chất Lượng</span>
                </motion.div>

                <div className="flex flex-col mt-16 items-center gap-2 text-[#1E293B]/70">
                    <span className="text-sm tracking-widest">KHÁM PHÁ LỘ TRÌNH</span>
                    <ArrowDown size={22} className="text-[#0EA5E9] animate-bounce" />
                </div>
            </div>
        </section>
    );
}