import React, { useState } from "react";
import "../App.css";

export const Home = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <p className="pageone">
        <div className="explanation">
          <div className="title">Instant collabrations for remote teams</div>
          <div className="description">
            All in one for your remote team chats, collaboration and track
            projects
          </div>
          <div className="get-early-access">
            <input
              className="email"
              placeholder="Email"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <button
              className="early-access-button"
              onClick={() => {
                console.log(inputValue);
              }}
            >
              Get early access
            </button>
          </div>
        </div>
      </p>
      <div className="page-two pages">
        <div className="explanation-two">
          <div className="title-two">Your Hub for teamwork</div>
          <div className="description-two">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="learn-more"
          >
            Learn more
          </a>
        </div>
        <img src="pagetwo.png" alt="" className="page-two-image" />
      </div>
      <div className="page-three pages">
        <img src="pagethree.png" alt="" className="page-three-image" />
        <div className="explanation-three">
          <div className="title-two">Simple task management</div>
          <div className="description-two">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="learn-more"
          >
            Learn more
          </a>
        </div>
      </div>
      <div className="page-four pages">
        <div className="explanation-four">
          <div className="title-two">Scheduling that actually works</div>
          <div className="description-two">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="learn-more"
          >
            Learn more
          </a>
        </div>
        <img src="pagefour.png" alt="" className="page-four-image" />
      </div>
      <div className="page-five pages">
        <div className="comments">
          <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
          <div className="comment-text">
            Give everyone you work with—inside and outside your emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <div className="profile">
            <img
              src="profile-pictures/Amy.png"
              alt=""
              className="profile-picture"
            />
            <div className="profile-name">Amy Klassen</div>
          </div>
        </div>
        <div className="comments">
          <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
          <div className="comment-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
          <div className="profile">
            <img
              src="profile-pictures/Jane.png"
              alt=""
              className="profile-picture"
            />
            <div className="profile-name">Jane Cooper</div>
          </div>
        </div>
        <div className="comments">
          <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
          <div className="comment-text">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </div>
          <div className="profile">
            <img
              src="profile-pictures/Eleanor.png"
              alt=""
              className="profile-picture"
            />
            <div className="profile-name">Eleanor Pena</div>
          </div>
        </div>
      </div>
    </div>
  );
};
