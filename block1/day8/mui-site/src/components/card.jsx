import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
export const ActionAreaCard = (props) => {
  const { image, name } = props;
  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ marginTop: 2 }}
          >
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>{image}</Avatar>
        <Typography
          sx={{
            fontSize: 15,
            marginLeft: 2,
            borderRight: 1,
            width: 120,
            borderColor: "GrayText",
          }}
          color={"GrayText"}
        >
          {name}
        </Typography>
        <Typography sx={{ margiinLeft: 2 }} color={"GrayText"}>
          28th March 2022
        </Typography>
      </CardActions>
    </Card>
  );
};

export default ActionAreaCard;
