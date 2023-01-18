import { Divider } from "@nextui-org/react";
import React from "react";
import { COLORS } from "../../assets/colors";
import BodyText from "../BodyText";

const OrderDetailUpPaid = () => {
  return (
    <div>
      <div className="orderLContent">
        <div className="linear-layout-flat">
          <div className="linear-layout">
            <img
              src="/got.jpg"
              alt="got"
              style={{ width: 48, height: 48, objectFit: "cover" }}
            />
            <BodyText
              type="mr"
              color={COLORS.grayscale_900}
              title="In The Shade Set"
              style={{ marginLeft: 16 }}
            />
          </div>
          <BodyText
            type="mr"
            color={COLORS.grayscale_900}
            title="FCFA 54,000 x 1"
            style={{ marginLeft: 16 }}
          />
          <BodyText
            type="mr"
            color={COLORS.grayscale_900}
            title="FCFA 54,000"
            style={{ marginLeft: 16 }}
          />
        </div>
      </div>
      <BodyText type="lr" title="Paid" color={COLORS.grayscale_900} />
      <Divider />
    </div>
  );
};

export default OrderDetailUpPaid;
