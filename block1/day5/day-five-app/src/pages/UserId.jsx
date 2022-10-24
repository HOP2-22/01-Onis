import React from "react";

export const UserId = ({ el }) => {
  return (
    <div className="nani">
      <div className="nyeh">
        <div className="wth">
          <img src={el.avatar} className="pfp"></img>
          <div className="brr">
            {el.first_name} {el.last_name}
          </div>
        </div>
        <hr />
        <div className="girno">Birth Date: {el.date_of_birth}</div>
        <div className="girno">Email: {el.email}</div>
        <div className="girno">Gender: {el.gender}</div>
        <div className="girno">Country: {el.address.country}</div>
        <div className="girno">City: {el.address.city}</div>
      </div>
    </div>
  );
};
