<<<<<<< HEAD
import React from "react";
import { useState } from "react";

function Contact() {
    const [forminput, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        newFlavor: '',
    });

    //event listener for the menu items
    const submitForm = (event) => {
        event.preventDefault(); //page can't refresh
        console.log("Form submitted: ", forminput);
        alert(`Thank you for submitting. Processing feedback from ${forminput.name}!`);
    }

    //adding input
    const handleChange = (event) => {
        setFormData({...forminput, [event.target.id]: event.target.value});
    };
    
    return (
       <div>
            <div className="CONTACTUS" id="contact">
                <h2>Location: 77 irving place, New York, NY</h2>
                <p> Phone: (917) 475-1162 </p>

                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.956627581165!2d-73.9897455241416!3d40.73549213583802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259648946766d%3A0x66f6f709d0f419d2!2sCaff%C3%A8%20Panna!5e0!3m2!1sen!2sus!4v1709940000000!5m2!1sen!2sus" 
                    width="100%" height="450" style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <form className = "contact-form" onSubmit={submitForm}>
                <div className="form-container">
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="your name" 
                        value={forminput.name} 
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="email" 
                        required value={forminput.value} 
                        onChange={handleChange}
                    />

                    <label htmlFor="newFlavor">New Flavor Idea</label>
                    <input 
                        type="text" 
                        id="newFlavor" 
                        placeholder="What ingredients should we use?"
                        value={forminput.newFlavor}
                        onChange={handleChange}
                    />

                    <button type="submit">Submit Feedback</button>
                </div>
            </form>
       </div> 
    );
}

=======
import React from "react";
import { useState } from "react";

function Contact() {
    const [forminput, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        newFlavor: '',
    });

    //event listener for the menu items
    const submitForm = (event) => {
        event.preventDefault(); //page can't refresh
        console.log("Form submitted: ", forminput);
        alert(`Thank you for submitting. Processing feedback from ${forminput.name}!`);
    }

    //adding input
    const handleChange = (event) => {
        setFormData({...forminput, [event.target.id]: event.target.value});
    };
    
    return (
       <div>
            <div className="CONTACTUS" id="contact">
                <h2>Location: 77 irving place, New York, NY</h2>
                <p> Phone: (917) 475-1162 </p>

                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.956627581165!2d-73.9897455241416!3d40.73549213583802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259648946766d%3A0x66f6f709d0f419d2!2sCaff%C3%A8%20Panna!5e0!3m2!1sen!2sus!4v1709940000000!5m2!1sen!2sus" 
                    width="100%" height="450" style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <form className = "contact-form" onSubmit={submitForm}>
                <div className="form-container">
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="your name" 
                        value={forminput.name} 
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="email" 
                        required value={forminput.value} 
                        onChange={handleChange}
                    />

                    <label htmlFor="newFlavor">New Flavor Idea</label>
                    <input 
                        type="text" 
                        id="newFlavor" 
                        placeholder="What ingredients should we use?"
                        value={forminput.newFlavor}
                        onChange={handleChange}
                    />

                    <button type="submit">Submit Feedback</button>
                </div>
            </form>
       </div> 
    );
}

>>>>>>> a6279f68e11d9cb29df4a2d1228b0924bd0f1e63
export default Contact 