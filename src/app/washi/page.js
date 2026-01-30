'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function WashiPage() {
    return (
        <main className="relative min-h-screen bg-[#fcfbf9]">
            <Navigation />

            {/* Background Texture Suggestion */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
            />

            <section className="pt-32 pb-24 px-8 md:px-16 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-16 md:gap-24">
                    {/* Image Placeholder Area */}
                    <motion.div
                        className="w-full md:w-1/2 flex flex-col gap-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="aspect-[4/3] bg-[#e6e2dd] relative overflow-hidden flex items-center justify-center border border-gray-300">
                            <div className="text-center p-4">
                                <span className="block text-[#ee5d3a] font-english tracking-widest mb-2 font-medium">PRODUCT IMAGE 01</span>
                                <span className="text-xs text-gray-600 font-sans font-medium">（画像をダウンロードして配置してください）</span>
                            </div>
                        </div>
                        <div className="aspect-[4/3] bg-[#e6e2dd] relative overflow-hidden flex items-center justify-center border border-gray-300">
                            <div className="text-center p-4">
                                <span className="block text-[#ee5d3a] font-english tracking-widest mb-2 font-medium">PRODUCT IMAGE 02</span>
                                <span className="text-xs text-gray-600 font-sans font-medium">（画像をダウンロードして配置してください）</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="font-english text-xs tracking-[0.3em] text-[#ee5d3a] mb-6 font-medium">
                            NEW COLLECTION
                        </p>
                        <h2 className="text-3xl md:text-4xl text-gray-900 mb-8 leading-tight font-serif">
                            “花のあと”
                        </h2>

                        <div className="space-y-8 text-gray-800 leading-loose">
                            <p className="font-medium text-lg">
                                役⽬を終え、やがて土に還る花々を<br />
                                ⼭形の伝統的な⽉⼭和紙にそっと漉き込みました。
                            </p>

                            <div className="space-y-4">
                                <h3 className="text-[#ee5d3a] font-bold tracking-wider text-sm">“花のあと”が⽣まれた理由</h3>
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
                                <p className="font-bold text-[#ee5d3a]">
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

                        <div className="mt-12 flex flex-col md:flex-row gap-4">
                            <a href="https://sunlips.stores.jp/items/69672d9fa078911cd75d1909" target="_blank" rel="noopener noreferrer" className="inline-block text-center border border-[#ee5d3a] text-[#ee5d3a] px-6 py-4 text-sm tracking-[0.1em] hover:bg-[#ee5d3a] hover:text-white transition-colors duration-300">
                                購入はこちら (Product 01)
                                <span className="block text-[10px] opacity-70 mt-1">STORESへ移動します</span>
                            </a>
                            <a href="https://sunlips.stores.jp/items/69108ca6f1aad55eeb0f7707" target="_blank" rel="noopener noreferrer" className="inline-block text-center border border-[#ee5d3a] text-[#ee5d3a] px-6 py-4 text-sm tracking-[0.1em] hover:bg-[#ee5d3a] hover:text-white transition-colors duration-300">
                                購入はこちら (Product 02)
                                <span className="block text-[10px] opacity-70 mt-1">STORESへ移動します</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
