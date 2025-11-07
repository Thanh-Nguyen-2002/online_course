"use client";

import Image from "next/image";
import { Star, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const testimonials = [
    {
        name: "Nguyễn Văn A",
        title: "Junior Developer tại ABC Tech",
        avatar: "/images/anh1.jpg",
        rating: 5,
        feedback:
        "Khóa học đã thực sự thay đổi sự nghiệp của tôi. Từ một người mới bắt đầu, tôi đã có thể tự tin xây dựng các ứng dụng web phức tạp. Giảng viên rất tận tâm và kiến thức vô cùng thực tế!",
    },
    {
        name: "Trần Thị B",
        title: "Product Manager",
        avatar: "/images/anh2.jpg",
        rating: 4.5,
        feedback:
        "Tôi rất ấn tượng với chất lượng khóa học. Nội dung được tổ chức logic, dễ hiểu, giúp tôi nhanh chóng nắm bắt các công nghệ mới và áp dụng vào công việc.",
    },
    {
        name: "Lê Văn C",
        title: "Freelance Web Developer",
        avatar: "/images/anh3.jpg",
        rating: 5,
        feedback:
        "Học phần dự án thực tế cực kỳ giá trị. Tôi đã xây dựng được một portfolio vững chắc và tự tin nhận các dự án freelance sau khi hoàn thành khóa học.",
    }
];

export default function TestimonialCarousel() {
    return (
        <section className="relative py-14 bg-white text-[#1E293B] overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute bottom-0 -left-20 w-md h-112 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 -right-20 w-104 h-104 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-88 h-88 bg-[#F43F5E] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>
            <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-[#1E293B]"
                >
                    Câu chuyện thành công từ học viên
                </motion.h2>
                <p className="text-lg text-[#1E293B]/70 mb-16">
                    Hãy xem những học viên của chúng tôi đã thay đổi hành trình sự nghiệp
                    của họ như thế nào.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className="relative group bg-white rounded-2xl p-8 shadow-lg border border-[#0EA5E9]/10 
                            hover:border-[#0EA5E9]/30 hover:shadow-[0_0_40px_rgba(14,165,233,0.2)] 
                            transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
                        >
                            <div className="flex items-center mb-6 relative">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#0EA5E9]">
                                    <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#0EA5E9] to-[#0369A1] 
                                    blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                    <Image
                                        src={t.avatar}
                                        alt={t.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="ml-4 text-left">
                                    <h3 className="text-xl font-semibold text-[#1E293B]">
                                        {t.name}
                                    </h3>
                                    <p className="text-sm text-[#1E293B]/70">{t.title}</p>
                                </div>
                            </div>

                            <div className="flex mb-4">
                                {Array.from({ length: 5 }).map((_, i2) => (
                                    <Star
                                        key={i2}
                                        size={20}
                                        className={
                                        i2 < Math.floor(t.rating)
                                            ? "text-yellow-400 fill-yellow-400"
                                            : i2 < t.rating
                                            ? "text-yellow-400 fill-yellow-400/50"
                                            : "text-gray-300"
                                        }
                                    />
                                ))}
                            </div>
                            <p className="text-[#1E293B]/80 italic leading-relaxed mb-2">
                                "{t.feedback}"
                            </p>
                            <div className="w-1/3 h-1 mt-4 bg-linear-to-r from-[#0EA5E9] to-[#F43F5E] rounded-full 
                            mx-auto group-hover:w-2/3 transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16">
                    <Link href="/reviews" className="inline-block mb-6">
                        <button className="group bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white font-bold py-3 px-8 
                        rounded-full shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all duration-300 
                        flex items-center gap-2 mx-auto text-lg cursor-pointer">
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                Đọc hơn 500+ đánh giá
                            </span>
                            <ChevronRight size={22} />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}