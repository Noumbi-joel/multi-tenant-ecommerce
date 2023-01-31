import React, { useContext, useState } from "react";

// comp
import {
  BodyText,
  HeadingText,
  GoogleBtn,
  Modal,
  AppHeader,
  InputField,
  AuthFooter,
  Button,
} from "../../components";
import Link from "next/link";
import { Divider, Spacer, Checkbox } from "@nextui-org/react";

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
  const [rememberMe, setRememberMe] = useState(true);

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
              <form className="form-container">
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  onChange={handleInput}
                  value={userInfos.email}
                  aria-label="email"
                />
                <Spacer />
                <InputField
                  label="Password"
                  type="password"
                  name="password"
                  className="form-control"
                  aria-label="password"
                  placeholder="Enter your password"
                  onChange={handleInput}
                  value={userInfos.password}
                />
                <Spacer />
                <div className="linear-layout-flat">
                  <Checkbox
                    aria-label="check"
                    isSelected={rememberMe}
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
                <Button
                  className="app-btn"
                  titleType="lr"
                  title="Log in"
                  titleColor={COLORS.white}
                  onClick={(e) => handleSubmit(e)}
                />
                <Spacer y={1.2} />

                {/* Google Login */}
                <div className="linear-layout-flat">
                  <Divider style={{ width: 150 }} className="divider" />
                  <div className="orLoginWith">
                    <BodyText
                      type="mr"
                      colors={COLORS.grayscale_600}
                      title="Or login with"
                    />
                  </div>
                  <Divider style={{ width: 150 }} className="divider" />
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
            <AuthFooter />
          </div>
        </div>

        {/* <AuthStatic /> */}
      </div>
    </>
  );
};

export default Login;
