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

const VerticalHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const link = useRef(null);

  return (
    <div className="vertical-header-container">
      <div>
        <div className="app-logo">
          <Eduka aria-label="app-logo" />
        </div>
        <div className="vertical-header-items">
          {VERTICAL_HEADER_ITEMS.map((item, i) => (
            <Link
              href={item.link}
              className="vertical-header-item"
              key={item.id}
              ref={link}
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
              {i === 2 && (
                <Avatar color="error" textColor="white" rounded text="7" />
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
