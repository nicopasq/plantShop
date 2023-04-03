import React, { useEffect, useState } from "react";
import "../styles/cart.css";

function Cart({indexes, plantList}){
// return null
const [plantsInCart, setPlantsInCart] = useState([])

useEffect(() => {
     indexes.forEach(i => {
        fetch(`http://localhost:3000/flowerlist/${i}`)
        .then(r => r.json())
        .then(data => setPlantsInCart((currentPlants) => [...currentPlants, data]))
    })
}, [indexes])

const displayPlants = plantsInCart.map(plant => {
    const {image, name, price, qty} = plant;
    return (
        <div key={plant.id} className="cartItem">
        <img src={image}/>
        <p>{name}</p>
        <p>${price}</p>
        <p>Quantity: {qty}</p>
        </div>
    )
})

    let total = 0;
    const finalPrices = [];
    plantsInCart.forEach(plant => {
        const finalPlantPrice = plant.price * plant.qty;
        total = total + finalPlantPrice;
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