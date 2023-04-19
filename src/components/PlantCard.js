import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/plantCard.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';

function PlantCard({ plant }) {
  const { name, image, price, id, category } = plant;
  const history = useHistory();

  function handleClick() {
    if (plant.new) {
      history.push(`/flowers/${id + 30}`);
    } else {
      history.push(`/flowers/${id}`);
    }
  }
    return (
      <Card key={id} className="card" sx={{ maxWidth: 275 }}>
        <CardActionArea onClick={handleClick} >
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={name}
          />
          <CardContent sx={{height:'120px'}}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Price: ${price}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {category}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

export default PlantCard;