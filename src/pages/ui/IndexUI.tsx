import { Button } from '@/components/ui/button';
import { Play, Zap } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { useEffect, useRef, useState } from 'react';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    filteredProducts,
  } = logic;

  const [scrollY, setScrollY] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const visualizerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const modularCollection = collections.find(c => c.name === 'MODULAR PARTS');

  return (
    <EcommerceTemplate showCart={true}>
      {/* IMMERSIVE HERO SECTION */}
      <section className="relative h-screen overflow-hidden bg-[#050505] flex items-center justify-center">
        {/* Spotlight Effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.08) 0%, transparent 60%)`
          }}
        />
        
        {/* Giant Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <h1 
            className="text-[20vw] font-bold tracking-wider text-white/5 select-none whitespace-nowrap"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          >
            SILENCE
          </h1>
        </div>

        {/* Hero Product Image */}
        <div 
          className="relative z-10 max-w-5xl mx-auto px-4"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`
          }}
        >
          <img 
            src="/hero-headphones.jpg" 
            alt="KINETIC PRO Headphones"
            className="w-full h-auto drop-shadow-[0_50px_100px_rgba(204,255,0,0.15)]"
          />
        </div>

        {/* CTA */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 text-center">
          <Button 
            size="lg"
            className="glass-card px-12 py-8 text-lg font-bold tracking-wider bg-accent/10 hover:bg-accent/20 border-accent/30 text-accent"
          >
            PRE-ORDER — $599
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest animate-pulse">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* DECONSTRUCTED MARQUEE */}
      <section className="bg-[#09090b] border-y border-white/10 py-6 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content flex items-center gap-8 animate-marquee">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 whitespace-nowrap">
                <span className="text-white/70 font-mono text-sm tracking-wider">ANC 3.0</span>
                <Zap className="h-4 w-4 text-accent" />
                <span className="text-white/70 font-mono text-sm tracking-wider">TITANIUM DRIVERS</span>
                <Zap className="h-4 w-4 text-accent" />
                <span className="text-white/70 font-mono text-sm tracking-wider">SPATIAL AUDIO</span>
                <Zap className="h-4 w-4 text-accent" />
                <span className="text-white/70 font-mono text-sm tracking-wider">40H BATTERY</span>
                <Zap className="h-4 w-4 text-accent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEC SHEET BENTO GRID */}
      <section className="bg-[#050505] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-wider mb-16 text-white uppercase">
            THE DETAILS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1: Ear Cup Detail */}
            <div className="glass-card hover-glow p-8 aspect-square overflow-hidden group cursor-pointer">
              <img 
                src="/detail-earcup.jpg" 
                alt="Ear Cup Texture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Card 2: Frequency Response */}
            <div className="glass-card hover-glow p-8 aspect-square overflow-hidden group cursor-pointer bg-[#09090b]">
              <img 
                src="/freq-response.jpg" 
                alt="Frequency Response"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Card 3: Lifestyle Shot 1 */}
            <div className="glass-card hover-glow p-8 aspect-square overflow-hidden group cursor-pointer">
              <img 
                src="/lifestyle-1.jpg" 
                alt="Lifestyle"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>

            {/* Card 4: Lifestyle Shot 2 */}
            <div className="glass-card hover-glow p-8 aspect-square overflow-hidden group cursor-pointer">
              <img 
                src="/lifestyle-2.jpg" 
                alt="Lifestyle"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOUND CHECK PARALLAX SECTION */}
      <section className="relative bg-[#09090b] py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="mb-12 mx-auto flex items-center justify-center w-32 h-32 rounded-full glass-card hover:scale-110 transition-transform duration-500 group"
          >
            <Play className={`h-12 w-12 text-accent transition-all ${isPlaying ? 'scale-90' : 'scale-100'}`} />
          </button>

          <h2 className="text-6xl md:text-8xl font-bold tracking-wider text-white uppercase mb-8">
            HEAR THE <span className="text-accent glow-accent">UNSEEN</span>
          </h2>

          {/* Audio Visualizer */}
          <div ref={visualizerRef} className="flex items-end justify-center gap-2 h-32 mt-16">
            {[...Array(32)].map((_, i) => (
              <div
                key={i}
                className="w-2 bg-accent/30 rounded-t transition-all duration-150"
                style={{
                  height: isPlaying 
                    ? `${Math.random() * 100 + 20}%` 
                    : '20%',
                  animationDelay: `${i * 0.05}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Background Gradient */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, hsl(var(--accent) / 0.05) 0%, transparent 70%)`
          }}
        />
      </section>

      {/* MODULAR PARTS HORIZONTAL SCROLL */}
      {modularCollection && (
        <section className="bg-[#050505] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-wider mb-4 text-white uppercase">
              {modularCollection.name}
            </h2>
            <p className="text-white/50 text-lg font-mono mb-16 max-w-2xl">
              {modularCollection.description}
            </p>

            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
              {loading ? (
                [...Array(3)].map((_, i) => (
                  <div key={i} className="min-w-[350px] glass-card p-6 aspect-square animate-pulse" />
                ))
              ) : (
                filteredProducts
                  .filter(p => p.tags?.some(tag => tag === 'modular'))
                  .map((product) => (
                    <div key={product.id} className="min-w-[350px] snap-center">
                      <ProductCard product={product} />
                    </div>
                  ))
              )}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="relative bg-black py-24 overflow-hidden">
        {/* Giant Clipped Logo */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 pointer-events-none opacity-10">
          <h2 className="text-[30vw] font-bold tracking-wider text-white whitespace-nowrap">
            KINETIC
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1 */}
            <div>
              <h3 className="text-white font-mono text-xs tracking-widest mb-4 opacity-50">
                MANIFEST
              </h3>
              <ul className="space-y-2 text-white/70 text-sm font-mono">
                <li>Technology</li>
                <li>Support</li>
                <li>Warranty</li>
                <li>Specifications</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-white font-mono text-xs tracking-widest mb-4 opacity-50">
                COMPANY
              </h3>
              <ul className="space-y-2 text-white/70 text-sm font-mono">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-white font-mono text-xs tracking-widest mb-4 opacity-50">
                LEGAL
              </h3>
              <ul className="space-y-2 text-white/70 text-sm font-mono">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Returns</li>
                <li>Shipping</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-white/30 text-xs font-mono tracking-widest">
              © 2025 KINETIC AUDIO SYSTEMS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
        }
        
        .marquee-content {
          animation: marquee 30s linear infinite;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </EcommerceTemplate>
  );
};