import React, { useState, useEffect } from "react"; 
import Cart from "../components/Cart.jsx";

// Images
import audDreamImg from "../assets/images/auddream.png"; 
import CookiesImg from "../assets/images/cookiesNpanna.png";
import redFlagImg from "../assets/images/RedFlag.png";
import cafeBiancoImg from "../assets/images/cafeBiancoStracciatella.png";
import maplePecanImg from "../assets/images/maplebutterpecan.png";
import vanillaImg from "../assets/images/vanilla.png";
import ScoopImg from "../assets/images/CafePannaBackgroundImage.jpg";
import chocoloateImg from "../assets/images/chocolate.png";

// The Lookup Table (Hash Map) that maps MongoDB text strings to raw files
const imageMap = {
    "scoop": ScoopImg,
    "auddream": audDreamImg,
    "cookies": CookiesImg,
    "redflag": redFlagImg,
    "cafebianco": cafeBiancoImg,
    "maplepecan": maplePecanImg,
    "vanilla": vanillaImg,
    "chocolate": chocoloateImg
};

function Menu({ addToCart, setPage, cart }) {
    const [featuredPints, setFeaturedPints] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [slide, setSlide] = useState(0); // 💡 We will use 'slide' consistently now

    useEffect(() => {
        // 🍦 Try to fetch from the server first
        Promise.all([
            fetch('http://localhost:5000/api/classic_menu').then(res => res.json()),
            fetch('http://localhost:5000/api/featured_pints').then(res => res.json())
        ])
        .then(([classicData, specialsData]) => {
            // If the server responds but collections are empty, fall back safely
            setMenuItems(classicData && classicData.length > 0 ? classicData : [
                { "_id": "CookesNPanna", "flavor": "Cookies 'n Panna", "price": 7.00, "imgKey": "cookies" },
                { "_id": "RedFlag", "flavor": "Red Swirl", "price": 5.00, "imgKey": "redflag" },
                { "_id": "CafeBianco", "flavor": "Cafe Bianco", "price": 6.00, "imgKey": "cafebianco" },
                { "_id": "MaplePecan", "flavor": "Maple Butter Pecan", "price": 7.00, "imgKey": "maplepecan" },
                { "_id": "Vanilla", "flavor": "Vanilla", "price": 5.00, "imgKey": "vanilla" },
                { "_id": "Chocolate", "flavor": "Chocolate", "price": 5.00, "imgKey": "chocolate" }
            ]);
            
            setFeaturedPints(specialsData && specialsData.length > 0 ? specialsData : [
                { "_id": "Scoop", "flavor": "Scoop of the Day", "price": 14.00, "imgKey": "scoop" },
                { "_id": "AudsDream", "flavor": "Aud's Dream", "price": 14.00, "imgKey": "auddream" }
            ]);
            setLoading(false);
        })
        // 🚨 Express API connection failed handler
        .catch(err => {
            console.error("Express API connection failed:", err);
            
            setMenuItems([
                { "_id": "CookesNPanna", "flavor": "Cookies 'n Panna", "price": 7.00, "imgKey": "cookies" },
                { "_id": "RedFlag", "flavor": "Red Swirl", "price": 5.00, "imgKey": "redflag" },
                { "_id": "CafeBianco", "flavor": "Cafe Bianco", "price": 6.00, "imgKey": "cafebianco" },
                { "_id": "MaplePecan", "flavor": "Maple Butter Pecan", "price": 7.00, "imgKey": "maplepecan" },
                { "_id": "Vanilla", "flavor": "Vanilla", "price": 5.00, "imgKey": "vanilla" },
                { "_id": "Chocolate", "chocolate": "Chocolate", "price": 5.00, "imgKey": "chocolate" }
            ]);
            
            setFeaturedPints([
                { "_id": "Scoop", "flavor": "Scoop of the Day", "price": 14.00, "imgKey": "scoop" },
                { "_id": "AudsDream", "flavor": "Aud's Dream", "price": 14.00, "imgKey": "auddream" }
            ]);
            
            setLoading(false);
        });
    }, []);

    // Fixed: Added a healthy 4000ms delay to stop the infinite browser lockup loop
    useEffect(() => {
        if (featuredPints.length > 0) {
            const timer = setInterval(() => {
                setSlide((prev) => (prev + 1) % featuredPints.length);        
            }, 4000); // Transitions safely every 4 seconds
            return () => clearInterval(timer);
        } 
    }, [featuredPints]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6B2D39]"></div>
                <p className="text-[#6B2D39] font-medium animate-pulse">Loading delicious flavors from API...</p>
            </div>
        );
    }

    return (
        <div className="w-[90%] mx-auto my-8 space-y-12 font-sans">
            {/* QUICK FLOATING CART SNAPSHOT */}
        <div className="sticky top-4 z-50 bg-[#6B2D39] text-white p-4 rounded-2xl shadow-xl flex justify-between items-center border-2 border-[#C6A68E]">
            <div className="flex items-center gap-2">
                <span className="text-2xl">🛒</span>
                <div>
                    <p className="font-bold uppercase tracking-wide text-xs text-[#C6A68E]">Active Basket</p>
                    {/* Loops through cart data to calculate item count safely */}
                    <p className="text-sm font-medium">Menu Items Selected: {cart.reduce((acc, item) => acc + item.quantity, 0)} pints</p>
                </div>
            </div>
            <button 
                onClick={() => setPage('checkout')}
                className="bg-[#FAF6F0] text-[#6B2D39] px-5 py-2 rounded-xl font-black text-sm hover:bg-[#C6A68E] hover:text-white transition-all transform active:scale-95"
            >
                View Cart & Pay 🍦
            </button>
            </div>
            
            {/* 🔥 REVOLVING SLIDESHOW SECTION */}
            <div className="relative bg-[#2C1A14] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#C6A68E] h-[400px] flex items-center justify-center">
                {featuredPints.length > 0 && (
                    <div className="relative w-full h-full flex items-center">
                        {/* Image Layer */}
                        <img 
                            src={imageMap[featuredPints[slide].imgKey] || ScoopImg} 
                            alt="Special"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-1000"
                        />
                        
                        {/* Text Overlay */}
                        <div className="relative z-10 p-12 text-white w-full text-center md:text-left">
                            <span className="bg-[#6B2D39] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                                ✨ Limited Batch ✨
                            </span>
                            <h2 className="text-5xl font-black mb-2 drop-shadow-lg uppercase italic">
                                {featuredPints[slide].flavor || featuredPints[slide].name} 🍦
                            </h2>
                            <p className="text-2xl font-mono mb-6 text-[#C6A68E]">${featuredPints[slide].price?.toFixed(2) || "14.00"}</p>
                            <button 
                                onClick={() => addToCart(featuredPints[slide])}
                                className="bg-white text-[#2C1A14] px-8 py-3 rounded-full font-bold hover:bg-[#C6A68E] transition-all transform active:scale-90"
                            >
                                Add to Cart 🛒
                            </button>
                        </div>

                        {/* Slide Indicators (Dots) */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                            {featuredPints.map((_, index) => (
                                <div 
                                    key={index} 
                                    className={`h-2 w-2 rounded-full transition-all ${index === slide ? 'bg-white w-6' : 'bg-white/30'}`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* 🍨 CLASSIC MENU SECTION */}
            <div className="bg-[#FAF6F0]/90 rounded-2xl p-8 border border-[#C6A68E]/30">
                <h3 className="text-[#6B2D39] text-3xl font-extrabold text-center mb-8 italic">
                    The Classics 🥛🍓🍫
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuItems.map((item, index) => (
                        <div key={item._id || item.id || index} className="bg-white rounded-2xl p-4 shadow-md hover:shadow-2xl transition-all group border border-transparent hover:border-[#6B2D39]">
                            <div className="h-48 rounded-xl overflow-hidden mb-4 relative">
                                <img src={imageMap[item.imgKey] || ScoopImg} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="flavor" />
                                <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-lg font-bold text-[#6B2D39]">
                                    ${item.price?.toFixed(2) || "7.00"}
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-[#2C1A14] mb-4 flex justify-between">
                                {item.flavor || item.name} <span>🧊</span>
                            </h4>
                            <button 
                                onClick={() => addToCart(item)}
                                className="w-full py-3 rounded-xl border-2 border-[#6B2D39] text-[#6B2D39] font-bold hover:bg-[#6B2D39] hover:text-white transition-all active:scale-95"
                            >
                                Scoop It Up! 🥣
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Checkout Navigation Trigger */}
            <div className="flex justify-center pb-10">
                <button 
                    onClick={() => setPage('checkout')}
                    className="bg-[#6B2D39] text-[#EDE5F2] px-10 py-4 rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition-transform"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default Menu;