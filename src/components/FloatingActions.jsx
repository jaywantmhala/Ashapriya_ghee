import React, { useState, useEffect } from 'react';
import { FiPhone, FiMail, FiChevronUp } from 'react-icons/fi';

const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3">
      {/* Scroll to top */}
      <button
        onClick={scrollTop}
        aria-label="Scroll to top"
        className={`icon-circle w-11 h-11 bg-white/90 backdrop-blur shadow-card border border-gold-200 text-brown-600 hover:shadow-glow-gold hover:!text-gold-600 transition-all duration-300 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
      >
        <FiChevronUp size={18} />
      </button>

      {/* Email */}
      <a
        href="mailto:panchatekfoods@gmail.com"
        aria-label="Email Panchatek Foods"
        className="icon-circle icon-circle-dark w-12 h-12 !bg-maroon-500 !text-white hover:!bg-maroon-600 shadow-[0_4px_20px_rgba(139,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(139,0,0,0.6)] transition-all duration-300 hover:-translate-y-1"
      >
        <FiMail size={18} />
      </a>

      {/* Phone - pulsing */}
      <a
        href="tel:+919075699977"
        aria-label="Call Panchatek Foods"
        className="icon-circle w-14 h-14 gold-gradient !text-brown-800 shadow-glow-gold hover:shadow-[0_8px_30px_rgba(245,158,11,0.7)] transition-all duration-300 hover:-translate-y-1 relative"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-gold-400/30 animate-ping" />
        <FiPhone size={20} strokeWidth={2} />
      </a>
    </div>
  );
};

export default FloatingActions;
