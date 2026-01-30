'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ShopInfo() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative py-32 px-8 md:px-16"
            style={{ background: 'var(--bg-primary)' }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 md:gap-24">

                    {/* Left: Shop Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Logo */}
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl text-[var(--text-heading)] tracking-[0.1em]">
                                SunLips
                            </h2>
                            <p className="mt-2 font-english text-sm tracking-[0.2em] text-[#ee5d3a]">
                                FLOWER SHOP
                            </p>
                        </div>

                        {/* Information */}
                        <div className="space-y-8">
                            {/* Address */}
                            <div>
                                <p className="font-english text-xs tracking-[0.2em] text-[#ee5d3a] mb-2">
                                    ADDRESS
                                </p>
                                <p className="text-[var(--text-heading)] leading-relaxed">
                                    〒997-0015<br />
                                    山形県鶴岡市末広町13-5<br />
                                    HEART LANDビル
                                </p>
                            </div>

                            {/* Tel */}
                            <div>
                                <p className="font-english text-xs tracking-[0.2em] text-[#ee5d3a] mb-2">
                                    TEL
                                </p>
                                <a
                                    href="tel:0235-25-7700"
                                    className="text-[var(--text-heading)] hover:text-[#ee5d3a] transition-colors duration-500"
                                >
                                    0235-25-7700
                                </a>
                            </div>

                            {/* Hours */}
                            <div>
                                <p className="font-english text-xs tracking-[0.2em] text-[#ee5d3a] mb-2">
                                    OPEN
                                </p>
                                <p className="text-[var(--text-heading)]">
                                    10:00 - 18:00
                                </p>
                            </div>

                            {/* Closed */}
                            <div>
                                <p className="font-english text-xs tracking-[0.2em] text-[#ee5d3a] mb-2">
                                    CLOSE
                                </p>
                                <p className="text-[var(--text-heading)]">
                                    火曜・不定休
                                </p>
                            </div>

                            {/* Parking */}
                            <div>
                                <p className="font-english text-xs tracking-[0.2em] text-[#ee5d3a] mb-2">
                                    PARKING
                                </p>
                                <p className="text-[var(--text-heading)] leading-relaxed">
                                    🅿︎ 1台<br />
                                    <span className="text-[var(--text-muted)] text-sm">
                                        店舗向かいの立体駐車場もご利用頂けます
                                    </span>
                                </p>
                            </div>

                            {/* Note */}
                            <div className="pt-4 border-t border-[var(--text-muted)]/10">
                                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                    ※ DMからのorderは承っておりません<br />
                                    お電話にてご注文をお願い致します
                                </p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-12 pt-8 border-t border-[var(--text-muted)]/10">
                            <div className="flex gap-6">
                                <a
                                    href="https://www.instagram.com/sunlips2008/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-english text-sm tracking-[0.15em] text-[var(--text-muted)] hover:text-[#ee5d3a] transition-colors duration-500"
                                >
                                    INSTAGRAM
                                </a>
                                <a
                                    href="https://sunlips.stores.jp/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-english text-sm tracking-[0.15em] text-[var(--text-muted)] hover:text-[#ee5d3a] transition-colors duration-500"
                                >
                                    ONLINE SHOP
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="font-english text-xs tracking-[0.2em] text-[#ee5d3a] mb-4">
                            ACCESS
                        </p>
                        <div className="aspect-square md:aspect-[4/5] overflow-hidden">
                            <iframe
                                src="https://maps.google.com/maps?q=SunLips+%E5%B1%B1%E5%BD%A2%E7%9C%8C%E9%B6%B4%E5%B2%A1%E5%B8%82%E6%9C%AB%E5%BA%83%E7%94%BA13-5&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="map-grayscale"
                                title="SunLips Location"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
