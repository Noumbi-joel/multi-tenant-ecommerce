import React from "react";

// comp
import { Checkbox, Divider, Spacer } from "@nextui-org/react";
import BodyText from "../BodyText";
import { CategoryList, CustomerList, ListOrders, ProductList } from "..";

// assets
import { COLORS } from "../../assets/colors";
import {
  CLOSE_ALL_CAT_CHECKER,
  CLOSE_ALL_CHECKER,
  HANDLE_ITEMS_CAT_SELECTED,
  HANDLE_ITEMS_SELECTED,
  OPEN_ALL_CAT_CHECKER,
  OPEN_ALL_CHECKER,
} from "../../constants";

const Table = ({
  tableHeaderTitle,
  tableHeaderOne,
  tableHeaderTwo,
  productList,
  data,
  dispatch,
  allChecker,
  cat,
}) => {
  const handleChange = () => {
    dispatch({ type: HANDLE_ITEMS_SELECTED });
    if (allChecker) {
      dispatch({ type: CLOSE_ALL_CHECKER });
      return;
    }
    dispatch({ type: OPEN_ALL_CHECKER });
  };

  const handleChangeCat = () => {
    dispatch({ type: HANDLE_ITEMS_CAT_SELECTED });
    if (allChecker) {
      dispatch({ type: CLOSE_ALL_CAT_CHECKER });
      return;
    }
    dispatch({ type: OPEN_ALL_CAT_CHECKER });
  };

  return (
    <div>
      <div className="linear-layout-flat" style={{ marginTop: 50 }}>
        <Checkbox
          isSelected={allChecker}
          onChange={cat ? handleChangeCat : handleChange}
          className="itemList-cat"
        >
          <BodyText
            type="mr"
            title={tableHeaderTitle}
            color={COLORS.grayscale_900}
          />
        </Checkbox>
        <BodyText
          type="mr"
          title={tableHeaderOne}
          color={COLORS.grayscale_900}
          className="itemList-cat"
        />
        <BodyText
          type="mr"
          title={tableHeaderTwo}
          color={COLORS.grayscale_900}
          className="itemList-cat"
        />
      </div>
      <Divider className="divider-item" />
      {productList && <ProductList data={data} />}
      {cat && <CategoryList data={data} />}
      <Spacer y={2.5} />
    </div>
  );
};

export default Table;
