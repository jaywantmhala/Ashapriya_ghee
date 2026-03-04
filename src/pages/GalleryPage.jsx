import React, { useState, useEffect, useRef } from 'react';
import { FiX, FiTag } from 'react-icons/fi';
import { LuSparkles } from 'react-icons/lu';
import { PiFlowerLotusThin } from 'react-icons/pi';
import useReveal from '../hooks/useReveal.js';
import useParallax from '../hooks/useParallax.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: '/about-hero.jpg', alt: 'Traditional ghee making process', tag: 'Craftsmanship' },
  { src: '/gallery-sweets.jpg', alt: 'Indian festive sweets prepared with ghee', tag: 'Festive Sweets' },
  { src: '/gallery-tadka.jpg', alt: 'Tadka preparation with Ashapriya Ghee', tag: 'Everyday Cooking' },
  { src: '/gallery-jars-table.jpg', alt: 'Farm fresh cow milk source', tag: 'Farm to Table' },
  { src: '/hero-ashapriya.jpg', alt: 'Ashapriya Ghee premium jar product shot', tag: 'Product Display' },
  { src: '/jar-placeholder.jpg', alt: 'Ashapriya Ghee jar lineup', tag: 'Packaging' },
];

const GalleryPage = () => {
  const [selected, setSelected] = useState(null);
  const galleryRef = useRef(null);
  useReveal();
  const parallax = useParallax(0.2);

  useEffect(() => {
    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll('.gallery-item');
      gsap.fromTo(items,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  return (
    <div>
      {/* ── Header ── */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div
          className="absolute top-10 right-10 w-80 h-80 rounded-full bg-gold-500/12 blur-3xl parallax-wrap"
          style={{ transform: `translateY(${parallax * -0.4}px)` }}
        />
        <div
          className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-maroon-500/10 blur-3xl parallax-wrap"
          style={{ transform: `translateY(${parallax * 0.5}px)` }}
        />
        <div className="section-wrap relative z-10 text-center">
          <div className="section-badge !text-gold-400 !border-gold-500/20 !bg-gold-500/8 mb-6">
            <PiFlowerLotusThin size={14} />
            Gallery
          </div>
          <h1
            className="font-display text-6xl md:text-8xl text-white font-light mb-4 leading-none"
            style={{ letterSpacing: '-0.02em' }}
          >
            Ashapriya{' '}
            <span className="gold-gradient-text italic font-semibold block">Moments</span>
          </h1>
          <div className="gold-divider mx-auto my-6" />
          <p className="text-white/50 max-w-lg mx-auto font-body">
            Product · Cooking · Festive Recipes · Traditions —
            see how Ashapriya Ghee adds richness to every occasion.
          </p>
        </div>
      </div>

      {/* ── Gallery Grid ── */}
      <section className="py-20 bg-cream-100">
        <div className="section-wrap">
          <div ref={galleryRef} className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {images.map((img, i) => (
              <figure
                key={img.src}
                className="relative overflow-hidden rounded-3xl shadow-card group cursor-pointer mb-5 break-inside-avoid gallery-item"
                onClick={() => setSelected(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Tag */}
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="flex items-center gap-2">
                    <FiTag size={12} className="text-gold-400" />
                    <p className="text-xs font-jakarta font-700 uppercase tracking-wider text-gold-300">{img.tag}</p>
                  </div>
                  <p className="text-sm text-white/80 mt-1 font-body">{img.alt}</p>
                </figcaption>
                {/* Corner badge */}
                <div className="absolute top-4 right-4 tag-badge opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.tag}
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brown-900/90 backdrop-blur-xl p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7)]"
            onClick={e => e.stopPropagation()}
            style={{ animation: 'scaleIn 0.3s ease' }}
          >
            <img
              src={selected.src}
              alt={selected.alt}
              className="w-full max-h-[80vh] object-cover"
            />
            {/* Caption */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown-900/90 to-transparent p-6 flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <LuSparkles size={11} className="text-gold-400" />
                  <p className="text-2xs text-gold-400 font-jakarta uppercase tracking-wider">{selected.tag}</p>
                </div>
                <p className="text-white font-body text-sm">{selected.alt}</p>
              </div>
            </div>
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 icon-circle icon-circle-dark w-10 h-10 !bg-white/20 !text-white hover:!bg-white/40 transition-colors"
              aria-label="Close"
            >
              <FiX size={18} />
            </button>
          </div>
        </div>
      )}

      {/* ── Brand strip ── */}
      <section className="py-16 bg-white border-t border-gold-200/40 text-center">
        <div className="section-wrap">
          <p className="brand-sub text-brown-400/50 mb-2 reveal">Panchatek Foods</p>
          <h2
            className="font-display text-5xl md:text-6xl text-brown-700 font-light reveal"
            style={{ letterSpacing: '-0.01em' }}
          >
            Ashapriya{' '}
            <span className="gold-gradient-text italic font-semibold">Ghee</span>
          </h2>
          <p className="text-brown-400 font-body mt-4 reveal">
            गाईचे तूप · Pure Cow Ghee · Crafted in Maharashtra
          </p>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
