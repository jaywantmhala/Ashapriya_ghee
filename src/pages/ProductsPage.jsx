import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhone, FiMail, FiCheckCircle } from 'react-icons/fi';
import { PiCowLight, PiLeafLight, PiMedalLight, PiFlameLight, PiJarLight } from 'react-icons/pi';
import { TbPackage, TbBottle, TbBuildingStore, TbGift } from 'react-icons/tb';
import { LuSparkles } from 'react-icons/lu';
import useReveal from '../hooks/useReveal.js';
import useParallax from '../hooks/useParallax.js';

const products = [
  {
    size: '200 ml', tag: 'Starter Pack',
    desc: 'Perfect for first-time buyers or gifting. Discover the rich aroma of Ashapriya Ghee.',
    badge: 'Try It', icon: PiJarLight, featured: false,
  },
  {
    size: '500 ml', tag: 'Family Favourite',
    desc: 'Our best-selling pack. Ideal for everyday dal, sabzi, rotis and weekend sweets.',
    badge: '★ Best Seller', icon: PiJarLight, featured: true,
  },
  {
    size: '1 L', tag: 'Value Pack',
    desc: 'Great value for regular cooking households and festive season preparations.',
    badge: 'Best Value', icon: PiJarLight, featured: false,
  },
  {
    size: '5 L', tag: 'Bulk / HORECA',
    desc: 'For restaurants, caterers, sweet shops and bulk buyers. Attractive pricing.',
    badge: 'Bulk', icon: TbPackage, featured: false,
  },
];

const highlights = [
  { icon: PiLeafLight, label: 'No Additives' },
  { icon: PiCowLight, label: 'Pure Cow Milk' },
  { icon: PiFlameLight, label: 'Slow Simmered' },
  { icon: PiMedalLight, label: 'FSSAI Certified' },
  { icon: TbGift, label: 'Gift Ready' },
  { icon: TbBuildingStore, label: 'Wholesale Available' },
];

const ProductsPage = () => {
  useReveal();
  const parallax = useParallax(0.2);

  return (
    <div>
      {/* ── Page Header ── */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-500/12 blur-3xl parallax-wrap"
          style={{ transform: `translateY(${parallax * -0.4}px)` }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-maroon-500/10 blur-3xl parallax-wrap"
          style={{ transform: `translateY(${parallax * 0.5}px)` }}
        />
        <div className="section-wrap relative z-10 text-center">
          <div className="section-badge !text-gold-400 !border-gold-500/20 !bg-gold-500/8 mb-6">
            <TbBottle size={13} />
            Our Products
          </div>
          <h1
            className="font-display text-6xl md:text-8xl text-white font-light mb-4 leading-none"
            style={{ letterSpacing: '-0.02em' }}
          >
            Pack Sizes for{' '}
            <span className="gold-gradient-text italic font-semibold block md:inline">
              Every Kitchen
            </span>
          </h1>
          <div className="gold-divider mx-auto my-6" />
          <p className="text-white/50 max-w-xl mx-auto font-body leading-relaxed">
            Choose the Ashapriya Ghee pack that suits your daily cooking, festive
            preparations or bulk requirements.
          </p>
        </div>
      </div>

      {/* ── Products Grid ── */}
      <section className="py-20 bg-cream-100">
        <div className="section-wrap">
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((p, i) => (
              <div
                key={p.size}
                className={`card-product flex flex-col reveal ${p.featured ? 'ring-2 ring-gold-400 shadow-glow-gold' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-square bg-gradient-to-br from-cream-200 via-cream-100 to-white overflow-hidden group">
                  <img
                    src="/jar-placeholder.jpg"
                    alt={`Ashapriya Ghee ${p.size}`}
                    className="w-full h-full object-contain px-10 py-8 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 tag-badge ${p.featured ? '!bg-gold-400 !text-brown-800 !border-gold-500' : ''}`}>
                    {p.badge}
                  </div>
                  {/* Featured glow line */}
                  {p.featured && (
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                  )}
                  {/* Icon watermark */}
                  <div className="absolute bottom-3 right-3 text-brown-200/30">
                    <p.icon size={32} />
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-1 space-y-3">
                  <p className="text-2xs text-maroon-500 tracking-[0.25em] uppercase font-jakarta font-700">
                    गाईचे तूप
                  </p>
                  <h2
                    className="font-display text-4xl text-brown-700 font-light leading-none"
                    style={{ letterSpacing: '0.02em' }}
                  >
                    {p.size}
                  </h2>
                  <p className="text-xs text-gold-700 font-jakarta font-700 uppercase tracking-wider flex items-center gap-1">
                    <FiCheckCircle size={11} className="text-gold-500" />
                    {p.tag}
                  </p>
                  <p className="text-sm text-brown-400 font-body leading-relaxed flex-1">{p.desc}</p>
                  <Link
                    to="/contact"
                    className={`btn-gold !py-2.5 !text-2xs flex items-center justify-center gap-2 mt-auto ${p.featured
                        ? ''
                        : '!from-brown-600 !to-brown-700 !text-white !shadow-none hover:!shadow-card-hover'
                      }`}
                  >
                    {p.featured ? 'Order Now' : 'Enquire'}
                    <FiArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlights Strip ── */}
      <section className="py-14 bg-white border-y border-gold-200/40">
        <div className="section-wrap">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {highlights.map(h => (
              <div key={h.label} className="flex flex-col items-center gap-2.5 reveal group">
                <div className="icon-circle icon-circle-gold w-12 h-12 group-hover:shadow-glow-gold transition-shadow">
                  <h.icon size={22} strokeWidth={1} />
                </div>
                <p className="text-2xs font-jakarta font-700 uppercase tracking-wider text-brown-500">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bulk Enquiry ── */}
      <section className="py-20 bg-cream-100">
        <div className="section-wrap">
          <div className="card-dark p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto reveal">
            <div className="space-y-5">
              <div className="section-badge !text-gold-400 !border-gold-500/20 !bg-gold-500/8">
                <TbBuildingStore size={13} />
                B2B &amp; Wholesale
              </div>
              <h2
                className="font-display text-4xl md:text-5xl text-white font-light"
                style={{ letterSpacing: '-0.01em' }}
              >
                Bulk &amp; Business{' '}
                <span className="gold-gradient-text italic font-semibold">Enquiries</span>
              </h2>
              <p className="text-sm text-white/45 font-body leading-relaxed">
                For distributors, retailers, sweet shops, tiffin services and restaurants
                across Maharashtra & PAN India, Panchatek Foods offers attractive bulk
                and private labelling options.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+919075699977"
                className="flex items-center gap-4 text-white/60 hover:text-gold-400 transition-colors group"
              >
                <span className="icon-circle icon-circle-dark w-12 h-12 group-hover:!bg-gold-500/20 group-hover:!text-gold-400">
                  <FiPhone size={18} />
                </span>
                <div>
                  <p className="text-2xs text-white/30 font-jakarta uppercase tracking-wider mb-0.5">Call us</p>
                  <p className="font-jakarta font-600 text-sm">+91 90756 99977</p>
                </div>
              </a>
              <a
                href="mailto:panchatekfoods@gmail.com"
                className="flex items-center gap-4 text-white/60 hover:text-gold-400 transition-colors group"
              >
                <span className="icon-circle icon-circle-dark w-12 h-12 group-hover:!bg-gold-500/20 group-hover:!text-gold-400">
                  <FiMail size={18} />
                </span>
                <div>
                  <p className="text-2xs text-white/30 font-jakarta uppercase tracking-wider mb-0.5">Email us</p>
                  <p className="font-jakarta font-600 text-sm">panchatekfoods@gmail.com</p>
                </div>
              </a>
              <Link to="/contact" className="btn-gold flex items-center justify-center gap-2 mt-4">
                Send Bulk Enquiry <FiArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
