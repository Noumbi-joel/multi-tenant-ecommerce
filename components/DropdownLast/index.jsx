import React from "react";
import { COLORS } from "../../assets/colors";
import BodyText from "../BodyText";

const DropdownLast = ({ data }) => {
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

export default DropdownLast;
