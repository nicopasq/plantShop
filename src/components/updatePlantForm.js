import React from "react";
import "../styles/updatePlantForm.css";

function UpdatePlantForm({display}) {
  return (
        <div id="updateFormContainer" style={{ display: display }}>
      <form id='updateForm' style={{ display: display }}>
        <div id="formContent">
        <h2>Update Plant</h2>
        Image URL:
        <br/>
      <input type="text" placeholder="Image URL"></input>
      <br />
      Category:
        <br/>
      <input type="text" placeholder="Category"></input>
      <br />
      Name of Plant:
        <br/>
      <input type="text" placeholder="Plant Name"></input>
      <br />
      Price:
        <br/>
      <input type="number" placeholder="Price"></input>
      <br />
      How to Care For the Plant:
        <br/>
      <textarea
        id="instructions"
        type="text"
        placeholder="Care Instructions"
        ></textarea>
      <br />
      <button type="submit">Submit</button> ––– <button>Delete Plant</button>
        </div>
    </form>
        </div>
  );
}
export default UpdatePlantForm;
