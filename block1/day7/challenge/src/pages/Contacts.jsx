import React, { useState, useEffect } from "react";

export const Contacts = () => {
  const [count, setCount] = useState(0);
  let num = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      num = num + 1;
      console.log(num);
    }, 100);

    return () => clearInterval(interval);
  }, []);
};

export default Contacts;
