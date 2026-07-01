"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
    "building.",
    "lifting.",
    "debugging.",
    "coding.",
    "shipping."
]
export default function Rotating() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2200);
        return () => clearInterval(timer);
    }, []);


    return (
        <div className=" relative inline-flex h-8 w-[120px] items-center justify-center overflow-hidden rounded-full  px-4 text-2xl font-medium text-stone-700  ">
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}

                >
                    {words[index]}

                </motion.span>
            </AnimatePresence>
        </div>
    )
}