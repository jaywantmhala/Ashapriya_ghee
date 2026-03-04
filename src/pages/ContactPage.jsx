import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle, FiUser } from 'react-icons/fi';
import { TbMessageCircle } from 'react-icons/tb';
import { LuSparkles } from 'react-icons/lu';
import useReveal from '../hooks/useReveal.js';
import useParallax from '../hooks/useParallax.js';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  useReveal();
  const parallax = useParallax(0.2);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }, 1200);
  };

  const contactInfo = [
    {
      icon: FiPhone,
      label: 'Call Us',
      value: '+91 90756 99977',
      href: 'tel:+919075699977',
    },
    {
      icon: FiMail,
      label: 'Email Us',
      value: 'panchatekfoods@gmail.com',
      href: 'mailto:panchatekfoods@gmail.com',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Maharashtra, India',
      sub: 'Serving PAN India',
    },
    {
      icon: FiClock,
      label: 'Business Hours',
      value: 'Mon – Sat, 10 AM – 7 PM',
      sub: 'IST',
    },
  ];

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
            <TbMessageCircle size={13} />
            Get in Touch
          </div>
          <h1
            className="font-display text-6xl md:text-8xl text-white font-light mb-4 leading-none"
            style={{ letterSpacing: '-0.02em' }}
          >
            Let's{' '}
            <span className="gold-gradient-text italic font-semibold">Connect</span>
          </h1>
          <div className="gold-divider mx-auto my-6" />
          <p className="text-white/50 max-w-lg mx-auto font-body">
            Wholesale · Retail · Distribution · PAN India.
            Share your requirements and we'll get back to you promptly.
          </p>
        </div>
      </div>

      {/* ── Contact Grid ── */}
      <section className="py-20 bg-cream-100">
        <div className="section-wrap">
          <div className="grid gap-10 lg:grid-cols-2 items-start">

            {/* ── Form ── */}
            <div className="card-glass p-8 space-y-6 reveal-left">
              <div>
                <div className="section-badge mb-3">
                  <LuSparkles size={11} />
                  Send Enquiry
                </div>
                <h2 className="font-serif text-2xl text-brown-700">Reach Out to Us</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="flex items-center gap-1.5 text-xs font-jakarta font-700 text-brown-600 uppercase tracking-wider">
                      <FiUser size={11} />
                      Full Name *
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      className="w-full rounded-xl border border-gold-200 bg-white px-4 py-3 text-sm font-body text-brown-700 placeholder-brown-300 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="flex items-center gap-1.5 text-xs font-jakarta font-700 text-brown-600 uppercase tracking-wider">
                      <FiPhone size={11} />
                      Phone
                    </label>
                    <input
                      id="phone" name="phone" type="tel"
                      className="w-full rounded-xl border border-gold-200 bg-white px-4 py-3 text-sm font-body text-brown-700 placeholder-brown-300 transition-all"
                      placeholder="Mobile number"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="flex items-center gap-1.5 text-xs font-jakarta font-700 text-brown-600 uppercase tracking-wider">
                    <FiMail size={11} />
                    Email Address
                  </label>
                  <input
                    id="email" name="email" type="email"
                    className="w-full rounded-xl border border-gold-200 bg-white px-4 py-3 text-sm font-body text-brown-700 placeholder-brown-300 transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="flex items-center gap-1.5 text-xs font-jakarta font-700 text-brown-600 uppercase tracking-wider">
                    <TbMessageCircle size={11} />
                    Message *
                  </label>
                  <textarea
                    id="message" name="message" required rows={5}
                    className="w-full rounded-xl border border-gold-200 bg-white px-4 py-3 text-sm font-body text-brown-700 placeholder-brown-300 transition-all resize-none"
                    placeholder="Tell us about your requirement or enquiry — pack size, quantity, location, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-brown-700/30 border-t-brown-700 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <FiSend size={14} />
                      Submit Enquiry
                    </>
                  )}
                </button>

                {submitted && (
                  <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                    <FiCheckCircle size={16} className="text-emerald-600" />
                    <p className="text-sm text-emerald-700 font-body">
                      Thank you! Our team will get in touch with you shortly.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* ── Contact Info ── */}
            <div className="space-y-5 reveal-right">
              <div className="card-dark p-8 space-y-5">
                <div className="section-badge !text-gold-400 !border-gold-500/20 !bg-gold-500/8">
                  <FiMapPin size={11} />
                  Reach Us
                </div>
                <h3 className="font-serif text-2xl text-white">Panchatek Foods</h3>
                <div className="space-y-4 pt-2">
                  {contactInfo.map(c => (
                    c.href ? (
                      <a
                        key={c.label}
                        href={c.href}
                        className="flex items-center gap-4 text-white/60 hover:text-gold-400 transition-colors group"
                      >
                        <span className="icon-circle icon-circle-dark w-11 h-11 group-hover:!bg-gold-500/20 group-hover:!text-gold-400 shrink-0">
                          <c.icon size={16} />
                        </span>
                        <div>
                          <p className="text-2xs text-white/30 font-jakarta uppercase tracking-wider mb-0.5">{c.label}</p>
                          <p className="font-jakarta text-sm font-500">{c.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div key={c.label} className="flex items-center gap-4 text-white/60">
                        <span className="icon-circle icon-circle-dark w-11 h-11 shrink-0">
                          <c.icon size={16} />
                        </span>
                        <div>
                          <p className="text-2xs text-white/30 font-jakarta uppercase tracking-wider mb-0.5">{c.label}</p>
                          <p className="font-jakarta text-sm font-500">{c.value}</p>
                          {c.sub && <p className="text-2xs text-white/30">{c.sub}</p>}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>

              {/* Who should contact */}
              <div className="card-glass p-6 space-y-3">
                <h4 className="font-serif text-lg text-brown-700">Who Should Contact Us?</h4>
                <ul className="space-y-2">
                  {[
                    'Retail shop owners',
                    'Distributors & wholesalers',
                    'Sweet shops & restaurants',
                    'Tiffin & catering services',
                    'Individual bulk buyers',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-brown-400 font-body">
                      <FiCheckCircle size={13} className="text-gold-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
