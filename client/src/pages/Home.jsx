import React  from "react";
import { useState } from "react";
import CafePannaImage from "../assets/images/CafePannaImage.png";

function App() {
    return (
        <div className="home-container">
            <header className="hero-section">
                <h1>Welcome to Cafe Panna</h1>
                <p>Authentic Italian-inspired ice cream in the heart of NYC.</p>
                
                {/* This is where your image goes */}
                <div className="hero-image-wrapper">
                    <img 
                        src={CafePannaImage} 
                        alt="Cafe Panna Shop Front" 
                        className="home-hero-img"
                    />
                </div>
            </header>

            <div class="reviews">
                <h2> Don't believe us? Here is what people have to say</h2>
                
                <div className="reviews-container">
                    <div className="review">
                        <p> I love that the menu changes every single day. You can really taste how fresh the panna is, and it makes every visit feel like a new discovery. There's always a surprise waiting!</p>
                        <span className="reviewer"> - Sarah L., Gramercy</span> 
                    </div>    

                    <div className="review">
                        <p>The Cafe Bianco Stracciatella is a total game changer. I’ve never had coffee-infused gelato that smooth. It’s officially ruined standard grocery store ice cream for me.</p>
                        <span className="reviewer"> - Marcus J. </span> 
                        <span className="stars">★★★★★</span>
                    </div> 
                        
                    <div className="review">
                        <p>"That Red Swirl strawberry is unreal. It’s not that fake syrup stuff—it tastes like actual summer berries. Perfectly balanced with the cream!"</p>
                        <span className="reviewer"> - Chloe T. </span> 
                        <span className="stars">★★★</span>
                    </div> 

                    <div className="review">
                        <p>"It’s not just about the scoops; it’s the whole vibe. Standing on the sidewalk with a freshly packed pint of the 'Scoopy of the Day' is my favorite weekend ritual."</p>
                        <span className="reviewer"> - David R. </span> 
                        <span className="stars">★★★★</span>
                    </div> 
                </div>
            </div>
            
            <section className="home-content">
                <h3>Check out our daily scoops and pints!</h3>
                <p>We use gelato imported from Sicily on every scoop.</p>
            </section>

        </div>
    );
}

export default Home; 

