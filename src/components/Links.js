'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const links = [
    {
        id: 1,
        title: 'オンラインショップ',
        description: '季節の花束やアレンジメントをご自宅へ',
        href: 'https://sunlips.stores.jp/',
        icon: '🌿',
    },
    {
        id: 2,
        title: 'ふるさと納税',
        description: '鶴岡市のふるさと納税返礼品として、SunLipsの花をお届けします',
        href: '#',
        icon: '🏛️',
    },
];

export default function Links() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative py-24 px-8 md:px-16"
            style={{ background: 'var(--bg-secondary)' }}
        >
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="font-english text-xs tracking-[0.3em] text-[#ee5d3a] mb-4">
                        LINKS
                    </p>
                    <h2 className="text-2xl md:text-3xl text-[var(--text-heading)]">
                        リンク
                    </h2>
                </motion.div>

                {/* Links */}
                <div className="space-y-4">
                    {links.map((link, index) => (
                        <motion.a
                            key={link.id}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="group block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2 + index * 0.15,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <div className="flex items-center gap-6 py-6 border-b border-[var(--text-muted)]/10 transition-all duration-500 group-hover:border-[#ee5d3a]/50">
                                {/* Icon */}
                                <span className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                    {link.icon}
                                </span>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-lg text-[var(--text-heading)] mb-1 group-hover:text-[#ee5d3a] transition-colors duration-500">
                                        {link.title}
                                    </h3>
                                    <p className="text-sm text-[var(--text-muted)]">
                                        {link.description}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <motion.svg
                                    className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[#ee5d3a] transition-colors duration-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </motion.svg>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
