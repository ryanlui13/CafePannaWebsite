import React, { useState } from "react";
import "./index.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Menu from "./pages/Menu"; 
import Specials from "./pages/Specials";
import Contact from "./pages/Contact";
import CheckoutForm from "./components/CheckoutForm";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import CafePannaImage from "./assets/images/CafePannaImage.png";

function App() {
   const [page, setPage] = useState('home');
   const [cart, setCart] = useState([]); 

   const addToCart = (item) => {
       setCart(prevCart => {
           const existing = prevCart.find(i => i.id === item.id);
           if (existing) {
               return prevCart.map(i => i.id === item.id 
                   ? {...i, quantity: i.quantity + 1} 
                   : i);
           }
           return [...prevCart, {...item, quantity: 1}];
       });
   };

    const removeFromCart = (item) => {
        setCart(prev => prev.map(i => i.id === item.id ? { ...i, quantity: Math.max(0, i.quantity - 1) } : i).filter(i => i.quantity > 0));
    };

    const clearCart = () => setCart([]);

   return (
    <div className="min-h-screen w-full bg-no-repeat bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${CafePannaImage})` }} >
        
        <Navbar setPage={setPage} /> 
        
        <main className="pb-20 min-h-screen"> 
            {/* Logic-First: Use toLowerCase() to prevent Navbar naming bugs */}
            {page.toLowerCase() === 'home' && <Home />}
            {page.toLowerCase() === 'mission' && <Mission/>}
            {page.toLowerCase() === 'menu' && (
            <>
                <Menu addToCart={addToCart} />
                <Cart cart={cart} clearCart={clearCart} setPage={setPage} />
            </>
            )}
            {page.toLowerCase() === 'specials' && <Specials/>}
            {page.toLowerCase() === 'contact' && <Contact />}

            {page.toLowerCase() === 'checkout' && (
                <CheckoutForm 
                setPage={setPage}
                onCancel={() => setPage('menu')} 
                />
            )}
            
        </main>

        <Footer/>
    </div>
   );
}

export default App;