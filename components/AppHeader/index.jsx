import React from "react";

//comp
import { Image, Row } from "@nextui-org/react";
import Link from "next/link";
import { COLORS } from "../../assets/colors";
import BodyText from "../BodyText";

const AppHeader = ({ image, links }) => {
  return (
    <div className="app-header">
      <Row justify="space-between">
        <div className="app-logo">
          <Image src={image} />
        </div>
        <div className="header-nav">
          {links?.map((h) => (
            <Link href={h.link} className="header-link">
              <BodyText
                type="lm"
                color={COLORS.grayscale_900}
                title={h.title}
              />
            </Link>
          ))}
        </div>
      </Row>
    </div>
  );
};

export default AppHeader;
