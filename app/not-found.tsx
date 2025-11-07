"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-white text-[#1E293B] overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/4 w-md h-112 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
                <div className="absolute top-2/3 right-1/4 w-104 h-104 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/2 w-[24rem] h-96 bg-[#F43F5E] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-repeat bg-size-[10px_10px] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
            </div>

            <div className="relative z-10 text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[8rem] font-extrabold bg-linear-to-r from-[#0EA5E9] via-[#8B5CF6] to-[#F43F5E] bg-clip-text text-transparent leading-none select-none"
                >
                    404
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl md:text-2xl font-medium text-[#1E293B]/80 mb-8"
                >
                    Rất tiếc! Trang bạn đang tìm không tồn tại hoặc đã bị di chuyển 🚀
                </motion.p>

                <Link
                    href="/"
                    className="group inline-flex items-center gap-2 bg-[#0EA5E9] hover:bg-[#0369A1] text-white font-semibold py-3 px-6 rounded-full shadow-[0_0_25px_rgba(14,165,233,0.3)] transition-all duration-300"
                >
                    <Home size={22} className="group-hover:-translate-x-1 transition-transform duration-300" />
                    Quay lại trang chủ
                </Link>
            </div>
        </section>
    );
}
