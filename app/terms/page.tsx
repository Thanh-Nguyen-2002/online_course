"use client";
import { motion } from "framer-motion";

export default function TermsOfService() {
    return (
        <section className="relative py-24 bg-white text-[#1E293B] overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/3 -left-40 w-120 h-120 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
                <div className="absolute bottom-1/4 -right-32 w-md h-112 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-10 text-center text-[#1E293B]"
                >
                    Điều Khoản Dịch Vụ
                </motion.h1>

                <div className="space-y-8 text-[#1E293B]/80 leading-relaxed">
                    <p>
                        Chào mừng bạn đến với <strong>CoursePro</strong>. Khi sử dụng trang web và dịch vụ của chúng tôi, bạn đồng ý tuân theo các điều khoản dưới đây. 
                        Vui lòng đọc kỹ để hiểu rõ quyền và nghĩa vụ của bạn.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0EA5E9]">1. Mục đích sử dụng</h2>
                    <p>
                        Dịch vụ được cung cấp nhằm mục đích học tập, chia sẻ và phát triển kỹ năng lập trình. 
                        Người dùng không được sử dụng website vào mục đích thương mại, lừa đảo hoặc vi phạm pháp luật.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0EA5E9]">2. Tài khoản người dùng</h2>
                    <p>
                        Người dùng cần cung cấp thông tin chính xác khi đăng ký tài khoản. 
                        Bạn chịu trách nhiệm giữ bí mật thông tin đăng nhập và toàn bộ hoạt động trong tài khoản của mình.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0EA5E9]">3. Quyền sở hữu nội dung</h2>
                    <p>
                        Toàn bộ nội dung khóa học, tài liệu, hình ảnh, mã nguồn thuộc quyền sở hữu của <strong>CoursePro</strong>. 
                        Nghiêm cấm sao chép, tái bản hoặc phân phối lại mà không có sự cho phép bằng văn bản.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0EA5E9]">4. Thanh toán và hoàn tiền</h2>
                    <p>
                        Học viên có thể thanh toán qua các phương thức được hỗ trợ. 
                        Chúng tôi áp dụng chính sách hoàn tiền trong vòng 14 ngày đầu kể từ khi kích hoạt khóa học.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0EA5E9]">5. Giới hạn trách nhiệm</h2>
                    <p>
                        Chúng tôi không chịu trách nhiệm cho các thiệt hại gián tiếp, ngẫu nhiên hoặc hệ quả do việc sử dụng hoặc không thể sử dụng dịch vụ.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0EA5E9]">6. Sửa đổi điều khoản</h2>
                    <p>
                        <strong>CoursePro</strong> có quyền thay đổi, cập nhật hoặc bổ sung điều khoản mà không cần thông báo trước. 
                        Các thay đổi sẽ có hiệu lực ngay khi được đăng tải.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#0EA5E9]">7. Liên hệ</h2>
                    <p>
                        Mọi câu hỏi về Điều khoản dịch vụ, vui lòng liên hệ:{" "}
                        <a href="mailto:nxthanh.nb2002@gmail.com" className="text-[#F43F5E] font-medium hover:underline">
                            nxthanh.nb2002@gmail.com
                        </a>.
                    </p>
                </div>
            </div>
        </section>
    );
}
