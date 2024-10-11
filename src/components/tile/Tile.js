import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.values(description).map((item) => { /* object.values() takes in an object and returns the values as an array, in this code we then iterate over them with .map */
        return (
          <p>{item}</p>
        )
      })}
    </div>
  );
};