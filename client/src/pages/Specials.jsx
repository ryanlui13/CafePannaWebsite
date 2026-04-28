import React from "react";
// Image imports remain the same
import CookiesImg from "../assets/images/cookiesNpanna.png";
import redFlagImg from "../assets/images/RedFlag.png";
import cafeBiancoImg from "../assets/images/cafeBiancoStracciatella.png";
import audDreamImg from "../assets/images/auddream.png";
import maplePecanImg from "../assets/images/maplebutterpecan.png";
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
        <div className="w-full" id="hallis-specials">
            {/* H2 Style: Maroon color, dashed border bottom */}
            <h2 className="text-[#6B2D39] mx-[5%] w-[90%] border-b-4 border-dashed border-[#6B5075] pb-2.5 text-3xl font-bold mb-6">
                Halli's Specials
            </h2>

            {/* Featured Container: Horizontal scroll, Flex, Gap 15px */}
            <div className="w-full mb-[50px] overflow-x-auto flex whitespace-nowrap gap-[15px] p-5 rounded-xl bg-[#FAF6F0]/50">
                {specials.map(special => (
                    <figure key={special.id} className="flex-shrink-0">
                        <img 
                            src={special.img} 
                            alt={special.alt} 
                            className="h-[300px] w-auto rounded-lg object-cover" 
                        />
                        <figcaption className="text-[#6B5075] mt-2 font-semibold text-center italic">
                            {special.name}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </div>
    );
}

export default Specials;
