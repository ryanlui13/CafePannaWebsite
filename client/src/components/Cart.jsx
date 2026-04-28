import React from "react";
import { useState } from "react";
import scoopImg from "../assets/images/Scoop.png";


const menuItems = [
    {id: 1, flavor: "surprise-scoop", img: ScoopImg, alt:"Scoop of the Day", price: "14.00"}, 
    {id: 2, flavor: "aud's Dream", img: audDreamImg, alt:"Aud's dream", price: "14.00"},
    {id: 3, flavor: "Cookies 'n Panna", img: CookiesImg, alt:"Cookies and Panna", price: "7.00"},
    {id: 4, flavor: "Red Swirl", img: redFlagImg, alt:"Red Swirl", price: "5.00"},
    {id: 5, flavor: "Cafe Bianco", img: cafeBiancoImg, alt:"Cafe Biancco Stracciatella", price: "6.00"},
    {id: 6, flavor: "Maple Butter Pecan ", img: maplePecanImg, alt:"Maple Butter Pecan", price: "7.00"},
    {id: 7, flavor: "Vanilla", img: vanillaImg, alt:"Vanilla", price: "5.00"},
    {id: 8, flavor: "chocolate", img: chocoloateImg, alt:"Chocolate", price: "5.00"},
];

function Cart({cart, setCart})
{
    //total price
    const total = cart.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);
    
    //plus and minus buttons inside the cart
    const plusButton = (id) => 
    {
        setCart(prevCart => {
            const existing = prevCart.find(item => item.id === id);
            if (existing)
            {
                return prevCart.map(item => item.id === id ? {...item, quantity: item.quantity + 1, image: item.img}: item);
            }
            return [...currentCart, {id: id, quantity: 1, image: img}];
        });
    };

    const removeButton = (id) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item => {
                if (item.id === id) { 
                    return {...item, quantity: item.quantity - 1};
                }
                return item;
            });

            //use filter to remove items at 0
            return updatedCart.filter(item => item.quantity > 0);  //keep everything above 0
    });
    }

    //everything is empty 
    const clearCart = () => {
        setCart([]);
    };

    return (
        /* In Cart.jsx */
<div id="shopping-cart-selection" className="bg-[#FAF6F0]/92 rounded-xl p-8 my-8 mx-auto w-[90%] md:w-[95%]">
    <h2 className="text-[#6B2D39] mb-4">Keep Scooping...</h2>
    
    {cart.length === 0 ? (
        <p className="text-[#3C2A21] text-[25px]">No scoops were chosen. Keep scooping...</p>
    ) : (
        <div className="flex flex-col gap-4">
            <ul className="list-none p-0">
                {cart.map((item) => (
                    <li key={item.id} className="bg-white/70 border border-[#C6A68E] rounded-lg p-3 mb-3 flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
                        <div className="flex items-center gap-3">
                            <img src={item.img} alt={item.alt} className="w-12 h-12 rounded-lg object-cover border border-[#C6A68E]" />
                            <span className="font-bold text-[#3C2A21]">{item.flavor} x {item.quantity}</span>
                        </div>
                        <span className="font-mono text-[#6B2D39]">${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                    </li>
                ))}
            </ul>
            <div className="border-top border-[#C6A68E] pt-4 mt-4 flex justify-between items-center flex-wrap gap-4">
                <h3 className="text-[#6B2D39] font-bold text-xl">Total: ${total.toFixed(2)}</h3>
                <button 
                    className="bg-[#C4956A] text-white px-5 py-2 rounded-lg hover:bg-[#6B2D39] transition-colors"
                    onClick={() => setCart([])}
                >
                    Clear Cart
                </button>
            </div>
        </div>
    )}
</div>
    );
}

export default Cart