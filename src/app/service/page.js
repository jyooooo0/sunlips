'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function ServicePage() {
    return (
        <main className="relative min-h-screen bg-[var(--bg-primary)]">
            <Navigation />

            <section className="pt-32 pb-24 px-8 md:px-16 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="font-english text-xs tracking-[0.3em] text-[#ee5d3a] mb-4">SERVICE</p>
                    <h1 className="text-3xl md:text-4xl text-[var(--text-heading)] font-serif">サービス一覧</h1>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Header Area */}
                    <div className="text-center mb-12">
                        <h3 className="text-xl md:text-2xl text-[var(--text-heading)] font-medium mb-4">
                            季節のはなだより
                        </h3>
                        <p className="text-[#ee5d3a] tracking-wider font-medium">
                            四季を感じ、空間に寄り添う 花の定期便（法⼈・店舗向け）
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Plan A */}
                        <div className="bg-[#fcfbf9] p-6 rounded-sm border border-gray-200">
                            <h4 className="text-lg font-bold text-black mb-4 border-l-4 border-[#ee5d3a] pl-4 py-1">
                                A：ベーシックプラン
                                <span className="block text-sm font-normal text-gray-800 mt-1">（美容院・飲⾷店など）</span>
                            </h4>
                            <ul className="space-y-3 text-gray-800 pl-2 font-medium">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#ee5d3a]">•</span>
                                    <span>隔週 / 週1回</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#ee5d3a]">•</span>
                                    <span>内容： 花材のみ</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#ee5d3a]">•</span>
                                    <span>価格： <span className="font-english font-bold">￥3,300 〜 ￥5,500</span> / 回（税込）</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#ee5d3a]">•</span>
                                    <span>⽉額換算： <span className="font-english font-bold">￥6,600 〜 ￥11,000</span></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#ee5d3a]">•</span>
                                    <span>花瓶レンタルなし <br /><span className="text-xs text-[#d14022] font-bold">※初回に花瓶ご購⼊10％OFF</span></span>
                                </li>
                            </ul>
                        </div>

                        {/* Plan B */}
                        <div className="bg-[#fcfbf9] p-6 rounded-sm border border-gray-200">
                            <h4 className="text-lg font-bold text-black mb-4 border-l-4 border-[#ee5d3a] pl-4 py-1">
                                B：スタンダードプラン
                                <span className="block text-sm font-normal text-gray-800 mt-1">（事務所・サロンなど）</span>
                            </h4>
                            <ul className="space-y-3 text-gray-800 pl-2 font-medium">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#ee5d3a]">•</span>
                                    <span>隔週 / 週1回 / ⽉1回 選択可</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#ee5d3a]">•</span>
                                    <span>内容： ⽣花（空間に合わせてアレンジ）</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#ee5d3a]">•</span>
                                    <span>価格： <span className="font-english font-bold">￥11,000 〜 ￥22,000</span></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#ee5d3a]">•</span>
                                    <span>花瓶レンタル込み（追加保証あり）</span>
                                </li>
                                <li className="text-xs text-gray-600 mt-2 pl-4 -indent-4 leading-relaxed">
                                    ※万が⼀破損した場合は、お客様のご負担にて弁償をお願い致します。
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Plan C */}
                    <div className="bg-gray-100 p-6 rounded-sm mb-10 text-center md:text-left border border-gray-200">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <h4 className="text-lg font-bold text-black md:w-1/3 border-l-4 border-gray-500 pl-4">
                                C：プレミアムプラン
                            </h4>
                            <p className="text-gray-800 md:w-2/3 font-medium">
                                より広範囲な装飾や特別なご要望に対応いたします。<br />
                                詳細はお気軽にお問い合わせください。
                            </p>
                        </div>
                    </div>

                    {/* Image Placeholder - User to replace */}
                    <div className="w-full aspect-video bg-[#e6e2dd] flex flex-col items-center justify-center text-[#ee5d3a]/60 font-english mb-8 border-2 border-dashed border-[#ee5d3a]/30 gap-2">
                        <span className="tracking-widest font-bold">PDF IMAGE AREA</span>
                        <span className="text-sm text-gray-700 font-bold">ここに画像が入ります</span>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
