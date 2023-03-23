import React from "react";

function PlantCard({plant}){
    const {name, image, price} = plant
    return (
        <div id="card">
            <img src={image}/>
            <h1>{name} {price}</h1>
        </div>
    )
}

export default PlantCard;