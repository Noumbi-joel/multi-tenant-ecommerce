import React, { useState } from "react";

// assets
import { COLORS } from "../../assets/colors";
import Cookies from "js-cookie";
import { USERS } from "../../constants";

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

// firebase
import firebase from "../../firebase.config";

const BusinessInfo = () => {
  const router = useRouter();
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
    const uid = firebase.auth().currentUser.uid;
    console.log(uid);
    if (
      Cookies.get("noBusiness") === undefined ||
      Cookies.get("noBusiness") === null
    ) {
      console.log("no cookie found looking in the db");
      firebase
        .firestore()
        .collection(USERS)
        .doc(uid)
        .get()
        .then((res) => {
          Cookies.set("noBusiness", false, { expires: 365 });
          if (res.data()?.noBusiness) {
            firebase
              .firestore()
              .collection(USERS)
              .doc(uid)
              .update({ noBusiness: false })
              .then(() => router.push("/dashboard"))
              .catch((err) => toast.error(err.message));
            return;
          } else {
            return toast.error(
              "You can just manage one business for the moment"
            );
          }
        });
    }
    if (Cookies.get("noBusiness") === "true") {
      console.log("no business yet");
      Cookies.set("noBusiness", false);
      firebase
        .firestore()
        .collection(USERS)
        .doc(uid)
        .update({ noBusiness: false })
        .then(() => router.push("/dashboard"))
        .catch((err) => toast.error(err.message));
      return;
    }
    if (Cookies.get("noBusiness") === "false") {
      console.log("already have a business");
      return toast.error("You can just manage one business for the moment");
    }
  };

  return (
    <>
      <AppHeader />
      <div className="business-info-container">
        <form onSubmit={handleSubmit} className="form">
          <div className="hero-business-info">
            <div className="hero-business-center">
              <HeadingText
                type="h3"
                color={COLORS.grayscale_900}
                title="Tell us about your business"
                style={{ textAlign: "center" }}
              />
              <BodyText
                type="xlm"
                color={COLORS.grayscale_600}
                title="We'll help you get started based on your responses"
                style={{ textAlign: "center" }}
              />
              <Spacer />

              <div className="inputs-content">
                <InputField
                  label="Business name"
                  type="text"
                  className="form-control"
                  placeholder="e.g Nana wigs"
                  ariaLabel="bName"
                  value={businessInfos.bName}
                  onChange={handleInput}
                />
                <Spacer y={0.2} />
                <InputField
                  type="text"
                  label="Store link"
                  className="form-control"
                  placeholder="business name"
                  ariaLabel="bUrl"
                  value={businessInfos.bUrl}
                  onChange={handleInput}
                />
                <Spacer />
                <BodyText
                  type="mr"
                  color={COLORS.grayscale_900}
                  title="Which industry will you be operating in?"
                />
                <Spacer y={0.2} />
                <Select
                  onSelect={(e) =>
                    setBusinessInfo({
                      ...businessInfos,
                      bCategory: e.target.value,
                    })
                  }
                />
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
