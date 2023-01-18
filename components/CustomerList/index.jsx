import React from "react";
import { ListItem } from "..";

const CustomerList = ({ data }) => {
  return (
    <div>
      {data.map((customer) => (
        <ListItem item={customer} key={customer.id} type="customerList" />
      ))}
    </div>
  );
};

export default CustomerList;
