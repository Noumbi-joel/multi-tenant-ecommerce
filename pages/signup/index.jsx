import React, { useState } from "react";

// comp
import {
  BodyText,
  HeadingText,
  Modal,
  GoogleBtn,
  AuthStatic,
} from "../../components";
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
import { COLORS } from "../../assets/colors";
import { useRouter } from "next/router";

const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const handleSubmit = (type, href) => {
    console.log(type, href);
    console.log(router)
    setVisible(true)
  };
  return (
    <Grid.Container>
      <Modal
        image="./mokolo.svg"
        visible={visible}
        closeModal={() => setVisible(false)}
        modalTitle="Enter verification code"
        modalBodyText="We have just sent a verification code to tynisha*****@mail.com"
        modalBtnText="Verify"
        modalLink="Send the code again"
        goTo="/businessInfo"
      />
      <div className="signin-content">
        <div className="img-container">
          <Image src="./mokolo.svg" height={32} alt="app logo" />
        </div>

        {/* hero section */}
        <div className="centered-container">
          <div className="centered">
            <HeadingText
              style={{ marginBottom: 40 }}
              type="h3"
              color={COLORS.grayscale_900}
              title="Create your account"
            />
            <div className="linear-layout-flat">
              <Input
                placeholder="First name"
                className="form-control"
                required
                style={{ width: 200 }}
              />
              <Input
                placeholder="Last name"
                className="form-control"
                required
                style={{ width: 200 }}
              />
            </div>
            <Spacer />
            <Input
              type="email"
              required
              placeholder="Email"
              className="form-control"
            />
            <Spacer />
            <Input.Password
              type="password"
              required
              placeholder="Password"
              className="form-control"
            />
            <Spacer />
            <div className="linear-layout-center">
              <Checkbox defaultSelected>
                <BodyText
                  type="lm"
                  color={COLORS.grayscale_900}
                  title="By proceeding, you agree to the"
                />
                <Link href="/terms_conditions">
                  <BodyText
                    type="lm"
                    color={COLORS.primary_base}
                    title="Terms and Conditions"
                  />
                </Link>
              </Checkbox>
            </div>
            <Spacer y={1.2} />
            <Button
              type="submit"
              className="app-btn"
              onPress={() => handleSubmit("sign up", "/businessInfo")}
            >
              Sign up with email
            </Button>
            <Spacer y={1.2} />

            {/* Google Login */}
            <div className="linear-layout-flat">
              <Divider style={{ width: 150 }} />
              <BodyText
                type="lm"
                colors={COLORS.grayscale_600}
                title="Or sign up with"
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
                title="Already have an account?"
              />
              <Link href="/">
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

      <AuthStatic image="./illustration.svg" />
    </Grid.Container>
  );
};

export default SignUp;
