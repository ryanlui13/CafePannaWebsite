import React from React;
import Cart from '../components/Cart.jsx';
import checkoutForm from '../components/checkoutForm.jsx';
import ReviewCard from '../components/ReviewCard.jsx';

//images
import audDreamImg from '../assets/images/auddream';
import CookiesImg from '../assets/images/cookiesNpanna.png';
import redFlagImg from '../assets/images/RedFlag.png';
import cafeBiancoImg from '../assets/images/cafeBiancoStracciatella.png';
import maplePecanImg from '../assets/images/maplebutterpecan.png';
import vanillaImg from '../assets/images/vanilla.png';
import ScoopImg from '../assets/images/CafePannaBackgroundImage.jpg'
import chocoloateImg from '../assets/images/chocoloate.png';

function Menu({addToCart})
{
   //array for featured pints
    const featuredPints = [
        {id: 1, flavor: "scoop of the day", img: ScoopImg, alt:"Scoop of the Day", price: "14.00"}, 
        {id: 2, flavor: "aud's Dream", img: audDreamImg, alt:"Aud's dream", price: "14.00"},
    ];

   //Add to cart button
   //return data-flavor, data-price and data-image

   //array for menu items
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

   //shopping cart 
   return (
    <div>
        <div className="menu-table">
            <h3>Featured Pints</h3>
            <table>
                <thead>
                    <tr> 
                        <th>Flavor</th>
                        <th>Prices</th>
                    </tr>
                </thead>
                <tbody>
                    {featuredPints.map(item => (
                        <tr key={item.id}>
                            <td>
                                <div className="menu-items">
                                    <img src={item.img} alt={item.alt} className="menu-img" />
                                    <span>{item.flavor}</span>
                                    <button 
                                        type="button"
                                        onClick={() => addToCart(item)}
                                    >
                                    Add to Cart
                                    </button>
                                </div>
                            </td>
                            <td className="price-cell">${item.price.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody> 
            </table>
        </div>

        <div className='menu-table'>
            <h3>Classic flavor menu</h3>
            <table>
                <thead>
                    <tr>
                        <th>Flavor</th>
                        <th>Prices</th>
                    </tr>
                </thead>
                <tbody>
                    {menuItems.map(item => 
                        <tr key={item.id}>
                            <div className="menu-items">
                              <td>
                                    <div className="menu-items">
                                        <img src={item.img} alt={item.alt} className="menu-img" />
                                        <span>{item.flavor}</span>
                                        <button 
                                            type="button"
                                            onClick={() => addToCart(item)}
                                        >
                                        Add to Cart
                                        </button>
                                    </div>
                                </td>
                            <td className="price-cell">${item.price.toFixed(2)}</td>  
                            </div>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
    )  
};

export default Menu 