import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FlowerDetails(){
    const [flower, setFlower] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/flowerlist/${id}`)
        .then(r => r.json())
        .then(data => setFlower(data))
    }, [id]);
    
    const {name, image, price, instructions} = flower;

    return null
}


export default FlowerDetails