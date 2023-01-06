import React from "react";

// assets
import { COLORS } from "../../assets/colors";
import Cookies from "js-cookie";
import { USERS } from "../../constants";

//comp
import { Button, Divider, Input, Spacer } from "@nextui-org/react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { BodyText, HeadingText, AppHeader } from "../../components";

// firebase
import firebase from "../../firebase.config";

const BusinessInfo = () => {
  const router = useRouter();
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
                <BodyText
                  type="lsb"
                  color={COLORS.grayscale_900}
                  title="Business name"
                />
                <Spacer y={0.5} />
                <Input
                  required
                  type="text"
                  className="form-control"
                  placeholder="e.g Nana wigs"
                  aria-label="name"
                  style={{ fontSize: 16, fontWeight: "500" }}
                />
                <Spacer y={0.5} />
                <BodyText
                  type="lsb"
                  color={COLORS.grayscale_900}
                  title="Business URL"
                />
                <Spacer y={0.5} />
                <Input
                  required
                  type="text"
                  className="form-control"
                  contentRightStyling={false}
                  contentRight={
                    <BodyText
                      style={{ marginRight: 10 }}
                      type="lr"
                      color={COLORS.grayscale_900}
                      title=".myeduka.com"
                    />
                  }
                  aria-label="name"
                  style={{ fontSize: 16, fontWeight: "500" }}
                />
                <Spacer />
                <BodyText
                  type="lsb"
                  color={COLORS.grayscale_900}
                  title="Select country"
                />
                <Spacer y={0.5} />

                <div>
                  <select className="select" required>
                    <option value="fruit">Fruit</option>
                    <option value="vegetable">Vegetable</option>
                    <option value="meat">Meat</option>
                  </select>
                </div>

                <Spacer />
                <BodyText
                  type="lsb"
                  color={COLORS.grayscale_900}
                  title="Which industry will you be operating in?"
                />
                <Spacer y={0.5} />
                <div>
                  <select className="select" required>
                    <option value="Grocery/Food/Beverages">
                      Grocery/Food/Beverages
                    </option>
                    <option value="Restaurants&Hotels">
                      Restaurants & Hotels
                    </option>
                    <option value="Electronics/Computer&Accessories">
                      Electronics/Computer Accessories
                    </option>
                    <option value="Art/Painting">Art/Painting</option>
                    <option value="Home essentials/furniture">
                      Home essentials/ furniture
                    </option>
                    <option value="Apparel/Fashion/Shoes/Accessories">
                      Apparel/Fashion/Shoes/Accessories
                    </option>
                    <option value="Sport/Fitness/Outdoors">
                      Sport/Fitness/Outdoors
                    </option>
                    <option value="Toys/Crafts/Hobbies/Gifts/Pet care">
                      Toys/Crafts/Hobbies/Gifts/Pet care
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-business-footer">
            <Button type="submit" className="app-btn-business">
              Continue
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BusinessInfo;
