import FAQItem from "./FAQItem";

const faqs = [
    {
        question: "Khóa học này phù hợp với ai?",
        answer:
        "Khóa học phù hợp với người mới bắt đầu lập trình hoặc những ai đã có kiến thức cơ bản muốn nâng cao kỹ năng xây dựng ứng dụng Full-Stack.",
    },
    {
        question: "Thời lượng khóa học bao lâu?",
        answer:
        "Tổng thời gian học là 6 tháng, với lộ trình cụ thể chia thành 8 module cùng các dự án thực tế.",
    },
    {
        question: "Có hỗ trợ việc làm sau khi học không?",
        answer:
        "Có. Sau khi hoàn thành khóa học, bạn được hướng dẫn xây dựng CV, portfolio và hỗ trợ kết nối doanh nghiệp.",
    },
    {
        question: "Cần cài đặt công cụ gì?",
        answer:
        "Chỉ cần máy tính, VS Code và trình duyệt. Tất cả phần mềm đều miễn phí và sẽ được hướng dẫn cài đặt trong bài đầu tiên.",
    },
    {
        question: "Có hoàn tiền nếu không hài lòng không?",
        answer:
        "Có. Bạn được hoàn tiền 100% trong vòng 14 ngày kể từ khi đăng ký nếu không hài lòng.",
    },
];

export default function FAQList() {
    return (
        <section className="bg-[#0F172A] py-24">
            <div className="max-w-3xl mx-auto px-6 space-y-5">
                {faqs.map((faq, i) => (
                    <FAQItem key={i} {...faq} index={i} />
                ))}
            </div>
        </section>
    );
}
