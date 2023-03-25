import React from "react";
import "../styles/plantCard.css";

function PlantCard({plant}){
    const {name, image, price} = plant
    return (
        <div id="card">
            <img src={image}/>
            <div id="namePriceContainer">
            <p>{name} <br/> ${price}</p>
            </div>
        </div>
    )
}

export default PlantCard;