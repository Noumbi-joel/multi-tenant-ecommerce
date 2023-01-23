import React, { useRef, useState } from "react";

// assets
import { COLORS } from "../../assets/colors";
import Eduka from "../../public/eduka-white.svg";
import DotVertical from "../../public/Dots.svg";
import Home from "../../public/home-icon.svg";
import Product from "../../public/product-icon.svg";
import Order from "../../public/order-icon.svg";
import Customer from "../../public/customer-icon.svg";
import Plugin from "../../public/plugin-icon.svg";
import Theme from "../../public/theme-icon.svg";
import Setting from "../../public/setting-icon.svg";

// link
import Link from "next/link";

// comp
import { BodyText, Dropdown } from "..";
import { Avatar } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { SET_VERTICAL_ACTIVE } from "../../constants";

const VerticalHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dispatch = useDispatch();

  const link = useRef(null);
  const { filteredOrders } = useSelector((state) => state.orders);
  const { vertical_header_nav } = useSelector((state) => state.settings);

  return (
    <div className="vertical-header-container">
      <div>
        <div className="app-logo">
          <Eduka aria-label="app-logo" />
        </div>
        <div className="vertical-header-items">
          {vertical_header_nav.map((item, i) => (
            <Link
              href={item.link}
              className={
                item.isActive
                  ? "vertical-header-nav-active vertical-header-item"
                  : "vertical-header-item"
              }
              key={item.id}
              ref={link}
              onClick={() =>
                dispatch({ type: SET_VERTICAL_ACTIVE, payload: item.value })
              }
            >
              <div className="linear-layout">
                {item.id === 1 && <Home aria-label="home" />}
                {item.id === 2 && <Product aria-label="product" />}
                {item.id === 3 && <Order aria-label="order" />}
                {item.id === 4 && <Customer aria-label="customer" />}
                {item.id === 5 && <Plugin aria-label="plugin" />}
                {item.id === 6 && <Theme aria-label="theme" />}
                {item.id === 7 && <Setting aria-label="setting" />}
                <BodyText
                  type="lr"
                  style={{ marginLeft: 10 }}
                  color={COLORS.white}
                  title={item.value}
                />
              </div>
              {item.value === "Orders" && (
                <div className="nb-request">
                  <BodyText
                    type="sr"
                    title={filteredOrders.length}
                    color={COLORS.white}
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
      <div className="vertical-footer">
        <Avatar squared text="JD" />
        <div className="vertical-footer-content">
          <BodyText
            type="mr"
            color={COLORS.white}
            style={{ marginLeft: 10 }}
            title="John Doe"
          />
          <DotVertical
            aria-label="dots"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          />
          {dropdownVisible && <Dropdown />}
        </div>
      </div>
    </div>
  );
};

export default VerticalHeader;
