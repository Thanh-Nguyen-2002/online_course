"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, User, ArrowRight, Sparkles } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "Lộ trình trở thành Full-Stack Developer trong 6 tháng",
        author: "Nguyễn Thành",
        date: "Oct 10, 2025",
        image: "/images/full.jpg",
        excerpt:
        "Khám phá hành trình thực tế để làm chủ toàn bộ quy trình phát triển web từ frontend đến backend, cùng mentor nhiều năm kinh nghiệm.",
    },
    {
        id: 2,
        title: "Thiết kế UI hiện đại với Tailwind + Framer Motion",
        author: "Lê Hồng Anh",
        date: "Oct 6, 2025",
        image: "/images/ui_ux.jpg",
        excerpt:
        "Làm sao để giao diện vừa nhẹ – vừa đẹp – vừa có hiệu ứng sống động? Hãy thử kết hợp sức mạnh của Tailwind và Framer Motion.",
    },
    {
        id: 3,
        title: "10 lỗi phổ biến khi học React – và cách tránh",
        author: "Phạm Gia Huy",
        date: "Sep 28, 2025",
        image: "/images/top10.jpg",
        excerpt:
        "Tổng hợp các lỗi phổ biến khiến bạn mất hàng giờ debug khi mới học React, cùng cách xử lý gọn gàng, dễ hiểu nhất.",
    },
    {
        id: 4,
        title: "Backend Developer cần biết gì ngoài Node.js?",
        author: "Trần Minh Khoa",
        date: "Sep 15, 2025",
        image: "/images/backend.png",
        excerpt:
        "Một backend giỏi không chỉ biết code API, mà còn phải hiểu kiến trúc, bảo mật và khả năng mở rộng của hệ thống.",
    },
];

export default function BlogPage() {
    return (
        <section className="relative py-24 bg-white text-[#1E293B] overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/3 -left-40 w-xl h-144 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
                <div className="absolute bottom-1/3 -right-40 w-136 h-136 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-md h-112 bg-[#F43F5E] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <div className="flex justify-center mb-3">
                        <Sparkles size={32} className="text-[#F43F5E]" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-linear-to-r from-[#0EA5E9] via-[#8B5CF6] to-[#F43F5E] bg-clip-text text-transparent">
                        CoursePro Blog
                        </span>
                    </h1>
                    <p className="text-lg text-[#1E293B]/70 leading-relaxed">
                        Nơi chia sẻ kiến thức, câu chuyện và cảm hứng công nghệ –  
                        <span className="text-[#0EA5E9] font-semibold"> bởi lập trình viên, cho lập trình viên.</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative flex flex-col md:flex-row items-center gap-10 bg-white rounded-3xl shadow-[0_8px_60px_rgba(14,165,233,0.15)] overflow-hidden border border-[#0EA5E9]/10"
                >
                    <div className="relative w-full md:w-1/2 h-80 md:h-112 overflow-hidden">
                        <Image
                            src="/images/kynang.jpg"
                            alt="Featured Blog"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                    </div>
                    <div className="relative z-10 p-8 md:p-12 flex-1">
                        <h2 className="text-3xl font-bold mb-4 text-[#1E293B]">
                            5 kỹ năng giúp bạn trở thành lập trình viên “thực chiến”
                        </h2>
                        <p className="text-[#1E293B]/70 mb-6">
                            Học lập trình là khởi đầu, nhưng để bước vào thế giới doanh nghiệp, bạn cần tư duy, kỹ năng và thái độ làm việc chuyên nghiệp.  
                            Đây là 5 yếu tố khiến bạn khác biệt so với đám đông.
                        </p>
                        <a
                            href="#"
                                className="inline-flex items-center gap-2 text-[#0EA5E9] hover:text-[#0369A1] font-semibold transition-all duration-300"
                            >
                            Đọc bài viết <ArrowRight size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl font-bold mb-12 text-center text-[#0EA5E9]">
                        Bài Viết Mới Nhất
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10, rotateX: 2 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="group bg-white rounded-3xl shadow-lg border border-[#0EA5E9]/10 overflow-hidden 
                                hover:shadow-[0_10px_40px_rgba(14,165,233,0.15)] transition-all duration-500 cursor-pointer"
                            >
                                <div className="relative w-full h-60 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6 space-y-3">
                                    <h3 className="text-xl font-semibold text-[#1E293B] group-hover:text-[#0EA5E9] transition">
                                        {post.title}
                                    </h3>
                                    <p className="text-[#1E293B]/70 text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-[#1E293B]/60 pt-3 border-t border-[#0EA5E9]/10">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={16} className="text-[#0EA5E9]" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <User size={16} className="text-[#F43F5E]" />
                                            {post.author}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-24"
                >
                    <h2 className="text-4xl font-bold mb-4 text-[#0EA5E9]">
                        Chia sẻ kiến thức cùng Dev Academy
                    </h2>
                    <p className="text-[#1E293B]/70 mb-8">
                        Bạn có kinh nghiệm hay góc nhìn thú vị về lập trình, thiết kế hay công nghệ?  
                        Hãy trở thành <strong>Guest Author</strong> của chúng tôi!
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white font-semibold py-4 px-10 rounded-full shadow-[0_0_25px_rgba(244,63,94,0.3)] transition-all duration-300"
                    >
                        Đăng ký chia sẻ bài viết <ArrowRight size={22} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
