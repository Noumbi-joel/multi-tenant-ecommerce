import React from "react";

//comp
import BodyText from "../BodyText";
import HeadingText from "../HeadingText";

//assets
import { COLORS } from "../../assets/colors";
import { Image } from "@nextui-org/react";

const AuthStatic = ({ image }) => {
  return (
    <div className="static-content">
      <Image src={image} width={500} height={400} />
      <div className="right-container-text">
        <HeadingText
          type="h2"
          style={{ lineHeight: 1.5, marginBottom: 10, width: 472 }}
          color={COLORS.white}
          title="The easiest way to build your own eCommerce"
        />
        <BodyText
          type="xlm"
          style={{ width: 472 }}
          color={COLORS.primary_200}
          title="Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and manage your day-to-day."
        />
      </div>
    </div>
  );
};

export default AuthStatic;