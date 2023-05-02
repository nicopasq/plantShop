import React from "react";
import PlantCard from "./PlantCard";
import "../styles/flowers.css";
import { Grid, Typography } from "@mui/material";

function Flowers({ plantList }) {
  const cards = plantList.map((plant) => (
    <PlantCard xs={2} key={plant.id} plant={plant} />
  ));

  return (
    <div id="flowersComp">
      <Typography variant="h2" sx={{textDecoration:"underline"}}>Available Plants</Typography>
      <Grid container spacing={3} id="flowerContainer">
        {cards}
      </Grid>

    </div>
  );
}

export default Flowers;
