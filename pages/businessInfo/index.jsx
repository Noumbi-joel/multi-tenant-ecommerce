import React, { useContext, useState } from "react";

// assets
import { COLORS } from "../../assets/colors";

//comp
import { Button, Spacer } from "@nextui-org/react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import {
  BodyText,
  HeadingText,
  AppHeader,
  InputField,
  Select,
  AuthFooter,
} from "../../components";

// context API
import { AuthContext } from "../../context/Auth";

const BusinessInfo = () => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);
  const [businessInfos, setBusinessInfo] = useState({
    bName: "",
    bUrl: "",
    bCategory: "",
  });

  const handleInput = (e) => {
    setBusinessInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      businessInfos.bName.length <= 1 ||
      businessInfos.bUrl.length <= 1 ||
      !businessInfos.bCategory
    ) {
      return toast.error("Please fill correctly the business informations");
    }

    authCtx.saveBusiness(businessInfos);
  };

  return (
    <>
      <AppHeader />
      <div className="business-info-container">
        <form onSubmit={handleSubmit} className="form">
          <div className="hero-business-info">
            <div className="hero-business-center">
              <HeadingText
                type="h4"
                color={COLORS.grayscale_900}
                title="Tell us about your business"
                style={{ textAlign: "center" }}
              />
              <BodyText
                type="mr"
                color={COLORS.grayscale_900}
                title="We'll help you get started based on your responses"
                style={{ textAlign: "center" }}
              />
              <Spacer />

              <div className="inputs-content">
                <InputField
                  label="Business name"
                  type="text"
                  name="bName"
                  className="form-control"
                  placeholder="Enter the name of your business"
                  ariaLabel="bName"
                  value={businessInfos.bName}
                  onChange={handleInput}
                />
                <Spacer y={0.2} />
                <InputField
                  type="text"
                  label="Store link"
                  name="bUrl"
                  className="form-control"
                  placeholder="business link"
                  ariaLabel="bUrl"
                  value={businessInfos.bUrl}
                  onChange={handleInput}
                />
                <Spacer y={0.2} />
                <BodyText
                  type="mr"
                  color={COLORS.grayscale_900}
                  title="Which industry will you be operating in?"
                />
                <Spacer y={0.2} />
                <Select name="bCategory" onChange={handleInput} />
                <Button
                  type="submit"
                  className="app-btn"
                  style={{ marginTop: 25 }}
                >
                  Continue
                </Button>
              </div>
            </div>
            <AuthFooter />
          </div>
        </form>
      </div>
    </>
  );
};

export default BusinessInfo;
