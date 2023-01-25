import React from "react";

// comp
import { BodyText, HeadingText } from "..";

// assets
import { COLORS } from "../../assets/colors";
import Inspect from "../../public/inspect.svg";
import Cross from "../../public/cross.svg";
import Community from "../../public/community.svg";
import WhatsApp from "../../public/whatsapp.svg";

const HelperCenter = ({ closeHelper, community }) => {
  if (community) {
    return (
      <>
        <div
          className="helper-center-container"
          style={{
            marginTop: 25,
            backgroundColor: COLORS.grayscale_200,
            overflow: "hidden",
          }}
        >
          <div className="helper-center-row">
            <div className="bg-white">
              <WhatsApp aria-label="whatsapp" />
            </div>
            <div>
              <HeadingText
                type="h5"
                title="Join our Whatsapp community"
                color={COLORS.grayscale_900}
              />
              <BodyText
                type="mr"
                title="Meet other professionals. Talk about product."
                color={COLORS.grayscale_900}
              />
            </div>
          </div>
          <div className="hc-content">
            <Community aria-label="com" />
          </div>
        </div>
        <div className="height"></div>
      </>
    );
  }

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
