import React, { useState } from "react";

// comp
import {
  SFBanner,
  SFContainer,
  SFHeader,
  SFNewCollection,
  SFShopByCategory,
  SFFooter,
  BodyText,
} from "../../components";
import { Spacer } from "@nextui-org/react";

// assets
import { NEW_COLLECTIONS } from "../../helpers";
import { COLORS } from "../../assets/colors";

import Cross from "../../public/cross.svg";
import Facebook from "../../public/Facebook.svg";
import Instagram from "../../public/Instagram.svg";
import Twitter from "../../public/Twitter.svg";
import { useSelector, useDispatch } from "react-redux";
import { CLOSE_DRAWER } from "../../constants";

const AppIndex = () => {
  const { drawerVisible } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <div className="sf-container">
      <div className={drawerVisible ? "sf-drawer-anim" : "sf-drawer"}>
        <div className="sf-drawer-row">
          <div className="sf-drawer-links">
            <BodyText type="mm" title="Menu" color={COLORS.grayscale_900} />
            <BodyText type="mm" title="Shop" color={COLORS.grayscale_900} />
            <BodyText type="mm" title="About" color={COLORS.grayscale_900} />
            <BodyText type="mm" title="Contact" color={COLORS.grayscale_900} />
          </div>
          <div>
            <Cross onClick={() => dispatch({ type: CLOSE_DRAWER })}  />
          </div>
        </div>
        <Facebook />
        <Instagram />
        <Twitter />
      </div>
      <SFContainer>
        <SFHeader dispatch={dispatch} />
        <Spacer />
        <SFBanner />
        <SFNewCollection
          collectionTitle="New and stylish collection"
          collectionMsg="North's new & stylish collections are dedicated to reinvent onself, to walk the fine line between urban and wilderness, and to discover luxurious bliss in life."
          data={NEW_COLLECTIONS}
        />
      </SFContainer>
      <SFShopByCategory />
      <SFFooter />
    </div>
  );
};

export default AppIndex;
