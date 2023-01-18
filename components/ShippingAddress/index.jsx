import React from "react";

// assets
import { COLORS } from "../../assets/colors";
import SmLocation from "../../public/sm-location.svg";

// comp
import { BodyText } from "..";
import { Spacer } from "@nextui-org/react";

const ShippingAddress = ({ data }) => {
  return (
    <div>
      <BodyText
        type="lr"
        title="Shipping address"
        color={COLORS.grayscale_900}
      />
      <Spacer />

      <div className="linear-layout" style={{ alignItems: "flex-start" }}>
        <SmLocation />
        <BodyText
          type="mr"
          title={data.location}
          color={COLORS.grayscale_900}
        />
      </div>
      <Spacer />
    </div>
  );
};

export default ShippingAddress;
