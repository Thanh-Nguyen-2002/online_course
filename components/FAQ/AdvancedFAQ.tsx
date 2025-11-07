"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Info, HelpCircle, BookOpen, Laptop, CreditCard, Users } from "lucide-react";
import { useState } from "react";

const faqCategories = [
    {
        title: "Về Khóa Học",
        icon: BookOpen,
        questions: [
        {
            q: "Khóa học này dành cho ai?",
            a: "Khóa học được thiết kế cho cả người mới bắt đầu lẫn người đã có kiến thức cơ bản muốn học Full-Stack chuyên sâu.",
        },
        {
            q: "Tôi có cần biết lập trình trước không?",
            a: "Không. Chúng tôi hướng dẫn từ cơ bản: HTML, CSS, JS cho đến React, Node.js và Database.",
        },
        {
            q: "Khóa học có cấp chứng chỉ không?",
            a: "Có, bạn sẽ nhận chứng chỉ hoàn thành được xác thực bởi hệ thống, có thể gắn vào CV hoặc LinkedIn.",
        },
        ],
    },
    {
        title: "Quy Trình Học & Hỗ Trợ",
        icon: Laptop,
        questions: [
        {
            q: "Khóa học diễn ra như thế nào?",
            a: "Toàn bộ bài học được quay chất lượng cao, kết hợp bài tập thực tế và buổi live Q&A với giảng viên mỗi tuần.",
        },
        {
            q: "Tôi có thể học lại khi kết thúc không?",
            a: "Có. Tài khoản của bạn được cấp quyền học trọn đời (Lifetime Access).",
        },
        {
            q: "Có cộng đồng hỗ trợ không?",
            a: "Có, chúng tôi có group Discord với hơn 1,000 học viên đang trao đổi mỗi ngày về dự án và kỹ năng.",
        },
        ],
    },
    {
        title: "Thanh Toán & Chính Sách",
        icon: CreditCard,
        questions: [
        {
            q: "Phương thức thanh toán?",
            a: "Hỗ trợ thanh toán qua thẻ, ví Momo, ZaloPay hoặc chuyển khoản ngân hàng.",
        },
        {
            q: "Chính sách hoàn tiền?",
            a: "Cam kết hoàn tiền trong 14 ngày đầu nếu bạn không hài lòng với khóa học.",
        },
        {
            q: "Có ưu đãi nhóm không?",
            a: "Có, nhóm từ 3 người trở lên sẽ được giảm thêm 10%.",
        },
        ],
    },
    {
        title: "Khác",
        icon: Users,
        questions: [
        {
            q: "Giảng viên là ai?",
            a: "Tất cả giảng viên đều là Senior Developer từ các công ty công nghệ lớn như Google, Meta, FPT Software.",
        },
        {
            q: "Có hỗ trợ nghề nghiệp sau khóa học không?",
            a: "Có. Đội ngũ Career Mentor sẽ giúp bạn xây dựng CV, luyện phỏng vấn, và kết nối nhà tuyển dụng.",
        },
        {
            q: "Nếu có thắc mắc, liên hệ ở đâu?",
            a: "Bạn có thể gửi email đến support@academy.vn hoặc nhắn tin qua Fanpage chính thức.",
        },
        ],
    },
];

export default function AdvancedFAQ() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    return (
        <section className="relative py-24 bg-white text-[#1E293B] overflow-hidden">
        {/* 🌈 Hiệu ứng nền động */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-1/3 left-[-10rem] w-[30rem] h-[30rem] bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
            <div className="absolute bottom-1/4 right-[-10rem] w-[28rem] h-[28rem] bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-[26rem] h-[26rem] bg-[#F43F5E] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* 🧠 Nội dung */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 leading-snug">
            Câu Hỏi Thường Gặp – <span className="text-[#0EA5E9]">Học viên cần biết</span>
            </h2>
            <p className="text-lg text-[#1E293B]/70 text-center mb-16 max-w-3xl mx-auto">
            Tất cả thông tin bạn cần trước khi bắt đầu hành trình Full-Stack Developer.
            </p>

            {/* 🧩 Các nhóm chủ đề */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {faqCategories.map((cat, idx) => (
                <div key={idx} className="bg-white/90 rounded-2xl shadow-lg border border-[#0EA5E9]/10 hover:border-[#0EA5E9]/30 hover:shadow-[0_0_40px_rgba(14,165,233,0.1)] transition-all duration-300 p-8">
                <div className="flex items-center gap-3 mb-6">
                    <cat.icon className="text-[#0EA5E9] w-7 h-7" />
                    <h3 className="text-2xl font-semibold text-[#1E293B]">{cat.title}</h3>
                </div>

                {cat.questions.map((item, i) => {
                    const id = `${idx}-${i}`;
                    const open = openIndex === id;
                    return (
                    <motion.div key={i} className="mb-4 border-b border-[#0EA5E9]/10 pb-3">
                        <div
                        onClick={() => setOpenIndex(open ? null : id)}
                        className="cursor-pointer flex justify-between items-center"
                        >
                        <p className="text-[#1E293B]/90 font-medium">{item.q}</p>
                        <motion.div animate={{ rotate: open ? 180 : 0 }}>
                            <ChevronDown size={20} className="text-[#0EA5E9]" />
                        </motion.div>
                        </div>

                        <AnimatePresence>
                        {open && (
                            <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden text-[#1E293B]/70 mt-2 leading-relaxed"
                            >
                            {item.a}
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </motion.div>
                    );
                })}
                </div>
            ))}
            </div>

            {/* CTA dưới cùng */}
            <div className="text-center mt-20">
            <a
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_25px_rgba(244,63,94,0.3)] transition-all duration-300"
            >
                <HelpCircle size={22} className="group-hover:rotate-12 transition-transform duration-300" />
                Vẫn còn thắc mắc? Liên hệ ngay
            </a>
            </div>
        </div>
        </section>
    );
}
