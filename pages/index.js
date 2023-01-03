import React, { useState } from "react";

// comp
import {
  BodyText,
  HeadingText,
  GoogleBtn,
  AuthStatic,
  Modal,
} from "../components";
import Link from "next/link";
import {
  Button,
  Grid,
  Image,
  Divider,
  Input,
  Spacer,
  Checkbox,
} from "@nextui-org/react";

//assets
import { COLORS } from "../assets/colors";

const Login = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Grid.Container>
      <Modal
        image="./mokolo.svg"
        closeModal={() => setVisible(false)}
        visible={visible}
        modalTitle="Reset your password"
        modalBodyText="Enter the email address associated with your account and we'll send you a link to reset your password."
        modalLink="Return to login"
        modalBtnText="Continue"
        isForgotPwd
        goTo="/resetPassword"
      />
      <div className="signin-content">
        <div className="img-container">
          <Image src="./mokolo.svg" height={32} alt="app logo" />
        </div>

        {/* hero section */}
        <div className="centered-container">
          <div className="centered">
            <HeadingText
              login
              type="h3"
              color={COLORS.grayscale_900}
              title="Login to your account"
            />
            <Input
              type="email"
              required
              placeholder="Email"
              className="form-control"
            />
            <Spacer />
            <Input.Password
              required
              placeholder="Password"
              className="form-control"
              type="password"
            />
            <Spacer />
            <div className="linear-layout-flat">
              <Checkbox defaultSelected>
                <BodyText
                  type="lm"
                  color={COLORS.grayscale_900}
                  title="Remember me"
                />
              </Checkbox>

              <span onClick={() => setVisible(true)}>
                <BodyText
                  type="lm"
                  color={COLORS.success_base}
                  title="Forgot password?"
                />
              </span>
            </div>
            <Spacer y={1.2} />
            <Button type="submit" disabled className="btn-auth">
              Sign in with email
            </Button>
            <Spacer y={1.2} />

            {/* Google Login */}
            <div className="linear-layout-flat">
              <Divider style={{ width: 150 }} />
              <BodyText
                type="lm"
                colors={COLORS.grayscale_600}
                title="Or login with"
              />
              <Divider style={{ width: 150 }} />
            </div>
            <Spacer />
            <GoogleBtn image={"./google.svg"} title="Google" />
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
                  title="Get Started"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <AuthStatic image="./illustration.svg" />
    </Grid.Container>
  );
};

export default Login;
