import React from "react";
import { COLORS } from "../../assets/colors";
import { BodyText, Button } from "..";

const SFBanner = () => {
  return (
    <div className="sf-banner">
      <img src="/model-banner.png" alt="banner-img" className="banner-img" />
      <div className="banner-texts">
        <div className="banner-title">Industrial design meets fashion.</div>
        <BodyText
          type="lr"
          title="Discover our Summer Collection, designed by Sarah Taylor. Free shipping
        in the US for any purchase over $60."
          color={COLORS.white}
          className="banner-msg"
        />
        <Button
          titleType="lr"
          title="Shop now"
          titleColor={COLORS.white}
          onClick={() => {}}
          className="sf-shop-now"
        />
      </div>
    </div>
  );
};

export default SFBanner;
