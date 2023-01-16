import React from "react";

// comp
import ListItem from "../ListItem";

const TopCustomerList = ({ data }) => {
  return (
    <div>
      {data.map((customer) => (
        <ListItem key={customer.id} item={customer} />
      ))}
    </div>
  );
};

export default TopCustomerList;
