import React from "react";

// comp
import { Spacer } from "@nextui-org/react";
import { SubContentSettings, TipTap } from "..";

const Legal = () => {
  return (
    <div>
      <Spacer y={1.5} />
      <SubContentSettings
        subTitle="Legal"
        subDesc="Write down legal and policy information below and revise them whenever you want."
      />
      <Spacer />
      <TipTap label="Refund policy" settings />
      <Spacer />
      <TipTap label="Privacy policy" settings />
      <Spacer />
      <TipTap label="Terms of services" settings />
      <Spacer />
      <TipTap label="Shipping policy" settings />
      <Spacer y={2.5} />
    </div>
  );
};

export default Legal;
