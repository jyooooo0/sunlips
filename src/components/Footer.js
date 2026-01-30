'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-16 px-8 md:px-16 bg-[#ee5d3a] text-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Logo */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-english tracking-[0.1em] mb-2">SunLips</h2>
                    <p className="text-xs text-white/80 tracking-[0.05em]">
                        生活に、花がある豊かさを。
                    </p>
                </div>

                {/* Copyright */}
                <p className="text-xs font-english tracking-[0.1em] text-white/60">
                    &copy; {currentYear} SunLips. All Rights Reserved.
                </p>

                {/* Back to Top */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="group flex flex-col items-center gap-2 text-xs font-english tracking-[0.2em] text-white hover:text-white/80 transition-colors"
                >
                    <div className="w-px h-12 bg-white/50 group-hover:bg-white transition-colors" />
                    TOP
                </button>
            </div>
        </footer>
    );
}
