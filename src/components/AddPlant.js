import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/addPlant.css";
import PlantCard from "./PlantCard";
import Header from "./Header";
import { Grid } from "@mui/material";

function AddPlant({ submitForm }) {
  const [addedPlants, setAddedPlants] = useState([]);
  const [plantObj, setPlantObj] = useState({
    category: "",
    price: "",
    instructions: "",
    image: "",
    name: "",
  });
  const { category, price, image, name, instructions } = plantObj;
  const history = useHistory();
  const displayPlants = addedPlants.map((plant) => (
    <PlantCard xs={2.95} key={plant.id} plant={plant} />
  ));


  useEffect(() => {
    fetch("http://localhost:3000/addedHistory")
      .then((r) => r.json())
      .then((data) => setAddedPlants(data));
  }, []);


  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/flowerlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantObj),
    })
      .then((r) => r.json())
      .then((data) => {
        submitForm(data);
        addToHistory(data);
      });
  }

  
  function addToHistory(data) {
    fetch("http://localhost:3000/addedHistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((data) => history.push(`/flowers/${data.id}`));
  }

  function handleChange(event){
    setPlantObj({ ...plantObj, [event.target.name]: event.target.value })
  }

  return (
    <div className="addPlantComp">
      <Header/>
      <h1>Add a plant to sell!</h1>

      <div id="addForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={handleChange}
            name="image"
          />
          <br />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={handleChange}
            name="category"
          />
          <br />
          <input
            type="text"
            placeholder="Plant Name"
            value={name}
            onChange={handleChange}
            name="name"
          />
          <br />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={handleChange}
            name="price"
          />
          <br />
          <textarea
            id="instructions"
            type="text"
            placeholder="Care Instructions"
            value={instructions}
            onChange={handleChange}
            name="instructions"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>

      <h1>History of Added Plants</h1>
      <Grid container spacing={2}  id="addedGrid">
        {displayPlants}
      </Grid>

    </div>
  );
}

export default AddPlant;
