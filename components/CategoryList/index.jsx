import React from "react";

// cat
import { ListItem } from "..";

const CategoryList = ({ data }) => {
  return (
    <div>
      {data.map((cat) => (
        <ListItem key={cat.id} type="catList" item={cat} />
      ))}
    </div>
  );
};

export default CategoryList;
