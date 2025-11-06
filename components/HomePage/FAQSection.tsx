"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
    {
        question: "Khóa học này dành cho ai?",
        answer:
        "Khóa học được thiết kế cho người mới bắt đầu hoàn toàn, cũng như những người có kinh nghiệm lập trình cơ bản muốn nâng cao kỹ năng Full-Stack của mình. Không yêu cầu kinh nghiệm lập trình trước.",
    },
    {
        question: "Thời lượng và định dạng khóa học như thế nào?",
        answer:
        "Khóa học kéo dài 6 tháng, bao gồm các bài giảng video chất lượng cao, bài tập thực hành, dự án thực tế và buổi hỏi đáp trực tiếp hàng tuần với giảng viên.",
    },
    {
        question: "Tôi có nhận được hỗ trợ sau khóa học không?",
        answer:
        "Có. Bạn sẽ có quyền truy cập vào cộng đồng học viên độc quyền của chúng tôi, hỗ trợ giải đáp thắc mắc không giới hạn và hỗ trợ định hướng nghề nghiệp sau khi hoàn thành khóa học.",
    },
    {
        question: "Có cần phần mềm hoặc công cụ đặc biệt nào không?",
        answer:
        "Bạn chỉ cần một máy tính có kết nối internet ổn định và một trình soạn thảo code (như VS Code - sẽ được hướng dẫn cài đặt). Tất cả các công cụ khác đều miễn phí và sẽ được hướng dẫn chi tiết.",
    },
    {
        question: "Chính sách hoàn tiền như thế nào?",
        answer:
        "Chúng tôi có chính sách hoàn tiền trong vòng 14 ngày nếu bạn không hài lòng về khóa học. Vui lòng xem chi tiết chính sách hoàn tiền của chúng tôi.",
    },
];

export default function FAQSection() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const toggleFAQ = (index: number) =>
        setOpenFAQ(openFAQ === index ? null : index);

    return (
        <section className="relative py-24 bg-[#0F172A] text-[#E2E8F0] overflow-hidden border-t border-0.5 border-[#6366F1]/20">
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.12)_0%,transparent_70%),radial-gradient(circle_at_30%_80%,rgba(249,115,22,0.1)_0%,transparent_70%)]"></div> */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,114,22,0.1)_0%,transparent_70%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1)_0%,transparent_70%)]"></div>
            <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                    Câu Hỏi Thường Gặp
                </h2>
                <p className="text-lg text-[#94A3B8] mb-14">
                    Giải đáp mọi thắc mắc trước khi bạn bắt đầu hành trình học tập.
                </p>

                <div className="space-y-6 text-left">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`rounded-2xl p-[1px] transition-all duration-300 ${
                                openFAQ === index
                                ? "bg-linear-to-r from-[#6366F1] to-[#F97316] shadow-[0_0_25px_rgba(99,102,241,0.25)]"
                                : "bg-[#1E293B]"
                            }`}
                        >
                        <div
                            onClick={() => toggleFAQ(index)}
                            className="cursor-pointer bg-[#1E293B] rounded-2xl px-6 py-5 flex justify-between items-center hover:bg-[#1E293B]/90 transition-all duration-300"
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-[#E2E8F0]">
                                {faq.question}
                            </h3>
                            <motion.div
                                animate={{
                                    rotate: openFAQ === index ? 90 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="text-[#6366F1]"
                            >
                                <ChevronRight size={24} />
                            </motion.div>
                        </div>

                        <AnimatePresence initial={false}>
                            {openFAQ === index && (
                                <motion.div
                                    key="content"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="overflow-hidden bg-[#0F172A]/50 rounded-b-2xl"
                                >
                                    <div className="px-6 pt-4 pb-6 border-t border-[#6366F1]/30 text-[#94A3B8] leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16">
                    <button className="group bg-[#6366F1] hover:bg-[#8B5CF6] text-white font-bold py-3 px-10 rounded-full shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300 flex items-center gap-3 mx-auto text-lg">
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                            Xem Tất Cả Câu Hỏi
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
