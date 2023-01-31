import { Divider, Spacer } from "@nextui-org/react";
import React, { useState } from "react";

// comp
import { BodyText, Button, Empty, Select } from "..";

// assets
import { COLORS } from "../../assets/colors";
import {
  CLOSE_CART_DRAWER,
  CLOSE_DRAWER,
  CLOSE_FILTER_DRAWER,
} from "../../constants";
import { SF_CATEGORIES, SF_COLOR, SF_PRICE, SF_SORT } from "../../helpers";
import Cross from "../../public/cross.svg";
import Facebook from "../../public/facebook.svg";
import Instagram from "../../public/instagram.svg";
import Twitter from "../../public/twitter.svg";
import SFCart from "../SFCart";

const SFDrawer = ({ drawerVisible, dispatch, type, router }) => {
  const [empty, setEmpty] = useState(false);
  if (type === "cart") {
    return (
      <div className={drawerVisible ? "sf-drawer-cart-anim" : "sf-drawer-cart"}>
        {empty ? (
          <Empty
            setEmpty={setEmpty}
            empty={empty}
            dispatch={dispatch}
            type="cart"
          />
        ) : (
          <div className="sf-cart-container">
            <div>
              <div className="sf-drawer-row">
                <BodyText
                  type="mm"
                  title="Cart"
                  color={COLORS.grayscale_900}
                  onClick={() => setEmpty(!empty)}
                />
                <Cross onClick={() => dispatch({ type: CLOSE_CART_DRAWER })} />
              </div>
              <SFCart
                image="/model-banner.png"
                title="Straight leg pant"
                color="Red"
                size="XL"
                qty="1"
                unitPrice="114,000"
              />
              <SFCart
                image="/got.jpg"
                title="Flared midi skirt"
                color="Red"
                size="XL"
                qty="1"
                unitPrice="114,000"
              />
            </div>
            <div>
              <Divider className="sf-divider" />
              <Spacer />
              <div className="sf-cart-row-remove-container">
                <BodyText type="mm" title="Subtotal" color="#151515" />
                <BodyText type="lr" title="FCFA125,000" color="#444444" />
              </div>
              <Spacer />
              <Button
                titleColor={COLORS.white}
                titleType="lr"
                title="Checkout"
                className="sf-checkout-btn"
              />
              <Spacer />
              <BodyText
                type="lr"
                title="Continue shopping"
                color={COLORS.grayscale_900}
                style={{ textAlign: "center" }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

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
          <BodyText
            type="mm"
            title="Shop"
            color={COLORS.grayscale_900}
            onClick={() => router.push("/shop")}
          />
          <BodyText
            type="mm"
            title="About"
            color={COLORS.grayscale_900}
            onClick={() => router.push("/about")}
          />
          <BodyText
            type="mm"
            title="Contact"
            color={COLORS.grayscale_900}
            onClick={() => router.push("/contact")}
          />
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
