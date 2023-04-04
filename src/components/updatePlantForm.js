import React from "react";
import "../styles/updatePlantForm.css";

const updatePlantForm = <form>
<input 
type='text'
placeholder="Image URL"></input>
<br/>
<input 
type='text'
placeholder="Category"
></input>
<br/>
<input 
type='text' 
placeholder="Plant Name"
></input>
<br/>
<input 
type='number' 
placeholder="Price"
></input>
<br/>
<textarea 
id="instructions" 
type='text' 
placeholder="Care Instructions"
></textarea>
<br/>
<button type="submit">Submit</button>
</form>

export default updatePlantForm;