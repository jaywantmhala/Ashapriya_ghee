import React, { useState } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiLock, FiCheckCircle } from 'react-icons/fi';
import useReveal from '../hooks/useReveal.js';

const CheckoutPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    useReveal();

    const searchParams = new URLSearchParams(location.search);
    const quantity = parseInt(searchParams.get('qty')) || 1;

    const [isProcessing, setIsProcessing] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        pincode: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const loadRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePay = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.phone || !formData.address || !formData.pincode) {
            alert("Please fill all required delivery details before paying.");
            return;
        }

        setIsProcessing(true);

        const isLoaded = await loadRazorpay();
        if (!isLoaded) {
            alert('Razorpay SDK failed to load. Please check your connection.');
            setIsProcessing(false);
            return;
        }

        const options = {
            key: 'rzp_test_ZzKJz2egIV36gC',
            amount: total * 100, // Amount is in currency subunits (paise)
            currency: 'INR',
            name: 'Panchatek Foods',
            description: `Payment for Ashapriya Ghee ${sizeLabel}`,
            image: '/logo.jpeg',
            handler: async function (response) {
                try {
                    const res = await fetch('http://localhost:8000/save_order.php', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            razorpay_payment_id: response.razorpay_payment_id,
                            name: formData.name,
                            phone: formData.phone,
                            email: formData.email || '',
                            address: formData.address,
                            pincode: formData.pincode,
                            size: sizeLabel,
                            quantity: quantity,
                            total: total
                        })
                    });
                    const data = await res.json();

                    setIsProcessing(false);
                    if (data.success) {
                        navigate(`/order-success?id=${response.razorpay_payment_id}&order=${data.order_id}`);
                    } else {
                        alert(`Paid but failed to save in database: ${data.error}`);
                    }
                } catch (err) {
                    setIsProcessing(false);
                    alert(`Network error saving to database. Ensure PHP server is running on localhost:8000.\nPayment ID: ${response.razorpay_payment_id}`);
                }
            },
            prefill: {
                name: formData.name,
                email: formData.email || '',
                contact: formData.phone
            },
            notes: {
                address: formData.address,
                pincode: formData.pincode,
                size: sizeLabel,
                quantity: quantity
            },
            theme: {
                color: '#A17D23' // Brown/Gold color
            }
        };

        const paymentObject = new window.Razorpay(options);

        paymentObject.on('payment.failed', function (response) {
            alert(`Payment failed: ${response.error.description}`);
            setIsProcessing(false);
        });

        paymentObject.open();
    };

    // Product info mimicking DB lookup
    let sizeLabel = id ? id.replace('ml', ' ml').replace('L', ' L') : '500 ml';
    if (id === '2L' || id === '5L') sizeLabel = id.replace('L', ' L');

    const pricing = {
        '200ml': 160,
        '500ml': 380,
        '1L': 750,
        '2L': 1450,
        '5L': 3500
    };

    const unitPrice = pricing[id] || 380;
    const subtotal = unitPrice * quantity;
    const shipping = subtotal > 1000 ? 0 : 50;
    const total = subtotal + shipping;

    return (
        <div className="pt-28 pb-20 bg-cream-50 min-h-screen">
            <div className="section-wrap max-w-6xl mx-auto">
                <div className="mb-8 reveal">
                    <Link to={`/product/${id || '500ml'}`} className="inline-flex items-center gap-2 text-sm text-brown-400 hover:text-gold-500 transition-colors font-jakarta">
                        <FiArrowLeft size={16} /> Back to Product
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">

                    {/* ── Left: Checkout Form ── */}
                    <div className="lg:col-span-2 space-y-8 reveal">
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card border border-gold-200/40">
                            <h2 className="font-serif text-2xl text-brown-700 mb-6">Delivery Details</h2>
                            <form onSubmit={handlePay} className="space-y-6">

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-jakarta font-600 uppercase tracking-widest text-brown-500">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-cream-50 border border-gold-200 rounded-xl px-5 py-3.5 text-brown-700 font-body outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-jakarta font-600 uppercase tracking-widest text-brown-500">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-cream-50 border border-gold-200 rounded-xl px-5 py-3.5 text-brown-700 font-body outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                                            placeholder="10-digit mobile number"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-jakarta font-600 uppercase tracking-widest text-brown-500">Email Address (Optional)</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-cream-50 border border-gold-200 rounded-xl px-5 py-3.5 text-brown-700 font-body outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                                        placeholder="For order updates"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-jakarta font-600 uppercase tracking-widest text-brown-500">Full Delivery Address</label>
                                    <textarea
                                        name="address"
                                        required
                                        value={formData.address}
                                        onChange={handleChange}
                                        rows="3"
                                        className="w-full bg-cream-50 border border-gold-200 rounded-xl px-5 py-3.5 text-brown-700 font-body outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors resize-none"
                                        placeholder="House No, Building, Street, Area, Landmark"
                                    ></textarea>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-jakarta font-600 uppercase tracking-widest text-brown-500">Pincode</label>
                                        <input
                                            type="text"
                                            name="pincode"
                                            required
                                            value={formData.pincode}
                                            onChange={handleChange}
                                            className="w-full bg-cream-50 border border-gold-200 rounded-xl px-5 py-3.5 text-brown-700 font-body outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                                            placeholder="e.g. 411001"
                                        />
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gold-100 flex items-center gap-3 text-sm text-brown-400 font-jakarta">
                                    <FiLock className="text-gold-500" />
                                    Your information is safely stored for delivery purposes.
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* ── Right: Order Summary ── */}
                    <div className="reveal-right">
                        <div className="bg-white rounded-3xl p-8 shadow-card border border-gold-200/40 sticky top-28">
                            <h2 className="font-serif text-2xl text-brown-700 mb-6">Order Summary</h2>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-20 h-20 bg-cream-100 rounded-xl p-2 border border-gold-100 flex-shrink-0">
                                    <img src="/IMG_4.PNG" alt="Ghee Jar" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl text-brown-700">Ashapriya Ghee</h3>
                                    <p className="text-xs font-jakarta text-brown-400 uppercase tracking-wider mb-1">{sizeLabel} Jar</p>
                                    <p className="font-semibold text-maroon-600">₹{unitPrice} x {quantity}</p>
                                </div>
                            </div>

                            <div className="space-y-3 font-jakarta text-sm border-y border-gold-100 py-5 mb-5">
                                <div className="flex justify-between text-brown-500">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-brown-700">₹{subtotal}</span>
                                </div>
                                <div className="flex justify-between text-brown-500">
                                    <span>Shipping</span>
                                    <span className="font-semibold text-brown-700">{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                                </div>
                            </div>

                            <div className="flex justify-between font-display text-2xl text-brown-800 mb-8">
                                <span>Total</span>
                                <span className="text-maroon-600">₹{total}</span>
                            </div>

                            <button
                                onClick={handlePay}
                                disabled={isProcessing}
                                className="w-full btn-gold !py-4 flex items-center justify-center gap-2 shadow-[0_12px_24px_rgba(180,140,40,0.25)] hover:shadow-[0_16px_32px_rgba(180,140,40,0.35)] disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                            >
                                {isProcessing ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <FiCheckCircle size={18} />
                                        Click to Pay
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
