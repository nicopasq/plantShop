import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/cart.css";
import Checkout from "./Checkout";

function Cart({ indexes, deleteFromCart}) {
  const [plantsInCart, setPlantsInCart] = useState([]);
  const [displayCheckout, setDisplayCheckout] = useState('none')
  const [plantIdArr, setPlantIdArr] = useState(indexes.filter((id, i) => indexes.indexOf(id) === i));
  const history = useHistory();

  useEffect(() => {
    plantIdArr.map(id => {
      fetch(`http://localhost:3000/flowerlist/${id}`)
      .then(r => r.json())
      .then(data => setPlantsInCart((plantsInCart) =>[...plantsInCart, data]))
    });
  }, []);

  function removeItem(id){
    deleteFromCart(id);
    const updatedItems = plantsInCart.filter(plant => plant.id !== id);
      setPlantsInCart(updatedItems);
  }

  const displayPlants = plantsInCart.filter(plant => plant.id).map((plant) => {
    const { image, name, price, qty, id } = plant;
    return (
      <div key={plant.id} className="itemContainer">
      <div 
      onClick={() => history.push(`/flowers/${id}`)} 
      className="cartItem">
        <img src={image} />
        <p>{name}</p>
        <p>(qty: {qty})</p>
        <p>${price}</p>
      </div>
      <div>
         <p onClick={() => removeItem(id)}
        className="remove">🗑️</p>
      </div>
        </div>
    );
  });

  function openCloseForm(){
    if(displayCheckout === 'none'){
      setDisplayCheckout('block')
    }
  }


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
        <h3>Total: ${total.toFixed(2)}</h3>
        <button
        onClick={openCloseForm}>Checkout</button>
        </div>
      </div>
      <Checkout total={total} display={displayCheckout}/>
    </div>
  );
}

export default Cart;
