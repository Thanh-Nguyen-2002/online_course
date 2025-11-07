// ...existing code...
"use client";
import Image from "next/image";
import { Calendar, ChevronRight, User } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
    {
        id: 1,
        title: "Building Your First React App",
        slug: "building-your-first-react-app",
        image: "/images/blog1.png",
        date: "June 1, 2024",
        author: "Alex Chen",
        description: "A step-by-step guide to get started with React.js.",
    },
    {
        id: 2,
        title: "Mastering Data Structures for Developers",
        slug: "mastering-data-structures",
        image: "/images/blog2.jpg",
        date: "May 28, 2024",
        author: "Jane Doe",
        description:
            "Understand the core concepts of data structures and algorithms.",
    },
    {
        id: 3,
        title: "UI/UX Design Principles for Developers",
        slug: "ui-ux-design-principles",
        image: "/images/blog3.jpg",
        date: "May 20, 2024",
        author: "John Smith",
        description:
            "Learn how to create user-friendly and aesthetically pleasing interfaces.",
    },
];

export default function BlogPreview() {
    return (
        <section className="relative py-14 bg-white text-[#1E293B] overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-tr from-[#E0F2FE]/70 via-white to-[#FDE2E4]/70 opacity-60"></div>
                <div className="absolute -bottom-24 -left-16 w-120 h-120 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
                <div className="absolute -top-20 -right-16 w-md h-112 bg-[#F43F5E] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-3000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[24rem] h-96] bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-1500"></div>
            </div>
            <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-6 text-[#1E293B]"
                >
                    Bài Viết Mới Nhất Từ Blog Của Chúng Tôi
                </motion.h2>

                <p className="text-lg text-[#1E293B]/70 mb-16">
                    Cập nhật kiến thức, xu hướng và góc nhìn từ chuyên gia trong ngành.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post, i) => (
                        <motion.a
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className="relative group rounded-2xl overflow-hidden bg-white border border-[#0EA5E9]/10 hover:border-[#0EA5E9]/30 shadow-[0_8px_30px_rgba(14,165,233,0.06)] hover:shadow-[0_12px_40px_rgba(14,165,233,0.12)] transition-all duration-500"
                        >
                            <div className="relative w-full h-56 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 text-left">
                                <h3 className="text-xl font-semibold mb-2 text-[#1E293B] group-hover:text-[#0EA5E9] transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-[#1E293B]/70 text-sm mb-4 leading-relaxed">
                                    {post.description}
                                </p>
                                <div className="flex items-center text-xs text-[#1E293B]/70 gap-4">
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

                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-[#0EA5E9] to-[#F43F5E] group-hover:w-full transition-all duration-500"></div>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-16">
                    <button className="group bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white font-bold py-3 px-10 rounded-full shadow-[0_8px_30px_rgba(244,63,94,0.12)] transition-all duration-300 flex items-center gap-3 mx-auto text-lg">
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                            Xem Thêm Bài Viết
                        </span>
                        <ChevronRight
                            size={22}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}
// ...existing code...