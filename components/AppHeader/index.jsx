import React, { useState } from "react";

//comp
import { Dropdown, Row } from "@nextui-org/react";

import { COLORS } from "../../assets/colors";

import Logo from "../../public/eduka.svg";

const AppHeader = () => {
  const [selected, setSelected] = useState("EN");

  const handleSelected = (e) => {
    setSelected(e.currentKey.toUpperCase());
  };
  return (
    <div className="app-header">
      <Row justify="space-between">
        <Logo />
        <Dropdown>
          <Dropdown.Button color={COLORS.grayscale_50}>{selected}</Dropdown.Button>
          <Dropdown.Menu
            aria-label="Static Actions"
            disallowEmptySelection
            selectionMode="single"
            onSelectionChange={handleSelected}
          >
            <Dropdown.Item key="en">EN</Dropdown.Item>
            <Dropdown.Item key="fr">FR</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Row>
    </div>
  );
};

export default AppHeader;
