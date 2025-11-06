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
        <section className="relative py-24 bg-[#0F172A] text-[#E2E8F0] overflow-hidden border-t border-0.5 border-[#6366F1]/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1)_0%,transparent_70%),radial-gradient(circle_at_80%_80%,rgba(249,115,22,0.1)_0%,transparent_70%)]"></div>
            <div className="relative z-10 text-center max-w-6xl mx-auto px-6">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Bài Viết Mới Nhất Từ Blog Của Chúng Tôi
                </motion.h2>

                <p className="text-lg text-[#94A3B8] mb-16">
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
                            className="relative group rounded-2xl overflow-hidden bg-[#1E293B] border border-[#1E293B] hover:border-[#6366F1]/40 shadow-[0_0_25px_rgba(99,102,241,0.15)] hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all duration-500"
                        >
                            <div className="relative w-full h-56 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent opacity-80 group-hover:opacity-90 transition duration-500"></div>
                            </div>

                            <div className="p-6 text-left">
                                <h3 className="text-xl font-semibold mb-2 text-[#E2E8F0] group-hover:text-[#6366F1] transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-[#94A3B8] text-sm mb-4 leading-relaxed">
                                    {post.description}
                                </p>
                                <div className="flex items-center text-xs text-[#94A3B8] gap-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={16} className="text-[#6366F1]" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <User size={16} className="text-[#F97316]" />
                                        {post.author}
                                    </span>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-[#6366F1] to-[#F97316] group-hover:w-full transition-all duration-500"></div>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-16">
                    <button className="group bg-[#6366F1] hover:bg-[#8B5CF6] text-white font-bold py-3 px-10 rounded-full shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300 flex items-center gap-3 mx-auto text-lg">
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
