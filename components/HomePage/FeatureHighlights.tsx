"use client"

import { motion } from "framer-motion";
import { BookOpen, Code, Users, Lightbulb } from "lucide-react";

const features = [
    {
        icon: BookOpen,
        title: "Lộ Trình Toàn Diện",
        description: "Nắm vững từ cơ bản đến nâng cao các công nghệ cốt lõi.",
    },
    {
        icon: Code,
        title: "Dự Án Thực Tế",
        description: "Xây dựng portfolio ấn tượng với các dự án thực tế.",
    },
    {
        icon: Users,
        title: "Cộng Đồng Sôi Nổi",
        description: "Học hỏi, kết nối và chia sẻ kinh nghiệm với đồng nghiệp.",
    },
    {
        icon: Lightbulb,
        title: "Mentor Tận Tâm",
        description: "Hỗ trợ 1-1 và giải đáp mọi thắc mắc của bạn.",
    },
];

const FeatureHighlights = () => {
    return (
        <section className="relative py-14 overflow-hidden bg-white">

            <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-[#1E293B] leading-tight"
                >
                    Khám phá tiềm năng của bạn.<br />{" "}
                    <span className="bg-linear-to-r from-[#0EA5E9] to-[#0369A1] bg-clip-text text-transparent">
                        Xây dựng những ứng dụng thực tế.
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -6, scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300, damping: 18 }}
                            className="relative group rounded-2xl bg-white shadow-lg hover:shadow-[0_0_25px_rgba(14,165,233,0.2)] border border-[#0EA5E9]/10"
                        >
                            <div className="rounded-2xl h-full p-8 flex flex-col items-center text-center transition duration-300">
                                <div className="relative mb-5">
                                    <div className="absolute inset-0 blur-xl bg-[#0EA5E9]/20 rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                    <feature.icon
                                        size={52}
                                        strokeWidth={1.6}
                                        className="text-[#0EA5E9] group-hover:text-[#0369A1] transition duration-300 relative z-10"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-[#1E293B]">
                                    {feature.title}
                                </h3>
                                <p className="text-[#1E293B]/70">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureHighlights;