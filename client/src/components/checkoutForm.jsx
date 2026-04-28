import React from "react";

function CheckoutForm() {
    return (
        <div className="mx-auto my-10 w-[90%] md:w-[60%] lg:w-[40%] bg-[#FAF6F0]/95 p-8 rounded-2xl shadow-lg border border-[#C6A68E]">
            <h2 className="text-[#6B2D39] text-3xl font-bold mb-6 border-b-2 border-[#6B5075] pb-2">
                Checkout
            </h2>
            
            <form className="flex flex-col gap-5">
                {/* Name Field */}
                <div className="flex flex-col gap-2">
                    <label className="text-[#6B2D39] font-semibold">Full Name</label>
                    <input 
                        type="text" 
                        placeholder="Halli Meyer"
                        className="p-3 rounded-lg border border-[#C6A68E] bg-white focus:outline-none focus:ring-2 focus:ring-[#6B5075] transition-all"
                    />
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-2">
                    <label className="text-[#6B2D39] font-semibold">Email Address</label>
                    <input 
                        type="email" 
                        placeholder="halli@cafepanna.com"
                        className="p-3 rounded-lg border border-[#C6A68E] bg-white focus:outline-none focus:ring-2 focus:ring-[#6B5075] transition-all"
                    />
                </div>

                {/* Pickup/Delivery Selection */}
                <div className="flex flex-col gap-2">
                    <label className="text-[#6B2D39] font-semibold">Order Type</label>
                    <select className="p-3 rounded-lg border border-[#C6A68E] bg-white focus:outline-none focus:ring-2 focus:ring-[#6B5075]">
                        <option>In-Store Pickup</option>
                        <option>Local Delivery</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="mt-4 bg-[#6B2D39] text-[#EDE5F2] font-bold py-3 rounded-xl hover:bg-[#6B5075] transition-colors shadow-md"
                >
                    Confirm Order
                </button>
            </form>
        </div>
    );
}

export default CheckoutForm;