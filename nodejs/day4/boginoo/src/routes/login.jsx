import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Login() {
  const navigate = useNavigate();
  const [short, setShort] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signin = async () => {
    try {
      const login = await axios.post(
        `https://onis-boginoo.onrender.com/auth/login`,
        {
          email: email,
          password: password,
        }
      );
      console.log(login);
      if (login) {
        setShort(false);
        Cookies.set("token", login.data.token);
        navigate("/");
        document.location.reload();
      }
    } catch (error) {
      alert("something is wrong bro");
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
          Нэвтрэх
        </div>
        <div style={{ fontSize: "16px" }}>
          <div
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
            onChange={(event) => {
              setEmail(event.target.value);
            }}
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
          />
          <div
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
            onChange={(event) => {
              setPassword(event.target.value);
            }}
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
              marginBottom: "25px",
            }}
          />
          <div
            style={{
              width: "380px",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "40px",
            }}
          >
            <div style={{ display: "flex" }}>
              <input type="checkbox" style={{ outline: "#02B589" }} />
              <div style={{ color: "#02B589" }}>Намайг сана</div>
            </div>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              style={{ color: "black" }}
            >
              Нууц үгээ мартсан
            </a>
          </div>
          <button
            onClick={() => {
              signin();
            }}
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
          >
            НЭВТРЭХ
          </button>
        </div>
        <Link
          style={{ color: "#02B589", fontSize: "16px", marginTop: "25px" }}
          to="/signin"
        >
          Шинэ хэрэглэгч бол энд дарна уу?
        </Link>
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

export default Login;
