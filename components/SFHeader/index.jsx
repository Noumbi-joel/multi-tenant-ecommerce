import React from "react";

// assets
import { COLORS } from "../../assets/colors";
import North from "../../public/North.svg";
import Facebook from "../../public/facebook.svg";
import Instagram from "../../public/instagram.svg";
import Twitter from "../../public/twitter.svg";
import ShoppingBag from "../../public/ShoppingBag.svg";
import Bars from "../../public/Bars.svg";
import { OPEN_CART_DRAWER, OPEN_DRAWER } from "../../constants";

// comp
import BodyText from "../BodyText";

const SFHeader = ({ dispatch, router, checkout }) => {
  if (checkout) {
    return (
      <div>
        <div className="sf-header-checkout">
          <North />
        </div>
      </div>
    );
  }
  return (
    <div className="sf-header">
      <Bars className="bars" onClick={() => dispatch({ type: OPEN_DRAWER })} />
      <div className="sf-header-links">
        <BodyText
          type="lm"
          title="Shop"
          color={COLORS.grayscale_900}
          onClick={() => router.push("/_sites/shop")}
        />
        <BodyText
          type="lm"
          title="About"
          color={COLORS.grayscale_900}
          onClick={() => router.push("/_sites/about")}
        />
        <BodyText
          type="lm"
          title="Contact"
          color={COLORS.grayscale_900}
          onClick={() => router.push("/_sites/contact")}
        />
      </div>
      <North />

      <div className="sf-socials-links">
        <Facebook className="sf-facebook" />
        <Instagram className="sf-instagram" />
        <Twitter className="sf-twitter" />
        <div className="shopping-bag">
          <ShoppingBag onClick={() => dispatch({ type: OPEN_CART_DRAWER })} />
        </div>
      </div>
    </div>
  );
};

export default SFHeader;
