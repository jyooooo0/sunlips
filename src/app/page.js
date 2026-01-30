'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import ConceptWashi from '@/components/ConceptWashi';
import Service from '@/components/Service'; // 追加
import Gallery from '@/components/Gallery';
import News from '@/components/News';
import Links from '@/components/Links';
import ShopInfo from '@/components/ShopInfo';
import Footer from '@/components/Footer';
import Opening from '@/components/Opening';

export default function Home() {
  const [showOpening, setShowOpening] = useState(true);

  return (
    <main className="relative">
      <AnimatePresence>
        {showOpening && (
          <Opening onComplete={() => setShowOpening(false)} />
        )}
      </AnimatePresence>

      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Philosophy Section */}
      <section id="philosophy">
        <Philosophy />
      </section>

      {/* Concept Washi Section */}
      <section id="washi">
        <ConceptWashi />
      </section>

      {/* Service Section - NEW */}
      <section id="service">
        <Service />
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* News Section - お知らせ */}
      <section id="news">
        <News />
      </section>

      {/* Links Section - オンラインショップ・ふるさと納税 */}
      <section id="links">
        <Links />
      </section>

      {/* Shop Info Section */}
      <section id="shop">
        <ShopInfo />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
