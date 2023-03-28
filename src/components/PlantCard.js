import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/plantCard.css";

function PlantCard({plant}){
    const {name, image, price, id} = plant
    const history = useHistory();

    function handleClick(){
        if(plant.new){
            history.push(`/flowers/${id + 30}`)
        } else {
            history.push(`/flowers/${id}`)
        }
    }

    return (
        <div 
        onClick={handleClick}
        className="card">
            <img src={image}/>
            <div className="namePriceContainer">
            <p>{name} <br/> ${price}</p>
            </div>
        </div>
    )
}

export default PlantCard;