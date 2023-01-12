import React, { useState } from "react";

// assets
import Filter from "../../public/Filters.svg";
import Expand from "../../public/Expand.svg";
import { COLORS } from "../../assets/colors";

// comp
import { BodyText, Dropdown } from "..";
import { Button } from "@nextui-org/react";
import { FILTERS, UPDATES } from "../../helpers";

const FilterBtn = ({ title, type }) => {
  const [visible, setVisible] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <Button
        icon={
          type === "filter" ? (
            <Filter aria-label="filter" />
          ) : (
            <Expand aria-label="expand" />
          )
        }
        className="filters"
        onClick={
          type === "filter"
            ? () => setVisible(!visible)
            : () => setLastUpdate(!lastUpdate)
        }
      >
        <BodyText
          type="lr"
          title={title}
          color={COLORS.grayscale_900}
          style={{ marginLeft: 15 }}
        />
      </Button>
      {visible && <Dropdown filters data={FILTERS} />}
      {lastUpdate && <Dropdown last data={UPDATES} />}
    </div>
  );
};

export default FilterBtn;
