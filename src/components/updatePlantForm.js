import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/updatePlantForm.css";

function UpdatePlantForm({
  display,
  plant,
  closeForm,
  updateFlowers,
}) {
  const { name, image, category, instructions, price, id} = plant;
  const history = useHistory();
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
    for (let key in newPlantObj) {
      if (newPlantObj[key] === "") {
        newPlantObj[key] = plant[key];
      }
    }
    //2) DELETE ABOVE 
    fetch(`http://localhost:3000/flowerlist/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlantObj),
    });
    closeForm();
    updateFlowers(newPlantObj);
    updateAddedHistory();
  }

  function updateAddedHistory() {
    if (id > 30) {
      fetch(`http://localhost:3000/addedHistory/${id - 30}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlantObj),
      });
    }
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
          <h2>Update Plant</h2>
          Image URL:
          <br />
          <input
            type="text"
            placeholder={image}
            value={newPlantObj.image}
            onChange={(e) =>
              setNewPlantObj({ ...newPlantObj, image: e.target.value })
            }
          />
          <br />
          Category:
          <br />
          <input
            type="text"
            placeholder={category}
            value={newPlantObj.category}
            onChange={(e) =>
              setNewPlantObj({ ...newPlantObj, category: e.target.value })
            }
          />
          <br />
          Name of Plant:
          <br />
          <input
            type="text"
            placeholder={name}
            value={newPlantObj.name}
            onChange={(e) =>
              setNewPlantObj({ ...newPlantObj, name: e.target.value })
            }
          />
          <br />
          Price:
          <br />
          <input
            type="number"
            placeholder={price}
            value={newPlantObj.price}
            onChange={(e) =>
              setNewPlantObj({ ...newPlantObj, price: e.target.value })
            }
          />
          <br />
          Plant Care:
          <br />
          <textarea
            id="instructions"
            type="text"
            placeholder={instructions}
            value={newPlantObj.instructions}
            onChange={(e) =>
              setNewPlantObj({ ...newPlantObj, instructions: e.target.value })
            }
          />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default UpdatePlantForm;
