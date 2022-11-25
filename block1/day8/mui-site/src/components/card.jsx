import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { ColorModeContext } from "../context/ThemeContext";

export const ActionAreaCard = ({ data }) => {
  const { changeTheme, isDark } = useContext(ColorModeContext);
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 3,
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: isDark ? "#141414" : "white",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={data.image} alt="" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: isDark ? "white" : "black" }}
          >
            {data.text}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: isDark ? "white" : "black" }}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Avatar sx={{ bgcolor: deepOrange[500] }} src={data.owner.picture} />
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
          {data.owner.firstName + " " + data.owner.lastName}
        </Typography>
        <Typography sx={{ margiinLeft: 2 }} color={"GrayText"}>
          28th March 2022
        </Typography>
      </CardActions>
    </Card>
  );
};

export default ActionAreaCard;
