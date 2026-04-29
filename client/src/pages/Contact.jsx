import React, { useState } from "react";

function Contact() {
    const [forminput, setFormData] = useState({ name: '', email: '', newFlavor: '' });

    const handleChange = (e) => setFormData({...forminput, [e.target.id]: e.target.value});
    
    const submitForm = (e) => {
        e.preventDefault();
        alert(`Thank you, ${forminput.name}! We'll look into that flavor.`);
    };

    return (
       <div className="w-[90%] max-w-2xl mx-auto my-10 bg-[#FAF6F0]/95 p-8 rounded-2xl shadow-xl border border-[#C6A68E]">
            <h2 className="text-[#6B2D39] text-3xl font-bold mb-6 text-center">Contact Us</h2>
            <form onSubmit={submitForm} className="flex flex-col gap-4">
                <input id="name" placeholder="Name" className="p-3 border rounded" onChange={handleChange} value={forminput.name} />
                <input id="email" type="email" placeholder="Email" className="p-3 border rounded" onChange={handleChange} value={forminput.email} required />
                <textarea id="newFlavor" placeholder="Flavor Idea" className="p-3 border rounded h-32" onChange={handleChange} value={forminput.newFlavor} />
                <button type="submit" className="bg-[#6B2D39] text-white py-3 rounded-xl font-bold hover:bg-[#6B5075]">Submit</button>
            </form>
       </div> 
    );
}
export default Contact;