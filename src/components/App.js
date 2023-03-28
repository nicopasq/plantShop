import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Flowers from "./Flowers"
import FlowerDetails from "./FlowerDetails";
import AddPlant from "./AddPlant"
import Cart from "./Cart"
import Home from "./Home";
import {Switch, Route} from "react-router-dom";

function App(){
    const [displayPlants, setDisplayPlants] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/flowerlist')
        .then(r => r.json())
        .then(data => setDisplayPlants(data))
    }, [])

    function addNewPlant(plant){
        setDisplayPlants([...displayPlants, plant])
    }

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
                    <AddPlant lastPlant={displayPlants[displayPlants.length-1]} submitForm={addNewPlant}/>
                </Route>
                <Route path="/flowers/:id">
                    <FlowerDetails/>
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;