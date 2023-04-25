import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/plantCard.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid} from '@mui/material';

function PlantCard({ plant, xs }) {
  const { name, image, price, id, category } = plant;
  const history = useHistory();

  function handleClick() {
      history.push(`/flowers/${id}`);
  }
    return (
      <Grid key={id} item xs={xs} >
      <Card  className="card" sx={{ maxWidth: 275 }}>
        <CardActionArea onClick={handleClick} >
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={name}
            className="cardMedia"
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
      </Grid>
    );
}

export default PlantCard;