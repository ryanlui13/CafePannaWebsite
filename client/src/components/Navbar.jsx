import React from "react";
import { useState } from "react";
import logo from "../assets/images/CafePannaImage.png";

function NavBar({ setPage }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="flex items-center justify-between w-full min-h-[60px] px-8 bg-[#2C1A14] border-b-4 border-[#C6A68E] box-border relative">
            {/* Logo Section */}
            <div className="w-[20%] mt-[1%] mb-[1%]">
                <img src={logo} alt="Cafe Panna Logo" className="h-auto w-full rounded-full" />
            </div>

            {/* Desktop Links - Hidden on mobile, flex on large screens */}
            <ul className="hidden lg:flex flex-row gap-6 list-none m-0 p-0">
                <li><button className="text-[#EDE5F2] font-mono font-bold hover:text-[#C4956A] p-1" onClick={() => setPage('home')}>home</button></li>
                <li><button className="text-[#EDE5F2] font-mono font-bold hover:text-[#C4956A] p-1" onClick={() => setPage('mission')}>mission</button></li>
                <li><button className="text-[#EDE5F2] font-mono font-bold hover:text-[#C4956A] p-1" onClick={() => setPage('menu')}>menu</button></li>

                <li><button className="text-[#EDE5F2] font-mono font-bold hover:text-[#C4956A] p-1" onClick={() => setPage('specials')}>specials</button></li>
                <li><button className="text-[#EDE5F2] font-mono font-bold hover:text-[#C4956A] p-1" onClick={() => setPage('contact')}>contact</button></li>
            </ul>

            {/* Hamburger Button - Hidden on desktop */}
            <button className="lg:hidden flex flex-col gap-1 cursor-pointer" onClick={toggleMenu}>
                <span className={`block w-6 h-0.5 bg-[#EDE5F2] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-[#EDE5F2] ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-[#EDE5F2] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-[#2C1A14] flex flex-col items-center py-4 lg:hidden z-50">
                    <button className="text-[#EDE5F2] py-2" onClick={() => { setPage('home'); setIsOpen(false); }}>home</button>
                    <button className="text-[#EDE5F2] py-2" onClick={() => { setPage('mission'); setIsOpen(false); }}>mission</button>
                    <button className="text-[#EDE5F2] py-2" onClick={() => { setPage('menu'); setIsOpen(false); }}>menu</button>

                    <button className="text-[#EDE5F2] py-2" onClick={() => { setPage('specials'); setIsOpen(false); }}>specials</button>
                    <button className="text-[#EDE5F2] py-2" onClick={() => { setPage('contact'); setIsOpen(false); }}>contact</button>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
