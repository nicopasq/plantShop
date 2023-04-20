import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../styles/flowerDetails.css";
import UpdatePlantForm from "./UpdatePlantForm";
import Header from "./Header";
import { Alert, AlertTitle, Button, Typography } from "@mui/material";

function FlowerDetails({ updateCartQty, addToCart, updateFlowers, deleteFromFlowers, disabled }) {
  const [flower, setFlower] = useState("");
  const [qty, setQty] = useState('');
  const [display, setDisplay] = useState("none");
  const { id } = useParams();
  const history = useHistory();
  const { name, image, price, category, instructions } = flower;
  const arrow = "<––";


  useEffect(() => {
    fetch(`http://localhost:3000/flowerlist/${id}`)
      .then((r) => r.json())
      .then((data) => setFlower(data));
  }, [id, flower]);


  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/flowerlist/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ qty: qty }),
    })
      .then((r) => r.json())
      .then((data) => {
        addToCart(data.id);
      });
        return (
          <Alert severity="success" sx={{border:"1px solid black"}}>
             <AlertTitle>Success</AlertTitle>
             This is a success alert — <strong>check it out!</strong>
             </Alert>
        )
  }

  function handleEdit() {
    if (display === "none") {
      setDisplay("block");
    } else if (display === "block") {
      setDisplay("none");
    }
  }

  function handleQtyChange(e){
    setQty(e.target.value);
    updateCartQty(e.target.value)
  }

  if (!flower) return <h1>Loading...</h1>;

  return (
    <div className="detailsContent">
      <Header/>
      <Button variant="text" onClick={() => history.push('/flowers')} className="backBtn">{arrow} Continue Shopping</Button>
        <img src={image} className="flowerImg"/>
        <div className="details">
          <Typography variant="h2" sx={{textDecoration:"underline"}}>{name}</Typography>
          <Typography variant="h4">Price:</Typography>
          <Typography variant="h5">${price}</Typography>
          <br/>
          <Typography variant="h4">Category:</Typography>
          <Typography variant="h5">{category}</Typography>
          <br/>
          <Typography variant="h4">Description:</Typography>
          <Typography variant="h6">{instructions}</Typography>
        </div>
        <Button onClick={handleEdit} variant="contained" disabled={disabled} className="edit">
          Edit Post
        </Button>
        <form onSubmit={handleSubmit} className="addToCartForm">
          <input
            value={qty}
            onChange={(e) => handleQtyChange(e)}
            type="number"
          ></input>
          <Button variant="contained" type="submit" className="addToCart">
            Add To Cart
          </Button>
        </form>
        <UpdatePlantForm
        deleteFromFlowers={deleteFromFlowers}
        updateFlowers={updateFlowers}
        closeForm={handleEdit}
        display={display}
        plant={flower}
      />
    </div>
  );
}

export default FlowerDetails;