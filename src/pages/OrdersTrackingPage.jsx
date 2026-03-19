import React, { useState } from 'react';
import { FiSearch, FiPackage, FiCalendar, FiMapPin, FiTruck } from 'react-icons/fi';
import useReveal from '../hooks/useReveal.js';

const OrdersTrackingPage = () => {
    const [phone, setPhone] = useState('');
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    useReveal();

    // Re-trigger reveal animations when orders are loaded
    React.useEffect(() => {
        if (orders.length > 0) {
            // Give React a moment to render the new elements
            setTimeout(() => {
                const cards = document.querySelectorAll('.result-card');
                cards.forEach((el) => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                });
            }, 50);
        }
    }, [orders]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const trimmedPhone = phone.trim();
        if (!trimmedPhone) return;

        setLoading(true);
        setSearched(true);
        try {
            const res = await fetch(`http://localhost:8000/get_orders.php?phone=${trimmedPhone}`);
            const data = await res.json();
            if (data.success) {
                setOrders(data.orders);
            } else {
                setOrders([]);
            }
        } catch (err) {
            console.error(err);
            alert("Error connecting to server. Please ensure PHP backend is running.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-32 pb-20 bg-cream-50 min-h-screen">
            <div className="section-wrap max-w-4xl mx-auto">

                {/* ── Search Header ── */}
                <div className="text-center mb-12 reveal">
                    <h1 className="font-display text-4xl md:text-5xl text-brown-700 mb-4">Track Your Orders</h1>
                    <p className="text-brown-500 font-jakarta max-w-xl mx-auto mb-8">
                        Enter your 10-digit mobile number to view the status of your current and past orders of Ashapriya Ghee.
                    </p>

                    <form onSubmit={handleSearch} className="max-w-md mx-auto relative px-4 sm:px-0">
                        <div className="relative group">
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter mobile number"
                                className="w-full bg-white border-2 border-gold-200/60 rounded-full px-8 py-5 text-brown-700 font-jakarta outline-none focus:border-gold-500 shadow-sm transition-all text-lg pr-16"
                                required
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-white hover:bg-gold-600 transition-colors shadow-glow-gold disabled:opacity-50"
                            >
                                {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <FiSearch size={22} />}
                            </button>
                        </div>
                    </form>
                </div>

                {/* ── Orders List ── */}
                <div className="space-y-6">
                    {loading ? (
                        <div className="flex justify-center p-20">
                            <div className="w-12 h-12 border-4 border-gold-300 border-t-gold-600 rounded-full animate-spin"></div>
                        </div>
                    ) : searched && orders.length > 0 ? (
                        orders.map((order, index) => (
                            <div key={order.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-gold-200/40 result-card" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease', transitionDelay: `${index * 0.1}s` }}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-gold-100 pb-5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-cream-100 rounded-xl flex items-center justify-center text-gold-600">
                                            <FiPackage size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-brown-700 font-jakarta font-bold">Order #{order.id}</h3>
                                            <p className="text-xs text-brown-400 font-jakarta flex items-center gap-1">
                                                <FiCalendar size={12} /> {new Date(order.order_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-right">
                                            <p className="text-xs text-brown-400 uppercase tracking-widest font-bold">Amount Paid</p>
                                            <p className="text-maroon-600 font-jakarta font-bold text-lg">₹{order.total}</p>
                                        </div>
                                        <div className="px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold font-jakarta border border-emerald-100 flex items-center gap-1.5 ">
                                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                                            Paid Successfully
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="space-y-2">
                                        <p className="text-xs text-brown-400 uppercase tracking-widest font-bold">Product Details</p>
                                        <div className="flex items-center gap-3">
                                            <img src="/IMG_4.PNG" className="w-8 h-8 object-contain" alt="" />
                                            <p className="text-sm font-jakarta text-brown-700">Ashapriya Ghee - <strong>{order.product_size}</strong> x {order.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-xs text-brown-400 uppercase tracking-widest font-bold">Delivery Location</p>
                                        <p className="text-sm font-jakarta text-brown-700 flex items-start gap-2">
                                            <FiMapPin className="text-gold-500 mt-1 flex-shrink-0" />
                                            {order.address}, {order.pincode}
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-xs text-brown-400 uppercase tracking-widest font-bold">Tracking ID (Razorpay)</p>
                                        <p className="text-sm font-jakarta text-gold-700 font-600">{order.razorpay_payment_id}</p>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gold-100 flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-emerald-600 text-sm font-jakarta font-semibold">
                                        <FiTruck /> Arriving soon via Blue Dart
                                    </div>
                                    <button className="text-sm text-brown-400 hover:text-gold-500 transition-colors font-jakarta flex items-center gap-1">
                                        Download Invoice
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : searched && orders.length === 0 ? (
                        <div className="bg-white rounded-[2rem] p-16 text-center shadow-card border border-gold-200/40 reveal">
                            <div className="w-20 h-20 bg-cream-50 rounded-full flex items-center justify-center text-brown-300 mx-auto mb-6">
                                <FiSearch size={40} />
                            </div>
                            <h3 className="text-2xl font-display text-brown-700 mb-2">No Orders Found</h3>
                            <p className="text-brown-500 font-jakarta">We couldn't find any orders matching this mobile number. Please double check the number or try another.</p>
                        </div>
                    ) : null}
                </div>

            </div>
        </div>
    );
};

export default OrdersTrackingPage;
