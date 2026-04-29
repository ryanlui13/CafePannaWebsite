import React from "react";

function Cart({ cart }) {
    // Calculate total dynamically based on the current cart items
    const total = cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);

    return (
        <div className="w-[90%] max-w-2xl mx-auto my-10 bg-[#FAF6F0]/95 p-6 rounded-2xl shadow-xl border border-[#C6A68E]">
            <h2 className="text-[#6B2D39] text-2xl font-bold mb-4 border-b border-[#6B5075] pb-2">Your Pint Bag</h2>
            
            {cart.length === 0 ? (
                <p className="text-[#3C2A21] italic text-lg">No scoops were chosen. Keep scooping...</p>
            ) : (
                <div className="flex flex-col gap-4">
                    <ul className="list-none p-0">
                        {cart.map((item) => (
                            <li key={item.id} className="bg-white/70 border border-[#C6A68E] rounded-lg p-3 mb-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img src={item.img} alt={item.alt} className="w-12 h-12 rounded-lg object-cover border border-[#C6A68E]" />
                                    <span className="font-bold text-[#3C2A21]">{item.flavor} <span className="text-[#6B5075]">x{item.quantity}</span></span>
                                </div>
                                <span className="font-mono font-bold text-[#6B2D39]">${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="border-t border-[#C6A68E] pt-4 mt-2 flex justify-between items-center">
                        <h3 className="text-[#6B2D39] font-bold text-2xl">Total: ${total.toFixed(2)}</h3>
                        <button onClick={clearCart} className="text-red-600 underline text-sm">
                            Clear All Scoops
                        </button>
                        <button className="bg-[#6B2D39] text-white px-6 py-2 rounded-xl hover:bg-[#6B5075] transition-colors font-bold">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;