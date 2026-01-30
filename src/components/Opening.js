'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Opening({ onComplete }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 3000); // 3秒で完了
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a1917] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
            }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
        >
            {/* Background Bloom Wash */}
            <motion.div
                className="absolute inset-0 bg-[#ee5d3a]"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 3, times: [0, 0.5, 1] }}
            />

            {/* Core Seed: 命の始まり */}
            <motion.div
                className="relative w-2 h-2 rounded-full bg-white drop-shadow-[0_0_10px_rgba(238,93,58,0.8)]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                }}
                transition={{ duration: 2.5, times: [0, 0.3, 1], ease: "easeInOut" }}
            />

            {/* Circulating Rings: 循環 */}
            <motion.div
                className="absolute w-[150px] h-[150px] border border-[#ee5d3a]/60 rounded-full"
                initial={{ scale: 0, opacity: 0, rotate: 0 }}
                animate={{
                    scale: [0, 1.5],
                    opacity: [0, 0.8, 0],
                    rotate: 180
                }}
                transition={{ duration: 2.5, ease: "easeOut" }}
            />
            <motion.div
                className="absolute w-[120px] h-[120px] border border-[#ee5d3a]/40 rounded-full"
                initial={{ scale: 0, opacity: 0, rotate: 0 }}
                animate={{
                    scale: [0, 1.8],
                    opacity: [0, 0.6, 0],
                    rotate: -120
                }}
                transition={{ delay: 0.1, duration: 2.5, ease: "easeOut" }}
            />

            {/* Blooming Petals: 花の開花 */}
            {/* 6枚の花びらが回転しながら広がる */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-32 h-64 bg-gradient-to-t from-[#ee5d3a] to-transparent rounded-[100%] mix-blend-screen opacity-0"
                    style={{
                        originY: 1, // 下端（中心）を基準に回転・拡大
                        rotate: i * 60,
                        translateY: '-50%', // 中心合わせ調整
                    }}
                    animate={{
                        scaleY: [0, 1.2],
                        scaleX: [0, 1],
                        opacity: [0, 0.4, 0],
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 2,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                />
            ))}

            {/* Wipe Effect Text */}
            <motion.div
                className="absolute text-[#ee5d3a] font-english tracking-[0.5em] text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: [0, 1, 0],
                    scale: [0.9, 1.1],
                }}
                transition={{
                    duration: 2,
                    times: [0, 0.4, 1],
                    ease: "easeInOut"
                }}
            >
                SunLips
            </motion.div>

        </motion.div>
    );
}
