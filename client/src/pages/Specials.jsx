import React, { useEffect, useState } from "react";

// 🍦 Image Asset Imports (Ensure these paths and spellings match your folder exactly!)
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

function Specials() {
    const [specials, setSpecials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [slide, setSlide] = useState(0); // Tracks the active sliding index layer

    useEffect(() => {
        // Fetching our daily specials array from our backend process loop
        fetch('http://localhost:5000/api/featured_pints')
        .then(res => res.json())
        .then(data => {
            setSpecials(data);
            setLoading(false);
        })
        .catch(err => {
            console.error("Express API connection failed:", err);
            setLoading(false);
        });
    }, []);

    // 🔄 Smooth 4-Second Revolving Core Timer Loop Logic
    useEffect(() => {
        if (specials.length > 0) {
            const timer = setInterval(() => {
                setSlide((prev) => (prev + 1) % specials.length);        
            }, 4000); 
            return () => clearInterval(timer);
        } 
    }, [specials]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6B2D39]"></div>
                <p className="text-[#6B2D39] font-medium">Loading modern carousel specials...</p>
            </div>
        );
    }

    return (
        <div className="w-[90%] mx-auto my-8 space-y-12 font-sans">
            <h2 className="text-3xl font-black text-[#FAF6F0] text-center uppercase italic tracking-wider drop-shadow-md">
                Today's Live Rotating Specials 🌟
            </h2>

            {/* 🎡 MASTER REVOLVING CAROUSEL EMBED */}
            <div className="relative bg-[#2C1A14] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#C6A68E] h-[420px] flex items-center justify-center">
                {specials.length > 0 && (
                    <div className="relative w-full h-full flex items-center">
                        {/* Interactive Image Display Layer */}
                        <img 
                            src={imageMap[specials[slide].imgKey] || ScoopImg} 
                            alt="Special Flavor Display"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-1000 transform scale-105"
                        />
                        
                        {/* Floating Content Text Block */}
                        <div className="relative z-10 p-12 text-white w-full text-center">
                            <span className="bg-[#6B2D39] px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block shadow-md">
                                🚨 Flash Batch Limited Release 🚨
                            </span>
                            <h3 className="text-5xl font-black mb-3 drop-shadow-lg uppercase italic tracking-wide text-[#FAF6F0]">
                                {specials[slide].flavor || specials[slide].name} ✨
                            </h3>
                            <p className="text-3xl font-mono font-bold text-[#C6A68E] drop-shadow-md">
                                ${specials[slide].price?.toFixed(2) || "14.00"}
                            </p>
                        </div>

                        {/* Interactive Dynamic Tracker Dots */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                            {specials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSlide(index)}
                                    className={`h-3 w-3 rounded-full transition-all duration-300 ${index === slide ? 'bg-[#C6A68E] w-8' : 'bg-white/40'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Specials;