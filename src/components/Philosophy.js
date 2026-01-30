'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Philosophy() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center py-32 px-8 overflow-hidden"
            style={{ background: 'var(--bg-secondary)' }}
        >
            {/* Dynamic Background Accent - Large Area */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vh] h-[120vh] bg-[#ee5d3a] rounded-full opacity-[0.03] blur-[150px] pointer-events-none mix-blend-screen" />
            <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-[#ee5d3a] rounded-full opacity-[0.05] blur-[100px] pointer-events-none mix-blend-screen" />

            {/* Subtle Gradient Accent Line (Existing but modified) */}
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#ee5d3a]/5 to-transparent pointer-events-none" />

            {/* Dynamic Background Accent - Circulating Animation */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vh] h-[100vh] rounded-full pointer-events-none mix-blend-screen opacity-[0.05]"
                style={{
                    background: 'conic-gradient(from 0deg, #ee5d3a, transparent, #ee5d3a)',
                    filter: 'blur(100px)',
                }}
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] rounded-full pointer-events-none mix-blend-screen opacity-[0.05]"
                style={{
                    background: 'radial-gradient(circle, #ee5d3a 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.03, 0.06, 0.03],
                }}
                transition={{
                    duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1
                }}
            />

            <motion.div
                className="max-w-3xl mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Section Label */}
                <motion.p
                    className="font-english text-xs tracking-[0.3em] text-[#ee5d3a] mb-16"
                    variants={textVariants}
                >
                    PHILOSOPHY
                </motion.p>

                {/* Main Philosophy Text */}
                <div className="space-y-12">
                    <motion.p
                        className="text-2xl md:text-3xl lg:text-4xl text-[var(--text-heading)] leading-loose"
                        variants={textVariants}
                    >
                        花はモノではなく、命です。
                    </motion.p>

                    <motion.div
                        className="h-px w-16 mx-auto bg-[#ee5d3a]/50"
                        variants={textVariants}
                    />

                    <motion.p
                        className="text-lg md:text-xl text-[var(--text-body)] leading-loose"
                        variants={textVariants}
                    >
                        喜びの日にも、言葉にできない悲しみの日にも。
                    </motion.p>

                    <motion.p
                        className="text-lg md:text-xl text-[var(--text-body)] leading-loose"
                        variants={textVariants}
                    >
                        一本一本の個性が踊るように、
                        <br />
                        あなたの心に静かに寄り添う。
                    </motion.p>

                    <motion.p
                        className="text-lg md:text-xl text-[var(--text-body)] leading-loose"
                        variants={textVariants}
                    >
                        忙しい日々に、ふと立ち止まれる時間を。
                    </motion.p>
                </div>

                {/* Signature */}
                <motion.div
                    className="mt-20"
                    variants={textVariants}
                >
                    <p className="font-english text-sm tracking-[0.2em] text-[var(--text-muted)]">
                        — Aya Igarashi, Owner
                    </p>
                </motion.div>
            </motion.div>

            {/* Vertical Accent Text - Right Side */}
            <motion.div
                className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <p className="vertical-text text-sm tracking-[0.3em] text-[var(--text-muted)]/50">
                    命を繋ぐ、土に還す
                </p>
            </motion.div>
        </section>
    );
}
