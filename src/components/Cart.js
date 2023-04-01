import React, { useEffect, useState } from "react";
import "../styles/cart.css";

function Cart({indexes, plantList}){

    const displayPlants = indexes.map(i => {
        const plant = plantList[i - 1]
        const {image, name, price} = plant
        return (
                <div key={plant.id} className="cartItem">
                <img src={image}/>
                <p>{name}</p>
                <p>{price}</p>
                </div>
            )
    })

    let total = 0;
    indexes.forEach(i => {
        const plant = plantList[i - 1];
        total = total + parseFloat(plant.price)
    })

    return (
        <div className="cartComponent">
        <h1 id="title">Plants to be purchased...</h1>

        <div id="cartDisplay">
        <h2>Cart</h2>
        <ul id="cartContents">
            {displayPlants}
        </ul>
        <h3>Total: {total.toFixed(2)}</h3>
        <button>Checkout</button>
        </div>    

        </div>
    );
}

export default Cart;
// const displayPlants = items.map(plant => {
        // const {image, name, price} = plant
        // return (
        //         <div key={plant.id} className="cartItem">
        //         <img src={image}/>
        //         <p>{name}</p>
        //         <p>{price}</p>
        //         </div>
        //     )
        // })

        // let total = 0;
        // items.forEach(plant => {
        //     total = total + parseFloat(plant.price)
        // })