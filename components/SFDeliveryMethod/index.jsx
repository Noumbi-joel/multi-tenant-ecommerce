import { Checkbox, Spacer } from "@nextui-org/react";
import React from "react";
import { COLORS } from "../../assets/colors";
import BodyText from "../BodyText";
import HeadingText from "../HeadingText";

const SFDeliveryMethod = ({ pay, free, onChange }) => {
  return (
    <div>
      <Spacer />
      <HeadingText type="h6" title="Delivery method" color="#333333" />
      <Spacer />
      <div className="sf-checkout-deliveries">
        <Checkbox isSelected={pay} name="pay" onChange={onChange}>
          <BodyText
            type="mr"
            title="Standard delivery (same day)"
            color="#535353"
          />
        </Checkbox>
        <div>
          <BodyText type="mm" title="XAF1,500" color={COLORS.grayscale_900} />
        </div>
      </div>
      <div className="sf-checkout-deliveries">
        <Checkbox isSelected={free} name="free" onChange={onChange}>
          <BodyText type="mr" title="Self pickup" color="#535353" />
        </Checkbox>
        <div>
          <BodyText type="mm" title="Free" color={COLORS.grayscale_900} />
        </div>
      </div>
    </div>
  );
};

export default SFDeliveryMethod;
