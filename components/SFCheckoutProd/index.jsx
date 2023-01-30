import { Spacer } from "@nextui-org/react";
import React from "react";

// assets
import { COLORS } from "../../assets/colors";

// comp
import BodyText from "../BodyText";

const SFCheckoutProd = ({
  prodImage,
  prodQty,
  prodTitle,
  prodColor,
  prodSize,
  prodPrice,
}) => {
  return (
    <>
      <div className="sf-checkout-prod">
        <div className="sf-checkout-prod-left">
          <div className="sf-checkout-prod-float">
            <img src={prodImage} alt="got" className="sf-checkout-prod-img" />
            <div className="sf-checkout-qty-item">{prodQty}</div>
          </div>
          <div>
            <BodyText
              type="mb"
              title={prodTitle}
              color={COLORS.grayscale_900}
            />
            <BodyText
              type="mr"
              title={`${prodColor} / ${prodSize}`}
              color="#6b6b6b"
            />
          </div>
        </div>
        <div>
          <BodyText
            type="mb"
            title={"FCFA " + prodPrice}
            color={COLORS.grayscale_900}
          />
        </div>
      </div>
      <Spacer />
    </>
  );
};

export default SFCheckoutProd;
