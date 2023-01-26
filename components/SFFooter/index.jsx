import React from "react";

// comp
import { BodyText } from "..";
import { Divider } from "@mui/material";

// assets
import { COLORS } from "../../assets/colors";
import FacebookLight from "../../public/facebook-light.svg";
import InstagramLight from "../../public/instagram-light.svg";
import TwitterLight from "../../public/twitter-light.svg";

const SFFooter = () => {
  return (
    <div className="sf-footer-container">
      <div className="sf-footer-content-row">
        <div className="sf-footer-links">
          <BodyText type="mr" title="Return Policy" color={COLORS.white} />
          <BodyText type="mr" title="Contact Us" color={COLORS.white} />
          <BodyText type="mr" title="FAQ" color={COLORS.white} />
        </div>
        <div className="sf-footer-links">
          <FacebookLight />
          <InstagramLight />
          <TwitterLight />
        </div>
      </div>
      <Divider className="sf-divider-footer" />
      <BodyText
        type="sr"
        title="© 2023, Retail theme by Eduka"
        color={COLORS.white}
        style={{ marginTop: 20, textAlign: "center" }}
      />
    </div>
  );
};

export default SFFooter;
