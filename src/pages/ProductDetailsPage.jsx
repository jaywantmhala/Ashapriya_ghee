import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle, FiMinus, FiPlus, FiShoppingCart, FiStar } from 'react-icons/fi';
import { PiCowLight } from 'react-icons/pi';
import useReveal from '../hooks/useReveal.js';

const productImages = [
    '/IMG_1.PNG',
    '/IMG_2.PNG',
    '/IMG_3.PNG',
    '/IMG_4.PNG',
    '/Ghee (1)_page-0001.jpg'
];

const ProductDetailsPage = () => {
    const { id } = useParams(); // id is the size like '200ml', '500ml', '1L', '5L'
    const [mainImage, setMainImage] = useState(productImages[0]);
    const [zoomStyle, setZoomStyle] = useState({});
    const [quantity, setQuantity] = useState(1);
    const containerRef = useRef(null);

    useReveal();

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomStyle({
            transformOrigin: `${x}% ${y}%`,
            transform: 'scale(2)'
        });
    };

    const handleMouseLeave = () => {
        setZoomStyle({
            transformOrigin: 'center center',
            transform: 'scale(1)'
        });
    };

    // Extract size label based on id (or default to 500 ml)
    let sizeLabel = id ? id.replace('ml', ' ml').replace('L', ' L') : '500 ml';
    if (id === '2L' || id === '5L') sizeLabel = id.replace('L', ' L');

    // Set mock price based on size
    const prices = {
        '200ml': '₹160',
        '500ml': '₹380',
        '1L': '₹750',
        '2L': '₹1450',
        '5L': '₹3500'
    };

    const price = id && prices[id] ? prices[id] : '₹380';

    return (
        <div className="pt-28 pb-20 bg-cream-50 min-h-screen">
            <div className="section-wrap">

                {/* Back Link */}
                <div className="mb-8 reveal">
                    <Link to="/products" className="inline-flex items-center gap-2 text-sm text-brown-400 hover:text-gold-500 transition-colors font-jakarta">
                        <FiArrowLeft size={16} /> Back to Products
                    </Link>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* ── Image Gallery ── */}
                    <div className="flex flex-col-reverse md:flex-row gap-4 reveal">
                        {/* Thumbnails */}
                        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:w-24 md:h-[600px] scrollbar-hide py-1 pr-1">
                            {productImages.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setMainImage(img)}
                                    className={`flex-shrink-0 w-20 h-20 md:w-full md:h-24 rounded-xl overflow-hidden border-2 transition-all p-2 bg-gradient-to-br from-cream-200 to-white ${mainImage === img ? 'border-gold-500 shadow-glow-gold' : 'border-transparent hover:border-gold-300'}`}
                                >
                                    <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                                </button>
                            ))}
                        </div>

                        {/* Main Image Viewer */}
                        <div className="flex-1 bg-white rounded-3xl p-6 md:p-10 border border-gold-200/40 shadow-card flex items-center justify-center min-h-[400px] md:h-[600px] relative overflow-hidden group">
                            <div
                                className="w-full h-full cursor-zoom-in"
                                ref={containerRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img
                                    src={mainImage}
                                    alt="Product Main"
                                    className="w-full h-full object-contain transition-transform duration-200 pointer-events-none"
                                    style={zoomStyle}
                                />
                            </div>

                            {/* Zoom hint overlay (only visible on non-hover initially) */}
                            <div className="absolute bottom-4 right-4 bg-brown-900/60 text-white text-xs px-3 py-1.5 rounded-full font-jakarta opacity-0 md:opacity-100 md:group-hover:opacity-0 transition-opacity pointer-events-none flex items-center gap-2 backdrop-blur-sm">
                                Hover to Zoom
                            </div>
                        </div>
                    </div>

                    {/* ── Product Info ── */}
                    <div className="space-y-8 reveal-right">
                        <div>
                            <p className="text-sm text-maroon-500 tracking-[0.2em] font-bold uppercase font-jakarta mb-2">Panchatek Foods</p>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-brown-700 font-light leading-none mb-3">
                                Ashapriya Ghee <br />
                                <span className="text-2xl md:text-3xl font-serif text-brown-500 italic">Pure Cow Ghee ({sizeLabel} Jar)</span>
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center gap-3 text-sm font-jakarta text-brown-400 mt-4">
                                <div className="flex gap-1 text-gold-400">
                                    <FiStar className="fill-gold-400" />
                                    <FiStar className="fill-gold-400" />
                                    <FiStar className="fill-gold-400" />
                                    <FiStar className="fill-gold-400" />
                                    <FiStar className="fill-gold-400" />
                                </div>
                                <span>(128 Reviews)</span>
                            </div>
                        </div>

                        <div className="h-px w-full bg-gold-200/40"></div>

                        {/* Price section */}
                        <div className="space-y-1">
                            <p className="font-display text-4xl text-maroon-600 font-semibold">{price}</p>
                            <p className="text-sm text-brown-400 font-jakarta">Inclusive of all taxes</p>
                        </div>

                        {/* Highlights */}
                        <ul className="space-y-3 font-body text-brown-500">
                            <li className="flex items-start gap-3">
                                <FiCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                                <span><strong className="text-brown-700">100% Pure & Authentic:</strong> Made from fresh cow milk with traditional method.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FiCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                                <span><strong className="text-brown-700">Rich Aroma:</strong> Golden granular texture with irresistible homely fragrance.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <PiCowLight className="text-emerald-500 mt-1 flex-shrink-0 text-lg" />
                                <span><strong className="text-brown-700">No Additives:</strong> Free from preservatives and artificial colors.</span>
                            </li>
                        </ul>

                        <div className="h-px w-full bg-gold-200/40"></div>

                        {/* Actions */}
                        <div className="space-y-5 pt-2">
                            <div className="flex items-center gap-4">
                                <p className="font-jakarta font-semibold text-brown-700 text-sm">Quantity:</p>
                                <div className="flex items-center border border-gold-200 rounded-lg overflow-hidden h-11 bg-white">
                                    <button
                                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                        className="w-10 h-full flex items-center justify-center text-brown-500 hover:bg-cream-100 transition-colors"
                                    >
                                        <FiMinus size={14} />
                                    </button>
                                    <span className="w-12 text-center font-jakarta font-semibold text-brown-700">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(q => q + 1)}
                                        className="w-10 h-full flex items-center justify-center text-brown-500 hover:bg-cream-100 transition-colors"
                                    >
                                        <FiPlus size={14} />
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 btn-outline !py-4 flex items-center justify-center gap-2">
                                    <FiShoppingCart size={18} /> Add to Cart
                                </button>
                                <Link to={`/checkout/${id || '500ml'}?qty=${quantity}`} className="flex-1 btn-gold !py-4 flex items-center justify-center gap-2">
                                    Buy Now
                                </Link>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-4 mt-8 bg-white p-5 rounded-2xl border border-gold-100">
                            <div className="flex items-center gap-3">
                                <img src="/logo.jpeg" className="w-8 h-8 rounded-full border border-gold-200 opacity-60" alt="" />
                                <span className="text-xs font-jakarta font-600 text-brown-500">Panchatek Quality</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-cream-100 flex items-center justify-center text-emerald-600">
                                    <FiCheckCircle size={14} />
                                </div>
                                <span className="text-xs font-jakarta font-600 text-brown-500">Secure Payment</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
