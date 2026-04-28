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
        <div>
            <div className="cart-container" id="shopping-cart-selection">
                <h2>Kep Scooping...</h2> 
                <img src={scoopImg} alg="scoop image" /> 

                {cart.length === 0 ? (<p>No scoops were choosen. keep scooping...</p>) : (
                    <>
                    <ul className="cart-list">
                    {cart.map((item) => (
                        <li key={item.id} className="cart-item">
                            <img src={item.img} alt={item.alt} style={{width: "50px"}} />
                            <span> {item.flavor} * {item.quantity} </span>
                            <span> ${(item.price * item.quantity)}.toFixed(2) </span>
                        </li>
                    ))}
                    </ul>  

                        {/* Display the clearCart*/}
                    <h3> Total: ${updateTotal.toDixed(2)} </h3>
                    <button onClick={() => setCart([])}>Clear Cart</button>   
                    </>
                )}
            </div> 
        </div>
    );
}

export default Cart