import React, { useState } from "react";

export const ListItem = ({ el, ind, deleteToDo, saveToDo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState("");
  return (
    <div
      key={ind}
      style={{
        border: 1,
        margin: "10px",
      }}
    >
      {isEditing ? (
        <input value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <div>{el.owner}</div>
      )}
      #{el.tag}
      <button
        onClick={() => deleteToDo(el._id)}
        style={{
          border: 0,
          borderRadius: 5,
          backgroundColor: "red",
          color: "white",
          marginLeft: 20,
          height: "25px",
        }}
      >
        X
      </button>
      <button
        style={{
          border: 0,
          borderRadius: 5,
          backgroundColor: "gray",
          marginLeft: 20,
          height: "25px",
        }}
        onClick={() => {
          if (isEditing) {
            saveToDo(el._id, {
              ...el,
              owner: newText,
            });
            setIsEditing(false);
          } else {
            setIsEditing(true);
            setNewText(el.owner);
          }
        }}
      >
        {isEditing ? "SAVE" : "EDIT"}
      </button>
      <hr />
    </div>
  );
};
