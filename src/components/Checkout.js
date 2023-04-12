import React from "react";
import '../styles/checkout.css';

function Checkout({total, display, closeForm}){
    return (
        <div id="checkoutContainer"
        style={{display: display}}>
            <form id="checkoutForm"
            style={{display: display}}
            onSubmit={() => alert('Payment Successful! \nThank you for your purchase :)')}>
                <div id="formHeader">
                <p>Checkout</p> 
                <p id="xBtn" onClick={closeForm}>x</p>
                </div>
                <img id="options" src='https://bursar.unl.edu/images/4CCImage.jpg' alt='available_payment_options'/>
                <p>Card Number:</p>
                <input id="cardNum" type='number'/>
                <p>Name of Card Holder:</p>
                <input id="name" type='text'/>
                <p>Expiry Date:</p>
                <input id="expireDate" type='number'/>
                <p id="securityP">Security Code:</p>
                <input id="securityCode" type='number'/>
                <h2>Total: ${total.toFixed(2)}</h2>
                <button type="submit" id="paymentBtn">Pay Now</button>
            </form>
        </div>
    );
}

export default Checkout;