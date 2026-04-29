import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  { size: '200 ml', subtitle: 'Starter Pack', desc: 'Perfect for trying or gifting.', tag: 'Try It', img: '/IMG_4.PNG', price: '₹160' },
  { size: '500 ml', subtitle: 'Family Favourite', desc: 'Best seller for everyday cooking.', tag: '★ Best Seller', img: '/IMG_4.PNG', featured: true, price: '₹380' },
  { size: '1 L', subtitle: 'Value Pack', desc: 'Great value for regular households.', tag: 'Value', img: '/IMG_4.PNG', price: '₹750' },
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

const heroSlides = [
  { img: '/banner1.png' },
  { img: '/banner2.png' },
  { img: '/banner3.png' },
  { img: '/banner4.png' }
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

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[731/270] min-h-[150px] overflow-hidden bg-brown-900 border-b border-gold-200/40">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[current].img}
            alt={`Banner ${current + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Progress Dots */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${current === i ? 'bg-gold-500 w-10 sm:w-16' : 'bg-white/40 hover:bg-white/60 w-6 sm:w-10'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

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
      <section className="relative w-full bg-brown-900 overflow-hidden">
        <HeroCarousel />
      </section>

      {/* ══════════ MARQUEE TICKER ════════════════════════ */}
      <Marquee />

      {/* ══════════ QUICK STATS ═══════════════════════════ */}
      <section className="py-16 bg-white border-b border-gold-200/30">
        <div className="section-wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <p className="stat-num group-hover:scale-110 transition-transform duration-500">{s.val}</p>
                <div className="gold-divider mx-auto w-8 my-3 opacity-40 group-hover:w-16 transition-all duration-500" />
                <p className="text-[10px] text-brown-400 font-jakarta font-bold uppercase tracking-[0.2em]">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      {/* ══════════ FEATURED PRODUCTS SLIDER ══════════════ */}
      <section id="home-products" className="py-24 bg-white overflow-hidden w-full">
        <div className="section-wrap">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="reveal-left">
              <div className="section-badge mb-5">
                <TbBottle size={12} />
                Featured Collection
              </div>
              <h2
                className="font-display text-5xl md:text-6xl text-brown-700 font-light leading-tight mb-3"
                style={{ letterSpacing: '-0.01em' }}
              >
                Discover the Perfect<br />
                <span className="italic font-semibold gold-gradient-text">Jar for You</span>
              </h2>
              <div className="gold-divider" />
            </div>
            <div className="reveal-right">
              <Link to="/products" className="btn-maroon flex items-center gap-2 !text-2xs">
                View All Packs <FiArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Slider outside constrained section for edge-to-edge feel */}
        <div className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x transition-all px-[clamp(1rem,5vw,5rem)]">
          {products.map((p, i) => (
            <motion.div
              key={p.size}
              whileHover={{ y: -10 }}
              className={`min-w-[300px] md:min-w-[380px] snap-center card-product flex flex-col ${p.featured ? 'ring-2 ring-gold-400 shadow-glow-gold' : ''}`}
            >
              <div className="relative aspect-[4/5] bg-gradient-to-br from-cream-100 to-white overflow-hidden group">
                <img
                  src={p.img}
                  alt={`Ashapriya Ghee ${p.size}`}
                  className="w-full h-full object-contain px-12 py-10 transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute top-6 right-6 tag-badge ${p.featured ? '!bg-gold-400 !text-brown-800 border-gold-500' : ''}`}>
                  {p.tag}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-3xl text-brown-700">
                    {p.size} <span className="text-xl text-brown-400 font-light">Jar</span>
                  </h3>
                  <span className="font-display text-2xl text-maroon-600 font-semibold">{p.price}</span>
                </div>
                <p className="text-sm text-brown-400 font-body leading-relaxed flex-1">
                  {p.desc}
                </p>
                <Link
                  to={`/product/${p.size.replace(' ', '')}`}
                  className={`btn-gold !py-3 !text-2xs flex items-center justify-center gap-2 mt-auto ${p.featured ? '' : '!from-brown-600 !to-brown-700 !text-white !shadow-none'}`}
                >
                  Buy Now <FiArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="section-wrap">
          <p className="text-center text-sm text-brown-400 mt-8 font-body reveal">
            Swipe to see all varieties
          </p>
        </div>
      </section>

      {/* ══════════ PROCESS ══════════════════════════════ */}
      <section className="py-24 relative overflow-hidden bg-brown-900">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-maroon-500/5 blur-3xl" />

        <div className="section-wrap relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="section-badge !text-gold-400 !border-gold-500/20 !bg-gold-500/8 mb-5">
                <PiFlameLight size={13} />
                Our Process
              </div>
              <h2 className="font-display text-5xl md:text-7xl text-white font-light mb-6">
                From Farm to Your <span className="gold-gradient-text italic">Table</span>
              </h2>
              <div className="gold-divider mx-auto" />
            </motion.div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card-dark p-8 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <p.icon size={80} />
                </div>
                <div className="flex items-center justify-between mb-8">
                  <div className="icon-circle icon-circle-dark w-14 h-14 group-hover:!bg-gold-500 group-hover:!text-brown-900 transition-all duration-500">
                    <p.icon size={28} />
                  </div>
                  <span className="font-display text-6xl text-gold-500/20 font-bold group-hover:text-gold-500/40 transition-colors">
                    {p.num}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-white mb-4">{p.title}</h3>
                <p className="text-sm text-white/50 font-body leading-relaxed group-hover:text-white/70 transition-colors">
                  {p.desc}
                </p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20 text-gold-500/30">
                    <FiArrowRight size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TRADITION PARALLAX ═══════════════════ */}
      <section className="relative py-40 overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            backgroundImage: `url('/IMG_1.PNG')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-brown-900/60 backdrop-blur-[2px]" />
        </div>

        <div className="section-wrap relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-6xl md:text-8xl text-gold-400 font-light mb-8 italic">
              A Legacy of Purity
            </h2>
            <p className="text-xl md:text-2xl text-cream-50/80 font-serif leading-relaxed italic mb-10">
              "Every drop of Ashapriya Ghee tells a story of
              Indian tradition, slow-cooked to perfection just like
              it was made in our grandmother's kitchen."
            </p>
            <div className="gold-divider mx-auto w-24 h-1" />
          </motion.div>
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
