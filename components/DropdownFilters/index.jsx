import React from "react";
// comp
import BodyText from "../BodyText";

// assets
import { COLORS } from "../../assets/colors";
import {
  SET_FILTER,
  SET_FILTER_CATEGORY,
  SET_FILTER_ORDER,
  SET_FILTER_PRODUCT,
} from "../../constants";
import { handleClickFilters } from "../../functions";

const DropdownFilters = ({ data, dispatch, closeVisible }) => {
  return (
    <div className="dropdown-filter">
      {data.map((a) => (
        <div
          key={a.id}
          onClick={() => handleClickFilters(a, dispatch, closeVisible, data)}
        >
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
