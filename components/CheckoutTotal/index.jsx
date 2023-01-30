import React from "react";

// assets
import { COLORS } from "../../assets/colors";

// comp
import BodyText from "../BodyText";
import HeadingText from "../HeadingText";

const CheckoutTotal = ({ totalPrice, totalType, remove }) => {
  if (totalType === "Total") {
    return (
      <div>
        <div className="sf-checkout-prod">
          {remove ? null : (
            <BodyText
              type="xlb"
              title={totalType}
              color={COLORS.grayscale_900}
            />
          )}
          <div className="sf-checkout-prod">
            {remove ? null : (
              <BodyText type="mr" title="FCFA" color="#6b6b6b" />
            )}
            <HeadingText
              type="h3"
              title={remove ? "FCFA" + totalPrice : totalPrice}
              color={COLORS.grayscale_900}
              style={{ marginLeft: 12 }}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="sf-checkout-prod">
        <BodyText type="lr" title={totalType} color="#4a4a4a" />
        <BodyText type="mb" title={totalPrice} color={COLORS.grayscale_900} />
      </div>
    </div>
  );
};

export default CheckoutTotal;
