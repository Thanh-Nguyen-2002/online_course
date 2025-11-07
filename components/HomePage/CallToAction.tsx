import { ArrowRight } from "lucide-react";

export default function CallToAction() {
    return (
        <section className="relative py-14 bg-white text-center overflow-hidden">

            <div className="relative z-10 max-w-3xl mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-linear-to-r from-[#0EA5E9] to-[#0369A1] bg-clip-text text-transparent">
                    Sẵn sàng bứt phá sự nghiệp lập trình của bạn?
                </h2>

                <p className="text-lg md:text-xl text-[#1E293B]/70 max-w-2xl mx-auto mb-12">
                    Gia nhập cộng đồng hơn <span className="text-[#F43F5E] font-semibold">1,000+</span>{" "}
                    học viên đã thành công. Hành trình chạm tới công nghệ tương lai bắt đầu từ hôm nay!
                </p>

                <div className="relative inline-block">
                    <button className="group bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white font-bold py-4 px-12 rounded-full text-xl shadow-[0_0_25px_rgba(244,63,94,0.28)] transition-all duration-300 flex items-center gap-3 mx-auto">
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                            Đăng ký ngay hôm nay
                        </span>
                        <ArrowRight
                            size={28}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                    </button>
                </div>

                <p className="mt-8 text-sm text-[#1E293B]/70">
                    🎁 Ưu đãi giới hạn: Giảm <span className="text-[#F43F5E] font-semibold">20%</span>{" "}
                    cho học viên đăng ký trong hôm nay!
                </p>
            </div>
        </section>
    );
}