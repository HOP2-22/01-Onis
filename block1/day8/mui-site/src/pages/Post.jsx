import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Typography, Box, Avatar } from "@mui/material";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import { ColorModeContext } from "../context/ThemeContext";
import { Footer } from "../components/footer";

const Post = () => {
  const [data, setData] = useState([]);
  const { postId } = useParams();
  const instance = axios.create({
    baseURL: `https://dummyapi.io/data/v1/post/${postId}`,
    headers: {
      "app-id": "636e0d6642c1f665f684f489",
    },
  });
  const { changeTheme, isDark } = useContext(ColorModeContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await instance.get("/");
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  console.log(data);

  return (
    <div>
      {data.length !== 0 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: isDark ? "black" : "white",
          }}
        >
          <Header />
          <img
            src={data.image}
            style={{ width: "1000px", height: "500px", objectFit: "cover" }}
          />
          <Box sx={{ marginTop: "50px", width: "1100px" }}>
            <Typography sx={{ color: isDark ? "white" : "black" }}>
              {data.text}
            </Typography>
          </Box>
          <Box sx={{ margin: "50px", display: "flex" }}>
            <Avatar
              alt="Remy Sharp"
              src={data.owner.picture}
              sx={{ height: "50px", width: "50px" }}
            />
            <Box>
              <Typography sx={{ color: "GrayText", fontWeight: 100 }}>
                written by
              </Typography>
              <Typography sx={{ color: isDark ? "white" : "black" }}>
                {data.owner.firstName + " " + data.owner.lastName}
              </Typography>
            </Box>
          </Box>
          <div className="footer" style={{ width: "100%" }}>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
