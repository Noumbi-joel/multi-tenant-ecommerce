import React, { useEffect } from "react";

// comp
import InputField from "../InputField";
import FilterBtn from "../FilterBtn";
import { useSelector } from "react-redux";
import {
  GET_CATEGORIES,
  GET_CUSTOMERS,
  GET_ORDERS,
  GET_PRODUCTS,
} from "../../constants";

// assets

const SearchFilter = ({ onChange, value, type, dispatch, searchType }) => {
  const { filter, sortBy, filterValue, sortByValue } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    if (type === "orders") {
      dispatch({ type: GET_ORDERS });
    }
    if (type === "products") {
      dispatch({ type: GET_PRODUCTS });
    }
    if (type === "categories") {
      dispatch({ type: GET_CATEGORIES });
    }
    if (type === "customers") {
      dispatch({ type: GET_CUSTOMERS });
    }
  }, []);

  return (
    <div className="linear-layout-flat" style={{ marginTop: 70 }}>
      <InputField
        type="text"
        name="products"
        placeholder={`Search ${searchType}`}
        onChange={onChange}
        value={value}
        ariaLabel="search-p"
        className="search-product"
      />
      {searchType === "customers" ? null : (
        <FilterBtn
          type="filter"
          title={"Show " + filterValue.toLowerCase()}
          data={filter}
        />
      )}
      <FilterBtn
        data={sortBy}
        title={
          "Sort by ".length + sortByValue.length > 20
            ? `Sort by ${sortByValue.substring(0, 10).toLowerCase()}...`
            : "Sort by " + sortByValue.toLowerCase()
        }
      />
    </div>
  );
};

export default SearchFilter;
