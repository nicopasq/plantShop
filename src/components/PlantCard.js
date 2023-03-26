import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/plantCard.css";

function PlantCard({plant}){
    const {name, image, price, id} = plant
    const history = useHistory();

    return (
        <div 
        id="card"
        onClick={() => history.push(`/flowers/${id}`)}>
            <img src={image}/>
            <div id="namePriceContainer">
            <p>{name} <br/> ${price}</p>
            </div>
        </div>
    )
}

export default PlantCard;