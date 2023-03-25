import React, { useState } from "react";
import "../styles/addPlant.css";
function AddPlant(){
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [instructions, setInstructions] = useState('');

    return (
        <div className="addPlantComp">
        <h1>Add a plant to sell!</h1>

        <div id="addForm">
        <form>
            <input 
            type='text'
            placeholder="Image URL"
            value={image}
            onChange={e => setImage(e.target.value)}/>
            <br/>
            <input 
            type='text' 
            placeholder="Plant Name"
            value={name}
            onChange={e => setName(e.target.value)}/>
            <br/>
            <input 
            type='number' 
            placeholder="Price"
            value={price}
            onChange={e => setPrice(e.target.value)}/>
            <br/>
            <textarea 
            id="instructions" 
            type='text' 
            placeholder="Care Instructions"
            value={instructions}
            onChange={e => setInstructions(e.target.value)}/>
            <br/>
            <button type="submit">Submit</button>
        </form>
        </div>

        <h1>History of Added Plants</h1>
        <ul id="prevAdd">
            {/* User added plants here  */}
        </ul>
        </div>

    )
}

export default AddPlant;