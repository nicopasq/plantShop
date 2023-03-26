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
    
    const {name, image, price, instructions} = flower;

    if (!flower) return <h1>Loading...</h1>

    return  (
        <div>
            <img src={image}/>
            <h3>{name}</h3>
            <h4>{price}</h4>
            <p>{instructions}</p>
        </div>
    )
}


export default FlowerDetails