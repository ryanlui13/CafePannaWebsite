import React from "react";

function Mission() {
    return (
        <div className="w-[85%] max-w-4xl mx-auto my-12 bg-[#FAF6F0]/95 p-10 rounded-2xl shadow-2xl border border-[#2C1A14] text-center">
            <h1 className="text-[#6B2D39] text-3xl md:text-4xl font-black mb-6 italic leading-tight">
                Cafe Panna: Where authentic Italian Ice Cream, sundaes and soft serve are all in the same world!
            </h1>

            <h2 className="text-[#6B5075] text-2xl font-bold tracking-widest mb-8 border-y-2 border-[#C6A68E] py-2">
                OUR MISSION: "ICE CREAM TO TABLE"
            </h2>
            
            <div className="space-y-6 text-[#2C1A14] text-lg leading-relaxed">
                <h3 className="text-xl font-serif italic text-[#6B2D39]">"Less is More!"</h3>
                
                <blockquote className="italic border-l-4 border-[#6B2D39] px-6 py-2 bg-white/40 rounded-r-lg">
                    "Extra. Extra sweet, extra salty, extra rich, extra fresh, extra crunchy but somehow just a millimeter shy of too much." 
                    <span className="block font-bold mt-2">— New York Magazine</span>
                </blockquote>
                
                <p className="font-medium">Founded by Halli Meyer, inspired by Italian gelato. Ingredients are sourced from the Union Square greenmarket with imported pistachios and olive oil from Sicily.</p>
                <p className="font-semibold text-[#6B2D39]">We use Panna (light sweet whipped cream from Sicily) on every ice cream and sundae.</p>
            </div>
        </div>
    );
}

export default Mission;
