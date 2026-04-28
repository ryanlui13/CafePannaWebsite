import React from "react";
// Import paths adjusted to jump from 'pages' to 'assets'
import audDreamImg from "../assets/images/auddream.png"; 
import CookiesImg from "../assets/images/cookiesNpanna.png";
import redFlagImg from "../assets/images/RedFlag.png";
import cafeBiancoImg from "../assets/images/cafeBiancoStracciatella.png";
import maplePecanImg from "../assets/images/maplebutterpecan.png";
import vanillaImg from "../assets/images/vanilla.png";
import ScoopImg from "../assets/images/CafePannaBackgroundImage.jpg";
import chocoloateImg from "../assets/images/chocoloate.png";

function Menu({ addToCart }) {
    const featuredPints = [
        { id: 1, flavor: "scoop of the day", img: ScoopImg, alt: "Scoop of the Day", price: 14.00 },
        { id: 2, flavor: "aud's Dream", img: audDreamImg, alt: "Aud's dream", price: 14.00 },
    ];

    const menuItems = [
        { id: 3, flavor: "Cookies 'n Panna", img: CookiesImg, alt: "Cookies and Panna", price: 7.00 },
        { id: 4, flavor: "Red Swirl", img: redFlagImg, alt: "Red Swirl", price: 5.00 },
        { id: 5, flavor: "Cafe Bianco", img: cafeBiancoImg, alt: "Cafe Biancco Stracciatella", price: 6.00 },
        { id: 6, flavor: "Maple Butter Pecan ", img: maplePecanImg, alt: "Maple Butter Pecan", price: 7.00 },
        { id: 7, flavor: "Vanilla", img: vanillaImg, alt: "Vanilla", price: 5.00 },
        { id: 8, flavor: "chocolate", img: chocoloateImg, alt: "Chocolate", price: 5.00 },
    ];

    return (
        <div className="w-[90%] mx-auto my-8 space-y-8">
            {/* Table Container - Replaces .menu-table */}
            <div className="bg-[#FAF6F0]/90 rounded-xl p-8 shadow-sm">
                <h3 className="text-[#6B2D39] text-2xl font-bold mb-6 text-center">Featured Pints</h3>
                <table className="w-full border-collapse border-2 border-[#2C1A14]">
                    <thead>
                        <tr className="bg-[#2C1A14] text-[#EDE5F2]">
                            <th className="border border-[#C6A68E] p-4 text-left">Flavor</th>
                            <th className="border border-[#C6A68E] p-4 text-center">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {featuredPints.map(item => (
                            <tr key={item.id} className="hover:bg-white/50 transition-colors">
                                <td className="border border-[#C6A68E] p-4">
                                    <div className="flex items-center gap-4">
                                        <img src={item.img} alt={item.alt} className="w-16 h-16 rounded-lg object-cover border-2 border-[#C6A68E]" />
                                        <span className="font-semibold text-[#2C1A14]">{item.flavor}</span>
                                        <button 
                                            className="ml-auto bg-[#F5EBDC] border-2 border-[#6B2D39] text-[#6B2D39] px-4 py-1 rounded-full font-bold hover:bg-[#6B2D39] hover:text-white transition-all"
                                            onClick={() => addToCart(item)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </td>
                                <td className="border border-[#C6A68E] p-4 text-center font-mono text-[#2C1A14]">
                                    ${item.price.toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Classic Menu - Same Tailwind logic */}
            <div className="bg-[#FAF6F0]/90 rounded-xl p-8 shadow-sm">
                <h3 className="text-[#6B2D39] text-2xl font-bold mb-6 text-center">Classic Flavor Menu</h3>
                <table className="w-full border-collapse border-2 border-[#2C1A14]">
                    <thead>
                        <tr className="bg-[#2C1A14] text-[#EDE5F2]">
                            <th className="border border-[#C6A68E] p-4 text-left">Flavor</th>
                            <th className="border border-[#C6A68E] p-4 text-center">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menuItems.map(item => (
                            <tr key={item.id} className="hover:bg-white/50 transition-colors">
                                <td className="border border-[#C6A68E] p-4">
                                    <div className="flex items-center gap-4">
                                        <img src={item.img} alt={item.alt} className="w-16 h-16 rounded-lg object-cover border-2 border-[#C6A68E]" />
                                        <span className="font-semibold text-[#2C1A14]">{item.flavor}</span>
                                        <button 
                                            className="ml-auto bg-[#F5EBDC] border-2 border-[#6B2D39] text-[#6B2D39] px-4 py-1 rounded-full font-bold hover:bg-[#6B2D39] hover:text-white transition-all"
                                            onClick={() => addToCart(item)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </td>
                                <td className="border border-[#C6A68E] p-4 text-center font-mono text-[#2C1A14]">
                                    ${item.price.toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Menu;