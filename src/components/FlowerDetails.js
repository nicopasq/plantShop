import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/flowerDetails.css";

function FlowerDetails({addToCart}){
    const [flower, setFlower] = useState('');
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/flowerlist/${id}`)
        .then(r => r.json())
        .then(data => setFlower(data))
    }, [id]);
    
    const {name, image, price, category, instructions} = flower;

    if (!flower) return <h1>Loading...</h1>

    function handleClick(){
        const cartObj = {
            image: image,
            name: name,
            price: price,
            id: flower.id
        };
            addToCart(cartObj)
    }

    return  (
        <div id="flowerDetails">
            <div id="details">
                <img src={image}/>
                <h2>{name}</h2>
                <h4>{price}</h4>
                <h4>{category}</h4>
                <p>{instructions}</p>
            </div>

            <div id="buttons">
                <button id="edit">Edit Post</button>
                <button 
                onClick={handleClick}
                id="addToCart">Add To Cart</button>
            </div>
        </div>
    )
}


export default FlowerDetails