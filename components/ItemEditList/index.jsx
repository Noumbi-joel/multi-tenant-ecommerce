import React from "react";

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import BodyText from "../BodyText";
import { COLORS } from "../../assets/colors";
import {
  HANDLE_DROPDOWN_CAT_ITEM,
  HANDLE_MODAL_VISIBLE,
  HANDLE_VISIBLE,
  OPEN_SINGLE_MODAL,
  OPEN_SINGLE_MODAL_CAT,
  SET_CAT_NAME,
  SET_ID,
  SET_ID_CAT,
  SET_ITEM_NAME,
} from "../../constants";

const ItemEditList = ({ data, item, cat }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = (a) => {
    if (a.id === 1) {
      return router.push("/_sites/dashboard/products/create");
    }
    if (a.id === 2) {
      dispatch({ type: HANDLE_MODAL_VISIBLE, payload: item.id });
      dispatch({ type: HANDLE_VISIBLE, payload: item.id });
    }
    if (a.id === 3) {
      dispatch({ type: SET_ITEM_NAME, payload: item.title });
      dispatch({ type: SET_ID, payload: item.id });
      dispatch({ type: OPEN_SINGLE_MODAL });
      dispatch({ type: HANDLE_MODAL_VISIBLE, payload: item.id });
    }
  };

  const handleClickCat = (a) => {
    if (a.id === 1) {
      return router.push("/_sites/dashboard/categories/create");
    }

    if (a.id === 2) {
      dispatch({ type: SET_CAT_NAME, payload: item.title });
      dispatch({ type: SET_ID_CAT, payload: item.id });
      dispatch({ type:  OPEN_SINGLE_MODAL_CAT});
      dispatch({ type: HANDLE_DROPDOWN_CAT_ITEM, payload: item.id });
    }
  };
  return (
    <div className="item-edit">
      {data.map((a) => (
        <div
          key={a.id}
          className="item-edit-content"
          onClick={cat ? () => handleClickCat(a) : () => handleClick(a)}
        >
          <div style={{ marginRight: 6 }}>{a.icon}</div>
          <BodyText type="mr" title={a.title} color={COLORS.grayscale_900} />
        </div>
      ))}
    </div>
  );
};

export default ItemEditList;
