import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import ScrollToTopHelper from './components/ScrollToTopHelper.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const pageTitles = {
  '/': 'Ashapriya Ghee | Premium Pure Cow Ghee – Tradition in Every Spoon',
  '/about': 'About Us | Ashapriya Ghee by Panchatek Foods',
  '/products': 'Products | Ashapriya Ghee – Premium Cow Ghee Packs',
  '/gallery': 'Gallery | Ashapriya Ghee – Moments & Recipes',
  '/contact': 'Contact Panchatek Foods | Wholesale & Retail Enquiry',
};

const AppShell = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.title = pageTitles[location.pathname] || 'Ashapriya Ghee';
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-brown-600">
      <ScrollToTopHelper />

      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center hero-gradient">
          {/* Animated rings */}
          <div className="relative flex items-center justify-center mb-8">
            <div className="absolute w-24 h-24 rounded-full border border-gold-400/20 animate-spin-slow" />
            <div className="absolute w-16 h-16 rounded-full border border-gold-400/30 animate-[spin_3s_linear_infinite_reverse]" />
            <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shadow-glow-gold">
              <span className="text-brown-700 text-xs font-bold">AG</span>
            </div>
          </div>
          <p className="font-display text-3xl text-gold-300 font-light tracking-widest mb-2">Ashapriya</p>
          <p className="text-2xs text-gold-500/60 tracking-[0.4em] uppercase font-jakarta">Premium Cow Ghee</p>
          {/* Progress bar */}
          <div className="mt-8 w-40 h-0.5 bg-brown-700 rounded-full overflow-hidden">
            <div className="h-full bg-gold-400 origin-left animate-[scaleIn_1s_ease_forwards]" style={{ transformOrigin: 'left', animation: 'shimmer 1.2s ease forwards' }} />
          </div>
        </div>
      )}

      <Navbar />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

const App = () => <AppShell />;
export default App;
