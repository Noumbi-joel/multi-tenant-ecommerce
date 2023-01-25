import React, { useState } from "react";

// assets
import Filter from "../../public/Filters.svg";
import Expand from "../../public/Expand.svg";
import { COLORS } from "../../assets/colors";

// comp
import { BodyText, Button, Dropdown } from "..";

const FilterBtn = ({ type, data, title }) => {
  const [visible, setVisible] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(false);
  return (
    <div className="filterBtnContainer">
      <Button
        titleType="lr"
        title={title}
        className="filters"
        btnTextClassName="btnText-filters"
        titleColor={COLORS.grayscale_900}
        onClick={
          type === "filter"
            ? () => setVisible(!visible)
            : () => setLastUpdate(!lastUpdate)
        }
      >
        {type === "filter" ? (
          <Filter aria-label="filter" />
        ) : (
          <Expand aria-label="expand" />
        )}
      </Button>
      {visible && (
        <Dropdown filters data={data} closeVisible={() => setVisible(false)} />
      )}
      {lastUpdate && (
        <Dropdown last data={data} closeVisible={() => setLastUpdate(false)} />
      )}
    </div>
  );
};

export default FilterBtn;
