import React from "react";

// assets
import { COLORS } from "../../assets/colors";

// comp
import BodyText from "../BodyText";

const AuthFooter = () => {
  return (
    <div className="auth-footer">
      <BodyText type="sr" title="Privacy Policy" color={COLORS.grayscale_900} />
      <BodyText
        type="sr"
        title="Terms of Service"
        color={COLORS.grayscale_900}
      />
    </div>
  );
};

export default AuthFooter;
