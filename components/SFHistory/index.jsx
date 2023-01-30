import { Spacer } from "@nextui-org/react";
import React from "react";

// assets
import { COLORS } from "../../assets/colors";
import RightArrow from "../../public/right-arrow-sm.svg";
// comp
import BodyText from "../BodyText";

const SFHistory = ({ data }) => {
  return (
    <div>
      <div className="sf-checkout-row-history">
        {data.map((i) => (
          <div key={i.id} className="sf-checkout-row-history">
            <BodyText type="lr" title={i.title} color={COLORS.grayscale_900} />
            <RightArrow />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SFHistory;
