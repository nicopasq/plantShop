import React from "react";
import "../styles/cart.css";

function Cart({items}){
    const displayItems = items.map(plant => (
        <div key={plant.id} className="cartItem">
            <img src={plant.image}/>
            <p>{plant.name}</p>
            <p>{plant.price}</p>
        </div>
    ))

    return (
        <div className="cartComponent">
        <h1 id="title">Plants to be purchased...</h1>

        <div id="cartDisplay">
        <h2>Cart</h2>
        <ul id="cartContents">
            {displayItems}
        </ul>
        <h3>Total: NaN</h3>
        <button>Checkout</button>
        </div>    

        </div>
    );
}

export default Cart;