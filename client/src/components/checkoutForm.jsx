import React from "react";

function CheckoutForm({ onCancel }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order Confirmed! See you at Cafe Panna.");
        // Logic to clear cart would go here
    };

    return (
        <div className="mx-auto my-10 w-[90%] md:w-[60%] lg:w-[40%] bg-[#FAF6F0]/95 p-8 rounded-2xl shadow-lg border border-[#C6A68E]">
            <h2 className="text-[#6B2D39] text-3xl font-bold mb-6 border-b-2 border-[#6B5075] pb-2">
                Checkout
            </h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <label className="text-[#6B2D39] font-semibold">Full Name</label>
                    <input 
                        type="text" 
                        required
                        className="p-3 rounded-lg border border-[#C6A68E] bg-white focus:ring-2 focus:ring-[#6B5075] outline-none"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[#6B2D39] font-semibold">Email Address</label>
                    <input 
                        type="email" 
                        required
                        className="p-3 rounded-lg border border-[#C6A68E] bg-white focus:ring-2 focus:ring-[#6B5075] outline-none"
                    />
                </div>

                <div className="flex flex-col gap-5">
                    <button 
                        type="submit" 
                        className="bg-[#6B2D39] text-[#EDE5F2] font-bold py-3 rounded-xl hover:bg-[#6B5075] transition-colors"
                    >
                        Confirm Order
                    </button>
                    
                    {/* Back Button to return to the Menu */}
                    <button 
                        type="button"
                        onClick={onCancel}
                        className="text-[#6B5075] font-semibold hover:underline"
                    >
                        Back to Menu
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CheckoutForm;
