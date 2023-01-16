import React from "react";
// comp
import BodyText from "../BodyText";

// assets
import { COLORS } from "../../assets/colors";

const DropdownFilters = ({ data }) => {
  return (
    <div className="dropdown-filter">
      {data.map((a) => (
        <BodyText
          style={{ padding: 5 }}
          type="mr"
          title={a.title}
          color={COLORS.grayscale_900}
          className="product-action"
        />
      ))}
    </div>
  );
};

export default DropdownFilters;
