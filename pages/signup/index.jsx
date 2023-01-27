import React, { useContext, useState } from "react";

// comp
import {
  BodyText,
  HeadingText,
  Modal,
  GoogleBtn,
  AppHeader,
  InputField,
  AuthFooter,
  Button,
} from "../../components";

import Link from "next/link";
import { Divider, Spacer, Checkbox } from "@nextui-org/react";

//assets
import { COLORS } from "../../assets/colors";

//functions
import { AuthContext } from "../../context/Auth";

const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [userInfos, setUserInfos] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setUserInfos((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const authCtx = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    authCtx.signup(userInfos);
  };
  return (
    <>
      <AppHeader />
      <Modal
        visible={visible}
        closeModal={() => setVisible(false)}
        modalTitle="Enter verification code"
        modalBodyText="We have just sent a verification code to tynisha*****@mail.com"
        modalBtnText="Verify"
        modalLink="Send the code again"
        goTo="/businessInfo"
      />
      <div className="signin-content">
        {/* hero section */}
        <div className="centered-container">
          <div className="centered">
            <HeadingText
              style={{
                marginTop: 20,
                marginBottom: 40,
                textAlign: "center",
              }}
              type="h4"
              color={COLORS.grayscale_900}
              title="Create your account"
            />
            <div className="form">
              <form onSubmit={handleSubmit} className="form-container">
                <div className="form-signup-row-flat">
                  <InputField
                    label="First name"
                    name="fName"
                    className="form-control-sg"
                    placeholder="First name"
                    value={userInfos.fName}
                    onChange={handleInput}
                    aria-label="fName"
                  />
                  <InputField
                    label="Last name"
                    name="lName"
                    className="form-control-sg"
                    placeholder="Last name"
                    value={userInfos.lName}
                    onChange={handleInput}
                    aria-label="lName"
                  />
                </div>
                <Spacer />
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={userInfos.email}
                  onChange={handleInput}
                  aria-label="email-s"
                />
                <Spacer />
                <InputField
                  label="Password"
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={userInfos.password}
                  onChange={handleInput}
                  aria-label="password-s"
                />
                <Spacer />
                <div className="linear-layout">
                  <Checkbox aria-label="check-s" isSelected={true} />
                  <div className="text-large-medium">
                    By proceeding, you agree to the{" "}
                    <div className="text-large-medium-green">
                      Terms and Conditions
                    </div>
                  </div>
                </div>
                <Spacer y={1.2} />
                <Button type="submit" className="app-btn">
                  Sign up
                </Button>
                <Spacer y={1.2} />

                {/* Google Login */}
                <div className="linear-layout-flat">
                  <Divider style={{ width: 150 }} className="divider" />
                  <div className="orLoginWith">
                    <BodyText
                      type="mr"
                      colors={COLORS.grayscale_600}
                      title="Or sign up with"
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
                    title="Already have an account?"
                  />
                  <Link href="/signin">
                    <BodyText
                      type="lb"
                      color={COLORS.primary_base}
                      title="Sign in"
                    />
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <AuthFooter />
        </div>
      </div>
    </>
  );
};

export default SignUp;
