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
                        <h3 className="text-lg text-[var(--text-heading)] mb-2 font-medium">
                            季節のはなだより
                        </h3>
                        <p className="text-sm text-[#ee5d3a] mb-6 tracking-wider">
                            四季を感じ、空間に寄り添う 花の定期便（法⼈・店舗向け）
                        </p>

                        <div className="space-y-6 mb-6">
                            <div className="bg-white/50 p-6 rounded-sm">
                                <h4 className="text-md font-bold text-[var(--text-heading)] mb-2 border-l-4 border-[#ee5d3a] pl-3">
                                    A：ベーシックプラン
                                    <span className="block text-xs font-normal text-[var(--text-muted)] mt-1">（美容院・飲⾷店など）</span>
                                </h4>
                                <ul className="text-sm space-y-2 list-disc list-inside text-[var(--text-body)] pl-2">
                                    <li>隔週 / 週1回</li>
                                    <li>内容： 花材のみ</li>
                                    <li>価格： <span className="font-english">￥3,300 〜 ￥5,500</span> / 回（税込）</li>
                                    <li>⽉額換算： <span className="font-english">￥6,600 〜 ￥11,000</span></li>
                                    <li>花瓶レンタルなし <span className="text-xs text-[#ee5d3a]">※初回に花瓶ご購⼊10％OFF</span></li>
                                </ul>
                            </div>

                            <div className="bg-white/50 p-6 rounded-sm">
                                <h4 className="text-md font-bold text-[var(--text-heading)] mb-2 border-l-4 border-[#ee5d3a] pl-3">
                                    B：スタンダードプラン
                                    <span className="block text-xs font-normal text-[var(--text-muted)] mt-1">（事務所・サロンなど）</span>
                                </h4>
                                <ul className="text-sm space-y-2 list-disc list-inside text-[var(--text-body)] pl-2">
                                    <li>隔週 / 週1回 / ⽉1回 選択可</li>
                                    <li>内容： ⽣花（空間に合わせてアレンジ）</li>
                                    <li>価格： <span className="font-english">￥11,000 〜 ￥22,000</span></li>
                                    <li>花瓶レンタル込み（追加保証あり）</li>
                                    <li className="list-none text-xs text-[var(--text-muted)] pl-5 -indent-5">※万が⼀破損した場合は、お客様のご負担にて弁償をお願い致します。</li>
                                </ul>
                            </div>

                            <div className="bg-white/50 p-6 rounded-sm opacity-60">
                                <h4 className="text-md font-bold text-[var(--text-heading)] mb-2 border-l-4 border-[var(--text-muted)] pl-3">
                                    C：プレミアムプラン
                                </h4>
                                <p className="text-sm text-[var(--text-body)] pl-2">詳細はお問い合わせください。</p>
                            </div>
                        </div>

                        <div className="w-full aspect-video bg-[#f0eee9] flex items-center justify-center text-[#ee5d3a]/20 font-english tracking-widest mb-4">
                            PDF IMAGE PREVIEW
                        </div>
                    </div>

                    <div className="py-8 border-b border-[var(--text-muted)]/10 text-left">
                        <p className="text-sm text-[var(--text-muted)] mb-2 font-english">
                            2026.01.30
                        </p>
                        <p className="text-lg text-[var(--text-heading)]">
                            ホームページができました。
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
