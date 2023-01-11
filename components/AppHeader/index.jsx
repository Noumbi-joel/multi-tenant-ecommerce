import React, { useState } from "react";

//comp
import { Row } from "@nextui-org/react";
import { BodyText, Select } from "..";

// assets
import { COLORS } from "../../assets/colors";
import Logo from "../../public/eduka.svg";
import Store from "../../public/store.svg";

const AppHeader = ({ bg, dashboard }) => {
  const [selected, setSelected] = useState("EN");
  return (
    <div
      className="app-header"
      style={{
        backgroundColor: bg ? bg : "transparent",
        borderBottom: `1px solid ${COLORS.grayscale_200}`,
      }}
    >
      <Row justify={dashboard ? "flex-end" : "space-between"}>
        {dashboard ? (
          <>
            <Store aria-label="store" />
            <BodyText
              type="mr"
              title="Visit store"
              color={COLORS.grayscale_900}
              style={{ marginLeft: 10 }}
            />
          </>
        ) : (
          <>
            <Logo aria-label="logo" />
            <Select lang setSelected={setSelected} />
          </>
        )}
      </Row>
    </div>
  );
};

export default AppHeader;
