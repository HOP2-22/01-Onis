import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Link() {
  const params = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.post(`http://localhost:7777/url/shorturl`, {
          shorturl: params.shortlink,
        });
        window.location.href = res?.data.url[0].original;
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [params]);
  return <div>redirecting stupid</div>;
}

export default Link;
