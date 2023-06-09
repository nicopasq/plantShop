import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import "../styles/cartPlantCard.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CartPlantCard({plant, removeItem}){
    const history = useHistory();
    const { image, name, price, qty, id } = plant;
    return (
        <Card 
        key={id}
        className="cartCards" 
        variant="outlined"
        sx={{marginBottom:"3px"}}>
            <CardActionArea onClick={() => history.push(`/flowers/${id}`)}>
                <CardMedia>
                    <Avatar className="plantImg" alt={name} src={image} sx={{height:"110px", width:"110px"}} />
                </CardMedia>
                <CardContent className="cardContent">
                    <Typography variant="body1"><strong>{name}</strong></Typography>
                    <Typography variant="body1">${price}</Typography>
                    <Typography variant="body1">qty: [{qty}]</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                    <Button 
                    className="deleteBtn"
                    variant="text" 
                    onClick={()=> removeItem(id)}>🗑️</Button>
            </CardActions>
        </Card>
    );
}

export default CartPlantCard;