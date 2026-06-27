import React, { useEffect, useState } from "react";

import audDreamImg from "../assets/images/auddream.png"; 
import CookiesImg from "../assets/images/cookiesNpanna.png";
import redFlagImg from "../assets/images/RedFlag.png";
import cafeBiancoImg from "../assets/images/cafeBiancoStracciatella.png";
import maplePecanImg from "../assets/images/maplebutterpecan.png";
import vanillaImg from "../assets/images/vanilla.png";
import ScoopImg from "../assets/images/CafePannaBackgroundImage.jpg";
import chocolateImg from "../assets/images/chocolate.png";

const imageMap = {
    "scoop": ScoopImg,
    "auddream": audDreamImg,
    "cookies": CookiesImg,
    "redflag": redFlagImg,
    "cafebianco": cafeBiancoImg,
    "maplepecan": maplePecanImg,
    "vanilla": vanillaImg,
    "chocolate": chocolateImg
};

// Flavor badge tags — add more imgKeys here as needed
const flavorTags = {
    "cookies": "fan favorite",
    "redflag": "fruity",
    "cafebianco": "coffee",
    "maplepecan": "nutty",
    "vanilla": "classic",
    "chocolate": "classic",
    "auddream": "limited",
    "scoop": "daily special"
};

function Specials({ addToCart }) {
    const [specials, setSpecials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        fetch('https://cafepannawebsite1.onrender.com/api/featured_pints')
            .then(res => res.json())
            .then(data => {
                setSpecials(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Express API connection failed:", err);
                // Fallback data so the page still renders
                setSpecials([
                    { "_id": "CookesNPanna", "flavor": "Cookies 'n Panna", "price": 14.00, "imgKey": "cookies" },
                    { "_id": "RedFlag",      "flavor": "Red Swirl",         "price": 14.00, "imgKey": "redflag" },
                    { "_id": "CafeBianco",   "flavor": "Cafe Bianco Stracciatella", "price": 14.00, "imgKey": "cafebianco" },
                    { "_id": "MaplePecan",   "flavor": "Maple Butter Pecan","price": 14.00, "imgKey": "maplepecan" },
                    { "_id": "AudsDream",    "flavor": "Aud's Dream",       "price": 14.00, "imgKey": "auddream" },
                    { "_id": "Scoop",        "flavor": "Scoop of the Day",  "price": 14.00, "imgKey": "scoop" },
                ]);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (specials.length > 0) {
            const timer = setInterval(() => {
                setSlide(prev => (prev + 1) % specials.length);
            }, 4000);
            return () => clearInterval(timer);
        }
    }, [specials]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6B2D39]"></div>
                <p className="text-[#6B2D39] font-medium">Loading today's specials...</p>
            </div>
        );
    }

    return (
        <div className="w-full font-sans">

            {/* ── HERO CAROUSEL ── */}
            <div className="relative bg-[#2C1A14] overflow-hidden h-[480px] flex items-center justify-center">
                {specials.length > 0 && (
                    <div className="relative w-full h-full flex items-center">
                        {/* Background image with gradient overlay */}
                        <img
                            src={imageMap[specials[slide].imgKey] || ScoopImg}
                            alt="Special Flavor"
                            className="absolute inset-0 w-full h-full object-cover opacity-40 transition-opacity duration-1000 scale-105"
                        />
                        {/* Dark gradient so text pops */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2C1A14]/90 via-[#2C1A14]/50 to-transparent" />

                        {/* Text content */}
                        <div className="relative z-10 px-12 md:px-20 text-white max-w-xl">
                            <span className="bg-[#6B2D39] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                                Flash Batch · Limited Release
                            </span>
                            <h2 className="text-5xl md:text-6xl font-black mb-3 uppercase italic leading-tight text-[#FAF6F0] drop-shadow-lg">
                                {specials[slide].flavor || specials[slide].name}
                            </h2>
                            <p className="text-2xl font-mono text-[#C6A68E] mb-6">
                                ${specials[slide].price?.toFixed(2) || "14.00"} / pint
                            </p>
                            {addToCart && (
                                <button
                                    onClick={() => addToCart(specials[slide])}
                                    className="bg-[#C6A68E] text-[#2C1A14] px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider hover:bg-[#EDE5F2] transition-all active:scale-95"
                                >
                                    Add to Cart
                                </button>
                            )}
                        </div>

                        {/* Slide dots */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                            {specials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === slide ? 'bg-[#C6A68E] w-8' : 'bg-white/30 w-2'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* ── SECTION HEADER ── */}
            <div className="bg-[#FAF6F0] pt-14 pb-4 text-center px-4">
                <p className="text-[#C6A68E] text-xs font-bold uppercase tracking-[0.2em] mb-2">Rotating Daily</p>
                <h2 className="text-[#6B2D39] text-4xl font-black italic mb-3">Halli's Specials</h2>
                <p className="text-[#3C2A21] text-base max-w-md mx-auto leading-relaxed">
                    Fresh batches crafted each morning using ingredients imported from Sicily. Every pint is made to order.
                </p>
                {/* Decorative divider */}
                <div className="flex items-center justify-center gap-3 mt-6">
                    <div className="h-px w-16 bg-[#C6A68E]" />
                    <span className="text-[#C6A68E] text-lg">✦</span>
                    <div className="h-px w-16 bg-[#C6A68E]" />
                </div>
            </div>

            {/* ── CARD GRID ── */}
            <div className="bg-[#FAF6F0] px-6 pb-16 pt-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specials.map((item, index) => (
                        <div
                            key={item._id || index}
                            className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#C6A68E]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={imageMap[item.imgKey] || ScoopImg}
                                    alt={item.flavor}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Flavor tag badge */}
                                {flavorTags[item.imgKey] && (
                                    <span className="absolute top-3 left-3 bg-[#6B2D39] text-[#FAF6F0] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                        {flavorTags[item.imgKey]}
                                    </span>
                                )}
                                {/* Price pill */}
                                <span className="absolute top-3 right-3 bg-white/90 text-[#6B2D39] text-sm font-black px-3 py-1 rounded-full shadow-sm">
                                    ${item.price?.toFixed(2) || "14.00"}
                                </span>
                            </div>

                            {/* Card body */}
                            <div className="p-5">
                                <h3 className="text-[#2C1A14] text-lg font-black italic mb-1">
                                    {item.flavor || item.name}
                                </h3>
                                <p className="text-[#6B5075] text-xs uppercase tracking-widest font-semibold mb-4">
                                    Limited pint · Today only
                                </p>

                                {/* Static star rating */}
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={`text-base ${i < 4 ? 'text-[#C4956A]' : 'text-gray-200'}`}>★</span>
                                    ))}
                                    <span className="text-xs text-gray-400 ml-1">4.0</span>
                                </div>

                                {addToCart && (
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="w-full py-2.5 rounded-xl border-2 border-[#6B2D39] text-[#6B2D39] font-bold text-sm uppercase tracking-wide hover:bg-[#6B2D39] hover:text-white transition-all active:scale-95"
                                    >
                                        Add to Cart
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Specials;