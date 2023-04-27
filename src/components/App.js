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
  const [cartData, setCartData] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const updatedItems = cartData.map(obj => {
      for(let plant of displayPlants){
        if(plant.id === obj.id){
          plant.qty = obj.qty
          return plant
        }
      }
  })  
  const cartItems = [...new Set(updatedItems)];
  useEffect(() => {
    fetch("http://localhost:3000/flowerlist")
      .then((r) => r.json())
      .then((data) => setDisplayPlants(data));
  }, []);

  function addNewPlant(plant) {
    setDisplayPlants([...displayPlants, plant]);
  }


  function addToCart(dataObj) {
    setCartData([...cartData, dataObj]);
  }


  function updateFlowersList(updatedPlant) {
    const updatedList = displayPlants.map(plant => {
      return plant.id === updatedPlant.id? updatedPlant : plant;
    })
    setDisplayPlants(updatedList)
  }

  function deleteFlower(id) {
    const updatedFlowers = displayPlants.filter((plant) => plant.id !== parseFloat(id));
    console.log(updatedFlowers)
    setDisplayPlants(updatedFlowers);
    deleteFromCart(parseFloat(id))
  }


  function deleteFromCart(id) {
   const updatedCart= cartData.filter((obj) => obj.id !== id);
   setCartData(updatedCart);
  }

  function enableEditor(){
    setDisabled(!disabled)
  }

  return (
    <div>
      <NavBar enableEditor={enableEditor}/>
      <Switch>
        <Route exact path="/">
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
          <Cart cartItems={cartItems} deleteFromCart={deleteFromCart} />
          </Paper>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
