"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Users, Award, Briefcase, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Nguyễn Văn A",
        title: "Frontend Developer tại FPT Software",
        avatar: "/images/anhdaidien.jpg",
        rating: 5,
        feedback:
        "Trước đây tôi chỉ biết HTML cơ bản, nhưng nhờ CoursePro tôi đã tự tin xây dựng dự án React và Next.js. Mentor dạy cực kỳ dễ hiểu, giải thích mọi vấn đề rất chi tiết!",
    },
    {
        name: "Trần Thị B",
        title: "Full-Stack Developer tại Shopee",
        avatar: "/images/anh1.jpg",
        rating: 4.8,
        feedback:
        "Khóa học giúp tôi hiểu sâu cả frontend và backend. Giảng viên cực kỳ có tâm, luôn khuyến khích tư duy sáng tạo. Sau khóa, tôi đã apply thành công vào Shopee!",
    },
    {
        name: "Lê Minh C",
        title: "UI/UX Designer & Web Developer",
        avatar: "/images/anh2.jpg",
        rating: 5,
        feedback:
        "Tôi thích nhất phần dự án thực tế — cảm giác tự tay build sản phẩm thật sự rất tuyệt. Học ở đây không khô khan mà đầy cảm hứng.",
    },
    {
        name: "Phạm Hương",
        title: "Software Engineer tại VNG",
        avatar: "/images/anh3.jpg",
        rating: 5,
        feedback:
        "Mentor thân thiện, chuyên nghiệp và luôn hỗ trợ nhiệt tình. Tôi ấn tượng với cách giảng dạy hiện đại, không chỉ học code mà còn học cách tư duy hệ thống.",
    },
];

export default function ReviewsPage() {
    return (
        <section className="relative py-24 bg-white text-[#1E293B] overflow-hidden">

            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/3 -left-32 w-lg h-128 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
                <div className="absolute bottom-1/3 -right-40 w-120 h-120 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-104 h-104 bg-[#F43F5E] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Đánh Giá Từ <span className="text-[#0EA5E9]">Học Viên Thực Tế</span>
                    </h1>
                    <p className="text-lg text-[#1E293B]/70 leading-relaxed">
                        Hơn <strong>1,000+</strong> học viên đã trải nghiệm và thành công cùng CoursePro.  
                        Hãy xem họ nói gì về hành trình học tập của mình.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                >
                    {[
                        { icon: Users, num: "1,200+", label: "Học viên đã tốt nghiệp" },
                        { icon: Award, num: "98%", label: "Hài lòng với khóa học" },
                        { icon: Star, num: "4.9/5", label: "Đánh giá trung bình" },
                        { icon: Briefcase, num: "85%", label: "Có việc sau 3 tháng" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white border border-[#0EA5E9]/10 shadow-md hover:shadow-[0_0_35px_rgba(14,165,233,0.15)] rounded-2xl p-8 transition-all"
                        >
                            <item.icon className="text-[#0EA5E9] w-10 h-10 mx-auto mb-3" />
                            <h3 className="text-3xl font-bold text-[#1E293B]">{item.num}</h3>
                            <p className="text-[#1E293B]/70">{item.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-center mb-12 text-[#0EA5E9]">
                        Cảm Nhận Từ Học Viên
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10}}
                                className="relative bg-white rounded-2xl p-8 shadow-lg border border-[#0EA5E9]/10 
                                    hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] transition-all cursor-pointer"
                            >
                                <Quote className="absolute top-4 right-4 text-[#0EA5E9]/30 w-6 h-6" />

                                <div className="flex items-center gap-4 mb-5">
                                    <div className="relative shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-[#0EA5E9]/60 shadow-[0_0_10px_rgba(14,165,233,0.2)]">
                                        <Image
                                            src={t.avatar}
                                            alt={t.name}
                                            fill
                                            sizes="56px"
                                            className="object-cover rounded-full"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <h3 className="font-semibold text-[#1E293B] leading-tight">{t.name}</h3>
                                        <p className="text-sm text-[#1E293B]/60 leading-snug">{t.title}</p>
                                    </div>
                                </div>

                                <div className="flex mb-3">
                                    {Array.from({ length: 5 }).map((_, j) => (
                                        <Star
                                            key={j}
                                            size={18}
                                            className={`${
                                                j < Math.floor(t.rating)
                                                ? "text-yellow-400 fill-yellow-400"
                                                : "text-gray-300"
                                            }`}
                                        />
                                    ))}
                                </div>
                                <p className="text-[#1E293B]/80 italic leading-relaxed">
                                    “{t.feedback}”
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                >
                    <Image
                        src="/images/anhdaidien.jpg"
                        alt="Học viên tiêu biểu"
                        width={500}
                        height={350}
                        className="rounded-2xl shadow-[0_8px_40px_rgba(14,165,233,0.2)] object-cover"
                    />
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-[#0EA5E9]">Học Viên Tiêu Biểu</h2>
                        <p className="text-[#1E293B]/70 mb-4">
                            <strong>Phạm Đức Minh</strong> – Full-Stack Developer tại TMA Solutions.  
                            Sau 6 tháng học, Minh đã tự tin xây dựng 3 dự án cá nhân và hiện đang làm việc full-time tại công ty phần mềm lớn.
                        </p>
                        <p className="text-[#1E293B]/70 italic">
                            “CoursePro không chỉ dạy code mà còn dạy tôi cách trở thành một developer có tư duy sáng tạo.”
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold mb-10 text-[#0EA5E9]">
                        Xem Cảm Nhận Thực Tế
                    </h2>
                    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(14,165,233,0.2)]">
                        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(14,165,233,0.2)]">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/wLPDk4EafCA?rel=0&modestbranding=1"
                                title="Dev Academy Review"
                                allowFullScreen
                            ></iframe>
                        </div>

                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mt-16"
                >
                    <h2 className="text-4xl font-bold mb-6 text-[#0EA5E9]">
                        Sẵn sàng viết nên câu chuyện thành công của bạn?
                    </h2>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white font-semibold py-4 px-10 rounded-full shadow-[0_0_25px_rgba(244,63,94,0.3)] transition-all duration-300 text-lg"
                    >
                        Đăng ký học ngay <ChevronRight size={24} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
