import React, { useState, useEffect } from "react";
import "./styles/contacts.css";

export const Contacts = () => {
  const [milisecond, setMilisecond] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused === false) {
      const interval = setInterval(() => {
        setMilisecond(milisecond + 1);
        if (milisecond === 100) {
          setSecond(second + 1);
          setMilisecond(0);
        }
        if (second === 60) {
          setMinute(minute + 1);
          setSecond(0);
        }
      }, 10);
      return () => clearInterval(interval);
    }
  }, [second, minute, milisecond, paused]);

  return (
    <div className="contacts-container">
      <div id="timer">
        {minute}:{second}.{milisecond}
      </div>
      <div>
        <button
          onClick={() => {
            setPaused(true);
          }}
          className="stop"
        >
          stop
        </button>
        <button
          onClick={() => {
            setPaused(false);
          }}
          className="resume"
        >
          resume
        </button>
        <button
          onClick={() => {
            setPaused(true);
            setMinute(0);
            setSecond(0);
            setMilisecond(0);
          }}
          className="reset"
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default Contacts;
