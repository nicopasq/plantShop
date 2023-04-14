import React from "react";
import PlantCard from "./PlantCard";
import "../styles/flowers.css";

function Flowers({ plantList }) {
  const cards = plantList.map((plant) => (
    <PlantCard key={plant.id} plant={plant} />
  ));
  
  return (
    <div>
      <h1>Available Plants</h1>
      <ul id="listContainer">{cards}</ul>
    </div>
  );
}

export default Flowers;
