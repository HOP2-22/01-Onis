import "../App.css";
import axios from "axios";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/context";

function Home() {
  const [original, setOriginal] = useState();
  const [shorturl, setShorturl] = useState();
  const [link, setLink] = useState();
  const [short, setShort] = useState(false);
  const { user, setUser } = useContext(Context);

  const createLink = async () => {
    try {
      const data = await axios.post(`http://localhost:7777/url`, {
        original: link,
      });
      console.log(data.data.data);
      setOriginal(data.data.data.original);
      setShorturl(data.data.data.shorturl);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          paddingTop: "60px",
          paddingRight: "60px",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            color: "#02B589",
            height: "45px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "40px",
          }}
        >
          ХЭРХЭН АЖИЛЛАДАГ ВЭ?
        </div>
        <Link
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            backgroundColor: "#02B589",
            height: "45px",
            width: "180px",
            borderRadius: "100px",
            display: user ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textDecoration: "none",
          }}
          to="/login"
        >
          НЭВТРЭХ
        </Link>
        <div
          style={{
            display: user ? "flex" : "none",
            fontFamily: "Ubuntu",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "20px",
            height: "45px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {user}
          <img
            src="icon-down.svg"
            alt=""
            style={{
              width: "15px",
              marginLeft: "10px",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "55px",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src="ring1.svg"
            style={{
              position: "absolute",
              transform: short
                ? "translate(-30px,-40px)"
                : "translate(-60px,-40px)",
            }}
          />
          <img
            src="line.svg"
            style={{
              position: "absolute",
              transform: short
                ? "translate(-10px,-24px)"
                : "translate(-40px,-24px)",
            }}
          />
          <img
            src="line.svg"
            style={{
              position: "absolute",
              transform: "translate(-10px,-24px)",
            }}
          />
          <img
            src="line.svg"
            style={{
              position: "absolute",
              transform: short
                ? "translate(-10px,-24px)"
                : "translate(20px,-24px)",
            }}
          />
          <img
            src="ring2.svg"
            style={{
              position: "absolute",
              transform: short
                ? "translate(7px,-40px)"
                : "translate(37px,-40px)",
            }}
          />
        </div>
        <div style={{ fontFamily: "'Lobster', cursive", color: "#02B589" }}>
          Boginoo
        </div>
        <div>
          <input
            style={{
              width: "580px",
              fontFamily: "'Ubuntu', sans-serif",
              height: "45px",
              borderRadius: "100px",
              paddingLeft: "25px",
              border: "1px solid #F0F0F0",
              boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.16)",
              fontSize: "20px",
            }}
            placeholder="https://www.web-huudas.mn"
            onChange={(event) => {
              setLink(event.target.value);
              setShort(false);
            }}
          />
          <button
            style={{
              width: "200px",
              height: "45px",
              borderRadius: "100px",
              marginLeft: "15px",
              backgroundColor: "#02B589",
              border: 0,
              fontSize: "20px",
              fontFamily: "'Ubuntu', sans-serif",
              fontWeight: 700,
              color: "white",
            }}
            onClick={() => {
              if (user) {
                createLink();
                setShort(true);
              } else {
                alert("you stupid, sign in brooo");
              }
              document.querySelector("input").value = "";
            }}
          >
            БОГИНОСОX
          </button>
        </div>
      </div>
      <div
        style={{
          display: short ? "block" : "none",
          marginLeft: "350px",
        }}
      >
        <div style={{ color: "GrayText", fontSize: "15px" }}>
          Өгөгдсөн холбоос:
        </div>
        <div style={{ fontSize: "20px" }}>{original}</div>
        <div style={{ color: "GrayText", fontSize: "15px", marginTop: "50px" }}>
          Богино холбоос:
        </div>
        <div style={{ fontSize: "20px" }}>http://localhost:3001/{shorturl}</div>
      </div>
      <div
        style={{
          marginBottom: "40px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 400 }}>
          Made with ♥️ by Nest Academy
        </div>
        <div style={{ color: "grey" }}>©boginoo.io 2020</div>
      </div>
    </div>
  );
}

export default Home;
