import React from "react";
import "../styles/cart.css";

function Cart({plant}){

    return (
        <div className="cartComponent">
        <h1 id="title">Plants to be purchased...</h1>

        <div id="cartDisplay">
        <h2>Cart</h2>
        <ul id="cartContents">
            {/* <li>
                <img>Image of product</img>
                <p>Name</p>
                <p>Price</p>
            </li> */}
        </ul>
        <h3>Total: NaN</h3>
        <button>Checkout</button>
        </div>    

        </div>
    );
}

export default Cart;