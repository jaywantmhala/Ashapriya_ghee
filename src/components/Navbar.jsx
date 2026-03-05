import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';
import { useScrollProgress } from '../hooks/useParallax.js';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled
          ? 'bg-cream-50/96 backdrop-blur-xl shadow-[0_4px_30px_rgba(90,50,10,0.1)] border-b border-gold-200/60'
          : 'bg-transparent'
          }`}
      >
        <nav className="section-wrap flex items-center justify-between h-20">

          {/* ── Logo & Brand Name ──────────────────── */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Ashapriya Ghee">
            {/* Monogram circle */}
            <div className="relative w-12 h-12 rounded-2xl gold-gradient flex items-center justify-center shadow-glow-gold group-hover:shadow-[0_0_36px_rgba(245,158,11,0.7)] transition-all duration-400">
              {/* Rotating ring on hover */}
              <div className="absolute inset-0 rounded-2xl border border-gold-300/40 group-hover:border-gold-300 transition-colors" />
              <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-cover rounded-2xl" />
            </div>

            {/* Brand text */}
            <div className="leading-none">
              {/* Company name - animated reveal */}
              <p className={`brand-sub transition-colors duration-400 ${scrolled ? 'text-maroon-500' : 'text-gold-400'}`}>
                Panchatek Foods
              </p>
              {/* Main brand name - large Cormorant Garamond */}
              <p className={`brand-name text-[1.45rem] font-bold leading-tight transition-colors duration-400 ${scrolled ? 'text-maroon-500' : 'text-maroon-500'}`}>
                Ashapriya Ghee
              </p>
            </div>
          </Link>

          {/* ── Desktop Nav ────────────────────────── */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''} ${scrolled ? 'text-maroon-500' : 'text-maroon-500'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            <a
              href="tel:+919075699977"
              id="nav-call-cta"
              className="btn-gold !py-2.5 !px-5 !text-2xs ml-2 flex items-center gap-2"
            >
              <FiPhone size={13} strokeWidth={2.5} />
              90756 99977
            </a>
          </div>

          {/* ── Hamburger ──────────────────────────── */}
          <button
            id="nav-hamburger"
            className={`md:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors ${scrolled ? 'text-brown-700' : 'text-white'
              }`}
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open
              ? <FiX size={22} strokeWidth={2} />
              : <FiMenu size={22} strokeWidth={2} />
            }
          </button>
        </nav>

        {/* ── Mobile menu ────────────────────────── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${open ? 'max-h-[22rem] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="bg-cream-50/98 backdrop-blur-xl border-t border-gold-200/40 shadow-lg px-6 py-5 flex flex-col gap-4">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `nav-link !text-sm py-1 ${isActive ? 'active !text-gold-700' : '!text-brown-600'}`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="tel:+919075699977"
              className="btn-gold !py-2.5 !text-2xs self-start mt-2 flex items-center gap-2"
            >
              <FiPhone size={13} strokeWidth={2.5} />
              Call: 90756 99977
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
