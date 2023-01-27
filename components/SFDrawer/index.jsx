import React from "react";

// comp
import { BodyText, Button, Select, SFFilters } from "..";

// assets
import { COLORS } from "../../assets/colors";
import { CLOSE_DRAWER, CLOSE_FILTER_DRAWER } from "../../constants";
import { SF_CATEGORIES, SF_COLOR, SF_PRICE, SF_SORT } from "../../helpers";
import Cross from "../../public/cross.svg";
import Facebook from "../../public/facebook.svg";
import Instagram from "../../public/instagram.svg";
import Twitter from "../../public/twitter.svg";

const SFDrawer = ({ drawerVisible, dispatch, type }) => {
  if (type === "filters") {
    return (
      <div className={drawerVisible ? "sf-drawer-anim" : "sf-drawer"}>
        <div className="sf-drawer-row">
          <BodyText type="mm" title="Filter" color={COLORS.grayscale_900} />
          <Cross onClick={() => dispatch({ type: CLOSE_FILTER_DRAWER })} />
        </div>
        <Select
          type="sf-select"
          data={SF_CATEGORIES}
          className="sf-select-filter-drawer"
        />
        <Select
          type="sf-select"
          data={SF_PRICE}
          className="sf-select-filter-drawer"
        />
        <Select
          type="sf-select"
          data={SF_COLOR}
          className="sf-select-filter-drawer"
        />
        <Select
          type="sf-select"
          data={SF_SORT}
          className="sf-select-filter-drawer"
        />
        <Button
          titleType="lr"
          title="Reset filters"
          titleColor={COLORS.grayscale_900}
          className="drawer-reset-btn"
          onClick={() => {}}
        />
      </div>
    );
  }
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
