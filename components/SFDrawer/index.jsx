import React from "react";
import { COLORS } from "../../assets/colors";
import { CLOSE_DRAWER } from "../../constants";
import BodyText from "../BodyText";
import Cross from "../../public/cross.svg";
import Facebook from "../../public/Facebook.svg";
import Instagram from "../../public/Instagram.svg";
import Twitter from "../../public/Twitter.svg";

const SFDrawer = ({ drawerVisible, dispatch }) => {
  return (
    <div className={drawerVisible ? "sf-drawer-anim" : "sf-drawer"}>
      <div className="sf-drawer-row">
        <div className="sf-drawer-links">
          <BodyText type="mm" title="Menu" color={COLORS.grayscale_900} />
          <BodyText type="mm" title="Shop" color={COLORS.grayscale_900} />
          <BodyText type="mm" title="About" color={COLORS.grayscale_900} />
          <BodyText type="mm" title="Contact" color={COLORS.grayscale_900} />
        </div>
        <div>
          <Cross onClick={() => dispatch({ type: CLOSE_DRAWER })} />
        </div>
      </div>
      <Facebook />
      <Instagram />
      <Twitter />
    </div>
  );
};

export default SFDrawer;
