import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/cart.css";
import Checkout from "./Checkout";
import CartPlantCard from "./CartPlantCard";
import { Button, Typography } from "@mui/material";
import Count from "./Count";

function Cart({ cartItems, deleteFromCart, clearCart }) {
  const [displayCheckout, setDisplayCheckout] = useState('none');
  const history = useHistory();
  let displayPlants = cartItems.map(item => { return <CartPlantCard key={item.id} plant={item} removeItem={deleteFromCart}/>})
  let total = 0
cartItems.map(item => {
  const price = item.qty * item.price;
  total += price
})

  function openCloseForm() {
    if (displayCheckout === "none") {
      setDisplayCheckout("block");
    } else if(displayCheckout === "block") {
      setDisplayCheckout("none");
    }
  }

  return (
    <div className="cartComponent">
    
      <Typography variant="h2" id="title">
        Cart
      </Typography>
          <Count/>

      <div id="cartDisplay">
        <ul id="cartContents">{displayPlants}</ul>
        <div id="checkout">
          <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
          <Button
            variant="contained"
            sx={{
              color: "yellow",
              bgcolor: "darkBlue",
              fontSize: "15px",
            }}
            onClick={openCloseForm}
          >
            <strong>Checkout</strong>
          </Button>
        </div>
      </div>
      <Checkout
        clearCart={clearCart}
        total={total}
        display={displayCheckout}
        closeForm={openCloseForm}
        />
      <Button className="back" onClick={() => history.push("/")}>
        <strong>Continue Shopping</strong>
      </Button>

    </div>
  );
}

export default Cart;