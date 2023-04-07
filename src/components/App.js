import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Flowers from "./Flowers";
import FlowerDetails from "./FlowerDetails";
import AddPlant from "./AddPlant";
import Cart from "./Cart";
import { Switch, Route} from "react-router-dom";

function App() {
  const [displayPlants, setDisplayPlants] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:3000/flowerlist")
      .then((r) => r.json())
      .then((data) => setDisplayPlants(data))
  }, []);

  function addNewPlant(plant) {
    setDisplayPlants([...displayPlants, plant])
  }

  function addToCart(newItem) {
    setItemsInCart([...itemsInCart, newItem]);
  }

  function updateFlowersList(updatedPlant){
    console.log('Updated Flower from App: \n', updatedPlant)
    displayPlants.filter(plant => {
      if(plant.id === updatedPlant.id){
        console.log('Matching plant to be updated: \n', plant)
      }
    })
    const updatedDisplayFlowers = []
  }

  const plantIndexes = itemsInCart.filter((id, i) => itemsInCart.indexOf(id) === i);
console.log(plantIndexes)
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
          <FlowerDetails updateFlowers={updateFlowersList} addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          <Cart indexes={plantIndexes} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
