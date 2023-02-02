import { Checkbox, Spacer } from "@nextui-org/react";
import React from "react";
import { COLORS } from "../../assets/colors";
import BodyText from "../BodyText";
import HeadingText from "../HeadingText";
import InputField from "../InputField";

const SFPaymentMethods = ({ accept, type, number, onChange }) => {
  return (
    <div>
      <Spacer />
      <HeadingText type="h6" title="Payment method" color="#333333" />
      <Spacer />
      <div className="sf-checkout-deliveries">
        <Checkbox isSelected={accept} name="accept" onChange={onChange}>
          <BodyText type="mr" title="Mobile money" color="#535353" />
        </Checkbox>
        <div>
          <img src="/om.svg" alt="om" style={{ marginRight: 5 }} />
          <img src="/momo.svg" alt="om" />
        </div>
      </div>
      <div className="sf-checkout-payments">
        <InputField
          ariaLabel="select"
          name="native-select"
          type="text"
          className="sf-checkout-input"
          value={type}
          onChange={onChange}
          data={[
            { id: 0, title: "Orange money" },
            { id: 1, title: "Mobile money" },
          ]}
        />
        <InputField
          ariaLabel="paymentPhone"
          name="number"
          type="text"
          value={number}
          onChange={onChange}
          className="sf-checkout-input"
          placeholder="Mobile money number"
        />
      </div>
    </div>
  );
};

export default SFPaymentMethods;
