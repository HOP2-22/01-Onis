import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Register() {
  const navigate = useNavigate();
  const [short, setShort] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckpassword] = useState("");

  const register = async () => {
    if (password !== checkpassword) {
      alert("Нууц үг алдаатай!");
      return;
    }
    try {
      const login = await axios.post(
        `https://onis-boginoo.onrender.com/auth/register`,
        {
          email: email,
          password: password,
        }
      );
      if (login) {
        Cookies.set("token", login.data.token);
        setShort(false);
        navigate("/login");
        document.location.reload();
      }
    } catch (error) {
      alert("do it properly bruh");
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
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "55px",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
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
        <div
          style={{
            fontSize: "32px",
            color: "#02B589",
            fontFamily: "Ubuntu",
            fontWeight: "700",
            marginTop: "65px",
            marginBottom: "40px",
          }}
        >
          Бүртгүүлэх
        </div>
        <div style={{ fontSize: "16px" }}>
          <div
            htmlFor="email"
            style={{
              fontFamily: "Ubuntu",
              fontWeight: "400",
              paddingLeft: "25px",
              marginBottom: "10px",
            }}
          >
            Цахим хаяг
          </div>
          <input
            type="email"
            name="email"
            placeholder="name@mail.domain"
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              height: "43px",
              width: "353px",
              borderRadius: "100px",
              paddingLeft: "25px",
              border: 0,
              boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.16)",
              marginBottom: "35px",
            }}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <div
            htmlFor="password"
            style={{
              fontFamily: "Ubuntu",
              fontWeight: "400",
              paddingLeft: "25px",
              marginBottom: "10px",
            }}
          >
            Нууц үг
          </div>
          <input
            type="password"
            name="password"
            placeholder="••••••••••"
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              height: "43px",
              width: "353px",
              borderRadius: "100px",
              paddingLeft: "25px",
              border: 0,
              boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.16)",
              marginBottom: "35px",
            }}
            className="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div
            style={{
              fontFamily: "Ubuntu",
              fontWeight: "400",
              paddingLeft: "25px",
              marginBottom: "10px",
            }}
          >
            Нууц үгээ давтна уу?
          </div>
          <input
            type="password"
            name="password"
            placeholder="••••••••••"
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              height: "43px",
              width: "353px",
              borderRadius: "100px",
              paddingLeft: "25px",
              border: 0,
              boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.16)",
              marginBottom: "35px",
            }}
            className="checkPassword"
            onChange={(event) => {
              setCheckpassword(event.target.value);
            }}
          />
          <button
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              backgroundColor: "#02B589",
              height: "45px",
              width: "380px",
              borderRadius: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              border: 0,
            }}
            id="login-button"
            onClick={() => {
              register();
            }}
          >
            БҮРТГҮҮЛЭХ
          </button>
        </div>
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

export default Register;
