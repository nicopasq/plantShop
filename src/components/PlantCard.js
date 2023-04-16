import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/plantCard.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function PlantCard({ plant }) {
  const { name, image, price, id } = plant;
  const history = useHistory();

  function handleClick() {
    if (plant.new) {
      history.push(`/flowers/${id + 30}`);
    } else {
      history.push(`/flowers/${id}`);
    }
  }
    return (
      
      <Card sx={{ maxWidth: 275 }}>
        <CardActionArea>
          <CardMedia
            onClick={handleClick} 
            component="img"
            height="200"
            image={image}
            alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Price: ${price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" size="small" color="primary">
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    );
}

export default PlantCard;

        // <div onClick={handleClick} className="card">