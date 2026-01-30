'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/images/hero-bg.jpg')`,
                }}
            >
                {/* Multiple Gradient Overlays for Depth - Static */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1917]/80 via-[#1a1917]/50 to-[#1a1917]/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#ee5d3a]/20 to-transparent mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1917] via-transparent to-transparent" />
            </div>

            {/* Static Overlay instead of Scroll-based Fog */}
            <div className="absolute inset-0 bg-[#1a1917]/30 pointer-events-none" />

            {/* Main Content */}
            <div className="relative z-10 flex h-full flex-col justify-end pb-[15vh] px-8 md:px-16 lg:px-24">

                {/* Vertical Text - Left Side Accent */}
                <motion.div
                    className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 1.2 }}
                >
                    <p className="vertical-text text-sm tracking-[0.3em] text-[var(--text-muted)] font-english">
                        FLOWER SHOP SINCE 2009
                    </p>
                </motion.div>

                {/* Main Copy */}
                <div className="max-w-2xl ml-auto text-right">
                    <motion.h1
                        className="text-[var(--text-heading)] mb-6 leading-relaxed whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        生活に、花がある豊かさを。
                    </motion.h1>

                    <motion.div
                        className="flex flex-col items-end gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="font-english text-lg tracking-[0.2em] text-[var(--text-heading)]">
                            SunLips
                        </p>
                        <p className="font-english text-sm tracking-[0.15em] text-[#ee5d3a]">
                            Tsuruoka, Yamagata
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <span className="text-xs tracking-[0.2em] text-[var(--text-muted)] font-english">
                        SCROLL
                    </span>
                    <motion.div
                        className="w-px h-12 bg-gradient-to-b from-[#ee5d3a] to-transparent"
                        animate={{ scaleY: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
