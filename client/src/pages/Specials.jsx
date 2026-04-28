import React from "react";

import CookiesImg from "../assets/images/cookiesNpanna.png";
import redFlagImg from "../assets/images/RedFlag.png";
import cafeBiancoImg from "../assets/images/cafeBiancoStracciatella.png";
import audDreamImg from "../assets/images/auddream.png";
import maplePecanImg from "../assets/images/maplebutterpecan.png";
import vanillaImg from "../assets/images/vanilla.png";

function Specials()
{
    const specials = [
        {id: 1, name: "Cookies 'n Panna (our fav)", img: CookiesImg, alt: "Cookies'n panna"},
        {id: 2, name: "Red Swirl", img: redFlagImg, alt: "Red Swirl"},
        {id: 3, name: "Cafe Bianco Stracciatella (coffee theme)", img: cafeBiancoImg, alt: "Coffee ice cream" },
        {id: 4, name: "Aud Dream", img: audDreamImg, alt: "Vanilla with peanuts"},
        {id: 5, name: "Maple butter pecan (for fall)", img: maplePecanImg, alt: "Maple butter pecan" },
        {id: 6, name: "Vanilla (classic)", img: vanillaImg, alt: "Vanilla"}
    ];

    const specials_list = specials.map(speical => (
        <figure key={special.id}>
            <img src={special.img} alt={special.alt} />
            <figcaption>{special.name}</figcaption>
        </figure>
    ))
    
    return (
        <div className="HALLI" id="hallis-specials">
            {/* Loop through the array to display all items*/}
            <div className = "featured-container">
                {specials_list}
            </div>
        </div>
    )
}

export default Specials 
