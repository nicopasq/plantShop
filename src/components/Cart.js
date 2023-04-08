import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/cart.css";

function Cart({ indexes}) {
  // return null
  const [displayTotal, setDisplayTotal] = useState('none');
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

  function removePlant(id){
    //if id of clicked plant is in plantsInCart, remove it.
    const updatedCart = plantsInCart.filter(plant => {
      if (plant.id !== id){
        return plant
      }
    })
    setPlantsInCart(updatedCart)
  }

  const displayPlants = plantsInCart.filter(plant => plant.id).map((plant) => {
    const { image, name, price, qty, id } = plant;
    return (
      <>
      <div 
      onClick={() => history.push(`/flowers/${id}`)}
      key={plant.id} 
      className="cartItem">
        <img src={image} />
        <p>{name}</p>
        <p>(qty: {qty})</p>
        <p>${price}</p>
      </div>
      <div>
         <p onClick={() => removePlant(id)}
        className="remove">🗑️</p>
      </div>
        </>
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
        <ul id="cartContents">{displayPlants}
         </ul>
        <div id="checkout">
        <h3>Total: {total.toFixed(2)}</h3>
        <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
