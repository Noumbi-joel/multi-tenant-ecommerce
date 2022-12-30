import React from "react";

// next UI && comp
import { Button, Container, Grid, Image, Divider } from "@nextui-org/react";
import { BodyText, HeadingText } from "../components";
import Link from "next/link";

//assets
import { COLORS } from "../assets/colors";

const Login = () => {
  return (
    <Grid.Container>
      <div className="signin-content">
        <Image src="./mokolo.svg" width={150} height={32} alt="app logo" />
        <HeadingText
          type="h3"
          color={COLORS.grayscale_900}
          title="Login to your account"
        />
        <div className="linear-layout">
          <BodyText
            type="lr"
            color={COLORS.grayscale_600}
            title="Don't have an account?"
          />
          <BodyText type="lb" color={COLORS.primary_base} title="Get Started" />
        </div>
        <BodyText
          type="lm"
          colors={COLORS.grayscale_600}
          title="Or login with"
        />
        <Divider />
        <Link href="/signup">go to sign up</Link>
      </div>
      <div className="static-content">IMAGES</div>
    </Grid.Container>
  );
};

export default Login;
