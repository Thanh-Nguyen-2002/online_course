"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Book } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const linkClass =
        "relative group text-[#1E293B]/80 hover:text-[#0EA5E9] font-medium text-lg transition duration-300 ease-in-out";
    const underlineClass =
        "absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-[#0EA5E9] to-[#0369A1] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out";

    return (
        <header className="bg-white/95 text-[#1E293B] shadow-lg sticky top-0 z-50 backdrop-blur-md border-b border-[#0EA5E9]/10 px-4">
            <div className="max-w-[1700px] mx-auto py-4 flex items-center justify-between">

                <Link href="/" className="flex items-center space-x-2">
                    <Book className="h-9 w-9 text-[#0EA5E9]" strokeWidth={2.5} />
                    <span className="text-2xl font-extrabold tracking-tight text-[#1E293B]">
                        CoursePro
                    </span>
                </Link>

                <nav className="hidden md:flex space-x-8 items-center">
                {[
                    ["Khóa học", "/curriculum"],
                    ["Giảng viên", "/instructor"],
                    ["Đánh giá", "/testimonials"],
                    ["Blog", "/blog"],
                    ["FAQ", "/faq"],
                    ["Liên hệ", "/contact"]
                ].map(([title, href]) => (
                    <Link key={href} href={href} className={linkClass}>
                        {title}
                        <span className={underlineClass}></span>
                    </Link>
                ))}

                <Link
                    href="/register"
                    className="ml-6 px-6 py-3 bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white rounded-full font-bold text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                >
                    Đăng ký ngay
                </Link>
                </nav>

                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-[#1E293B]/80 hover:text-[#0EA5E9] focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <X className="h-8 w-8" strokeWidth={2} />
                        ) : (
                            <Menu className="h-8 w-8" strokeWidth={2} />
                        )}
                    </button>
                </div>
            </div>

            <nav
                className={`md:hidden ${
                    isMenuOpen ? "block" : "hidden"
                } bg-white/95 pb-4 border-t border-[#0EA5E9]/10`}
            >
                <div className="flex flex-col items-center space-y-4 pt-4">
                    {[
                        ["Khóa học", "/curriculum"],
                        ["Giảng viên", "/instructor"],
                        ["Đánh giá", "/testimonials"],
                        ["Blog", "/blog"],
                        ["FAQ", "/faq"],
                    ].map(([title, href]) => (
                        <Link
                        key={href}
                        href={href}
                        onClick={toggleMenu}
                        className="text-[#1E293B]/80 hover:text-[#0EA5E9] transition duration-300 ease-in-out text-lg font-medium"
                        >
                        {title}
                        </Link>
                    ))}

                    <Link
                        href="/register"
                        onClick={toggleMenu}
                        className="mt-4 w-1/2 text-center px-6 py-3 bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white rounded-full font-bold text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                    >
                        Đăng ký ngay
                    </Link>
                </div>
            </nav>
        </header>
    );
}