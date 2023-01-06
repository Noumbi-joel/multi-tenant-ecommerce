import React, { useEffect, useState } from "react";

//comp
import { Dropdown, Row } from "@nextui-org/react";

import { COLORS } from "../../assets/colors";

import Logo from "../../public/eduka.svg";

const AppHeader = ({ bg }) => {
  const [selected, setSelected] = useState("EN");
  const [size, setSize] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 950) {
        return setSize(true);
      } else {
        if (size) {
          setSize(false);
        }
      }
    });
  }, [size]);

  const handleSelected = (e) => {
    setSelected(e.currentKey.toUpperCase());
  };
  return (
    <div
      className="app-header"
      style={{
        backgroundColor: bg ? bg : "transparent",
        borderBottom: size && `1px solid ${COLORS.grayscale_200}`,
      }}
    >
      <Row justify="space-between">
        <Logo />
        <Dropdown>
          <Dropdown.Button color={COLORS.grayscale_50}>
            {selected}
          </Dropdown.Button>
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
