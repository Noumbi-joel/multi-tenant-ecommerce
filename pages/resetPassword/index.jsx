import React, { useState } from "react";

//comp
import AppHeader from "../../components/AppHeader";
import { Button, Image, Input } from "@nextui-org/react";
import { ActiveLink, BodyText, HeadingText } from "../../components";

//assets
import { HEADER_NAV } from "../../helpers";
import { COLORS } from "../../assets/colors";
import Link from "next/link";

const resetPassword = () => {
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const handleResetPwd = () => {
    setIsPasswordReset(true);
  };

  return (
    <div>
      <AppHeader image="./mokolo.svg" links={HEADER_NAV} />
      <div className="reset-page-container">
        {!isPasswordReset && (
          <div className="hero-new-pwd">
            <HeadingText
              type="h3"
              color={COLORS.grayscale_900}
              title="Create new password"
            />
            <BodyText
              type="xlm"
              color={COLORS.grayscale_600}
              title="Please enter a new password. Your new password must be different from previous password."
            />
            <div className="column-layout" style={{ marginTop: 40 }}>
              <Input.Password
                required
                placeholder="New Password"
                className="form-control"
                type="password"
              />
              <Input.Password
                required
                placeholder="Confirm New Password"
                className="form-control"
                type="password"
              />
            </div>
            <Button
              className="app-btn"
              style={{ marginTop: 30 }}
              onClick={handleResetPwd}
            >
              Reset Password
            </Button>
          </div>
        )}
        {isPasswordReset && (
          <div className="hero-new-pwd">
            <div className="pwd-image-container">
              <Image src="./pwd-reset.svg" width={128} height={128} />
            </div>
            <HeadingText
              type="h3"
              color={COLORS.grayscale_900}
              title="Your successfully changed your password"
              style={{ textAlign: "center", lineHeight: 1.5 }}
            />
            <BodyText
              type="xlm"
              color={COLORS.grayscale_600}
              title="Commodo gravida eget ultricies sed in lacus. Commodo, tellus duis eros pellentesque."
            />
            <ActiveLink href="/" className="app-btn" style={{ marginTop: 40 }}>
              <Button type="submit" className="extended-app-btn">
                Back to Login
              </Button>
            </ActiveLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default resetPassword;
