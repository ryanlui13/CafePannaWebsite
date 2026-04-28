import React from "react";
import { useState } from "react";
import Cart from './Cart.jsx'

function checkoutForm({cart, onCancel, onConfirm})
{
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[payment, setPayment] = useState("");

    const [isSubmitted, setIsSubmitted] = useState(false);
    const submitOrder = (e) => 
    {
        e.preventDefault();
        setIsSubmitted(true);
        setCart([]);
        onConfirm();
    };

    return (
        <div>
            <div id="checkout-container">
                {!isSubmitted ? (
                    <form id="checkout-form" onSubmit={submitOrder}>
                    <div className="form-group">
                        <input 
                        placeholder="Name" 
                        onChange={(event) => setName(event.target.value)}
                        required
                    /> 
                    </div>

                    <div className="form-group">
                        <input 
                        type="email"
                        placeholder="Email" 
                        onChange={(event) => setEmail(event.target.value)}
                        required 
                    /> 
                    </div>

                    <div className="form-group">
                        <input 
                        type="password"
                        placeholder="CVV number here" 
                        onChange={(event) => setPayment(event.target.value)}
                        required
                    />
                    </div>

                    <div className="form-actions">
                        <button type="submit">Confirm Order</button>
                        <button type="button" onClick={onCancel}>Cancel</button>
                    </div>
                    <button type="submit">Place Order</button>

                </form>                    
                ) : (
                    <div id="confirmation">
                        <h2>Thanks, {name} </h2>
                        <p> Your order is being processed. An email will be sent to <strong>{email}</strong>. </p>
                        <button onClick={() => setShowForm(false)}> Back to Menu!</button>
                    </div>
                )} 
            </div>
        </div>
    );
}

export default checkoutForm;