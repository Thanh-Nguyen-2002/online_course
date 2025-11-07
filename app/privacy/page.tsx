"use client";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <section className="relative py-24 bg-white text-[#1E293B] overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-lg h-128 bg-[#F43F5E] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
                <div className="absolute bottom-1/3 right-40 w-md h-112 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-10 text-center text-[#1E293B]"
                >
                    Chính Sách Bảo Mật
                </motion.h1>

                <div className="space-y-8 text-[#1E293B]/80 leading-relaxed">
                    <p>
                        <strong>CoursePro</strong> cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn. 
                        Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo mật dữ liệu người dùng.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0EA5E9]">1. Thông tin chúng tôi thu thập</h2>
                    <ul className="list-disc ml-6">
                        <li>Thông tin cá nhân như họ tên, email, số điện thoại, địa chỉ.</li>
                        <li>Thông tin thanh toán (được xử lý an toàn qua bên thứ ba).</li>
                        <li>Dữ liệu kỹ thuật như địa chỉ IP, trình duyệt, thời gian truy cập.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#0EA5E9]">2. Mục đích sử dụng thông tin</h2>
                    <p>
                        Chúng tôi sử dụng thông tin của bạn để cung cấp dịch vụ học tập, hỗ trợ kỹ thuật, 
                        cải thiện trải nghiệm người dùng và thông báo về các chương trình, ưu đãi mới.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0EA5E9]">3. Bảo mật thông tin</h2>
                    <p>
                        Dữ liệu của bạn được lưu trữ trên hệ thống bảo mật cao và chỉ được truy cập bởi nhân sự được ủy quyền. 
                        Chúng tôi không chia sẻ hoặc bán thông tin cá nhân của bạn cho bên thứ ba.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0EA5E9]">4. Cookie & công nghệ theo dõi</h2>
                    <p>
                        Trang web có thể sử dụng cookie để ghi nhớ tùy chọn người dùng và cải thiện hiệu suất. 
                        Bạn có thể tắt cookie trong cài đặt trình duyệt nếu muốn.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0EA5E9]">5. Quyền của người dùng</h2>
                    <p>
                        Bạn có quyền yêu cầu truy cập, chỉnh sửa hoặc xóa dữ liệu cá nhân bất kỳ lúc nào bằng cách gửi yêu cầu đến 
                        <a href="mailto:nxthanh.nb2002@gmail.com" className="text-[#F43F5E] font-medium hover:underline"> nxthanh.nb2002@gmail.com</a>.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0EA5E9]">6. Thay đổi chính sách</h2>
                    <p>
                        Chính sách có thể được cập nhật định kỳ để phản ánh thay đổi trong quy định hoặc công nghệ. 
                        Phiên bản mới sẽ được đăng tải công khai trên trang này.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0EA5E9]">7. Liên hệ</h2>
                    <p>
                        Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào về Chính sách bảo mật, vui lòng liên hệ chúng tôi qua email:{" "}
                        <a href="mailto:privacy@academy.vn" className="text-[#F43F5E] font-medium hover:underline">
                        nxthanh.nb2002@gmail.com
                        </a>.
                    </p>
                </div>
            </div>
        </section>
    );
}
