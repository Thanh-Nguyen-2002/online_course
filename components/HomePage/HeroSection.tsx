import { PlayCircle, GraduationCap } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="relative h-[calc(100vh-84px)] flex items-center justify-center text-center overflow-hidden bg-white">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#0369A1] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-[#F43F5E] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 p-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-[#1E293B]">
                    Làm chủ <span className="bg-linear-to-r from-[#0EA5E9] to-[#0369A1] bg-clip-text text-transparent">
                    Full-Stack Web Development
                    </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-[#1E293B]/70 mb-10 max-w-2xl mx-auto">
                    Bắt đầu sự nghiệp của bạn với các dự án thực hành và hướng dẫn từ
                    chuyên gia.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/curriculum" className="bg-[#F43F5E] hover:bg-[#F43F5E]/90 text-white font-bold py-3 px-8 rounded-full 
                        shadow-lg hover:shadow-[0_0_25px_rgba(244,63,94,0.3)] transition duration-300 flex items-center gap-2 text-lg">
                        <PlayCircle size={24} /> Xem trước khóa học
                    </Link>
                    <button className="bg-white border-2 border-[#0EA5E9] hover:border-[#0369A1] text-[#0EA5E9] hover:text-[#0369A1] 
                        font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(14,165,233,0.2)] transition duration-300 
                        flex items-center gap-2 text-lg">
                        <GraduationCap size={24} /> Khám phá Curriculum
                    </button>
                </div>

                <div className="mt-12 text-sm text-[#1E293B]/70 flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
                    <span>Được tin tưởng bởi hơn 1000+ học viên</span>
                    <span className="flex items-center gap-1">
                        <span className="text-yellow-400">★★★★★</span> 4.9/5 điểm đánh giá
                    </span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;