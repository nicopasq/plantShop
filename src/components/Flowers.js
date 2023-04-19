import React from "react";
import PlantCard from "./PlantCard";
import "../styles/flowers.css";
import Header from "./Header";
import { Grid, Typography } from "@mui/material";

function Flowers({ plantList }) {
  const cards = plantList.map((plant) => (
    <PlantCard key={plant.id} plant={plant} />
  ));

  return (
    <div id="flowersComp">
      <Header/>
      <Typography variant="h2" sx={{textDecoration:"underline"}}>Available Plants</Typography>
      <Grid container spacing={3} id="flowerContainer">
      {cards.map(card => <Grid key={card.key} item xs={2}>{card}</Grid>)}
      </Grid>

    </div>
  );
}

export default Flowers;
