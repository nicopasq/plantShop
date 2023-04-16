import React from "react";
import PlantCard from "./PlantCard";
import "../styles/flowers.css";
import Header from "./Header";

function Flowers({ plantList }) {
  const cards = plantList.map((plant) => (
    <PlantCard key={plant.id} plant={plant} />
  ));
  
  return (
    <div id="flowersComp">
      <Header/>
      <h1>Available Plants</h1>
      <ul id="listContainer">{cards}</ul>
    </div>
  );
}

export default Flowers;
