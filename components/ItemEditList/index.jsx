import React from "react";

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import BodyText from "../BodyText";
import { COLORS } from "../../assets/colors";

const ItemEditList = ({ data, item }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = (a) => {
    if (a.id === 1) {
      return router.push("/dashboard/products/create");
    }
    if (a.id === 3) {
      dispatch({ type: "setItemName", payload: item.title });
      dispatch({ type: "setId", payload: item.id });
      dispatch({ type: "openSingleModal" });
    }
  };
  return (
    <div className="item-edit">
      {data.map((a) => (
        <div
          key={a.id}
          className="item-edit-content"
          onClick={() => handleClick(a)}
        >
          <div style={{ marginRight: 6 }}>{a.icon}</div>
          <BodyText type="mr" title={a.title} color={COLORS.grayscale_900} />
        </div>
      ))}
    </div>
  );
};

export default ItemEditList;
