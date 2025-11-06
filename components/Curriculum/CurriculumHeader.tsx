import { BookOpenText, Target } from 'lucide-react';

const CurriculumHeader = () => {
    return (
        <section className="relative py-20 md:py-32 text-center bg-linear-to-br from-purple-800 to-blue-800 overflow-hidden">
        {/* Background - Animated Gradient/Blob */}
        <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fuchsia-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
            <BookOpenText size={64} className="mx-auto mb-6 text-white" />
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white leading-tight">
            Our Comprehensive Curriculum
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
            Your step-by-step journey from zero to a professional Full-Stack Developer.
            </p>
            <div className="mt-8 flex items-center justify-center text-indigo-100 gap-3">
            <Target size={28} />
            <span className="text-lg font-semibold">Over 8 Modules & 250+ Hours of Content</span>
            </div>
        </div>
        {/* Tailwind CSS keyframes for blob animation (reuse from Hero if global) */}
        
        </section>
    );
};

export default CurriculumHeader;