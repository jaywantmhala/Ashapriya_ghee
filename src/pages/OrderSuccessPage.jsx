import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { FiCheckCircle, FiPackage, FiHome, FiArrowRight, FiPhoneCall } from 'react-icons/fi';
import useReveal from '../hooks/useReveal.js';
import gsap from 'gsap';

const OrderSuccessPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const paymentId = searchParams.get('id');
    const orderId = searchParams.get('order');

    useReveal();

    useEffect(() => {
        // Animation for the checkmark
        gsap.fromTo(".success-check",
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)", delay: 0.2 }
        );

        // Confetti-like effect or simple bounce
        gsap.to(".success-check", {
            y: -10,
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "power1.inOut"
        });
    }, []);

    if (!paymentId) {
        // Redirect if someone tries to access it directly without an order
        useEffect(() => {
            const timer = setTimeout(() => navigate('/'), 3000);
            return () => clearTimeout(timer);
        }, [navigate]);

        return (
            <div className="min-h-screen flex items-center justify-center bg-cream-50 font-jakarta">
                <div className="text-center space-y-4">
                    <div className="w-12 h-12 border-4 border-gold-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="text-brown-500">Redirecting to home...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 bg-cream-50 min-h-screen overflow-hidden">
            <div className="max-w-3xl mx-auto px-6">

                {/* ── Main Success Card ── */}
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-card border border-gold-200/40 text-center relative reveal">

                    {/* Floating Decorative Elements */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                        <div className="success-check w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(16,185,129,0.4)] border-4 border-white">
                            <FiCheckCircle size={48} />
                        </div>
                    </div>

                    <div className="mt-12 space-y-6">
                        <div>
                            <h1 className="font-display text-4xl md:text-5xl text-brown-700 mb-2">Order Confirmed!</h1>
                            <p className="text-brown-400 font-jakarta text-lg">Thank you for choosing Panchatek Foods. Your jar of pure health is being prepared with care.</p>
                        </div>

                        <div className="inline-block py-2 px-6 bg-cream-100 rounded-full border border-gold-200 text-sm font-jakarta font-semibold text-gold-700">
                            Transaction ID: {paymentId}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 mt-10">
                            <div className="bg-white border border-gold-100 p-6 rounded-2xl flex items-center gap-4 text-left group hover:border-gold-300 transition-colors">
                                <div className="w-12 h-12 bg-cream-100 rounded-xl flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all">
                                    <FiPackage size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-brown-400 uppercase tracking-widest font-bold">Order ID</p>
                                    <p className="text-brown-700 font-jakarta font-semibold">#{orderId || 'TXN-8821'}</p>
                                </div>
                            </div>
                            <div className="bg-white border border-gold-100 p-6 rounded-2xl flex items-center gap-4 text-left group hover:border-gold-300 transition-colors">
                                <div className="w-12 h-12 bg-cream-100 rounded-xl flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all">
                                    <FiHome size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-brown-400 uppercase tracking-widest font-bold">Delivery Status</p>
                                    <p className="text-brown-700 font-jakarta font-semibold text-sm">Processing in 24-48 hrs</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/products" className="btn-outline !rounded-full flex items-center justify-center gap-2 group">
                                Continue Shopping <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/" className="btn-gold !rounded-full flex items-center justify-center gap-2 shadow-glow-gold">
                                <FiHome size={18} /> Back to Home
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── Help Section ── */}
                <div className="mt-8 text-center reveal-bottom pointer-events-none opacity-80">
                    <p className="text-brown-400 font-jakarta flex items-center justify-center gap-2">
                        Need help with your order? <FiPhoneCall size={16} />
                        <span className="font-semibold text-brown-600">+91 98765 43210</span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default OrderSuccessPage;
