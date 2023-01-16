import React from "react";

// comp
import { ListItem } from "..";

const ProductList = ({ data }) => {
  return (
    <div>
      {data.map((product) => (
        <ListItem
          key={product.id}
          type="itemList"
          item={product}
        />
      ))}
    </div>
  );
};

export default ProductList;
