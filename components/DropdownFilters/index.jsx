import React from "react";
// comp
import BodyText from "../BodyText";

// assets
import { COLORS } from "../../assets/colors";
import { SET_FILTER } from "../../constants";

const DropdownFilters = ({ data, dispatch, closeVisible }) => {
  const handleClick = (a) => {
    closeVisible();
    dispatch({ type: SET_FILTER, payload: a.title });
  };

  return (
    <div className="dropdown-filter">
      {data.map((a) => (
        <div key={a.id} onClick={() => handleClick(a)}>
          <BodyText
            style={{ padding: 5 }}
            type="mr"
            title={a.title}
            color={COLORS.grayscale_900}
            className="product-action"
          />
        </div>
      ))}
    </div>
  );
};

export default DropdownFilters;
