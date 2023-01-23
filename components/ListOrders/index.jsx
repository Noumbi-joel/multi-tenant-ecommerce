import React from "react";
import { ListItem } from "..";

const ListOrders = ({ data }) => {
  return (
    <div>
      {data.map((order) => (
        <ListItem key={order.id} type="orderList" item={order} />
      ))}
    </div>
  );
};

export default ListOrders;
