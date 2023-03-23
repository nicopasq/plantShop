import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Home from "./Home"
import AddPlant from "./AddPlant"
import Cart from "./Cart"
import {Switch, Route} from "react-router-dom";

function App(){
    const [displayPlants, setDisplayPlants] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/flowerlist')
        .then(r => r.json())
        .then(data => setDisplayPlants(data))
    }, [])

    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/addPlant">
                    <AddPlant/>
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;