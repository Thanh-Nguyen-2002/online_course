"use client";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
    return (
        <section className="relative py-28 bg-[#0F172A] text-center overflow-hidden border-t border-0.5 border-[#6366F1]/20">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15)_0%,transparent_70%),radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.15)_0%,transparent_70%)]"></div>

            <div className="relative z-10 max-w-3xl mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-linear-to-r from-[#6366F1] via-[#8B5CF6] to-[#F97316] bg-clip-text mb-6 leading-tight">
                    Sẵn sàng bứt phá sự nghiệp lập trình của bạn?
                </h2>

                <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-12">
                    Gia nhập cộng đồng hơn <span className="text-[#F97316] font-semibold">1,000+</span>{" "}
                    học viên đã thành công. Hành trình chạm tới công nghệ tương lai bắt đầu từ hôm nay!
                </p>

                <div className="relative inline-block">
                <button className="group bg-[#F97316] hover:bg-[#fb923c] text-white font-bold py-4 px-12 rounded-full text-xl shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all duration-300 flex items-center gap-3 mx-auto">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                        Đăng ký ngay hôm nay
                    </span>
                    <ArrowRight
                        size={28}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                </button>

                <div className="absolute -inset-1 rounded-full bg-linear-to-r from-[#6366F1] to-[#8B5CF6] blur-md opacity-40 animate-pulse-slow"></div>
                </div>

                <p className="mt-8 text-sm text-[#94A3B8] opacity-80">
                    🎁 Ưu đãi giới hạn: Giảm <span className="text-[#F97316] font-semibold">20%</span>{" "}
                    cho học viên đăng ký trong hôm nay!
                </p>
            </div>

        </section>
    );
}
