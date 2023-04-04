import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../styles/flowerDetails.css";
import updatePlantForm from "./updatePlantForm";

function FlowerDetails({addToCart}){
    const [flower, setFlower] = useState('');
    const [qty, setQty] = useState(1);
    const {id} = useParams();
    const history = useHistory();
    const {name, image, price, category, instructions} = flower;


    useEffect(() => {
        fetch(`http://localhost:3000/flowerlist/${id}`)
        .then(r => r.json())
        .then(data => setFlower(data))
    }, [id]);
    
    function handleSubmit(e){
        e.preventDefault();
        fetch(`http://localhost:3000/flowerlist/${id}`, {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({"qty" : qty} )
        })
        .then(r => r.json())
        .then(data => {
            addToCart(data.id)
            history.push('/cart');
        })
    }

    function updatePlant(){
       return updatePlantForm.props.style.display = "block";
    }


    if (!flower) return <h1>Loading...</h1>
    return  (
        <div id="flowerDetails">
            <button onClick={() => history.push('/flowers')}> 🔙</button>
            <div id="details">
                <img src={image}/>
                <h2>{name}</h2>
                <h4>{price}</h4>
                <h4>{category}</h4>
                <p>{instructions}</p>
            </div>
            <div id="buttons">
                <button 
                onClick={updatePlant}
                id="edit">Edit Post</button>

                <form 
                    onSubmit={handleSubmit}
                    id="addToCartForm">
                    <label>Select Quantity </label>
                    <input 
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                        type='number'></input>
                    <button type="submit" id="addToCart">Add To Cart</button>
                </form>
                {updatePlantForm}
            </div>
        </div>
    )
}


export default FlowerDetails