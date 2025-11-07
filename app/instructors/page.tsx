"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Code, HeartHandshake, GraduationCap, Lightbulb, ChevronRight } from "lucide-react";

const mentors = [
    {
        name: "Nguyễn Thành",
        title: "Lead Full-Stack Developer",
        desc: "Hơn 10 năm kinh nghiệm tại Google & Meta. Chuyên React, Node.js, Cloud Architect.",
        image: "/images/anhdaidien.jpg",
        skills: ["React", "Node.js", "Next.js", "AWS", "System Design"],
    },
    {
        name: "Lê Hồng Anh",
        title: "UI/UX Designer & Frontend Mentor",
        desc: "Thiết kế và phát triển giao diện web tối ưu trải nghiệm người dùng.",
        image: "/images/anh1.jpg",
        skills: ["Figma", "Framer", "Tailwind", "Accessibility"],
    },
    {
        name: "Trần Minh Khoa",
        title: "Backend Engineer & Database Expert",
        desc: "Từng làm việc với hệ thống hàng triệu người dùng. Chuyên tối ưu API & bảo mật.",
        image: "/images/anh2.jpg",
        skills: ["Express", "MongoDB", "Docker", "Security"],
    },
    {
        name: "Phạm Gia Huy",
        title: "Mobile Developer & Mentor",
        desc: "Hướng dẫn học viên xây dựng ứng dụng di động React Native thực tế.",
        image: "/images/anh3.jpg",
        skills: ["React Native", "Expo", "Firebase", "CI/CD"],
    },
];

export default function InstructorsPage() {
    return (
        <section className="relative py-24 bg-white text-[#1E293B] overflow-hidden">

            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/4 -left-[32 w-lg h-128 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
                <div className="absolute bottom-1/4 -right-40 w-120 h-120 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
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
                        Gặp Gỡ <span className="text-[#0EA5E9]">Đội Ngũ Giảng Viên</span>
                    </h1>
                    <p className="text-lg text-[#1E293B]/70 leading-relaxed">
                        Những người truyền cảm hứng, dẫn dắt và định hình tương lai công nghệ của bạn.  
                        Mỗi mentor tại <strong>Dev Academy</strong> đều là chuyên gia thực chiến từ các công ty hàng đầu.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Image
                            src="/images/anhdaidien.jpg"
                            alt="Giảng viên chính"
                            width={500}
                            height={350}
                            className="rounded-2xl shadow-[0_10px_40px_rgba(14,165,233,0.2)] object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl font-bold text-[#0EA5E9]">Thành Nguyễn</h2>
                        <p className="text-[#1E293B]/70 text-lg">
                            Lead Full-Stack Developer & Mentor tại Dev Academy  
                            Từng là Senior Engineer tại Google, Meta.  
                            Hơn 10 năm kinh nghiệm phát triển phần mềm, hệ thống Cloud và đào tạo lập trình viên trẻ.
                        </p>
                        <ul className="list-disc ml-6 text-[#1E293B]/80 space-y-1">
                            <li>Chuyên React, Node.js, System Architecture.</li>
                            <li>Đào tạo hơn 500+ học viên hiện đang làm việc tại các công ty lớn.</li>
                            <li>Người sáng lập mô hình “30 ngày làm chủ Full-Stack”.</li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-center mb-14 text-[#0EA5E9]">
                        Đội Ngũ Mentor Đồng Hành
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {mentors.map((m, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -8 }}
                                className="bg-white rounded-2xl shadow-lg border border-[#0EA5E9]/10 hover:shadow-[0_0_35px_rgba(14,165,233,0.15)] transition-all p-6 text-center cursor-pointer"
                            >
                                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#0EA5E9]/50 shadow-[0_0_25px_rgba(14,165,233,0.2)]">
                                    <Image src={m.image} alt={m.name} fill className="object-cover" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#1E293B]">{m.name}</h3>
                                <p className="text-[#0EA5E9] text-sm font-medium mb-3">{m.title}</p>
                                <p className="text-[#1E293B]/70 text-sm mb-4">{m.desc}</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {m.skills.map((skill, s) => (
                                        <span
                                            key={s}
                                            className="text-xs bg-[#E0F2FE] text-[#0369A1] px-3 py-2 rounded-[5px] font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-8 text-[#0EA5E9]">Triết Lý Giảng Dạy</h2>
                    <p className="text-lg text-[#1E293B]/70 leading-relaxed mb-10">
                        “Chúng tôi không chỉ dạy code — chúng tôi dạy cách tư duy như một kỹ sư.”  
                        Mỗi khóa học được thiết kế theo mô hình <strong>Học qua dự án (Project-based Learning)</strong>, 
                        giúp học viên áp dụng ngay kiến thức để tạo ra sản phẩm thực tế.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { icon: Code, text: "Thực hành 80% thời lượng" },
                            { icon: Users, text: "Mentor 1-1 tận tâm" },
                            { icon: GraduationCap, text: "Lộ trình rõ ràng, bài bản" },
                            { icon: Lightbulb, text: "Phát triển tư duy giải quyết vấn đề" },
                        ].map((i, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center bg-white border border-[#0EA5E9]/10 rounded-2xl px-6 py-8 shadow-lg hover:shadow-[0_0_25px_rgba(14,165,233,0.15)] transition"
                            >
                                <i.icon className="text-[#0EA5E9] w-10 h-10 mb-3" />
                                <p className="font-semibold text-[#1E293B]">{i.text}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mt-16"
                >
                    <HeartHandshake className="w-12 h-12 text-[#F43F5E] mx-auto mb-4" />
                    <h2 className="text-4xl font-bold mb-6 text-[#0EA5E9]">Cộng Đồng Mentor & Học Viên</h2>
                    <p className="text-lg text-[#1E293B]/70 leading-relaxed mb-6">
                        Hơn <strong>1,000+</strong> học viên đang học tập, chia sẻ và nhận sự hỗ trợ trực tiếp từ các mentor mỗi ngày.  
                        Dev Academy tự hào xây dựng cộng đồng lập trình tích cực, cùng nhau phát triển sự nghiệp.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white font-semibold py-4 px-10 rounded-full shadow-[0_0_25px_rgba(244,63,94,0.3)] transition-all duration-300"
                    >
                        Gia nhập cộng đồng ngay <ChevronRight size={22} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
