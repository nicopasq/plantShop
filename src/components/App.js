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
  const [displayPlants, setDisplayPlants] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/flowerlist")
      .then((r) => r.json())
      .then((data) => setDisplayPlants(data));
  }, []);


  function addNewPlant(plant) {
    setDisplayPlants([...displayPlants, plant]);
  }

  function addToCart(newItem) {
    setItemsInCart([...itemsInCart, newItem]);
  }

  function updateFlowersList(updatedPlant) {
    const updatedFlowers = displayPlants.map((plant) => {
      if (plant.id === updatedPlant.id) {
        plant = updatedPlant;
      }
      return plant;
    });
    setDisplayPlants(updatedFlowers);
  }

  function deleteFlower(id) {
    const updatedFlowers = displayPlants.filter((plant) => plant.id !== id);
    setDisplayPlants(updatedFlowers);
  }

  function deleteFromCart(id) {
    const updatedCartItems = itemsInCart.filter((item) => item !== id);
    setItemsInCart(updatedCartItems);
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
            addToCart={addToCart}
            disabled={disabled}
          />
          </Paper>
        </Route>
        <Route path="/cart">
          <Paper className="contentContainer">
          <Cart indexes={itemsInCart} deleteFromCart={deleteFromCart} />
          </Paper>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
