import React from "react";
import CafePannaImage from "../assets/images/CafePannaImage.png";
import InnerCafe from "../assets/images/innercafe.jpg"

//connection string: mongodb+srv://ryanlui:theboysS5@cluster0.wue8fxx.mongodb.net/?appName=Cluster0
function Home() {
    return (
        <div className="min-h-screen w-full overflow-x-hidden">
            {/* Hero Section - Matching your .hero-section logic */}
            <header className="flex flex-col items-center justify-center text-center py-12 px-4 bg-[#2C1A14] text-[#EDE5F2]">
                <h1 className="text-5xl font-bold mb-4">Welcome to Cafe Panna</h1>
                <p className="text-xl max-w-2xl mb-8">Authentic Italian-inspired ice cream in the heart of NYC.</p>
                
                {/* Hero Image Wrapper */}
                <div className="w-[90%] md:w-[60%] lg:w-[50%] overflow-hidden rounded-2xl shadow-2xl border-4 border-[#C6A68E]">
                    <img 
                        src={InnerCafe} 
                        alt="Cafe Panna Shop Front" 
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </header>

            {/* Reviews Section - Replaces .reviews and .reviews-container */}
            <div className="bg-[#FAF6F0]/92 rounded-xl p-8 my-8 mx-auto w-[90%] shadow-md">
                <h2 className="text-[#6B2D39] text-3xl font-bold text-center mb-8">
                    Don't believe us? Here is what people have to say
                </h2>
                
                <div className="flex flex-row gap-6 flex-wrap justify-center">
                    {/* Review Card 1 */}
                    <div className="bg-[#EDE5F2]/80 border border-[#C6A68E] rounded-xl p-6 flex-1 min-w-[200px] max-w-[300px] shadow-sm">
                        <p className="text-[#3C2A21] leading-relaxed">
                            I love that the menu changes every single day. You can really taste how fresh the panna is, and it makes every visit feel like a new discovery.
                        </p>
                        <span className="block mt-3 text-sm text-[#6B5075] italic font-semibold"> - Sarah L., Gramercy</span> 
                    </div>

                    {/* Review Card 2 */}
                    <div className="bg-[#EDE5F2]/80 border border-[#C6A68E] rounded-xl p-6 flex-1 min-w-[200px] max-w-[300px] shadow-sm">
                        <p className="text-[#3C2A21] leading-relaxed">
                            The Cafe Bianco Stracciatella is a total game changer. I’ve never had coffee-infused gelato that smooth.
                        </p>
                        <span className="block mt-3 text-sm text-[#6B5075] italic font-semibold"> - Marcus J.</span> 
                        <span className="block text-[#C4956A] mt-1 text-lg">★★★★★</span>
                    </div>

                    {/* Review Card 3 */}
                    <div className="bg-[#EDE5F2]/80 border border-[#C6A68E] rounded-xl p-6 flex-1 min-w-[200px] max-w-[300px] shadow-sm">
                        <p className="text-[#3C2A21] leading-relaxed">
                            "That Red Swirl strawberry is unreal. It’s not that fake syrup stuff—it tastes like actual summer berries."
                        </p>
                        <span className="block mt-3 text-sm text-[#6B5075] italic font-semibold"> - Chloe T.</span> 
                        <span className="block text-[#C4956A] mt-1 text-lg">★★★</span>
                    </div>

                    {/* Review Card 4 */}
                    <div className="bg-[#EDE5F2]/80 border border-[#C6A68E] rounded-xl p-6 flex-1 min-w-[200px] max-w-[300px] shadow-sm">
                        <p className="text-[#3C2A21] leading-relaxed">
                            "It’s not just about the scoops; it’s the whole vibe. Standing on the sidewalk with a freshly packed pint."
                        </p>
                        <span className="block mt-3 text-sm text-[#6B5075] italic font-semibold"> - David R.</span> 
                        <span className="block text-[#C4956A] mt-1 text-lg">★★★★</span>
                    </div>
                </div>
            </div>
            
            {/* Footer Section */}
            <section className="text-center py-10 px-4">
                <h3 className="text-[#6B2D39] text-2xl font-bold mb-2">Check out our daily scoops and pints!</h3>
                <p className="text-[#3C2A21] text-lg">We use ingredients imported from Sicily on every scoop.</p>
            </section>
        </div>
    );
}

export default Home;

