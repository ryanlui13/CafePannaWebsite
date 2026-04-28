import { useState } from "react";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Mission from './pages/Mission';
import Menu from './pages/Menu.jsx';
import Specials from './pages/Specials';
import Contact from './pages/Contact';
import checkoutForm from './components/checkoutForm';
import Cart from './components/Cart.jsx';
import Footer from './components/Footer';
import ReviewCard from './components/ReviewCard';
//all the different pages are imported above

function App()  //control which page is seen
{
   const [page, setPage] = useState('home');
   const [showCheckout, setShowCheckout] = useState(false);
   
   return (
    <div>
        <Header/> 
        <Navbar setPage={setPage} /> { /* Take the page as input for setPage. NavBar switches btwn pages */ } 
        {page === 'home' && <Home />}
        {page === 'mission' && <Mission/>}
        {page === 'menu' && <Menu />}
        {page === 'specials' && <Specials/>}
        {page === 'contact' && <Contact />}

        {!showContent ? (
            <Cart oncCheckout={() => setShowCheckout(true)} />
        ) : (
            <checkoutForm onCancel={() => setShowCheckout(false)} />
        )}

        <Footer/>
    </div>
   );
} 
export default App 