import React from "react";

// comp
import BodyText from "../BodyText";

// assets
import DotVertical from "../../public/dots-vertical.svg";
import Check from "../../public/check.svg";
import ManualPayment from "../../public/manual-payment.svg";
import SmStripe from "../../public/sm-stripe.svg";
import { COLORS } from "../../assets/colors";
import { Spacer } from "@nextui-org/react";

const PaymentCard = ({ manualPay }) => {
  return (
    <div>
      <Spacer />

      <div className="card-payment-container">
        <div className="linear-layout-flat">
          {manualPay ? <ManualPayment /> : <SmStripe />}
          <DotVertical />
        </div>
        <Spacer />
        <div>
          <BodyText
            type="mr"
            color={COLORS.grayscale_900}
            title="Stripe provides payments infrastructure for the internet. This plugin intergrates Stripe as payment gateway to the Uvodo."
          />
        </div>
        <Spacer />

        <div className="linear-layout-flat">
          <div className="status-container">
            <BodyText type="sr" color={COLORS.grayscale_900} title="Active" />
          </div>
          {manualPay ? (
            <div />
          ) : (
            <div className="check-container">
              <Check />
            </div>
          )}
        </div>
      </div>
      <Spacer />
    </div>
  );
};

export default PaymentCard;
