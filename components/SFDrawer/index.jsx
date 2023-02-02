import { Divider, Spacer } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";

// comp
import { BodyText, Button, Empty, Select, SFCart } from "..";

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

const SFDrawer = ({ drawerVisible, dispatch, type, cart }) => {
  const router = useRouter();
  if (type === "cart") {
    return (
      <div className={drawerVisible ? "sf-drawer-cart-anim" : "sf-drawer-cart"}>
        {cart?.cartItems?.length <= 0 ? (
          <Empty dispatch={dispatch} type="cart" />
        ) : (
          <div className="sf-cart-container">
            <div>
              <div className="sf-drawer-row">
                <BodyText type="mm" title="Cart" color={COLORS.grayscale_900} />
                <Cross onClick={() => dispatch({ type: CLOSE_CART_DRAWER })} />
              </div>
              {cart?.cartItems?.map((cartItem) => (
                <SFCart
                  dispatch={dispatch}
                  key={cartItem?.id}
                  id={cartItem?.id}
                  image={cartItem?.image}
                  title={cartItem?.title}
                  color={cartItem?.selectedColor}
                  size={cartItem?.selectedSize}
                  qty={cartItem?.quantity}
                  unitPrice={cartItem?.price}
                />
              ))}
            </div>
            <div>
              <Divider className="sf-divider" />
              <Spacer />
              <div className="sf-cart-row-remove-container">
                <BodyText type="mm" title="Subtotal" color="#151515" />
                <BodyText type="lr" title={cart?.totalPrice} color="#444444" />
              </div>
              <Spacer />
              <Button
                titleColor={COLORS.white}
                titleType="lr"
                title="Checkout"
                className="sf-checkout-btn"
                onClick={() => {
                  dispatch({ type: CLOSE_CART_DRAWER });
                  router?.push("/checkout");
                }}
              />
              <Spacer />
              <BodyText
                type="lr"
                title="Continue shopping"
                color={COLORS.grayscale_900}
                style={{ textAlign: "center" }}
                onClick={() => dispatch({ type: CLOSE_CART_DRAWER })}
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
