'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function News() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative py-24 px-8 md:px-16"
            style={{ background: 'var(--bg-tertiary)' }}
        >
            {/* Decorative Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#ee5d3a]/30 to-transparent" />

            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="font-english text-xs tracking-[0.3em] text-[#ee5d3a] mb-4">
                        NEWS
                    </p>
                    <h2 className="text-2xl md:text-3xl text-[var(--text-heading)]">
                        お知らせ
                    </h2>
                </motion.div>

                {/* News Item */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="py-8 border-t border-b border-[var(--text-muted)]/10 text-left">
                        <p className="text-sm text-[var(--text-muted)] mb-2 font-english">
                            2026.01.30
                        </p>
                        <p className="text-lg text-[var(--text-heading)] font-medium">
                            ホームページができました。
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
