import React, { useLayoutEffect } from "react";

// comp
import InputField from "../InputField";
import FilterBtn from "../FilterBtn";
import { useSelector } from "react-redux";
import { GET_CATEGORIES, GET_ORDERS, GET_PRODUCTS } from "../../constants";

// assets

const SearchFilter = ({ onChange, value, type, dispatch }) => {
  const { filter, sortBy, filterValue, sortByValue } = useSelector(
    (state) => state.filter
  );

  useLayoutEffect(() => {
    if (type === "orders") {
      dispatch({ type: GET_ORDERS });
    }
    if (type === "products") {
      dispatch({ type: GET_PRODUCTS });
    }
    if (type === "categories") {
      dispatch({ type: GET_CATEGORIES });
    }
  }, []);

  return (
    <div className="linear-layout-flat" style={{ marginTop: 70 }}>
      <InputField
        type="text"
        name="products"
        placeholder="Search products"
        onChange={onChange}
        value={value}
        ariaLabel="search-p"
        className="search-product"
      />
      <FilterBtn
        type="filter"
        title={"Show " + filterValue.toLowerCase()}
        data={filter}
      />
      <FilterBtn data={sortBy} title={"Sort by " + sortByValue.toLowerCase()} />
    </div>
  );
};

export default SearchFilter;
