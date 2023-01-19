import React from "react";

// comp
import { Spacer } from "@nextui-org/react";
import { Button, SubContentSettings, TipTap } from "..";
import { COLORS } from "../../assets/colors";

const Legal = () => {
  return (
    <div>
      <Spacer y={1.5} />
      <SubContentSettings
        subTitle="Legal"
        subDesc="Write down legal and policy information below and revise them whenever you want."
      />
      <Spacer />
      <div className="tiptap-container">
        <TipTap label="Refund policy" settings />
        <Spacer />
        <TipTap label="Privacy policy" settings />
        <Spacer />
        <TipTap label="Terms of services" settings />
        <Spacer />
        <TipTap label="Shipping policy" settings />
        <Spacer />
        <div className="alignRight">
          <Button
            titleType="lr"
            titleColor={COLORS.white}
            title="Save Changes"
            className="setting-submit-btn"
          />
        </div>
      </div>

      <Spacer y={2.5} />
    </div>
  );
};

export default Legal;
