import React, { useContext, useState } from "react";

// comp
import {
  BodyText,
  HeadingText,
  GoogleBtn,
  Modal,
  AppHeader,
  InputField,
} from "../../components";
import Link from "next/link";
import { Button, Divider, Input, Spacer, Checkbox } from "@nextui-org/react";

//assets
import { COLORS } from "../../assets/colors";

// context api
import { AuthContext } from "../../context/Auth";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [userInfos, setUserInfos] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState("true");

  const handleInput = (e) => {
    setUserInfos((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const authCtx = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userInfos;
    authCtx.signin(email, password);
  };

  return (
    <>
      <AppHeader />
      <div style={{ display: "flex" }}>
        <Modal
          closeModal={() => setVisible(false)}
          visible={visible}
          modalTitle="Reset your password"
          modalBodyText="Enter the email address associated with your account and we'll send you a link to reset your password."
          modalLink="Return to login"
          modalBtnText="Continue"
          goTo="/resetPassword"
        />
        <div className="signin-content">
          {/* hero section */}
          <div className="centered-container">
            <div className="centered">
              <HeadingText
                style={{ textAlign: "center", marginTop: 20, marginBottom: 40 }}
                type="h4"
                color={COLORS.grayscale_900}
                title="Log in to your account"
              />
              <form onSubmit={handleSubmit} className="form-container">
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="form-control"
                  onChange={handleInput}
                  value={userInfos.email}
                  aria-label="email"
                />
                <Spacer />
                <InputField
                  label="Password"
                  type="password"
                  name="password"
                  required
                  aria-label="password"
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={handleInput}
                  value={userInfos.password}
                />
                <Spacer />
                <div className="linear-layout-flat">
                  <Checkbox
                    value={rememberMe}
                    onChange={(e) => setRememberMe(e.valueOf())}
                  >
                    <BodyText
                      type="lm"
                      color={COLORS.grayscale_900}
                      title="Remember me"
                    />
                  </Checkbox>

                  <span onClick={() => setVisible(true)}>
                    <BodyText
                      type="lm"
                      color={COLORS.grayscale_900}
                      title="Forgot password?"
                    />
                  </span>
                </div>
                <Spacer y={1.2} />
                <Button type="submit" className="app-btn">
                  Log in
                </Button>
                <Spacer y={1.2} />

                {/* Google Login */}
                <div className="linear-layout-flat">
                  <Divider className="divider" />
                  <BodyText
                    type="lm"
                    colors={COLORS.grayscale_600}
                    title="Or login with"
                  />
                  <Divider className="divider" />
                </div>
                <Spacer />
                <GoogleBtn
                  title="Google"
                  onClick={() => authCtx.googleLogin()}
                />
                <Spacer />

                {/* don't have an account text */}
                <div className="linear-layout">
                  <BodyText
                    type="lr"
                    color={COLORS.grayscale_600}
                    title="Don't have an account?"
                  />
                  <Link href="/signup">
                    <BodyText
                      type="lb"
                      color={COLORS.primary_base}
                      title="Sign Up"
                    />
                  </Link>
                </div>
              </form>
            </div>

            <div className="auth-footer">
              <BodyText
                type="sr"
                title="Privacy Policy"
                color={COLORS.grayscale_900}
              />
              <BodyText
                type="sr"
                title="Terms of Service"
                color={COLORS.grayscale_900}
              />
            </div>
          </div>
        </div>

        {/* <AuthStatic /> */}
      </div>
    </>
  );
};

export default Login;
