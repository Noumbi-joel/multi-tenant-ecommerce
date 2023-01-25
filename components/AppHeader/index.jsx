import React, { useState } from "react";

//comp
import { Row } from "@nextui-org/react";
import { BodyText, Select } from "..";

// assets
import { COLORS } from "../../assets/colors";
import Logo from "../../public/eduka.svg";
import Store from "../../public/store.svg";

const AppHeader = ({ dashboard }) => {
  const [selected, setSelected] = useState("EN");
  return (
    <div className="app-header">
      <div className="app-header-content">
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
              <Logo />
              <Select lang setSelected={setSelected} />
            </>
          )}
        </Row>
      </div>
    </div>
  );
};

export default AppHeader;
