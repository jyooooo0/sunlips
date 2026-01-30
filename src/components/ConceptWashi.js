'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function ConceptWashi() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative py-32 px-8 md:px-16 overflow-hidden"
            style={{ background: '#fcfbf9' }}
        >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
            />

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
                {/* Image Placeholder Area */}
                <motion.div
                    className="w-full md:w-1/2 flex flex-col gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="w-full aspect-[4/3] bg-[#e6e2dd] relative overflow-hidden flex items-center justify-center border border-gray-300">
                        <span className="font-english tracking-widest text-[#ee5d3a]/50">IMAGE</span>
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="font-english text-xs tracking-[0.3em] text-[#ee5d3a] mb-6 font-medium">
                        NEW COLLECTION
                    </p>
                    <h2 className="text-3xl md:text-4xl text-gray-900 mb-8 leading-tight font-serif">
                        “花のあと”
                    </h2>

                    <div className="space-y-8 text-gray-800 leading-loose mb-12">
                        <p className="font-medium text-lg">
                            役⽬を終え、やがて土に還る花々を<br />
                            ⼭形の伝統的な⽉⼭和紙にそっと漉き込みました。
                        </p>
                    </div>

                    <div>
                        <Link href="/washi" className="inline-block border border-[#ee5d3a] text-[#ee5d3a] px-8 py-3 text-sm tracking-[0.2em] hover:bg-[#ee5d3a] hover:text-white transition-colors duration-300">
                            VIEW MORE
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
