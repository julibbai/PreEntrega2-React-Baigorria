import { Link } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Item = ({ id, name, img, description }) => {
  return (
    <Card
      sx={{ maxWidth: 345, margin: "0 15px", marginBottom: 1, height: "100%" }}
    >
      <CardMedia
        component="img"
        alt="{green iguana}"
        height="140"
        image={img}
        sx={{ height: 140 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${id}`}>
          <Button size="small">Detalles</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
