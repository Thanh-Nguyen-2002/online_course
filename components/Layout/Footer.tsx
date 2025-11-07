import { Book, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#1E293B] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-0.5 border-[#0EA5E9]/20">
            <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="flex items-center space-x-2 mb-4">
                        <Book className="h-10 w-10 text-[#0EA5E9]" strokeWidth={2} />
                        <span className="text-2xl font-bold text-white">CoursePro</span>
                    </Link>
                    <p className="text-gray-300 text-sm">
                        Nâng tầm kiến thức của bạn với các khóa học trực tuyến hàng đầu. Học hỏi mọi lúc, mọi nơi.
                    </p>
                </div>

                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-lg font-semibold text-white mb-4">Khám phá</h3>
                    <ul className="space-y-2">
                        <li><a href="/about" className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-200 text-sm">Về chúng tôi</a></li>
                        <li><a href="curriculum" className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-200 text-sm">Khóa học</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-200 text-sm">Giảng viên</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-200 text-sm">Blog</a></li>
                    </ul>
                </div>

                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-lg font-semibold text-white mb-4">Hỗ trợ</h3>
                    <ul className="space-y-2">
                        <li><Link href="/faq" className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-200 text-sm">Câu hỏi thường gặp</Link></li>
                        <li><Link href="/contact" className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-200 text-sm">Liên hệ</Link></li>
                        <li><Link href="/terms" className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-200 text-sm">Điều khoản dịch vụ</Link></li>
                        <li><Link href="/privacy" className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-200 text-sm">Chính sách bảo mật</Link></li>
                    </ul>
                </div>

                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-lg font-semibold text-white mb-4">Luôn cập nhật</h3>
                    <p className="text-gray-300 text-sm mb-4">
                        Nhận thông tin mới nhất về các khóa học và ưu đãi đặc biệt.
                    </p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Email của bạn"
                            className="py-2 px-4 rounded-l-md bg-[#0F172A] border border-[#0EA5E9]/20 text-white text-sm focus:outline-none focus:border-[#0EA5E9]"
                        />
                        <button className="bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white font-medium py-2 px-4 rounded-r-md 
                        transition-colors duration-200 text-sm cursor-pointer">
                            Đăng ký
                        </button>
                    </form>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-white mb-3">Theo dõi chúng tôi</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-200" aria-label="Facebook">
                                <FacebookIcon size={22} strokeWidth={1.8} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-200" aria-label="Twitter">
                                <TwitterIcon size={22} strokeWidth={1.8} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-200" aria-label="Instagram">
                                <InstagramIcon size={22} strokeWidth={1.8} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-200" aria-label="LinkedIn">
                                <LinkedinIcon size={22} strokeWidth={1.8} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#0EA5E9]/10 mt-12 pt-8 text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} CoursePro. All rights reserved.
            </div>
        </footer>
    );
}