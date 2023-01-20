import React, { useState } from "react";

// assets
import Filter from "../../public/Filters.svg";
import Expand from "../../public/Expand.svg";
import { COLORS } from "../../assets/colors";

// comp
import { BodyText, Dropdown } from "..";
import { Button } from "@nextui-org/react";

const FilterBtn = ({ type, data, title }) => {
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
        onPress={
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
      {visible && (
        <Dropdown filters data={data} closeVisible={() => setVisible(false)} />
      )}
      {lastUpdate && <Dropdown last data={data} closeVisible={() => setLastUpdate(false)} />}
    </div>
  );
};

export default FilterBtn;
