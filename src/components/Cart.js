import React from "react";
import "../styles/cart.css";

function Cart(){
    return (
        <div className="cartComponent">
        <h1 id="title">Plants to be purchased...</h1>

        <div id="cartDisplay">
        <h2>Cart</h2>
        <ul id="cartContents">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
            <li>item 6</li>
            <li>item 7</li>
            <li>item 8</li>
            <li>item 9</li>
            <li>item 10</li>
            <li>item 11</li>
            <li>item 12</li>
            <li>item 13</li>
        </ul>
        <h3>Total: NaN</h3>
        <button>Checkout</button>
        </div>    

        </div>
    );
}

export default Cart;