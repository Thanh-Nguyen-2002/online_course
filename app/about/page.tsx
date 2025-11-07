"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Code, HeartHandshake } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <section className="relative py-24 bg-white text-[#1E293B] overflow-hidden">

            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/3 -left-32 w-lg h-128 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
                <div className="absolute bottom-1/3 -right-40 w-120 h-120 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-104 h-104 bg-[#F43F5E] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-28">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                        Về <span className="text-[#0EA5E9]">CoursePro</span>
                    </h1>
                    <p className="text-lg text-[#1E293B]/70 leading-relaxed">
                        Chúng tôi là cộng đồng học lập trình hiện đại, nơi kết nối những người trẻ đam mê công nghệ, 
                        học tập thông qua dự án thực tế và phát triển sự nghiệp Full-Stack Developer toàn cầu.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-[#0EA5E9]">Sứ Mệnh Của Chúng Tôi</h2>
                        <p className="text-[#1E293B]/80 leading-relaxed mb-5">
                            CoursePro ra đời với mục tiêu mang đến môi trường học tập công nghệ hiện đại, 
                            ứng dụng phương pháp “Học qua Dự án” (Project-based Learning), giúp học viên có thể:
                        </p>
                        <ul className="list-disc ml-6 space-y-2 text-[#1E293B]/70">
                            <li>Học thực chiến từ nền tảng đến chuyên sâu.</li>
                            <li>Xây dựng portfolio cá nhân để chinh phục nhà tuyển dụng.</li>
                            <li>Kết nối mentor & cộng đồng học viên năng động.</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <Image
                            src="/images/sumenh.jpg"
                            alt="Sứ mệnh CoursePro"
                            width={500}
                            height={350}
                            className="rounded-2xl shadow-[0_8px_40px_rgba(14,165,233,0.15)] object-cover"
                        />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold mb-12 text-[#0EA5E9]">
                        Giá Trị Cốt Lõi
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: Lightbulb,
                                title: "Sáng tạo & Thực tiễn",
                                desc: "Chúng tôi khuyến khích tư duy sáng tạo, giải quyết vấn đề và áp dụng công nghệ vào dự án thực tế.",
                            },
                            {
                                icon: Code,
                                title: "Học đi đôi với hành",
                                desc: "Mỗi học phần đều gắn liền với sản phẩm cụ thể – từ website, API cho đến ứng dụng thực tế.",
                            },
                            {
                                icon: HeartHandshake,
                                title: "Cộng đồng & Kết nối",
                                desc: "Chúng tôi tin rằng học tập là hành trình đồng hành – nơi mentor và học viên cùng phát triển.",
                            },
                        ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5, scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-[#0EA5E9]/10 hover:shadow-[0_0_35px_rgba(14,165,233,0.15)] transition-all"
                        >
                            <item.icon className="text-[#0EA5E9] w-12 h-12 mb-5 mx-auto" />
                            <h3 className="text-xl font-semibold mb-3 text-[#1E293B]">{item.title}</h3>
                            <p className="text-[#1E293B]/70">{item.desc}</p>
                        </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <Image
                            src="/images/about_team.png"
                            alt="Đội ngũ giảng dạy CoursePro"
                            width={500}
                            height={350}
                            className="rounded-2xl shadow-[0_8px_40px_rgba(244,63,94,0.2)] object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-[#0EA5E9]">Đội Ngũ Giảng Dạy</h2>
                        <p className="text-[#1E293B]/80 mb-5">
                            Đội ngũ mentor và giảng viên của chúng tôi đến từ các tập đoàn công nghệ lớn – 
                            những người không chỉ giỏi kỹ thuật mà còn có khả năng truyền cảm hứng học tập.
                        </p>
                        <ul className="list-disc ml-6 space-y-2 text-[#1E293B]/70">
                            <li>Senior Developer tại Google, Meta, FPT Software...</li>
                            <li>Hơn 10 năm kinh nghiệm trong phát triển web & cloud.</li>
                            <li>Đam mê giảng dạy, mentor 1-1 cho học viên.</li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mt-20"
                >
                    <Target className="w-14 h-14 text-[#F43F5E] mx-auto mb-4" />
                    <h2 className="text-4xl font-bold mb-6 text-[#0EA5E9]">Tầm Nhìn Tương Lai</h2>
                    <p className="text-lg text-[#1E293B]/70 leading-relaxed">
                        CoursePro hướng tới việc trở thành nền tảng học công nghệ hàng đầu Đông Nam Á,
                        giúp hàng triệu học viên Việt Nam làm chủ tương lai kỹ thuật số – từ lập trình viên đến nhà sáng tạo công nghệ.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
