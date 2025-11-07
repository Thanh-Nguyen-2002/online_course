"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, FacebookIcon, LinkedinIcon, InstagramIcon } from "lucide-react";

export default function ContactPage() {
    return (
        <section className="relative py-24 bg-white text-[#1E293B] overflow-hidden">

            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/3 -left-32 w-lg h-128 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
                <div className="absolute top-1/2 -right-40 w-120 h-120 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-104 h-104 bg-[#F43F5E] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Liên hệ <span className="text-[#0EA5E9]">với chúng tôi</span>
                    </h2>
                    <p className="text-[#1E293B]/70 text-lg mb-8 max-w-md">
                        Hãy để chúng tôi đồng hành cùng bạn trên hành trình chạm tới công nghệ tương lai.
                        Mọi thắc mắc, hỗ trợ hay hợp tác, hãy gửi tin nhắn ngay nhé!
                    </p>

                    <div className="space-y-5">
                        <div className="flex items-center gap-3">
                            <Mail className="text-[#0EA5E9] w-6 h-6" />
                            <span className="text-[#1E293B]/80">nxthanh.nb2002@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="text-[#0EA5E9] w-6 h-6" />
                            <span className="text-[#1E293B]/80">(+84) 377 648 322</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="text-[#0EA5E9] w-6 h-6" />
                            <span className="text-[#1E293B]/80">Dưỡng Hạ,Nam Hoa Lư, Ninh Bình.</span>
                        </div>
                    </div>

                    <div className="flex gap-6 mt-8">
                        {[FacebookIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="text-[#0EA5E9] hover:text-[#0369A1] transition-all duration-300 transform hover:scale-110"
                            >
                                <Icon size={28} />
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-[0_8px_40px_rgba(14,165,233,0.08)] border border-[#0EA5E9]/10"
                >
                    <form className="space-y-6">
                        <div>
                            <label className="block text-[#1E293B]/80 font-medium mb-2">Họ và tên</label>
                            <input
                                type="text"
                                placeholder="Nhập họ và tên của bạn"
                                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-[#1E293B]/80 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="example@email.com"
                                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-[#1E293B]/80 font-medium mb-2">Nội dung tin nhắn</label>
                            <textarea
                                rows={5}
                                placeholder="Mình cần hỗ trợ về..."
                                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition-all resize-none"
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex items-center justify-center gap-2 bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white font-bold py-4 px-8 
                            rounded-full shadow-[0_0_25px_rgba(244,63,94,0.3)] transition-all duration-300 w-full cursor-pointer"
                        >
                            <span>Gửi tin nhắn</span>
                            <Send size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
