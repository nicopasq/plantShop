import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Flowers from "./Flowers"
import FlowerDetails from "./FlowerDetails";
import AddPlant from "./AddPlant"
import Cart from "./Cart"
import Home from "./Home";
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
        const updatedCart = [...itemsInCart, newItem];
        setItemsInCart(updatedCart)
    };


    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
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
                    <Cart/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;