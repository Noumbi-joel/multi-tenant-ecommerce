import React from "react";
import { COLORS } from "../../assets/colors";
import { SET_SORT } from "../../constants";
import BodyText from "../BodyText";

const DropdownLast = ({ data, dispatch }) => {
  const handleClick = (a) => {
    dispatch({ type: SET_SORT, payload: a.title });
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

export default DropdownLast;
