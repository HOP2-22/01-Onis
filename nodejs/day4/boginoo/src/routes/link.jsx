import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Link() {
  const params = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.post(
          `https://onis-boginoo.onrender.com/url/shorturl`,
          {
            shorturl: params.shortlink,
          }
        );
        window.location.href = res?.data.url[0].original;
      } catch (error) {
        alert("what the hell something is wrong");
      }
    };
    getData();
  }, [params]);
  return <div>redirecting...</div>;
}

export default Link;
