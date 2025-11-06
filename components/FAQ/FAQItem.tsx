"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
    question: string;
    answer: string;
    index: number;
}

export default function FAQItem({ question, answer, index }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-[#1E293B] rounded-xl border border-transparent hover:border-[#6366F1]/50 shadow-lg transition-all duration-300"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-[#E2E8F0]"
            >
                <h3 className="text-lg md:text-xl font-semibold">{question}</h3>
                {isOpen ? (
                    <ChevronDown className="text-[#6366F1]" size={24} />
                    ) : (
                    <ChevronRight className="text-[#6366F1]" size={24} />
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-6 text-[#94A3B8] border-t border-[#334155]/70 leading-relaxed">
                        {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
