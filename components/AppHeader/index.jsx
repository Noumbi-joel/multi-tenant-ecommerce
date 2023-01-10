import React, { useEffect, useState } from "react";

//comp
import { Row } from "@nextui-org/react";

import { COLORS } from "../../assets/colors";

import Logo from "../../public/eduka.svg";
import { Select } from "..";

const AppHeader = ({ bg }) => {
  const [selected, setSelected] = useState("EN");
  const [size, setSize] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     if (window.innerWidth <= 950) {
  //       return setSize(true);
  //     } else {
  //       if (size) {
  //         setSize(false);
  //       }
  //     }
  //   });
  // }, [size]);

  // const handleSelected = (e) => {
  //   setSelected(e.current.value);
  //   console.log(e.target.value)
  // };
  return (
    <div
      className="app-header"
      style={{
        backgroundColor: bg ? bg : "transparent",
        borderBottom: `1px solid ${COLORS.grayscale_200}`,
      }}
    >
      <Row justify="space-between">
        <Logo />
        <Select lang setSelected={setSelected} />
      </Row>
    </div>
  );
};

export default AppHeader;
