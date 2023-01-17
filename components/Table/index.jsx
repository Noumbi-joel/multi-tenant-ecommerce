import React from "react";

// comp
import { Checkbox, Divider } from "@nextui-org/react";
import BodyText from "../BodyText";
import { CategoryList, ProductList } from "..";

// assets
import { COLORS } from "../../assets/colors";
import {
  CLOSE_ALL_CHECKER,
  HANDLE_ITEMS_SELECTED,
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
  allCheckerCat,
  cat
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
    // dispatch({ type: HANDLE_ITEMS_SELECTED });
    // if (allChecker) {
    //   dispatch({ type: CLOSE_ALL_CHECKER });
    //   return;
    // }
    // dispatch({ type: OPEN_ALL_CHECKER });
  };

  return (
    <div>
      <div className="linear-layout-flat" style={{ marginTop: 50 }}>
        <Checkbox
          isSelected={allChecker ? allChecker : allCheckerCat}
          onChange={allChecker ? handleChange : handleChangeCat}
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
        />
        <BodyText
          type="mr"
          title={tableHeaderTwo}
          color={COLORS.grayscale_900}
        />
        <div />
      </div>
      <Divider className="divider-item" />

      {productList && <ProductList data={data} />}
      {cat && <CategoryList data={data} />}
    </div>
  );
};

export default Table;
