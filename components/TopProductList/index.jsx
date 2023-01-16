import React from "react";
import ListItem from "../ListItem";

const TopProductList = ({ data }) => {
  return (
    <div>
      {data.map((prod) => (
        <ListItem key={prod.id} item={prod} avatar />
      ))}
    </div>
  );
};

export default TopProductList;
