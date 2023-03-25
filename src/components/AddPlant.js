import React from "react";
import "../styles/addPlant.css";
function AddPlant(){
    return (
        <div className="addPlantComp">
        <h1>Add a plant to sell!</h1>

        <div id="addForm">
        <form>
            <input type='text' placeholder="Image URL"/>
            <br/>
            <input type='text' placeholder="Plant Name"/>
            <br/>
            <input type='number' placeholder="Price"/>
            <br/>
            <textarea id="instructions" type='text' placeholder="Care Instructions"/>
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