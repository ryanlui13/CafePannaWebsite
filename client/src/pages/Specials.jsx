import React from "react";
// Imports stay the same...
import CookiesImg from "../assets/images/cookiesNpanna.png";
import maplePecanImg from "../assets/images/maplebutterpecan.png";
import cafeBiancoImg from "../assets/images/cafeBiancoStracciatella.png";
import redFlagImg from "../assets/images/RedFlag.png";
import audDreamImg from "../assets/images/auddream.png";
import vanillaImg from "../assets/images/vanilla.png";


function Specials() {
    const specials = [
        {id: 1, name: "Cookies 'n Panna (our fav)", img: CookiesImg, alt: "Cookies'n panna"},
        {id: 2, name: "Red Swirl", img: redFlagImg, alt: "Red Swirl"},
        {id: 3, name: "Cafe Bianco Stracciatella (coffee theme)", img: cafeBiancoImg, alt: "Coffee ice cream" },
        {id: 4, name: "Aud Dream", img: audDreamImg, alt: "Vanilla with peanuts"},
        {id: 5, name: "Maple butter pecan (for fall)", img: maplePecanImg, alt: "Maple butter pecan" },
        {id: 6, name: "Vanilla (classic)", img: vanillaImg, alt: "Vanilla"}
    ];

    return (
        <div className="w-[90%] mx-auto my-10 bg-[#FAF6F0]/90 p-8 rounded-2xl shadow-xl border border-[#C6A68E]">
            <h2 className="text-[#6B2D39] text-3xl font-bold mb-8 text-center border-b-2 border-[#6B5075] pb-4">
                Halli's Specials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {specials.map(special => (
                    <figure key={special.id} className="flex flex-col items-center bg-white/50 p-4 rounded-xl border border-[#C6A68E] hover:scale-105 transition-transform">
                        <img src={special.img} alt={special.alt} className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-[#6B2D39]" />
                        <figcaption className="text-[#2C1A14] font-bold text-center italic">{special.name}</figcaption>
                    </figure>
                ))}
            </div>
        </div>
    );
}

export default Specials;