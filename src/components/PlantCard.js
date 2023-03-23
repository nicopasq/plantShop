import React from "react";
import "../styles/plantCard.css";

function PlantCard({plant}){
    const {name, image, price} = plant
    return (
        <div id="card">
            <img src={image}/>
            <h3>{name} {price}</h3>
        </div>
    )
}

export default PlantCard;