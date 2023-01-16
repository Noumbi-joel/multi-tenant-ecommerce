import React from "react";

// comp
import ListItem from "../ListItem";

const ProductList = ({ data }) => {
  return (
    <div>
      {data.map((product, i) => (
        <ListItem
          key={product.id}
          type="itemList"
          item={product}
          draft={i === 2 && true}
        />
      ))}
    </div>
  );
};

export default ProductList;
