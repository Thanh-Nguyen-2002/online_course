"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingOverlayProps {
    onFinish: () => void;
}

export default function LoadingOverlay({ onFinish }: LoadingOverlayProps) {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) return prev + 5;
                clearInterval(interval);
                setTimeout(() => {
                setVisible(false);
                setTimeout(onFinish, 800);
                }, 600);
                return 100;
            });
        }, 120);
        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-linear-to-br from-slate-900 via-gray-900 to-black text-white"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                <motion.div
                    className="relative mb-8 flex flex-col items-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative">
                        <div className="absolute -inset-3 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                        <div className="relative z-10 h-20 w-20 rounded-full bg-black flex items-center justify-center border border-cyan-400/30 shadow-[0_0_30px_rgba(0,255,255,0.4)]">
                            <span className="text-4xl font-bold text-cyan-300">NX</span>
                        </div>
                    </div>
                    <motion.h2
                        className="mt-4 text-xl tracking-wide text-cyan-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Next.js Learning Hub
                    </motion.h2>
                </motion.div>

                <div className="w-[250px] h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                    <motion.div
                    className="h-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                    />
                </div>

                <motion.p
                    className="mt-4 text-sm text-gray-300 font-light tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {progress < 100 ? `Đang tải nội dung... ${progress}%` : "Hoàn tất!"}
                </motion.p>

                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
