import React, { useState } from "react";

// assets
import { COLORS } from "../../assets/colors";
import North from "../../public/North.svg";
import Facebook from "../../public/Facebook.svg";
import Instagram from "../../public/Instagram.svg";
import Twitter from "../../public/Twitter.svg";
import ShoppingBag from "../../public/ShoppingBag.svg";
import Bars from "../../public/Bars.svg";

// comp
import BodyText from "../BodyText";
import { OPEN_DRAWER } from "../../constants";

const SFHeader = ({ dispatch }) => {
  return (
    <div className="sf-header">
      <Bars className="bars" onClick={() => dispatch({ type: OPEN_DRAWER })} />
      <div className="sf-header-links">
        <BodyText
          type="lm"
          title="Shop"
          color={COLORS.grayscale_900}
          onClick={() => {}}
        />
        <BodyText
          type="lm"
          title="About"
          color={COLORS.grayscale_900}
          onClick={() => {}}
        />
        <BodyText
          type="lm"
          title="Contact"
          color={COLORS.grayscale_900}
          onClick={() => {}}
        />
      </div>
      <North />

      <div className="sf-socials-links">
        <Facebook className="sf-facebook" />
        <Instagram className="sf-instagram" />
        <Twitter className="sf-twitter" />
        <div className="shopping-bag">
          <ShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default SFHeader;
