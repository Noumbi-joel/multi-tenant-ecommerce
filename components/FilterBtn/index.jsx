import React, { useState } from "react";

// assets
import Filter from "../../public/Filters.svg";
import Expand from "../../public/Expand.svg";
import { COLORS } from "../../assets/colors";

// comp
import { BodyText, Dropdown } from "..";
import { Button } from "@nextui-org/react";

const FilterBtn = ({ title, type }) => {
  const [visible, setVisible] = useState(true);
  return (
    <>
    <Button
      icon={
        type === "filter" ? (
          <Filter aria-label="filter" />
        ) : (
          <Expand aria-label="expand" />
        )
      }
      className="filters"
    >
      <BodyText
        type="lr"
        title={title}
        color={COLORS.grayscale_900}
        style={{ marginLeft: 15 }}
      />
    </Button>
    </>
  );
};

export default FilterBtn;
