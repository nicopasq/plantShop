import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Flowers from "./Flowers"
import FlowerDetails from "./FlowerDetails";
import AddPlant from "./AddPlant"
import Cart from "./Cart"
import {Switch, Route} from "react-router-dom";

function App(){
    const [displayPlants, setDisplayPlants] = useState([]);
    const [itemsInCart, setItemsInCart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/flowerlist')
        .then(r => r.json())
        .then(data => setDisplayPlants(data))
    }, []);

    function addNewPlant(plant){
        setDisplayPlants([...displayPlants, plant])
    };

    function addToCart(newItem){
        setItemsInCart([...itemsInCart, newItem])
    }

    const filteredCart = []
    itemsInCart.filter((plant, index) => {
        if (itemsInCart[index].id === plant.id){
            filteredCart.push(plant.id)
        }
    })

    const plantIndexes = filteredCart.filter((num, index) => {
    return filteredCart.indexOf(num) === index})

    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/flowers">
                    <Flowers plantList={displayPlants}/>
                </Route>
                <Route path="/flowers/new">
                    <AddPlant submitForm={addNewPlant}/>
                </Route>
                <Route path="/flowers/:id">
                    <FlowerDetails addToCart={addToCart}/>
                </Route>
                <Route path="/cart">
                    <Cart indexes={plantIndexes} plantList={displayPlants}/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;