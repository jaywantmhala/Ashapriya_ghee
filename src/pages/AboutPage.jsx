import React from 'react';
import { FiCheckCircle, FiAward } from 'react-icons/fi';
import { PiCowLight, PiLeafLight, PiFlameLight, PiMedalLight, PiFlowerLotusThin } from 'react-icons/pi';
import { TbBuildingFactory2, TbRefreshAlert } from 'react-icons/tb';
import { LuSparkles } from 'react-icons/lu';
import useReveal from '../hooks/useReveal.js';
import useParallax from '../hooks/useParallax.js';

const pillars = [
  { icon: PiFlameLight, title: 'Traditional Inspired Process', desc: 'Our production is inspired by the bilona-style method, where butter from curd is slowly heated to develop rich flavour, colour and aroma.' },
  { icon: PiCowLight, title: 'Quality Ingredients', desc: 'We use carefully sourced cow milk and maintain strict checks at every stage to ensure only the best ghee reaches your home.' },
  { icon: TbBuildingFactory2, title: 'Hygienic Manufacturing', desc: 'Our facility follows GMP with stainless-steel equipment, clean handling and temperature-controlled processes.' },
  { icon: PiMedalLight, title: 'FSSAI Compliant', desc: 'Ashapriya Ghee is produced per FSSAI guidelines with regular quality checks, batch-level records and transparent labelling.' },
];

const AboutPage = () => {
  useReveal();
  const parallax = useParallax(0.2);

  return (
    <div>
      {/* ── Hero ── */}
      <div className="relative overflow-hidden">
        {/* Image with parallax */}
        <div className="relative w-full h-[78vh] min-h-[480px]">
          <img
            src="/about-hero.jpg"
            alt="Ashapriya Ghee traditional premium ghee manufacturing"
            className="w-full h-full object-cover parallax-wrap"
            style={{ transform: `translateY(${parallax * 0.35}px) scale(1.1)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-900/85 via-brown-900/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent" />

          <div className="section-wrap absolute inset-0 flex items-end pb-16">
            <div className="max-w-2xl space-y-5">
              <div className="section-badge !text-gold-400 !border-gold-500/20 !bg-gold-500/8">
                <PiFlowerLotusThin size={13} />
                Our Story · Panchatek Foods
              </div>
              <h1
                className="font-display text-6xl md:text-8xl text-white font-light"
                style={{ letterSpacing: '-0.02em' }}
              >
                Ashapriya<br />
                <span className="gold-gradient-text italic font-semibold text-5xl md:text-7xl">Ghee</span>
              </h1>
              <p className="text-white/65 font-body text-base leading-relaxed max-w-lg">
                गाईचे तूप crafted with purity, hygienic standards and the warmth of
                Indian tradition — for your family's table.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Story ── */}
      <section className="py-20 bg-cream-100">
        <div className="section-narrow">
          <div className="space-y-6 reveal">
            <div className="section-badge">
              <LuSparkles size={11} />
              Our Story
            </div>
            <h2
              className="font-display text-5xl md:text-6xl text-brown-700 font-light leading-tight"
              style={{ letterSpacing: '-0.01em' }}
            >
              Tradition Bottled{' '}
              <span className="italic font-semibold gold-gradient-text">with Care</span>
            </h2>
            <div className="gold-divider" />
            <div className="space-y-5 text-brown-400 font-body leading-relaxed text-base">
              <p>
                At Panchatek Foods, we believe that ghee is more than an ingredient — it is
                a part of Indian tradition, hospitality and health. <strong className="text-brown-600">Ashapriya Ghee</strong> was
                created with one simple promise: to offer pure, flavourful cow ghee that
                reminds you of तूप made at home by our mothers and grandmothers.
              </p>
              <p>
                Our journey started with a small batch facility in Maharashtra, carefully
                selecting quality cow milk and following time-honoured methods to maintain
                nutrition, aroma and taste. Today, Ashapriya Ghee is trusted by households,
                retailers and food businesses across Maharashtra and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-16 bg-white">
        <div className="section-wrap">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-glass p-8 space-y-4 reveal-left">
              <div className="icon-circle icon-circle-gold w-12 h-12">
                <PiFlowerLotusThin size={26} strokeWidth={1} />
              </div>
              <h3 className="font-serif text-2xl text-brown-700">Our Mission</h3>
              <div className="gold-divider" />
              <p className="text-brown-400 font-body leading-relaxed">
                To bring authentic, premium-quality cow ghee to every Indian kitchen,
                blending traditional values with modern production practices and ensuring
                purity in every spoon.
              </p>
            </div>
            <div className="card-glass p-8 space-y-4 reveal-right">
              <div className="icon-circle icon-circle-gold w-12 h-12">
                <LuSparkles size={22} />
              </div>
              <h3 className="font-serif text-2xl text-brown-700">Our Vision</h3>
              <div className="gold-divider" />
              <p className="text-brown-400 font-body leading-relaxed">
                To be a trusted household name for गाईचे तूप across India, known for our
                unwavering focus on quality, transparency and customer trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="section-wrap relative z-10">
          <div className="text-center mb-14 reveal">
            <div className="section-badge !text-gold-400 !border-gold-500/20 !bg-gold-500/8 mb-5">
              <FiAward size={12} />
              Why Choose Us
            </div>
            <h2
              className="font-display text-5xl md:text-6xl text-white font-light"
              style={{ letterSpacing: '-0.01em' }}
            >
              A Premium{' '}
              <span className="gold-gradient-text italic font-semibold">Ghee Experience</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="card-dark p-7 space-y-4 flex gap-5 reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="icon-circle icon-circle-dark w-12 h-12 shrink-0 mt-1">
                  <p.icon size={24} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white mb-2 flex items-center gap-2">
                    <FiCheckCircle size={14} className="text-gold-400" />
                    {p.title}
                  </h4>
                  <p className="text-sm text-white/50 font-body leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-16 bg-cream-100">
        <div className="section-wrap">
          <div className="flex flex-wrap items-center justify-center gap-8 reveal">
            {[
              { icon: PiMedalLight, label: 'FSSAI Certified', sub: 'Food Safety Compliant' },
              { icon: PiLeafLight, label: '100% Vegetarian', sub: 'Pure Cow Ghee' },
              { icon: PiCowLight, label: 'Cow Milk Sourced', sub: 'Quality Assured' },
              { icon: TbRefreshAlert, label: 'Batch Tested', sub: 'Every Single Batch' },
            ].map(c => (
              <div key={c.label} className="card-glass px-7 py-5 flex items-center gap-4 min-w-[200px]">
                <div className="icon-circle icon-circle-gold w-12 h-12">
                  <c.icon size={24} strokeWidth={1} />
                </div>
                <div>
                  <p className="font-jakarta text-sm font-700 text-brown-700">{c.label}</p>
                  <p className="text-2xs text-brown-400 font-jakarta">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
