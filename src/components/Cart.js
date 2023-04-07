import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/cart.css";

function Cart({ indexes}) {
  // return null
  const [plantsInCart, setPlantsInCart] = useState([]);
  const history = useHistory();

  useEffect(() => {
    indexes.map((i) => {
      fetch(`http://localhost:3000/flowerlist/${i}`)
        .then((r) => r.json())
        .then((data) => {
            setPlantsInCart((currentPlants) => [...currentPlants, data])
        });
    });
  }, []);

  function removePlant(){
    console.log(displayPlants)
  }

  const displayPlants = plantsInCart.filter(plant => plant.id).map((plant) => {
    const { image, name, price, qty, id } = plant;
    return (
      <div 
      onClick={() => history.push(`/flowers/${id}`)}
      key={plant.id} 
      className="cartItem">
        <img src={image} />
        <p>{name}</p>
        <p>(qty: {qty})</p>
        <p>${price}</p>
        <p 
        onClick={removePlant}
        id="remove">🗑️</p>
      </div>
    );
  });

  let total = 0;  
  plantsInCart.filter(plant => plant.id).forEach((plant) => {
    const finalPlantPrice = plant.price * plant.qty;
    total = total + finalPlantPrice;
  });

  return (
    <div className="cartComponent">
      <h1 id="title">Plants to be purchased...</h1>

      <div id="cartDisplay">
        <h2>Cart</h2>
        <ul id="cartContents">{displayPlants}</ul>
        <h3>Total: {total.toFixed(2)}</h3>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
