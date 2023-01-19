import React, { useRef, useState } from "react";

// helpers
import { VERTICAL_HEADER_ITEMS } from "../../helpers";

// assets
import { COLORS } from "../../assets/colors";
import Eduka from "../../public/eduka-white.svg";
import DotVertical from "../../public/Dots.svg";

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
                {item.icon}
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
