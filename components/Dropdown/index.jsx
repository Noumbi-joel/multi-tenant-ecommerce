import React from "react";
import { useDispatch } from "react-redux";

// comp
import { DropdownFilters, DropdownLast, DropdownUserActionList, ItemEditList } from "..";

// assets
import { ACTIONS } from "../../helpers";
const Dropdown = ({ filters, last, data, itemEdit, item }) => {

  const dispatch = useDispatch();

  if (filters) {
    return <DropdownFilters data={data} dispatch={dispatch} />
  }

  if (last) {
    return <DropdownLast data={data} dispatch={dispatch} />
  }

  if (itemEdit) {
    return <ItemEditList data={data} item={item} dispatch={dispatch} />
  }

  return <DropdownUserActionList data={ACTIONS} dispatch={dispatch} />
};

export default Dropdown;
