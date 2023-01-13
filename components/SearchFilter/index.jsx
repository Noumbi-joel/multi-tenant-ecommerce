import React from "react";

// comp
import InputField from "../InputField";
import FilterBtn from "../FilterBtn";

// assets

const SearchFilter = ({ onChange, value, cat, filterTitle }) => {
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
      <FilterBtn cat={cat} type="filter" title={filterTitle} />
      <FilterBtn cat={cat} title="Sort by last updated" />
    </div>
  );
};

export default SearchFilter;
