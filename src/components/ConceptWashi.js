'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ConceptWashi() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative py-32 px-8 md:px-16 overflow-hidden"
            style={{ background: '#fcfbf9' }} // 和紙のようなオフホワイト
        >
            {/* Background Texture Suggestion (CSS noise could be added here) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
            />

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">

                {/* Image Placeholder Area */}
                <motion.div
                    className="w-full md:w-1/2 aspect-[3/4] bg-[#e6e2dd] relative overflow-hidden"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="absolute inset-0 flex items-center justify-center text-[#ee5d3a]/30 font-english tracking-widest">
                        WASHI IMAGE
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="font-english text-xs tracking-[0.3em] text-[#ee5d3a] mb-6">
                        NEW COLLECTION
                    </p>
                    <h2 className="text-3xl md:text-4xl text-[var(--text-heading)] mb-8 leading-tight font-serif">
                        “花のあと”
                    </h2>

                    <div className="space-y-8 text-[var(--text-body)] leading-loose">
                        <p className="font-medium text-lg">
                            役⽬を終え、やがて土に還る花々を<br />
                            ⼭形の伝統的な⽉⼭和紙にそっと漉き込みました。
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-[#ee5d3a] font-medium tracking-wider text-sm">“花のあと”が⽣まれた理由</h3>
                            <p>
                                役⽬を終えた花は、本来なら廃棄されてしまうもの。<br />
                                けれどその花々には、花と向き合い、丹精込めて育ててきた<br />
                                ⽣産者さんの想いも宿っています。
                            </p>
                            <p>
                                空間を彩り、時間を豊かにしてきた確かなもの。<br />
                                「そのまま終わらせてしまうのは、あまりにももったいない」<br />
                                そんな想いから、この作品は⽣まれました。
                            </p>
                            <p>
                                花が咲いた“あと”の美しさを、もう⼀度別のかたちで残したい。<br />
                                やがて土に還る花々を、⼭形の伝統である⽉⼭和紙に漉き込み<br />
                                新たな役⽬となります。
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-[#ee5d3a]">
                                廃棄ではなく、循環へ。<br />
                                消費ではなく、記憶として。
                            </p>
                            <p className="mt-4">
                                “花のあと”とは<br />
                                花と⼈、⾃然と豊かな暮らしをやさしく繋ぎ直すための、<br />
                                ささやかな試みです。
                            </p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <a href="#" className="inline-block border border-[#ee5d3a] text-[#ee5d3a] px-8 py-3 text-sm tracking-[0.2em] hover:bg-[#ee5d3a] hover:text-white transition-colors duration-300">
                            VIEW MORE
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
