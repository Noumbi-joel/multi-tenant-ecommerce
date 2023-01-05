import React, { useContext, useState } from "react";

//comp
import AppHeader from "../../components/AppHeader";
import { Button, Image, Input } from "@nextui-org/react";
import { ActiveLink, BodyText, HeadingText } from "../../components";

//assets
import { HEADER_NAV } from "../../helpers";
import { COLORS } from "../../assets/colors";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/Auth";

const resetPassword = () => {
  const authCtx = useContext(AuthContext);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [pwd, setPwd] = useState({
    pwd: "",
    resetPwd: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pwd.pwd.length < 6 || pwd.resetPwd.length < 6) {
      return toast.error("Please enter a password with 6 character at least");
    }
    if (pwd.pwd !== pwd.resetPwd) {
      return toast.error("Please enter the same password");
    }
    authCtx.updatePassword(pwd, setIsPasswordReset);
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
            <form className="form-reset-pwd" onSubmit={handleSubmit}>
              <div className="column-layout" style={{ marginTop: 40 }}>
                <Input.Password
                  required
                  placeholder="New Password"
                  className="form-control"
                  type="password"
                  aria-label="password"
                  value={pwd.pwd}
                  onChange={(e) => setPwd({ ...pwd, pwd: e.target.value })}
                />
                <Input.Password
                  required
                  placeholder="Confirm New Password"
                  className="form-control"
                  type="password"
                  aria-label="new-password"
                  value={pwd.resetPwd}
                  onChange={(e) => setPwd({ ...pwd, resetPwd: e.target.value })}
                />
              </div>
              <Button
                type="submit"
                className="app-btn"
                style={{ marginTop: 30 }}
              >
                Reset Password
              </Button>
            </form>
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
              title="Please go and check your Email | Spam to finish resetting"
              style={{ textAlign: "center", lineHeight: 1.5 }}
            />
            <BodyText
              type="xlm"
              color={COLORS.grayscale_600}
              title="Commodo gravida eget ultricies sed in lacus. Commodo, tellus duis eros pellentesque."
            />
            <ActiveLink
              href="/signin"
              className="app-btn"
              style={{ marginTop: 40 }}
            >
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
