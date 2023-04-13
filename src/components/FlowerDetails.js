import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../styles/flowerDetails.css";
import UpdatePlantForm from "./UpdatePlantForm";

function FlowerDetails({ addToCart, updateFlowers, deleteFromFlowers }) {
  const [flower, setFlower] = useState("");
  const [qty, setQty] = useState(1);
  const [display, setDisplay] = useState("none");
  const { id } = useParams();
  const history = useHistory();
  const { name, image, price, category, instructions } = flower;
  const arrow = "<––";


  useEffect(() => {
    fetch(`http://localhost:3000/flowerlist/${id}`)
      .then((r) => r.json())
      .then((data) => setFlower(data));
  }, [id]);


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
        alert("Added to Cart");
      });
  }

  function handleEdit() {
    if (display === "none") {
      setDisplay("block");
    } else if (display === "block") {
      setDisplay("none");
    }
  }

  if (!flower) return <h1>Loading...</h1>;

  return (
    <div id="flowerDetails">
      <div id="content">
        <p className="back" onClick={() => history.goBack()}>
          {arrow} Continue Shopping
        </p>
        <img src={image} />
        <div className="details">
          <h2>{name}</h2>
          <h4>Price:</h4>
          <p>${price} Each</p>
          <h4>Category:</h4>
          <p>{category}</p>
          <h4>Description:</h4>
          <p>{instructions}</p>
        </div>
        <button onClick={handleEdit} className="edit">
          Edit Post
        </button>
        <form onSubmit={handleSubmit} className="addToCartForm">
          <input
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            type="number"
          ></input>
          <button type="submit" id="addToCart">
            Add To Cart
          </button>
        </form>
      </div>
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
