"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail, Phone, User, BookOpen, CheckCircle, Sparkles } from "lucide-react";

export default function CourseRegisterPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section className="relative py-24 bg-white text-[#1E293B] overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-120 h-120 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
                <div className="absolute bottom-1/4 -right-40 w-md h-112 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[24rem] h-96 bg-[#F43F5E] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 text-center mb-20 max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-center mb-4">
                        <Sparkles className="text-[#F43F5E]" size={32} />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-linear-to-r from-[#0EA5E9] via-[#8B5CF6] to-[#F43F5E] bg-clip-text text-transparent">
                        Đăng ký khóa học ngay hôm nay
                        </span>
                    </h1>
                    <p className="text-lg text-[#1E293B]/70">
                        Gia nhập cộng đồng hơn{" "}
                        <span className="text-[#0EA5E9] font-semibold">1,000+ học viên</span>{" "}
                        đã làm chủ lập trình cùng Dev Academy.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 max-w-5xl mx-auto bg-white/90 backdrop-blur-lg shadow-[0_10px_50px_rgba(14,165,233,0.15)] border border-[#0EA5E9]/10 rounded-3xl p-10 md:p-16"
            >
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block font-semibold text-[#1E293B] mb-2">Họ và tên</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 text-[#0EA5E9]" size={20} />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Nguyễn Văn A"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#0EA5E9]/20 focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/30 transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block font-semibold text-[#1E293B] mb-2">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 text-[#0EA5E9]" size={20} />
                                    <input
                                        type="email"
                                        required
                                        placeholder="example@gmail.com"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#0EA5E9]/20 focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/30 transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block font-semibold text-[#1E293B] mb-2">Số điện thoại</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 text-[#0EA5E9]" size={20} />
                                    <input
                                        type="tel"
                                        required
                                        placeholder="0912 345 678"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#0EA5E9]/20 focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/30 transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block font-semibold text-[#1E293B] mb-2">Chọn khóa học</label>
                                <div className="relative">
                                    <BookOpen className="absolute left-3 top-3 text-[#0EA5E9]" size={20} />
                                    <select
                                        required
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#0EA5E9]/20 focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/30 transition-all outline-none"
                                    >
                                        <option value="">-- Chọn khóa học --</option>
                                        <option value="frontend">Frontend React</option>
                                        <option value="backend">Backend Node.js</option>
                                        <option value="fullstack">Full-Stack Web Developer</option>
                                        <option value="uiux">Thiết kế UI/UX</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block font-semibold text-[#1E293B] mb-2">Ghi chú (tùy chọn)</label>
                            <textarea
                                rows={4}
                                placeholder="Bạn muốn chia sẻ thêm điều gì với chúng tôi?"
                                className="w-full px-4 py-3 rounded-xl border border-[#0EA5E9]/20 focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/30 transition-all outline-none resize-none"
                            ></textarea>
                        </div>

                        <div className="text-center pt-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="inline-flex items-center justify-center gap-3 bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white 
                                font-semibold py-4 px-10 rounded-full shadow-[0_0_25px_rgba(244,63,94,0.3)] transition-all duration-300 cursor-pointer"
                            >
                                Gửi thông tin đăng ký
                                <ArrowRight size={22} />
                            </motion.button>
                        </div>
                    </form>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                    >
                        <CheckCircle size={60} className="text-green-500" />
                        <h3 className="text-3xl font-bold text-[#1E293B]">Đăng ký thành công!</h3>
                        <p className="text-[#1E293B]/70">
                            Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ trong thời gian sớm nhất để xác nhận và gửi thông tin chi tiết khóa học. 💌
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
}
