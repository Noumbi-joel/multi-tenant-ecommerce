import React from "react";

// assets
import { COLORS } from "../../assets/colors";
import {
  SET_SORT,
  SORT_CUSTOMER_BY_DESC,
  SORT_CUSTOMER_BY_ASC,
  SORT_CUSTOMER_BY_DATE,
  SORT_ORDER_BY_DATE,
  SORT_ORDER_BY_NUMBER,
  SORT_CATEGORY_BY_DATE,
  SORT_CATEGORY_BY_NAME,
  SORT_PRODUCT_BY_DATE,
  SORT_PRODUCT_BY_NAME,
  SORT_PRODUCT_BY_STOCK
} from "../../constants";

// comp
import { BodyText } from "..";

const DropdownLast = ({ data, dispatch, closeVisible }) => {
  const handleClick = (a) => {
    console.log(a.title);
    switch (a.title) {
      case "Last created (c)":
        dispatch({ type: SORT_CUSTOMER_BY_DATE });
        break;
      case "Ascending total spent (c)":
        dispatch({ type: SORT_CUSTOMER_BY_DESC });
        break;
      case "Descending total spent":
        dispatch({ type: SORT_CUSTOMER_BY_ASC });
        break;

      case "Last created (o)":
        dispatch({ type: SORT_ORDER_BY_DATE });
        break;
      case "Order number (o)":
        dispatch({ type: SORT_ORDER_BY_NUMBER });
        break;

      case "Last updated (ca)":
        dispatch({ type: SORT_CATEGORY_BY_DATE });
        break;
      case "Name (ca)":
        dispatch({ type: SORT_CATEGORY_BY_NAME });
        break;

      case "Last updated (p)":
        dispatch({ type: SORT_PRODUCT_BY_DATE });
        break;
      case "Name (p)":
        dispatch({ type: SORT_PRODUCT_BY_NAME });
        break;
      case "In stock":
        dispatch({ type: SORT_PRODUCT_BY_STOCK });
        break;
      default:
        break;
    }
    closeVisible();
    dispatch({ type: SET_SORT, payload: a.title });
  };

  return (
    <div className="dropdown-filter">
      {data.map((a, i) => (
        <div key={a.id} onClick={() => handleClick(a)}>
          <BodyText
            style={{ padding: 5 }}
            type="mr"
            title={
              i === 0 || i === 1
                ? a.title.substring(0, a.title.length - 4)
                : a.title
            }
            color={COLORS.grayscale_900}
            className="product-action"
          />
        </div>
      ))}
    </div>
  );
};

export default DropdownLast;
