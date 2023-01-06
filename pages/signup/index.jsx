import React, { useContext, useState } from "react";

// comp
import {
  BodyText,
  HeadingText,
  Modal,
  GoogleBtn,
  AuthStatic,
  AppHeader,
} from "../../components";

import Link from "next/link";
import {
  Button,
  Divider,
  Input,
  Spacer,
  Checkbox,
  Text,
} from "@nextui-org/react";

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
      <div style={{ display: "flex" }}>
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
              <form onSubmit={handleSubmit} className="form-container">
                <HeadingText
                  style={{ marginBottom: 20 }}
                  type="h4"
                  color={COLORS.grayscale_900}
                  title="Create your account"
                />
                <div className="linear-layout-flat">
                  <Input
                    name="fName"
                    placeholder="First name"
                    className="form-control-signup"
                    required
                    style={{ fontSize: 16, fontWeight: "500" }}
                    value={userInfos.fName}
                    onChange={handleInput}
                    aria-label="fName"
                  />
                  <Input
                    name="lName"
                    placeholder="Last name"
                    className="form-control-signup"
                    required
                    style={{ fontSize: 16, fontWeight: "500" }}
                    value={userInfos.lName}
                    onChange={handleInput}
                    aria-label="lName"
                  />
                </div>
                <Spacer />
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="form-control"
                  value={userInfos.email}
                  onChange={handleInput}
                  style={{ fontSize: 16, fontWeight: "500" }}
                  aria-label="email"
                />
                <Spacer />
                <Input.Password
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  className="form-control"
                  value={userInfos.password}
                  style={{ fontSize: 16, fontWeight: "500" }}
                  onChange={handleInput}
                  aria-label="password"
                />
                <Spacer />
                <div className="linear-layout">
                  <Checkbox />
                  <div className="text-large-medium">
                    By proceeding, you agree to the {" "}
                    <div className="text-large-medium-green">
                      Terms and Conditions
                    </div>
                  </div>
                </div>
                <Spacer y={1.2} />
                <Button type="submit" className="app-btn">
                  Sign up with email
                </Button>
                <Spacer y={1.2} />
              </form>

              {/* Google Login */}
              <div className="linear-layout-flat">
                <Divider className="divider" />
                <BodyText
                  type="lm"
                  colors={COLORS.grayscale_600}
                  title="Or sign up with"
                />
                <Divider className="divider" />
              </div>
              <Spacer />
              <GoogleBtn title="Google" onClick={() => authCtx.googleLogin()} />
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
            </div>
          </div>
        </div>
        <AuthStatic image="./illustration.webp" />
      </div>
    </>
  );
};

export default SignUp;
