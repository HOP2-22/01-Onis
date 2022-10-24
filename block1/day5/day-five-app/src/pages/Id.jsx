import React from "react";
import { useParams } from "react-router-dom";
import users from "../users.json";
import { UserId } from "./UserId";

const IdSync = () => {
  const { userID } = useParams();

  return (
    <div>
      {users.map((el) => {
        return el.uid === userID && <UserId el={el} />;
      })}
    </div>
  );
};

export default IdSync;
