import CurriculumHeader from "@/components/Curriculum/CurriculumHeader";
import CurriculumModule from "@/components/Curriculum/CurriculumModule";
import CallToAction from "@/components/HomePage/CallToAction";

export default function CurriculumPage() {
    const curriculumData = [
        {
        module: 'Module 1',
        title: 'HTML & CSS Fundamentals',
        duration: '2 Weeks',
        description: 'Nắm vững cấu trúc website, styling với Tailwind CSS và xây dựng giao diện responsive đẹp mắt.',
        topics: [
            'Giới thiệu về HTML5 và cấu trúc trang web',
            'Cú pháp CSS3, Selector, Box Model, Flexbox, Grid',
            'Thiết kế responsive với Media Queries và Mobile-First',
            'Sử dụng Tailwind CSS để styling nhanh chóng và hiệu quả',
            'Dự án: Xây dựng Landing Page cơ bản',
        ],
        project: {
            title: 'Landing Page Portfolio',
            description: 'Xây dựng một landing page cá nhân để giới thiệu bản thân và các kỹ năng đã học.',
        },
        },
        {
        module: 'Module 2',
        title: 'JavaScript Essentials & DOM Manipulation',
        duration: '3 Weeks',
        description: 'Học JavaScript từ cơ bản đến nâng cao, cách tương tác với DOM để tạo ra các trang web động.',
        topics: [
            'Cú pháp JavaScript (biến, kiểu dữ liệu, toán tử, vòng lặp, điều kiện)',
            'Hàm, đối tượng, mảng và các phương thức xử lý',
            'Thao tác với DOM: chọn phần tử, thay đổi nội dung, thuộc tính, style',
            'Xử lý sự kiện (Events) và Form Validation',
            'Fetch API và làm việc với dữ liệu JSON',
            'Dự án: Xây dựng To-Do List App động',
        ],
        project: {
            title: 'Interactive To-Do List Application',
            description: 'Phát triển một ứng dụng quản lý công việc với khả năng thêm, sửa, xóa và lọc công việc.',
        },
        },
        {
        module: 'Module 3',
        title: 'Modern JavaScript & ES6+',
        duration: '2 Weeks',
        description: 'Khám phá các tính năng hiện đại của JavaScript (ES6+), giúp code gọn gàng và mạnh mẽ hơn.',
        topics: [
            'Arrow Functions, Template Literals, Destructuring',
            'Classes và Object-Oriented Programming (OOP) trong JS',
            'Modules (Import/Export)',
            'Promises và Async/Await để xử lý bất đồng bộ',
            'Error Handling',
            'Dự án: Cải tiến ứng dụng JS với ES6+',
        ],
        project: {
            title: 'Weather App with Async API Calls',
            description: 'Xây dựng ứng dụng thời tiết sử dụng API bên ngoài và xử lý bất đồng bộ.',
        },
        },
        {
        module: 'Module 4',
        title: 'React.js - The Core',
        duration: '4 Weeks',
        description: 'Đi sâu vào thư viện React.js, xây dựng các Single Page Application (SPA) mạnh mẽ.',
        topics: [
            'Giới thiệu React, JSX, Components và Props',
            'State và Lifecycle Methods (Class Components)',
            'Hooks: useState, useEffect, useContext (Functional Components)',
            'Conditional Rendering, List Rendering',
            'Xử lý sự kiện trong React, Form Handling',
            'Dự án: Xây dựng E-commerce Product Catalog',
        ],
        project: {
            title: 'Product Catalog with Filtering',
            description: 'Phát triển trang hiển thị sản phẩm với tính năng lọc và tìm kiếm.',
        },
        },
        {
        module: 'Module 5',
        title: 'Advanced React & State Management',
        duration: '3 Weeks',
        description: 'Nâng cao kỹ năng React với các kỹ thuật quản lý trạng thái phức tạp và tối ưu hiệu suất.',
        topics: [
            'React Router DOM: Định tuyến trong SPA',
            'Quản lý trạng thái với Redux/Zustand/Context API',
            'Fetch Data trong React (Axios, React Query)',
            'Performance Optimization: Memo, useCallback, useMemo',
            'Custom Hooks',
            'Dự án: Xây dựng Social Media Feed',
        ],
        project: {
            title: 'Social Media Feed with Pagination',
            description: 'Ứng dụng hiển thị bài đăng và có chức năng phân trang, tải thêm.',
        },
        },
        {
        module: 'Module 6',
        title: 'Node.js & Express.js - Backend Fundamentals',
        duration: '4 Weeks',
        description: 'Xây dựng API RESTful mạnh mẽ với Node.js và framework Express.js.',
        topics: [
            'Giới thiệu Node.js, NPM, Express.js',
            'Routing, Middleware, Request/Response Cycle',
            'Xây dựng RESTful API (CRUD operations)',
            'Authentication (JWT) và Authorization',
            'Kết nối cơ sở dữ liệu MongoDB với Mongoose',
            'Error Handling trong Express',
            'Dự án: Xây dựng API cho Blog',
        ],
        project: {
            title: 'Blog API Backend',
            description: 'Phát triển API hoàn chỉnh cho một ứng dụng blog với quản lý người dùng, bài viết, bình luận.',
        },
        },
        {
        module: 'Module 7',
        title: 'Database Management & Deployment',
        duration: '3 Weeks',
        description: 'Làm việc hiệu quả với cơ sở dữ liệu và triển khai ứng dụng lên môi trường production.',
        topics: [
            'SQL vs NoSQL: Khi nào sử dụng loại nào?',
            'Thiết kế Schema cơ sở dữ liệu',
            'Cloud Databases (MongoDB Atlas, PostgreSQL on Render/Vercel)',
            'Triển khai Backend (Node.js) lên Heroku/Render',
            'Triển khai Frontend (React/Next.js) lên Vercel/Netlify',
            'Sử dụng Git và GitHub cho quản lý dự án',
            'Dự án: Triển khai Full-Stack E-commerce App',
        ],
        project: {
            title: 'Full-Stack E-commerce Deployment',
            description: 'Triển khai hoàn chỉnh ứng dụng E-commerce với Frontend và Backend trên các dịch vụ đám mây.',
        },
        },
        {
        module: 'Module 8',
        title: 'Final Project & Portfolio Building',
        duration: '4 Weeks',
        description: 'Tổng hợp kiến thức để xây dựng một dự án lớn từ đầu đến cuối và chuẩn bị portfolio.',
        topics: [
            'Lập kế hoạch và thiết kế kiến trúc ứng dụng',
            'Phát triển dự án Full-Stack cá nhân (ví dụ: mạng xã hội, quản lý dự án, sàn giao dịch)',
            'Code Review và tối ưu hóa hiệu suất',
            'Chuẩn bị CV, portfolio và kỹ năng phỏng vấn',
            'Ôn tập và Q&A tổng hợp',
        ],
        project: {
            title: 'Personalized Capstone Project',
            description: 'Xây dựng một ứng dụng Full-Stack cá nhân theo ý tưởng của học viên, thể hiện toàn bộ kỹ năng đã học.',
        },
        },
    ];

    return (
        <main className="min-h-screen bg-white text-[#1E293B]">
            <CurriculumHeader />
            <section className="relative py-24 overflow-hidden">
                 <div className="absolute inset-0 z-0 overflow-hidden">
                    {/* Ánh sáng mờ trái */}
                    <div className="absolute top-1/3 -left-40 w-[32rem] h-[32rem] bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
                    {/* Ánh sáng mờ phải */}
                    <div className="absolute bottom-1/4 -right-40 w-[30rem] h-[30rem] bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
                    {/* Ánh sáng trung tâm hồng cam nhẹ */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[26rem] h-[26rem] bg-[#F43F5E] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

                    {/* Gradient phủ nhẹ để mềm nền */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E0F2FE]/60 to-white opacity-70"></div>
                </div>
                <div className="relative container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16 leading-tight text-black">
                        Lộ Trình Học Full-Stack Toàn Diện
                    </h2>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {curriculumData.map((moduleData, index) => (
                            <CurriculumModule
                                key={index}
                                {...moduleData}
                                moduleIndex={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <CallToAction />
        </main>
    );
}