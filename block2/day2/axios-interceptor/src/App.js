import { useState } from "react";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const getData = async () => {
    const instance = axios.create({
      baseURL: ` https://api.giphy.com/v1/gifs/search?api_key=GdQF2Y8WBlfFCARXtpK9pLpVGefoxPod&q=${inputValue}&limit=25&offset=0&rating=g&lang=en`,
    });
    const res = await instance.get("/");
    console.log(res);
    setData(res.data.data);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div>
        <input
          type={"text"}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          style={{
            height: 40, width: 500, margin: 30, color: "lime", backgroundColor: "black", border: 0, borderRadius: "10px", fontSize: "20px"
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && getData();
          }}
        />
        <button
          onClick={getData}
          style={{
            color: "black",
            backgroundColor: "lime",
            border: "none",
            borderRadius: "10px",
            height: 40,
            fontSize: "20px"
          }}
        >
          search
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto auto",
          justifyContent: "center",
        }}
      >
        {data.map((dataa, index) => {
          return (
            <>
              <img
                key={index}
                src={dataa.images.fixed_height.url}
                width="250px"
                height="250px"
                alt="gif"
                style={{ borderRadius: "15px", margin: 5, }}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;