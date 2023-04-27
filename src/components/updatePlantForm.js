import React, { useState } from "react";
import "../styles/updatePlantForm.css";
import { Typography } from "@mui/material";

function UpdatePlantForm({
  display,
  plant,
  closeForm,
  updateFlowers,
}) {
  const { name, image, category, instructions, price, id} = plant;
  const [newPlantObj, setNewPlantObj] = useState({
    category: "",
    price: "",
    instructions: "",
    image: "",
    name: ""
  });

  function updatePlant(e) {
    e.preventDefault();
    //1) require input on the actual input tag
    // for (let key in newPlantObj) {
    //   if (newPlantObj[key] === "") {
    //     newPlantObj[key] = plant[key];
    //   }
    // }
    //2) DELETE ABOVE 
    fetch(`http://localhost:3000/flowerlist/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlantObj),
    })
    .then(r => r.json())
    .then(data => {
      updateFlowers(data);
      updateAddedHistory(id);
    });
    closeForm();
  }

  function updateAddedHistory(id) {
      fetch(`http://localhost:3000/addedHistory/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlantObj),
      });
  }

  function handleChange(e){
    setNewPlantObj({ ...newPlantObj, [e.target.name]: e.target.value })
  }

  function closeOnly(e) {
    e.preventDefault();
    closeForm();
  }

  return (
    <div id="updateFormContainer" style={{ display: display }}>
      <form id="updateForm" style={{ display: display }} onSubmit={updatePlant}>
        <div id="formContent">
          <button onClick={closeOnly} id="x">
            x
          </button>
          <Typography variant="h4">Update Plant</Typography>
          <Typography variant="subtitle2" color="red" sx={{marginBottom:"2%"}}><em>(all fields required, add a space to remove a section.)</em></Typography>
          Image URL:
          <br />
          <input
            type="text"
            placeholder={image}
            value={newPlantObj.image}
            onChange={handleChange}
            name="image"
          />
          <br />
          Category:
          <br />
          <input
          required={true}
            type="text"
            placeholder={category}
            value={newPlantObj.category}
            onChange={handleChange}
            name="category"
          />
          <br />
          Name of Plant:
          <br />
          <input
            type="text"
            placeholder={name}
            value={newPlantObj.name}
            onChange={handleChange}
            name="name"
          />
          <br />
          Price:
          <br />
          <input
            type="number"
            placeholder={price}
            value={newPlantObj.price}
            onChange={handleChange}
            name="price"
          />
          <br />
          Plant Care:
          <br />
          <textarea
            id="instructions"
            type="text"
            placeholder={instructions}
            value={newPlantObj.instructions}
            onChange={handleChange}
            name="instructions"
          />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default UpdatePlantForm;
