import { MessageCircle } from "lucide-react";

export default function FAQHeader() {
    return (
        <section className="text-center py-24 bg-[#0F172A] border-b border-[#1E293B]">
            <MessageCircle
                size={60}
                className="mx-auto mb-6 text-[#6366F1]"
                strokeWidth={1.5}
            />
            <h1 className="text-5xl font-extrabold text-[#E2E8F0] mb-4">
                Câu Hỏi Thường Gặp
            </h1>
            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                Tất cả những điều bạn cần biết trước khi bắt đầu hành trình học tập.
            </p>
        </section>
    );
}
