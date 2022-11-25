import React, { useState, useEffect, useContext } from "react";
import Header from "../components/header";
import Card from "../components/card";
import { Typography, Grid } from "@mui/material";
import { Container, Box } from "@mui/system";
import "../App.css";
import axios from "axios";
import { ColorModeContext } from "../context/ThemeContext";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);
  const { changeTheme, isDark } = useContext(ColorModeContext);

  const instance = axios.create({
    baseURL: "https://dummyapi.io/data/v1/post",
    headers: {
      "app-id": "636e0d6642c1f665f684f489",
    },
  });

  useEffect(() => {
    const getData = async () => {
      const res = await instance.get("/");
      setData(res.data.data);
    };
    getData();
  }, []);
  return (
    <div
      className="App"
      style={{ backgroundColor: isDark ? "black" : "white" }}
    >
      <Header />
      <Container>
        <Typography
          align="left"
          variant="h3"
          color="initial"
          sx={{
            fontWeight: 900,
            marginTop: 20,
            color: isDark ? "white" : "black",
          }}
        >
          Blog posts
        </Typography>
        <Typography align="left" variant="h6" color={"GrayText"}>
          Our latest updates and blogs about managing your team
        </Typography>
        <Grid container spacing={2}>
          {data.map((el, ind) => {
            return (
              <Grid key={ind} item xs={4}>
                <Link to={el.id} style={{ textDecoration: "none" }}>
                  <Card data={el} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
