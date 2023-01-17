import React from "react";

// comp
import InputField from "../InputField";
import FilterBtn from "../FilterBtn";
import { useSelector } from "react-redux";

// assets

const SearchFilter = ({ onChange, value, cat }) => {
  const { filter, sortBy } = useSelector((state) => state.filter);
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
      <FilterBtn cat={cat} type="filter" title={"Show " + filter} />
      <FilterBtn cat={cat} title={"Sort by " + sortBy} />
    </div>
  );
};

export default SearchFilter;
