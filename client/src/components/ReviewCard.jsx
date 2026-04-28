import React from "react";

function ReviewCard({form_inputs, onConfirm, onBack})
{
    return (
        <div className="review-card">
            <div className="review-details">
                <p><strong>Name: </strong> {form_inputs.name} </p>
                <p><strong>Email: </strong> {form_inputs.email}</p>
                <p><strong>Payment:</strong> **** **** **** {formData.payment.slice(-4)}</p>    
            </div>        
        
            <div className="review-actions">
                <button onClick={onConfirm} className="confirm-btn">Place Order </button>
                <button onClick={onBack} className="back-btn">Go Back</button>
            </div>
        </div>
    );
}

export default ReviewCard;