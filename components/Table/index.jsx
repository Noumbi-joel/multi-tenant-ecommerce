import React from "react";

// comp
import { Checkbox, Divider } from "@nextui-org/react";
import BodyText from "../BodyText";
import { CategoryList, ListOrders, ProductList } from "..";

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
  cat,
  type,
  checkboxTitle,
  dataHeaders,
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

  if (type === "orders") {
    return (
      <div>
        <Checkbox
          style={{ marginTop: 50, marginBottom: 20 }}
          isSelected={false}
          onChange={() => {}}
        >
          <BodyText
            type="mr"
            title={checkboxTitle}
            color={COLORS.grayscale_900}
          />
        </Checkbox>
        <div className="linear-layout-flat">
          {dataHeaders.map((h) => (
            <BodyText
              key={h.id}
              type="mr"
              title={h.title}
              color={COLORS.grayscale_900}
            />
          ))}
        </div>
        <Divider className="divider-item" />
        <ListOrders data={data} />
      </div>
    );
  }

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
