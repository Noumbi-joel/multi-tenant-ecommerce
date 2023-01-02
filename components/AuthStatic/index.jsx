import React from "react";

//comp
import Link from "next/link";
import BodyText from "../BodyText";
import HeadingText from "../HeadingText";

//assets
import { COLORS } from "../../assets/colors";
import { HEADER_NAV } from "../../helpers";
import { Image } from "@nextui-org/react";

const AuthStatic = ({ image }) => {
  return (
    <div className="static-content">
      <div className="header-nav">
        {HEADER_NAV.map((h) => (
          <Link href={h.link} className="header-link">
            <BodyText type="lm" color={COLORS.primary_200} title={h.title} />
          </Link>
        ))}
      </div>

      <Image src={image} />

      <div className="right-container-text">
        <HeadingText
          type="h2"
          lh={1.5}
          mb={10}
          color={COLORS.white}
          title="The easiest way to build your own eCommerce"
          width={472}
        />
        <BodyText
          type="xlm"
          width={472}
          color={COLORS.primary_200}
          title="Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and manage your day-to-day."
        />
      </div>
    </div>
  );
};

export default AuthStatic;
