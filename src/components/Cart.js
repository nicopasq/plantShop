import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/cart.css";
import Checkout from "./Checkout";
import Header from "./Header";
import CartPlantCard from "./CartPlantCard";
import { Button, Typography } from "@mui/material";

function Cart({ cartItems, deleteFromCart }) {
  const [displayCheckout, setDisplayCheckout] = useState("none");
  const history = useHistory();
  const displayPlants = cartItems.map(item => { return <CartPlantCard key={item.id} plant={item} removeItem={deleteFromCart}/>})
  let total = 0
cartItems.map(item => {
  const price = item.qty * item.price;
  total += price
})

  function openCloseForm() {
    if (displayCheckout === "none") {
      setDisplayCheckout("block");
    } else {
      setDisplayCheckout("none");
    }
  }

  return (
    <div className="cartComponent">
      <Header />
      <Typography variant="h2" id="title">
        Cart
      </Typography>
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