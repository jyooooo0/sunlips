'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const galleryImages = [
    { id: 1, src: '/images/gallery-1.jpg', alt: 'テーブルコーディネート', size: 'large' },
    { id: 2, src: '/images/gallery-2.jpg', alt: '花びら', size: 'small' },
    { id: 3, src: '/images/gallery-3.jpg', alt: '和室の装花', size: 'medium' },
    { id: 4, src: '/images/gallery-4.jpg', alt: 'ウェディング装花', size: 'large' },
];

function GalleryItem({ image, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const sizeClasses = {
        small: 'aspect-square',
        medium: 'aspect-[4/5]',
        large: 'aspect-[3/4] md:row-span-2',
    };

    return (
        <motion.div
            ref={ref}
            className={`relative overflow-hidden ${sizeClasses[image.size]} group cursor-pointer`}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
                duration: 1,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image with Sepia Filter */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image.src})` }}
                animate={{
                    filter: isHovered
                        ? 'sepia(0) saturate(1) brightness(1)'
                        : 'sepia(0.2) saturate(0.8) brightness(0.9)',
                    scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Gradient Overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#1a1917]/60 via-transparent to-transparent"
                animate={{ opacity: isHovered ? 0.3 : 0.6 }}
                transition={{ duration: 0.4 }}
            />

            {/* Caption on Hover */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 p-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                transition={{ duration: 0.3 }}
            >
                <p className="text-sm text-[var(--text-heading)]">{image.alt}</p>
            </motion.div>
        </motion.div>
    );
}

export default function Gallery() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative py-32 px-8 md:px-16"
            style={{ background: 'var(--bg-primary)' }}
        >
            {/* Section Header */}
            <motion.div
                className="max-w-7xl mx-auto mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <p className="font-english text-xs tracking-[0.3em] text-[#ee5d3a] mb-4">
                    WORKS
                </p>
                <h2 className="text-2xl md:text-3xl text-[var(--text-heading)]">
                    作品
                </h2>
            </motion.div>

            {/* Masonry Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
                    {galleryImages.map((image, index) => (
                        <GalleryItem key={image.id} image={image} index={index} />
                    ))}
                </div>
            </div>

            {/* View More Link */}
            <motion.div
                className="max-w-7xl mx-auto mt-16 text-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                <a
                    href="https://www.instagram.com/sunlips2008/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-[var(--text-muted)] hover:text-[#ee5d3a] transition-colors duration-500 font-english text-sm tracking-[0.15em]"
                >
                    <span>VIEW MORE ON INSTAGRAM</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </motion.div>
        </section>
    );
}
