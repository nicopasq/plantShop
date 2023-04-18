import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/cart.css";
import Checkout from "./Checkout";
import Header from "./Header";
import CartPlantCard from "./CartPlantCard";
import { Button, List, Typography } from "@mui/material";

function Cart({ cartItemIndexes, deleteFromCart }) {
  const [plantDataArr, setPlantDataArr] = useState([]);
  const [displayCheckout, setDisplayCheckout] = useState("none");
  const history = useHistory();
  const displayPlants = plantDataArr
    .filter((plant) => plant.id)
    .map((plant, index) => {
      index = cartItemIndexes.indexOf(plant.id);
      return (
        <li>
        <CartPlantCard plant={plant} removeItem={removeItem} />
      </li>
        )
});

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
console.log(plantDataArr)
console.log(cartItemIndexes)

  function openCloseForm() {
    if (displayCheckout === "none") {
      setDisplayCheckout("block");
    } else {
      setDisplayCheckout("none");
    }
  }

  function removeItem(id){
    deleteFromCart(id)
    const updatedPlantData = plantDataArr.filter(plant => plant.id !== id);
    setPlantDataArr(updatedPlantData);
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