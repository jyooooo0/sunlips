'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const navLinks = [
    { id: 'philosophy', label: '想い', labelEn: 'Philosophy' },
    { id: 'news', label: 'お知らせ', labelEn: 'News' }, // Moved News here
    { id: 'gallery', label: '作品', labelEn: 'Works' },
    { id: 'service', label: 'サービス', labelEn: 'Service' },
    { id: 'washi', label: '和紙製品', labelEn: 'Washi' },
    { id: 'shop', label: '店舗情報', labelEn: 'Shop' },
    { id: 'onlineshop', label: 'Online Shop', labelEn: 'Store', href: 'https://sunlips.stores.jp/', isExternal: true },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (link) => {
        if (link.isExternal) {
            window.open(link.href, '_blank', 'noopener,noreferrer');
            setIsMenuOpen(false);
            return;
        }

        // ServiceとWashiは別ページへ遷移
        if (link.id === 'service' || link.id === 'washi') {
            window.location.href = `/${link.id}`;
            return;
        }

        // ホームページ内のアンカーリンク
        if (window.location.pathname !== '/') {
            window.location.href = `/#${link.id}`;
            return;
        }

        const element = document.getElementById(link.id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            {/* Desktop Navigation */}
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 hidden md:block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <div
                    className={`mx-8 mt-6 px-8 py-4 flex items-center justify-between transition-all duration-700 ${isScrolled
                        ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md border border-[var(--text-muted)]/10 rounded-lg'
                        : ''
                        }`}
                >
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="font-english text-xl tracking-[0.15em] text-[var(--text-heading)] hover:text-[#ee5d3a] transition-colors duration-500"
                    >
                        SunLips
                    </button>

                    {/* Nav Links */}
                    <nav className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link)}
                                className={`group relative font-english text-sm tracking-[0.1em] transition-all duration-500 ${link.id === 'onlineshop'
                                    ? 'bg-[#ee5d3a] text-white px-6 py-2 rounded-full hover:bg-[#d14022] hover:shadow-lg'
                                    : 'text-[var(--text-muted)] hover:text-[var(--text-heading)]'
                                    }`}
                            >
                                <span>{link.id === 'onlineshop' ? link.label : link.labelEn}</span>
                                {link.id !== 'onlineshop' && (
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#ee5d3a] transition-all duration-500 group-hover:w-full" />
                                )}
                            </button>
                        ))}
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Navigation */}
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <div className={`px-6 py-4 flex items-center justify-between transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-[var(--bg-primary)]/95 backdrop-blur-md' : ''
                    }`}>
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="font-english text-lg tracking-[0.15em] text-[var(--text-heading)]"
                    >
                        SunLips
                    </button>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                        aria-label="Menu"
                    >
                        <motion.span
                            className="w-6 h-px bg-[var(--text-heading)]"
                            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 4 : 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="w-6 h-px bg-[var(--text-heading)]"
                            animate={{ opacity: isMenuOpen ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="w-6 h-px bg-[var(--text-heading)]"
                            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -4 : 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden bg-[#ee5d3a] flex flex-col items-center justify-center p-8"
                        initial={{ clipPath: 'circle(0% at 100% 0%)' }}
                        animate={{ clipPath: 'circle(150% at 100% 0%)' }}
                        exit={{ clipPath: 'circle(0% at 100% 0%)' }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-[100px]" />
                            <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500 rounded-full blur-[120px]" />
                        </div>

                        <nav className="relative z-10 flex flex-col items-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={link.id}
                                    onClick={() => scrollToSection(link)}
                                    className={`text-center group ${link.id === 'onlineshop' ? 'bg-white px-8 py-3 rounded-full' : ''}`}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                                >
                                    {link.id !== 'onlineshop' && (
                                        <span className="block font-english text-xs tracking-[0.3em] text-white/70 mb-2 group-hover:text-white transition-colors">
                                            {link.labelEn}
                                        </span>
                                    )}
                                    <span className={`block text-xl md:text-2xl font-medium transition-transform duration-300 ${link.id === 'onlineshop'
                                        ? 'text-[#ee5d3a] font-bold tracking-widest'
                                        : 'text-white group-hover:scale-105'
                                        }`}>
                                        {link.label}
                                    </span>
                                </motion.button>
                            ))}
                        </nav>

                        {/* Mobile Menu Footer */}
                        <motion.div
                            className="absolute bottom-12 font-english text-xs tracking-[0.2em] text-white/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Tsuruoka, Yamagata
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
