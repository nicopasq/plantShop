import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/addPlant.css";
import PlantCard from "./PlantCard";

function AddPlant({submitForm, lastPlant}){
    const [addedPlants, setAddedPlants] = useState([])
    const [plantObj, setPlantObj] = useState({
    category: '',
        price: '',
        instructions: '',
        image: '',
        name: ''
    });
    const {category, price, image, name, instructions} = plantObj;

    const history = useHistory()

    useEffect(() => {
        fetch('http://localhost:3000/addedHistory')
        .then(r => r.json())
        .then(data => setAddedPlants(data))
    }, [addedPlants])

    function handleSubmit(e){
        e.preventDefault();
        fetch('http://localhost:3000/flowerlist',{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plantObj)
        })
        .then(r => r.json())
        .then(data => {
            submitForm(data)
        })
        addToHistory()
    }

    function addToHistory(){
        fetch('http://localhost:3000/addedHistory', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(plantObj)
        })
    }

    const displayPlants = addedPlants.map(plant => (
        <PlantCard plant={plant}/>
    ))

    return (
        <div className="addPlantComp">
        <h1>Add a plant to sell!</h1>

        <div id="addForm">
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder="Image URL"
            value={image}
            onChange={e => setPlantObj({...plantObj, image : e.target.value})}/>
            <br/>
            <input 
            type='text'
            placeholder="Category"
            value={category}
            onChange={e => setPlantObj({...plantObj, category : e.target.value})}
            />
            <br/>
            <input 
            type='text' 
            placeholder="Plant Name"
            value={name}
            onChange={e => setPlantObj({...plantObj, name : e.target.value})}
            />
            <br/>
            <input 
            type='number' 
            placeholder="Price"
            value={price}
            onChange={e => setPlantObj({...plantObj ,price : e.target.value})}
            />
            <br/>
            <textarea 
            id="instructions" 
            type='text' 
            placeholder="Care Instructions"
            value={instructions}
            onChange={e => setPlantObj({...plantObj, instructions : e.target.value})}
            />
            <br/>
            <button type="submit">Submit</button>
        </form>
        </div>

        <h1>History of Added Plants</h1>
        <ul id="prevAdd">
            {displayPlants}
        </ul>
        </div>

    )
}

export default AddPlant;



// const [plantObj, setPlantObj] = useState({
//     category: '',
//         price: '',
//         instructions: '',
//         image: '',
//         name: ''
//     });
//     const {category, price, image, name, instructions} = plantObj;
//     e.preventDefault();
//         fetch('http://localhost:3000/flowerlist',{
//             method: "POST",
//             headers: {
//                 "Content-Type" : "application/json"
//             },
//             body: JSON.stringify(plantObj)
//         })
//         .then(r => r.json())
//         .then(data => {
//             submitForm(data)
//         })