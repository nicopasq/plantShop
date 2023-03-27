import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/flowerDetails.css";
function FlowerDetails(){
    const [flower, setFlower] = useState('');
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/flowerlist/${id}`)
        .then(r => r.json())
        .then(data => setFlower(data))
    }, [id]);
    
    const {name, image, price, category, instructions} = flower;

    if (!flower) return <h1>Loading...</h1>

    return  (
        <div id="details">
            <img src={image}/>
            <h2>{name}</h2>
            <h4>{price}</h4>
            <h4>{category}</h4>
            <p>{instructions}</p>
        </div>
    )
}


export default FlowerDetails