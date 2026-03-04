import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiStar, FiArrowRight, FiPhone, FiMail,
  FiCheckCircle, FiTruck, FiShield, FiAward,
} from 'react-icons/fi';
import {
  PiCowLight, PiFlowerLotusThin, PiLeafLight,
  PiFlameLight, PiJarLight, PiMedalLight,
} from 'react-icons/pi';
import {
  TbBottle, TbPackage, TbStar, TbBuildingStore,
} from 'react-icons/tb';
import { LuSparkles } from 'react-icons/lu';
import useReveal from '../hooks/useReveal.js';
import useParallax, { useElementParallax } from '../hooks/useParallax.js';

/* ─── Data ─────────────────────────────────────────────── */
const features = [
  { icon: PiCowLight, title: '100% Pure Cow Ghee', desc: 'Made from fresh cow milk — no additives, no preservatives, no artificial colours.' },
  { icon: PiFlowerLotusThin, title: 'Rich Aroma & Taste', desc: 'Golden grainy texture and irresistible homely aroma for every Indian kitchen.' },
  { icon: PiFlameLight, title: 'Traditional Bilona Method', desc: 'Inspired by the ancient bilona process for better nutrition and authentic flavour.' },
  { icon: PiMedalLight, title: 'FSSAI Certified', desc: 'Manufactured at a hygienic facility following strict quality standards.' },
];

const products = [
  { size: '200 ml', subtitle: 'Starter Pack', desc: 'Perfect for trying or gifting.', tag: 'Try It', img: '/jar-placeholder.jpg' },
  { size: '500 ml', subtitle: 'Family Favourite', desc: 'Best seller for everyday cooking.', tag: '★ Best Seller', img: '/jar-placeholder.jpg', featured: true },
  { size: '1 L', subtitle: 'Value Pack', desc: 'Great value for regular households.', tag: 'Value', img: '/jar-placeholder.jpg' },
];

const testimonials = [
  { name: 'Sneha Kulkarni', city: 'Pune', rating: 5, quote: 'Ashapriya Ghee has become a must in our home. The aroma reminds me of traditional घरचे तूप — pure and rich.' },
  { name: 'Mahesh Desai', city: 'Kolhapur', rating: 5, quote: 'Perfect for everyday cooking and festive sweets. Rich flavour and consistent quality every single time.' },
  { name: 'Aarti Patil', city: 'Mumbai', rating: 5, quote: 'गाईचे तूप with authentic taste. My kids love parathas and dal tadka made with Ashapriya Ghee.' },
];

const stats = [
  { val: '3+', label: 'Years of Craft' },
  { val: '10K+', label: 'Happy Families' },
  { val: '100%', label: 'Pure Cow Ghee' },
  { val: 'PAN', label: 'India Delivery' },
];

const process = [
  { icon: PiCowLight, num: '01', title: 'Sourced Fresh', desc: 'Only high-quality cow milk from trusted local farms.' },
  { icon: PiJarLight, num: '02', title: 'Curd & Churning', desc: 'Milk set to curd, then churned to extract fresh butter.' },
  { icon: PiFlameLight, num: '03', title: 'Slow Simmered', desc: 'Butter slow-cooked to remove all moisture and impurities.' },
  { icon: TbPackage, num: '04', title: 'Packed Fresh', desc: 'Filtered and packed hygienically in airtight glass jars.' },
];

const trustBadges = [
  { icon: PiMedalLight, label: 'FSSAI Certified' },
  { icon: PiCowLight, label: '100% Cow Ghee' },
  { icon: PiLeafLight, label: 'No Preservatives' },
  { icon: FiShield, label: 'Quality Tested' },
  { icon: FiTruck, label: 'PAN India Delivery' },
  { icon: TbBuildingStore, label: 'Wholesale Available' },
];

const marqueeItems = [
  'Pure Cow Ghee',
  'गाईचे तूप',
  'Rich Aroma',
  'Traditional Method',
  'FSSAI Certified',
  'Crafted in Maharashtra',
  'Family Favourite',
  'Ashapriya Ghee',
];

/* ─── Components ────────────────────────────────────────── */
const StarRating = ({ n = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: n }, (_, i) => (
      <FiStar key={i} size={13} className="text-gold-400 fill-gold-400" />
    ))}
  </div>
);

const Marquee = () => {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden border-y border-gold-200/40 bg-cream-50/80 py-3">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-8 font-jakarta text-xs font-700 text-brown-400 uppercase tracking-widest whitespace-nowrap">
            <LuSparkles size={10} className="text-gold-500" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ─── Page ──────────────────────────────────────────────── */
const HomePage = () => {
  useReveal();
  const heroParallax = useParallax(0.18);
  const { ref: imgRef, offset: imgOffset } = useElementParallax(0.12);

  return (
    <div>
      {/* ══════════ HERO ══════════════════════════════════ */}
      <section className="relative min-h-[96vh] flex items-center overflow-hidden">
        {/* Background with parallax */}
        <div
          className="absolute inset-0 hero-gradient parallax-wrap"
          style={{ transform: `translateY(${heroParallax * 0.3}px)` }}
        />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
        />
        {/* Glow orbs - parallax */}
        <div
          className="absolute top-20 right-0 w-[480px] h-[480px] rounded-full bg-gold-500/12 blur-3xl pointer-events-none parallax-wrap"
          style={{ transform: `translateY(${heroParallax * -0.5}px)` }}
        />
        <div
          className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-maroon-500/10 blur-3xl pointer-events-none parallax-wrap"
          style={{ transform: `translateY(${heroParallax * 0.6}px)` }}
        />
        {/* Decorative rings */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/[0.04] pointer-events-none" />
        <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-gold-400/[0.07] pointer-events-none" />

        <div className="section-wrap relative z-10 w-full py-28 grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Hero Copy ── */}
          <div className="space-y-7">
            {/* Badge */}
            <div className="section-badge !bg-gold-500/10 !border-gold-500/20 !text-gold-400 hero-line-1">
              <LuSparkles size={12} />
              Premium Cow Ghee · गाईचे तूप
            </div>

            {/* Company name - super prominent */}
            <div className="hero-line-2">
              <p className="brand-sub text-gold-400/50 mb-1">by Panchatek Foods</p>
              <h1 className="font-display font-light leading-[1.05] tracking-tight">
                {/* Main brand — huge Cormorant */}
                <span
                  className="block text-[4.2rem] sm:text-[5.5rem] lg:text-[6.5rem] gold-gradient-text"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  Ashapriya
                </span>
                <span
                  className="block text-[2.8rem] sm:text-[3.5rem] lg:text-[4rem] text-cream-50 font-light"
                  style={{ letterSpacing: '0.25em', fontFamily: '"Cormorant Garamond", serif' }}
                >
                  G H E E
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="font-display text-xl italic text-gold-300/60 font-light hero-line-3">
              "Tradition in Every Spoon."
            </p>

            <p className="text-base text-white/55 max-w-md leading-relaxed font-body hero-line-4">
              Crafted with purity, rooted in Indian traditions. Rich aroma, authentic taste
              and the goodness of गाईचे तूप in every meal.
            </p>

            <div className="flex flex-wrap gap-4 hero-line-5">
              <Link to="/products" id="hero-shop-btn" className="btn-gold flex items-center gap-2">
                Shop Now <FiArrowRight size={15} />
              </Link>
              <Link to="/contact" id="hero-contact-btn" className="btn-outline flex items-center gap-2">
                <FiPhone size={13} />
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-6 border-t border-white/10"
              style={{ animation: 'fadeUp 0.8s 0.9s ease both' }}
            >
              {stats.map(s => (
                <div key={s.label}>
                  <p className="stat-num">{s.val}</p>
                  <p className="text-2xs text-white/35 font-jakarta uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Product Image with parallax ── */}
          <div
            ref={imgRef}
            className="relative flex justify-center"
            style={{ animation: 'scaleIn 0.9s 0.3s ease both' }}
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-80 h-80 rounded-full bg-gold-500/20 blur-3xl parallax-wrap"
                style={{ transform: `translateY(${imgOffset * -0.5}px)` }}
              />
            </div>

            <div className="relative w-full max-w-[360px]">
              {/* Floating card – top-left */}
              <div
                className="absolute -top-6 -left-5 z-10 card-glass !rounded-2xl !bg-cream-50/92 px-4 py-3 shadow-card whitespace-nowrap"
                style={{ animation: 'float 5s 0.4s ease-in-out infinite' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <PiMedalLight className="text-gold-500" size={14} />
                  <p className="text-2xs text-brown-500 font-jakarta uppercase tracking-wider">FSSAI Certified</p>
                </div>
                <p className="font-serif text-brown-700 text-sm font-semibold flex items-center gap-1">
                  <FiCheckCircle size={12} className="text-emerald-600" /> Premium Quality
                </p>
              </div>

              {/* Floating card – bottom-right */}
              <div
                className="absolute -bottom-5 -right-5 z-10 card-glass !rounded-2xl !bg-cream-50/92 px-4 py-3 shadow-card whitespace-nowrap"
                style={{ animation: 'float 5s 1.2s ease-in-out infinite' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <TbBottle className="text-gold-500" size={14} />
                  <p className="text-2xs text-brown-500 font-jakarta uppercase tracking-wider">Available In</p>
                </div>
                <p className="font-serif text-brown-700 text-sm font-semibold">200ml · 500ml · 1L</p>
              </div>

              {/* Main image with parallax */}
              <div
                className="relative rounded-[2.5rem] overflow-hidden border border-gold-500/20 shadow-[0_32px_90px_rgba(0,0,0,0.55)] parallax-wrap"
                style={{ transform: `translateY(${imgOffset * -0.3}px)` }}
              >
                <img
                  src="/hero-ashapriya.jpg"
                  alt="Ashapriya Ghee premium cow ghee jar"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-brown-900/85 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="brand-sub text-white/50 mb-0.5">Panchatek Foods</p>
                    <p className="brand-name text-xl text-white leading-none">Ashapriya Ghee</p>
                  </div>
                  <div className="tag-badge">Pure &amp; Natural</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <p className="brand-sub text-white/25">Scroll</p>
          <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
            <div
              className="w-1 h-2.5 bg-gold-400 rounded-full"
              style={{ animation: 'scrollBounce 2s ease-in-out infinite' }}
            />
          </div>
        </div>
      </section>

      {/* ══════════ MARQUEE TICKER ════════════════════════ */}
      <Marquee />

      {/* ══════════ TRUST BADGES ══════════════════════════ */}
      <section className="py-10 bg-white/80 border-b border-gold-200/40">
        <div className="section-wrap">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {trustBadges.map(b => (
              <div key={b.label} className="flex items-center gap-2.5 group cursor-default">
                <div className="icon-circle icon-circle-gold w-9 h-9 group-hover:bg-gold-400/30 transition-colors">
                  <b.icon size={17} />
                </div>
                <span className="text-xs font-jakarta font-700 text-brown-500 uppercase tracking-wider">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FEATURES ══════════════════════════════ */}
      <section className="py-24 bg-cream-100">
        <div className="section-wrap">
          <div className="text-center mb-16 reveal">
            <div className="section-badge mb-5">
              <LuSparkles size={11} />
              Why Choose Us
            </div>
            {/* Premium heading */}
            <h2
              className="font-display text-5xl md:text-6xl text-brown-700 font-light mb-4 leading-tight"
              style={{ letterSpacing: '-0.01em' }}
            >
              Why{' '}
              <span className="italic font-semibold gold-gradient-text">Ashapriya</span>{' '}
              Ghee?
            </h2>
            <div className="gold-divider mx-auto mb-5" />
            <p className="text-brown-400 max-w-lg mx-auto font-body leading-relaxed">
              Trusted by thousands of families for its purity, taste and versatility in
              everyday cooking as well as festive delicacies.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, i) => (
              <div
                key={item.title}
                className="card-glass p-7 flex flex-col gap-5 reveal group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="icon-circle icon-circle-gold w-14 h-14 group-hover:shadow-glow-gold transition-shadow">
                  <item.icon size={28} strokeWidth={1} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-brown-700 mb-2">{item.title}</h3>
                  <p className="text-sm text-brown-400 font-body leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PRODUCTS PREVIEW ══════════════════════ */}
      <section id="home-products" className="py-24 bg-white">
        <div className="section-wrap">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="reveal-left">
              <div className="section-badge mb-5">
                <TbBottle size={12} />
                Our Products
              </div>
              <h2
                className="font-display text-5xl md:text-6xl text-brown-700 font-light leading-tight mb-3"
                style={{ letterSpacing: '-0.01em' }}
              >
                Thoughtfully Packed<br />
                <span className="italic font-semibold gold-gradient-text">for Every Home</span>
              </h2>
              <div className="gold-divider" />
            </div>
            <div className="reveal-right">
              <Link to="/products" className="btn-maroon flex items-center gap-2 !text-2xs">
                View All Packs <FiArrowRight size={13} />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {products.map((p, i) => (
              <div
                key={p.size}
                className={`card-product flex flex-col reveal ${p.featured ? 'ring-2 ring-gold-400 shadow-glow-gold' : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="relative aspect-square bg-gradient-to-br from-cream-200 via-cream-100 to-white overflow-hidden group">
                  <img
                    src={p.img}
                    alt={`Ashapriya Ghee ${p.size}`}
                    className="w-full h-full object-contain px-10 py-8 transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className={`absolute top-4 right-4 tag-badge ${p.featured ? '!bg-gold-400 !text-brown-800 border-gold-500' : ''}`}>
                    {p.tag}
                  </div>
                  {p.featured && (
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1 space-y-3">
                  <p className="text-2xs text-maroon-500 tracking-[0.25em] uppercase font-jakarta font-700">गाईचे तूप</p>
                  <h3 className="font-display text-3xl text-brown-700 font-light" style={{ letterSpacing: '0.03em' }}>
                    {p.size} <span className="text-xl text-brown-400">Jar</span>
                  </h3>
                  <p className="text-xs text-gold-700 font-jakarta font-700 uppercase tracking-wider">{p.subtitle}</p>
                  <p className="text-sm text-brown-400 font-body leading-relaxed flex-1">{p.desc}</p>
                  <Link
                    to="/contact"
                    className={`btn-gold !py-2.5 !text-2xs flex items-center justify-center gap-2 mt-auto ${p.featured ? '' : '!from-brown-600 !to-brown-700 !text-white !shadow-none hover:!shadow-[0_12px_30px_rgba(60,30,10,0.25)]'
                      }`}
                  >
                    Enquire Now <FiArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-brown-400 mt-8 font-body reveal">
            For bulk & distributor enquiries in Maharashtra & PAN India —{' '}
            <Link to="/contact" className="text-maroon-500 underline underline-offset-4 hover:text-maroon-700 transition-colors">
              Contact Panchatek Foods
            </Link>
          </p>
        </div>
      </section>

      {/* ══════════ PROCESS ══════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-maroon-500/10 blur-3xl" />

        <div className="section-wrap relative z-10">
          <div className="text-center mb-16 reveal">
            <div className="section-badge !text-gold-400 !border-gold-500/20 !bg-gold-500/8 mb-5">
              <PiFlameLight size={13} />
              Our Process
            </div>
            <h2
              className="font-display text-5xl md:text-6xl text-white font-light mb-4"
              style={{ letterSpacing: '-0.01em' }}
            >
              From Farm to Your{' '}
              <span className="gold-gradient-text italic font-semibold">Table</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div
                key={p.num}
                className="card-dark p-7 space-y-5 reveal group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="icon-circle icon-circle-dark w-12 h-12 group-hover:!bg-gold-500/20 group-hover:!text-gold-400 transition-all">
                    <p.icon size={24} strokeWidth={1} />
                  </div>
                  <span className="font-display text-5xl text-gold-500/15 font-bold">{p.num}</span>
                </div>
                <h3 className="font-serif text-xl text-white">{p.title}</h3>
                <p className="text-sm text-white/45 font-body leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ GALLERY TEASER ════════════════════════ */}
      <section className="py-24 bg-cream-100">
        <div className="section-wrap">
          <div className="text-center mb-12 reveal">
            <div className="section-badge mb-5">
              <LuSparkles size={11} />
              Gallery
            </div>
            <h2
              className="font-display text-5xl md:text-6xl text-brown-700 font-light mb-4"
              style={{ letterSpacing: '-0.01em' }}
            >
              Ghee for{' '}
              <span className="italic font-semibold gold-gradient-text">Every Occasion</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 reveal">
            <div className="row-span-2 rounded-3xl overflow-hidden shadow-card group">
              <img
                src="/about-hero.jpg"
                alt="Ashapriya Ghee process"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-card group">
              <img
                src="/gallery-sweets.jpg"
                alt="Indian sweets with ghee"
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-card group">
              <img
                src="/gallery-tadka.jpg"
                alt="Tadka with Ashapriya Ghee"
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="col-span-2 rounded-3xl overflow-hidden shadow-card group">
              <img
                src="/gallery-jars-table.jpg"
                alt="Farm sourced cow milk"
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="text-center mt-8 reveal">
            <Link to="/gallery" className="btn-gold flex items-center gap-2 mx-auto w-fit">
              View Full Gallery <FiArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="section-wrap">
          <div className="text-center mb-16 reveal">
            <div className="section-badge mb-5">
              <FiStar size={12} className="fill-gold-400 text-gold-400" />
              Testimonials
            </div>
            <h2
              className="font-display text-5xl md:text-6xl text-brown-700 font-light mb-4"
              style={{ letterSpacing: '-0.01em' }}
            >
              Loved by Families{' '}
              <span className="italic font-semibold gold-gradient-text">Across India</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="card-glass p-7 flex flex-col gap-5 reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <StarRating n={t.rating} />
                <blockquote className="text-brown-500 font-body text-base leading-relaxed flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-gold-100 pt-4">
                  <div className="icon-circle icon-circle-gold w-10 h-10 !rounded-full text-base font-bold font-serif">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-jakarta text-sm font-700 text-brown-700">{t.name}</p>
                    <p className="text-2xs text-brown-400/60 font-jakarta flex items-center gap-1">
                      <FiCheckCircle size={10} className="text-emerald-500" />
                      Verified · {t.city}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT + CONTACT STRIP ════════════════ */}
      <section className="py-24 bg-cream-100">
        <div className="section-wrap">
          <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr] items-center">
            {/* Left */}
            <div className="space-y-6 reveal-left">
              <div className="section-badge">
                <PiFlowerLotusThin size={14} />
                About Panchatek Foods
              </div>
              <h2
                className="font-display text-5xl md:text-6xl text-brown-700 font-light leading-tight"
                style={{ letterSpacing: '-0.01em' }}
              >
                A Promise of Purity<br />
                <span className="italic font-semibold gold-gradient-text">in Every Batch</span>
              </h2>
              <div className="gold-divider" />
              <p className="text-brown-400 font-body leading-relaxed max-w-xl">
                Panchatek Foods combines age-old Indian wisdom with modern hygiene standards
                to bring you premium cow ghee you can trust. From sourcing quality cow milk
                to monitoring every step — each jar of Ashapriya Ghee reflects warmth, care
                and authenticity.
              </p>
              <Link to="/about" className="btn-gold !from-brown-600 !to-brown-700 !text-white !shadow-none hover:!shadow-[0_16px_40px_rgba(60,30,10,0.3)] flex items-center gap-2 w-fit">
                Our Full Story <FiArrowRight size={15} />
              </Link>
            </div>

            {/* Right contact card */}
            <div className="card-dark p-8 space-y-5 reveal-right">
              <div className="section-badge !text-gold-400 !border-gold-500/20 !bg-gold-500/8">
                <FiPhone size={11} />
                Quick Contact
              </div>
              <h3 className="font-serif text-2xl text-white">Talk to Panchatek Foods</h3>
              <p className="text-sm text-white/45 font-body">
                For retail, wholesale or bulk orders across Maharashtra & India.
              </p>
              <div className="space-y-3 pt-2">
                <a
                  href="tel:+919075699977"
                  className="flex items-center gap-3 text-white/60 hover:text-gold-400 transition-colors group"
                >
                  <span className="icon-circle icon-circle-dark w-10 h-10 group-hover:!bg-gold-500/20 group-hover:!text-gold-400">
                    <FiPhone size={15} />
                  </span>
                  <div>
                    <p className="text-2xs text-white/30 font-jakarta uppercase tracking-wider">Call Us</p>
                    <p className="text-sm font-jakarta font-600">+91 90756 99977</p>
                  </div>
                </a>
                <a
                  href="mailto:panchatekfoods@gmail.com"
                  className="flex items-center gap-3 text-white/60 hover:text-gold-400 transition-colors group"
                >
                  <span className="icon-circle icon-circle-dark w-10 h-10 group-hover:!bg-gold-500/20 group-hover:!text-gold-400">
                    <FiMail size={15} />
                  </span>
                  <div>
                    <p className="text-2xs text-white/30 font-jakarta uppercase tracking-wider">Email Us</p>
                    <p className="text-sm font-jakarta font-600">panchatekfoods@gmail.com</p>
                  </div>
                </a>
              </div>
              <Link to="/contact" className="btn-gold flex items-center justify-center gap-2 mt-4">
                Send Enquiry <FiArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
