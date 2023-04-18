import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/cart.css";
import Checkout from "./Checkout";
import Header from "./Header";
import CartPlantCard from "./CartPlantCard";
import { Button, List, Typography } from "@mui/material";

function Cart({ cartItemIndexes, removeItem }) {
  const [plantDataArr, setPlantDataArr] = useState([]);
  const [displayCheckout, setDisplayCheckout] = useState("none");
  const history = useHistory();
  const displayPlants = plantDataArr
    .filter((plant) => plant.id)
    .map((plant) => (
      <li>
        <CartPlantCard plant={plant} removeItem={removeItem} />
      </li>
    ));

  let total = 0;
  plantDataArr
    .filter((plant) => plant.id)
    .forEach((plant) => {
      const finalPlantPrice = plant.price * plant.qty;
      total = total + finalPlantPrice;
    });

  useEffect(() => {
    cartItemIndexes.map((index) => {
      fetch(`http://localhost:3000/flowerlist/${index}`)
        .then((r) => r.json())
        .then((data) =>
          setPlantDataArr((plantDataArr) => [...plantDataArr, data])
        );
    });
  }, []);

  function openCloseForm() {
    if (displayCheckout === "none") {
      setDisplayCheckout("block");
    } else {
      setDisplayCheckout("none");
    }
  }

  function removeItem(id) {
    console.log("clicked");
    // deleteFromCart(id);
    // const updatedItems = plantsInCart.filter((plant) => plant.id !== id);
    // setPlantsInCart(updatedItems);
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
      <Button className="back" onClick={() => history.push("/flowers")}>
        <strong>Continue Shopping</strong>
      </Button>
    </div>
  );
}

export default Cart;