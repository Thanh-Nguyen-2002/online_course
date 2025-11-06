"use client";
import { useEffect, useState } from "react";
import LoadingOverlay from "./LoadingOverlay";
import { motion } from "framer-motion";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { usePathname } from "next/navigation";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 3200);
        return () => clearTimeout(timer);
    }, [pathname]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative">
            {loading ? (
                <LoadingOverlay
                    onFinish={() => setLoading(false)}
                />
            ) : (
                <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}>
                    <header className="h-[84px]">
                        <Header />
                    </header>
                    <motion.main
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {children}
                    </motion.main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            )}
        </div>
    );
}
