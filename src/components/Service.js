'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function Service() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative py-24 px-8 md:px-16"
            style={{ background: 'var(--bg-secondary)' }}
        >
            <div className="max-w-4xl mx-auto text-center">
                {/* Section Header */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="font-english text-xs tracking-[0.3em] text-[#ee5d3a] mb-4">
                        SERVICE
                    </p>
                    <h2 className="text-2xl md:text-3xl text-[var(--text-heading)] mb-6">
                        サービス一覧
                    </h2>
                    <p className="text-[var(--text-body)] mb-8 leading-relaxed">
                        四季を感じ、空間に寄り添う 花の定期便など、<br />
                        法人・店舗向けのサービスをご提供しております。
                    </p>

                    <Link href="/service" className="inline-block border border-[#ee5d3a] text-[#ee5d3a] px-8 py-3 text-sm tracking-[0.2em] hover:bg-[#ee5d3a] hover:text-white transition-colors duration-300">
                        READ MORE
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
