import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Flowers from "./Flowers";
import FlowerDetails from "./FlowerDetails";
import AddPlant from "./AddPlant";
import Cart from "./Cart";
import { Switch, Route } from "react-router-dom";

function App() {
  const [displayPlants, setDisplayPlants] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);


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

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Flowers plantList={displayPlants} />
        </Route>
        <Route path="/flowers/new">
          <AddPlant submitForm={addNewPlant} />
        </Route>
        <Route path="/flowers/:id">
          <FlowerDetails
            deleteFromFlowers={deleteFlower}
            updateFlowers={updateFlowersList}
            addToCart={addToCart}
          />
        </Route>
        <Route path="/cart">
          <Cart indexes={itemsInCart} deleteFromCart={deleteFromCart} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
