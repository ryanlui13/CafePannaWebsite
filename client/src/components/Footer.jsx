import React from "react";

function Footer() {
    return (
        <footer style={{ background: "#2C1A14", padding: "2.5rem 2rem 1.5rem", fontFamily: "sans-serif" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                    
                    <div>
                        <p className="text-[#C6A68E] text-xs font-bold uppercase tracking-widest mb-3">Hours</p>
                        <p className="text-[#EDE5F2] text-sm">Wed – Sun</p>
                        <p className="text-[#C6A68E] text-sm">1:30 pm – 9:30 pm</p>
                    </div>

                    <div>
                        <p className="text-[#C6A68E] text-xs font-bold uppercase tracking-widest mb-3">Location</p>
                        <p className="text-[#EDE5F2] text-sm">466 W 19th St</p>
                        <p className="text-[#C6A68E] text-sm">New York, NY 10011</p>
                    </div>

                    <div>
                        <p className="text-[#C6A68E] text-xs font-bold uppercase tracking-widest mb-3">Follow us</p>
                        <div className="flex flex-col gap-2">
                            <a href="https://www.instagram.com/cafepanna/" className="text-[#EDE5F2] text-sm hover:text-[#C6A68E] transition-colors">
                                Instagram
                            </a>
                            <a href="https://www.tiktok.com/@caffepanna" className="text-[#EDE5F2] text-sm hover:text-[#C6A68E] transition-colors">
                                TikTok
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#C6A68E]/20 pt-5 flex justify-between flex-wrap gap-2">
                    <p className="text-[#C6A68E] text-xs">© 2025 Cafe Panna. All rights reserved.</p>
                    <p className="text-[#C6A68E]/40 text-xs italic">Ingredients imported from Sicily.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;