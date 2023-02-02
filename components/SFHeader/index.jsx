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

const SFHeader = ({ dispatch, router, checkout, storeName, cartNb }) => {
  return (
    <div className={checkout ? "sf-header-checkout" : "sf-header"}>
      <Bars className="bars" onClick={() => dispatch({ type: OPEN_DRAWER })} />
      <div className="sf-header-links">
        <BodyText
          type="lm"
          title="Shop"
          color={COLORS.grayscale_900}
          onClick={() => router.push("/shop")}
        />
        <BodyText
          type="lm"
          title="About"
          color={COLORS.grayscale_900}
          onClick={() => router.push("/about")}
        />
        <BodyText
          type="lm"
          title="Contact"
          color={COLORS.grayscale_900}
          onClick={() => router.push("/contact")}
        />
      </div>
      {/* <North /> */}
      <BodyText type="xlm" title={storeName} color="#000" />
      <div className="sf-socials-links">
        <Facebook className="sf-facebook" />
        <Instagram className="sf-instagram" />
        <Twitter className="sf-twitter" />
        <div
          className="shopping-bag"
          onClick={() => dispatch({ type: OPEN_CART_DRAWER })}
        >
          <ShoppingBag />
          {cartNb > 0 && (
            <div className="sf-shopping-nb">
              <BodyText type="xsm" title={cartNb} color={COLORS.white} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SFHeader;
