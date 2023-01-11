import React from "react";
import { BodyText } from "..";
import { COLORS } from "../../assets/colors";
import Inspect from "../../public/inspect.svg";
import Cross from "../../public/cross.svg";

const HelperCenter = ({ closeHelper }) => {
  return (
    <div className="helper-center-container">
      <div className="hc-content">
        <Inspect aria-label="inspect" />
        <div style={{ marginLeft: 10 }}>
          <BodyText
            type="mr"
            title="Welcome to your Eduka!"
            color={COLORS.grayscale_900}
          />
          <BodyText
            type="mr"
            title="If you have any questions, email to support@myeduka.com, or chat with support team."
            color={COLORS.grayscale_900}
          />

          <BodyText
            type="mr"
            title="Contact Support"
            color={COLORS.primary_base}
          />
        </div>
      </div>
      <Cross aria-label="inspect" onClick={closeHelper} />
    </div>
  );
};

export default HelperCenter;
