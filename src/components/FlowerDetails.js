import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../styles/flowerDetails.css";
import UpdatePlantForm from "./UpdatePlantForm";
import Header from "./Header";
import { Alert, Button, Snackbar, Typography } from "@mui/material";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

function FlowerDetails({ addToCart, updateFlowers, deleteFromFlowers, disabled }) {
  const [flower, setFlower] = useState("");
  const [qty, setQty] = useState(1);
  const [display, setDisplay] = useState("none");
  const [open, setOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const { name, image, price, category, instructions } = flower;
  const arrow = "<––";

  const actions = [
    { icon: <DeleteForeverRoundedIcon onClick={handleDelete}/>, name: 'Delete Plant' },
    { icon: <EditRoundedIcon onClick={handleEdit}/>, name: 'Edit Plant' }
  ]

  useEffect(() => {
    fetch(`http://localhost:3000/flowerlist/${id}`)
      .then((r) => r.json())
      .then((data) => setFlower(data));
  }, [id, flower]);

  function handleClose(){
    if(openAlert){
      setOpenAlert(false)
    }
  }

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
        addToCart({index: data.id, qty:qty});
      });
      setOpenAlert(true)
  }

  function handleEdit() {
    if (display === "none") {
      setDisplay("block");
    } else if (display === "block") {
      setDisplay("none");
    }
  }

  function handleDelete(e) {
    fetch(`http://localhost:3000/flowerlist/${id}`, { method: "DELETE" });
    deleteFromFlowers(id);
    history.goBack();
    if(id > 30){
      fetch(`http://localhost:3000/addedHistory/${id - 30}`, {
        method: "DELETE",
      });
    }
  }

  if (!flower) return <h1>Loading...</h1>;

  return (
    <div className="detailsContent">
      <Header/>
      
      <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical:"top", horizontal:"center"}}>
        <Alert onClose={handleClose} severity="success" variant="filled">Added {name} to Cart</Alert>
      </Snackbar>

      <Button variant="text" onClick={() => history.push('/')} className="backBtn">{arrow} Continue Shopping</Button>
        <img src={image} alt={name} className="flowerImg"/>
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

        <SpeedDial
        hidden={disabled}
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'absolute', bottom: 40, right: 40 }}
        icon={<SpeedDialIcon />}
        onClose={() => setOpen(false)}
        onOpen={() =>setOpen(true)}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() =>setOpen(false)}
          />
        ))}
      </SpeedDial>

        <form onSubmit={handleSubmit} className="addToCartForm">
          <input
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            type="number"
          ></input>
          <Button variant="contained" type="submit" className="addToCart">
            Add To Cart
          </Button>
        </form>
        <UpdatePlantForm
        updateFlowers={updateFlowers}
        closeForm={handleEdit}
        display={display}
        plant={flower}
      />
    </div>
  );
}

export default FlowerDetails;