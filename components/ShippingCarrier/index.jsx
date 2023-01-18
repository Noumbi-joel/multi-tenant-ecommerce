import React from "react";

// assets
import SmDelivery from "../../public/sm-delivery.svg";
import SmTime from "../../public/sm-time.svg";
import { COLORS } from "../../assets/colors";

// comp
import { BodyText } from "..";
import { Spacer } from "@nextui-org/react";

const ShippingCarrier = ({ data }) => {
  return (
    <div>
      <BodyText
        type="lr"
        title="Shipping carrier"
        color={COLORS.grayscale_900}
      />
      <Spacer />
      <div className="linear-layout">
        <SmDelivery />
        <BodyText
          type="mr"
          title={data.courseType}
          color={COLORS.grayscale_900}
        />
      </div>
      <Spacer y={0.3} />
      <div className="linear-layout">
        <SmTime />
        <BodyText
          type="mr"
          title={data.fullfillment}
          color={COLORS.grayscale_900}
        />
      </div>
    </div>
  );
};

export default ShippingCarrier;
