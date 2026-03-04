import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiPhone, FiMail, FiMapPin, FiClock,
  FiArrowRight, FiInstagram, FiFacebook,
} from 'react-icons/fi';
import { PiLeafLight, PiMedalLight } from 'react-icons/pi';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 dark-gradient" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
      />
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-gold-600/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-52 h-52 rounded-full bg-maroon-500/8 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* CTA Banner */}
        <div className="border-b border-white/10">
          <div className="section-wrap py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="brand-sub text-gold-500/60 mb-2">Ready to order?</p>
              <h3 className="font-serif text-2xl text-white">
                Get Ashapriya Ghee{' '}
                <span className="gold-gradient-text">Delivered Today</span>
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href="tel:+919075699977" className="btn-gold !text-2xs flex items-center gap-2">
                <FiPhone size={13} strokeWidth={2.5} />
                Call Now: 90756 99977
              </a>
              <Link to="/contact" className="btn-outline !text-2xs flex items-center gap-2">
                Send Enquiry <FiArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="section-wrap py-14 grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl gold-gradient flex items-center justify-center shadow-glow-gold overflow-hidden">
                <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="brand-sub text-gold-500/60">Panchatek Foods</p>
                <p className="brand-name text-xl text-white">Ashapriya Ghee</p>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-body max-w-xs">
              गाईचे तूप crafted with purity and modern hygiene. Pure cow ghee from
              Maharashtra, brought to your kitchen with love, tradition and care.
            </p>
            {/* Veg + FSSAI badges */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-green-700/40 bg-green-900/20">
                <PiLeafLight className="text-green-500" size={14} />
                <span className="text-2xs text-green-400 font-jakarta">100% Vegetarian</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10">
                <PiMedalLight className="text-gold-400" size={14} />
                <span className="text-2xs text-gold-400 font-jakarta">FSSAI Certified</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Instagram" className="icon-circle icon-circle-dark w-9 h-9 hover:!bg-pink-500/20 hover:!text-pink-400 transition-all">
                <FiInstagram size={15} />
              </a>
              <a href="#" aria-label="Facebook" className="icon-circle icon-circle-dark w-9 h-9 hover:!bg-blue-500/20 hover:!text-blue-400 transition-all">
                <FiFacebook size={15} />
              </a>
              <a href="tel:+919075699977" aria-label="Call us" className="icon-circle icon-circle-dark w-9 h-9">
                <FiPhone size={14} />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div className="md:col-span-2">
            <h4 className="text-2xs tracking-[0.25em] uppercase font-jakarta font-700 text-gold-500 mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/products', label: 'Products' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-white/45 hover:text-gold-400 transition-colors font-body flex items-center gap-1.5 group"
                  >
                    <FiArrowRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-2">
            <h4 className="text-2xs tracking-[0.25em] uppercase font-jakarta font-700 text-gold-500 mb-5">Packs</h4>
            <ul className="space-y-3">
              {['200 ml Jar', '500 ml Jar', '1 L Jar', '5 L Bulk'].map(p => (
                <li key={p}>
                  <Link to="/products" className="text-sm text-white/45 hover:text-gold-400 transition-colors font-body flex items-center gap-1.5 group">
                    <FiArrowRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-2xs tracking-[0.25em] uppercase font-jakarta font-700 text-gold-500 mb-5">Get in Touch</h4>
            <a href="tel:+919075699977" className="flex items-center gap-3 text-sm text-white/55 hover:text-gold-400 transition-colors group">
              <span className="icon-circle icon-circle-dark w-9 h-9 group-hover:!bg-gold-500/20 group-hover:!text-gold-400">
                <FiPhone size={14} />
              </span>
              +91 90756 99977
            </a>
            <a href="mailto:panchatekfoods@gmail.com" className="flex items-center gap-3 text-sm text-white/55 hover:text-gold-400 transition-colors group">
              <span className="icon-circle icon-circle-dark w-9 h-9 group-hover:!bg-gold-500/20 group-hover:!text-gold-400">
                <FiMail size={14} />
              </span>
              panchatekfoods@gmail.com
            </a>
            <div className="flex items-start gap-3 text-sm text-white/55">
              <span className="icon-circle icon-circle-dark w-9 h-9 mt-0.5">
                <FiMapPin size={14} />
              </span>
              <span>Maharashtra, India<br /><span className="text-2xs text-white/30">Serving PAN India</span></span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/55">
              <span className="icon-circle icon-circle-dark w-9 h-9">
                <FiClock size={14} />
              </span>
              Mon–Sat · 10 AM – 7 PM IST
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="section-wrap py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-2xs text-white/20 font-jakarta">
              © {year} Panchatek Foods Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-2xs text-white/20 font-jakarta">
              Made in India 🇮🇳 · Crafted with Purity & Tradition
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
