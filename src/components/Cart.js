import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/cart.css";
import Checkout from "./Checkout";
import Header from "./Header";
import CartPlantCard from "./CartPlantCard";
import { Button, Paper, Typography } from "@mui/material";

function Cart({ indexes, deleteFromCart }) {
  const [plantsInCart, setPlantsInCart] = useState([]);
  const [displayCheckout, setDisplayCheckout] = useState("none");
  let plantIdArr = indexes.filter((id, i) => indexes.indexOf(id) === i);
  const history = useHistory();
  const displayPlants = plantsInCart
    .filter((plant) => plant.id)
    .map((plant) => <CartPlantCard plant={plant} removeItem={removeItem}/>);

  let total = 0;
  plantsInCart
    .filter((plant) => plant.id)
    .forEach((plant) => {
      const finalPlantPrice = plant.price * plant.qty;
      total = total + finalPlantPrice;
    });


  useEffect(() => {
    plantIdArr.map((id) => {
      fetch(`http://localhost:3000/flowerlist/${id}`)
        .then((r) => r.json())
        .then((data) =>
          setPlantsInCart((plantsInCart) => [...plantsInCart, data])
        );
    });
  }, []);


  function removeItem(id) {
    deleteFromCart(id);
    const updatedItems = plantsInCart.filter((plant) => plant.id !== id);
    setPlantsInCart(updatedItems);
  }

  function openCloseForm() {
    if (displayCheckout === "none") {
      setDisplayCheckout("block");
    } else {
      setDisplayCheckout("none");
    }
  }

  return (
    <div className="cartComponent">
      <Header/>
      <Typography variant="h2" id="title">Cart</Typography>
      <div id="cartDisplay">
        <ul id="cartContents">{displayPlants}</ul>
        <div id="checkout">
          <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
          <Button 
          variant="contained" 
          sx={{
            color:"yellow",
            bgcolor:"darkBlue",
            fontSize:"15px"
          }}
          onClick={openCloseForm}><strong>Checkout</strong></Button>
        </div>
      </div>
      <Checkout
        total={total}
        display={displayCheckout}
        closeForm={openCloseForm}
      />
      <Button className="back" onClick={() => history.push('/flowers')}>
          <strong>Continue Shopping</strong>
        </Button>
    </div>
  );
}

export default Cart;
