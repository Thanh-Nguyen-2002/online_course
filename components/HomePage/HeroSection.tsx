import { PlayCircle, GraduationCap } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative h-[calc(100vh-84px)] flex items-center justify-center text-center overflow-hidden bg-[#0F172A]">
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 p-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent 
                    bg-linear-to-r from-[#6366F1] to-[#8B5CF6]">
                    Làm chủ Full-Stack Web Development
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-[#94A3B8] mb-10 max-w-2xl mx-auto">
                    Bắt đầu sự nghiệp của bạn với các dự án thực hành và hướng dẫn từ
                    chuyên gia.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-[#F97316] hover:bg-[#fb923c] text-white font-bold py-3 px-8 rounded-full shadow-lg transition 
                        duration-300 flex items-center gap-2 text-lg cursor-pointer">
                        <PlayCircle size={24} /> Bắt đầu Free Preview
                    </button>
                    <button className="bg-transparent border-2 border-[#6366F1] hover:border-[#8B5CF6] text-[#6366F1] cursor-pointer
                        hover:text-[#8B5CF6] font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 flex items-center gap-2 text-lg">
                        <GraduationCap size={24} /> Khám phá Curriculum
                    </button>
                </div>

                <div className="mt-12 text-sm text-[#94A3B8] flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
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
