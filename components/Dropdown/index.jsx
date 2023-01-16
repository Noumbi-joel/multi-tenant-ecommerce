import React from "react";

// comp
import { DropdownFilters, DropdownLast, DropdownUserActionList, ItemEditList } from "..";

// assets
import { ACTIONS } from "../../helpers";
const Dropdown = ({ filters, last, data, itemEdit, item }) => {

  if (filters) {
    return <DropdownFilters data={data} />
  }

  if (last) {
    return <DropdownLast data={data} />
  }

  if (itemEdit) {
    return <ItemEditList data={data} item={item} />
  }

  return <DropdownUserActionList data={ACTIONS} />
};

export default Dropdown;
