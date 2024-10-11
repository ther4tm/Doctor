import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = (props) => {
  const {tiles} = props;

  return (
    <div>
      {tiles.map((item, index) => {
        const { name, ...description } = item; //This refactors the object being mapped over. The item placeholder is refactored now to be an object with a key called name containing name and then another key called description that contains the rest of the object key value pairs
        return (
          <Tile
          name={name}
          description={description}
          key={index}
          />
        );
      })}
    </div>
  );
};

/* the ... operator in this use bundles up the rest of the object into a nest object */