import React from "react";

// comp
import { BodyText } from "..";
import { Divider, Spacer } from "@nextui-org/react";

// assets
import { COLORS } from "../../assets/colors";

const SumCustomer = () => {
  return (
    <div>
      <BodyText type="lr" title="Sumary" color={COLORS.grayscale_900} />
      <Spacer y={0.3} />
      <Divider />
      <Spacer />
      <div className="linear-layout-flat">
        <BodyText type="sr" title="Total orders" color={COLORS.grayscale_900} />
        <BodyText type="sr" title="02" color={COLORS.grayscale_900} />
      </div>

      <Spacer />
      <div className="linear-layout-flat">
        <BodyText type="sr" title="Total spent" color={COLORS.grayscale_900} />
        <BodyText type="sr" title="FCFA1,000" color={COLORS.grayscale_900} />
      </div>
      <Spacer />
      <Spacer />
    </div>
  );
};

export default SumCustomer;
