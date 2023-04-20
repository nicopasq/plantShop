import React, { useEffect, useState } from "react";
import "../styles/app.css";
import NavBar from "./NavBar";
import Flowers from "./Flowers";
import FlowerDetails from "./FlowerDetails";
import AddPlant from "./AddPlant";
import Cart from "./Cart";
import { Switch, Route } from "react-router-dom";
import { Paper } from "@mui/material";

function App() {
  const [qty, setQty] = useState('');
  const [displayPlants, setDisplayPlants] = useState([]);
  const [cartIndexes, setCartIndexes] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const cartItems = cartIndexes.filter((item, index) => cartIndexes.indexOf(item) === index)
  .map(index => displayPlants[index])

  useEffect(() => {
    fetch("http://localhost:3000/flowerlist")
      .then((r) => r.json())
      .then((data) => setDisplayPlants(data));
  }, []);

  function addNewPlant(plant) {
    setDisplayPlants([...displayPlants, plant]);
  }

  function addToCart(plantId) {
    setCartIndexes([...cartIndexes, plantId-1]);
  }


  function updateFlowersList(updatedPlant) {
    const updatedList = displayPlants.map(plant => {
      return plant.id === updatedPlant.id? updatedPlant : plant;
    })
    setDisplayPlants(updatedList)
  }

  function deleteFlower(id) {
    const updatedFlowers = displayPlants.filter((plant) => plant.id !== id);
    setDisplayPlants(updatedFlowers);
  }

  function deleteFromCart(id) {
   const updatedCart= cartIndexes.filter((item) => item !== id-1);
   setCartIndexes(updatedCart);
  }

  function updateCartQty(qty){
    setQty(qty)
  }

  function enableEditor(){
    setDisabled(!disabled)
  }

  return (
    <div>
      <NavBar enableEditor={enableEditor}/>
      <Switch>
        <Route exact path="/flowers">
        <Paper className="contentContainer">
          <Flowers plantList={displayPlants} />
        </Paper>
        </Route>
        <Route path="/flowers/new">
        <Paper className="contentContainer">
          <AddPlant submitForm={addNewPlant} />
        </Paper>
        </Route>
        <Route path="/flowers/:id">
        <Paper className="contentContainer">
          <FlowerDetails
            deleteFromFlowers={deleteFlower}
            updateFlowers={updateFlowersList}
            updateCartQty={updateCartQty}
            addToCart={addToCart}
            disabled={disabled}
          />
          </Paper>
        </Route>
        <Route path="/cart">
          <Paper className="contentContainer">
          <Cart qty={qty} cartItems={cartItems} deleteFromCart={deleteFromCart} />
          </Paper>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
