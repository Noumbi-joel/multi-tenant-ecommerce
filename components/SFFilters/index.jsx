import React from "react";

// comp
import { BodyText, Select } from "..";
import { SF_CATEGORIES, SF_COLOR, SF_PRICE, SF_SORT } from "../../helpers";

const SFFilters = () => {
  return (
    <div className="sf-filters">
      <BodyText type="mr" title="Filter: " color="#121212" />
      <Select
        type="sf-select"
        data={SF_CATEGORIES}
        className="sf-select"
      />
      <Select
        type="sf-select"
        data={SF_PRICE}
        className="sf-select"
      />
      <Select
        type="sf-select"
        data={SF_COLOR}
        className="sf-select"
      />
      <Select
        type="sf-select"
        data={SF_SORT}
        className="sf-select"
      />
      <BodyText type="mr" title="Reset" color="#121212" />
    </div>
  );
};

export default SFFilters;
