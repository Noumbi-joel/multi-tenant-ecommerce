import React from "react";
import { useDispatch } from "react-redux";

// comp
import {
  DropdownFilters,
  DropdownLast,
  DropdownUserActionList,
  ItemEditList,
} from "..";

// assets
import { ACTIONS } from "../../helpers";
const Dropdown = ({
  filters,
  last,
  data,
  itemEdit,
  item,
  closeVisible,
  cat,
}) => {
  const dispatch = useDispatch();

  if (filters) {
    return (
      <DropdownFilters
        closeVisible={closeVisible}
        data={data}
        dispatch={dispatch}
      />
    );
  }

  if (last) {
    return (
      <DropdownLast
        closeVisible={closeVisible}
        data={data}
        dispatch={dispatch}
      />
    );
  }

  if (itemEdit) {
    return (
      <ItemEditList data={data} item={item} dispatch={dispatch} cat={cat} />
    );
  }

  return <DropdownUserActionList data={ACTIONS} dispatch={dispatch} />;
};

export default Dropdown;
