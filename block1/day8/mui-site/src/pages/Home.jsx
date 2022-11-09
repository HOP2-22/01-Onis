import React from "react";
import Header from "../components/header";
import Card from "../components/card";
import { Typography, Grid } from "@mui/material";
import { Container, Box } from "@mui/system";
const data = [
  {
    name: "Quandale Dingle",
    image: "Q",
  },
  {
    name: "Nigeria Human",
    image: "N",
  },
  {
    name: "Ohio Man",
    image: "O",
  },
  {
    name: "Bruh Wth",
    image: "B",
  },
  {
    name: "Ching Chonger",
    image: "C",
  },
  {
    name: "Walter White",
    image: "W",
  },
  {
    name: "Skyler White",
    image: "S",
  },
  {
    name: "Baller Roblox",
    image: "B",
  },
  {
    name: "Giga Chad",
    image: "G",
  },
];
export const Home = () => {
  return (
    <div className="App">
      <div>
        <Header />
        <Container sx={{}}>
          <Typography
            align="left"
            variant="h3"
            color="initial"
            sx={{ fontWeight: 900, marginTop: 20 }}
          >
            Blog posts
          </Typography>
          <Typography align="left" variant="h6" color={"GrayText"}>
            Our latest updates and blogs about managing your team
          </Typography>
          <Grid
            sx={{
              width: "100%",
            }}
            container
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data.map((data) => {
              return (
                <Grid item align="center" xs={4}>
                  <Card name={data.name} image={data.image} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Home;
