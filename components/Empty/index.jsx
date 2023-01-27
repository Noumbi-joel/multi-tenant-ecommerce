import React from "react";

// assets
import Alien from "../../public/alien.svg";
import EmptyBag from "../../public/empty-bag.svg";
import PurplePlus from "../../public/purple-plus.svg";
import { COLORS } from "../../assets/colors";
import Cross from "../../public/cross.svg";

// comp
import BodyText from "../BodyText";
import Link from "next/link";
import { Spacer } from "@nextui-org/react";
import { CLOSE_CART_DRAWER } from "../../constants";

const Empty = ({
  emptyConcern,
  msg,
  btnTitle,
  link,
  type,
  setEmpty,
  dispatch,
  empty,
}) => {
  if (type === "cart") {
    return (
      <div
        style={{
          displat: "flex",
          flexDirection: "column",
          justifyContent: "stretch",
        }}
      >
        <div className="sf-drawer-row-cart">
          <BodyText
            type="mm"
            title="Cart"
            color={COLORS.grayscale_900}
            onClick={() => setEmpty(!empty)}
          />
          <Cross onClick={() => dispatch({ type: CLOSE_CART_DRAWER })} />
        </div>
        <div className="sf-cart-empty">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <EmptyBag />
            <Spacer />
            <BodyText
              type="lm"
              color="#000"
              title="Your cart is currently empty."
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="no-category">
      <Alien aria-label="alien" />
      <div>
        <BodyText
          type="lr"
          title={`Whoops.. you've got no ${emptyConcern}`}
          color={"#000"}
          style={{ textAlign: "center" }}
        />
        <BodyText
          type="mr"
          title={msg}
          color={"#000"}
          style={{ textAlign: "center" }}
        />
      </div>
      <div className="linear-layout" style={{ marginTop: 25 }}>
        <PurplePlus aria-label="plus" className="plus" />
        <Link href={`${link}`}>
          <BodyText
            type="lr"
            title={btnTitle}
            color={COLORS.primary_base}
            style={{ textAlign: "center" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Empty;
