import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Menu from "./pages/Menu"; // Removed .jsx for consistency
import Specials from "./pages/Specials";
import Contact from "./pages/Contact";
import CheckoutForm from "./components/CheckoutForm"; // Fixed capitalization
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
   const [page, setPage] = useState('home');
   const [showCheckout, setShowCheckout] = useState(false);
   const [cart, setCart] = useState([]); // Crucial: App must hold the cart state

   // Logic-First: Add to Cart function lives here so it can be passed to Menu
   const addToCart = (item) => {
       setCart(prevCart => {
           const existing = prevCart.find(i => i.id === item.id);
           if (existing) {
               return prevCart.map(i => i.id === item.id ? {...i, quantity: i.quantity + 1} : i);
           }
           return [...prevCart, {...item, quantity: 1}];
       });
   };

   return (
    <div className="min-h-screen w-full bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${CafePannaImage})` }} > {/* Inline style for the specific local image */}
        <Navbar setPage={setPage} /> 
        
        {/* Page Content */}
        <main className="pb-20 bg-white/10 min-h-screen"> {/* Adds padding so footer doesn't overlap */}
            {page === 'home' && <Home />}
            {page === 'mission' && <Mission/>}
            {page === 'menu' && <Menu addToCart={addToCart} />}
            {page === 'specials' && <Specials/>}
            {page === 'contact' && <Contact />}
        </main>

        {/* Cart/Checkout Logic */}
        <div className="fixed bottom-0 w-full z-50">
            {!showCheckout ? (
                <Cart cart={cart} setCart={setCart} onCheckout={() => setShowCheckout(true)} />
            ) : (
                <CheckoutForm onCancel={() => setShowCheckout(false)} />
            )}
        </div>

        <Footer/>
    </div>
   );
} 

export default App;