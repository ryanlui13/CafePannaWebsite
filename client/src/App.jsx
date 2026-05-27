import React, { useState } from "react";
import "./index.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Menu from "./pages/Menu"; 
import Specials from "./pages/Specials";
import Contact from "./pages/Contact";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import CafePannaImage from "./assets/images/CafePannaImage.png";

function App() {
   const [page, setPage] = useState('home');
   const [cart, setCart] = useState([]); 

   // 🍦 Handles both standard frontend IDs and MongoDB '_id' strings cleanly
   // 🍦 Handles both standard frontend IDs and MongoDB '_id' strings cleanly
   const addToCart = (item) => {
       setCart(prevCart => {
            const itemId = item._id || item.id;
            const existing = prevCart.find(i => (i._id || i.id) === itemId);
           if (existing) {
               return prevCart.map(i => (i._id || i.id) === itemId 
                   ? {...i, quantity: i.quantity + 1} 
                   : i);
           }
           return [...prevCart, {...item, quantity: 1}];
       });
   };

    const removeFromCart = (item) => {
        const itemId = item._id || item.id;
        setCart(prev => prev.map(i => (i._id || i.id) === itemId 
            ? { ...i, quantity: Math.max(0, i.quantity - 1) } 
            : i).filter(i => i.quantity > 0));
    };

    const clearCart = () => setCart([]);

   return (
    <div className="min-h-screen w-full bg-no-repeat bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${CafePannaImage})` }} >
        
        <Navbar setPage={setPage} /> 
        
        <main className="pb-20 min-h-screen"> 
            {/* Logic-First Page Routing Routing Section */}
            {page.toLowerCase() === 'home' && <Home />}
            {page.toLowerCase() === 'mission' && <Mission/>}
            
            {/* Fixed: Separated Menu and Checkout into distinct cleanly isolated pages */}
            {page.toLowerCase() === 'menu' && (
                <Menu addToCart={addToCart} setPage={setPage} />
            )}
            
            {page.toLowerCase() === 'checkout' && (
                <Cart 
                    cart={cart} 
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    clearCart={clearCart} 
                    setPage={setPage} 
                />
            )}
            
            {page.toLowerCase() === 'specials' && <Specials/>}
            {page.toLowerCase() === 'contact' && <Contact/>}
        </main>

        <Footer />
    </div>
   );
}

export default App;