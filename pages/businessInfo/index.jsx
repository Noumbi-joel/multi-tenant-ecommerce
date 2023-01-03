import { Button, Divider, Input, Spacer } from "@nextui-org/react";
import React from "react";
import { COLORS } from "../../assets/colors";
import { BodyText, HeadingText } from "../../components";

//comp
import AppHeader from "../../components/AppHeader";

//assets
import { HEADER_NAV } from "../../helpers";

const BusinessInfo = () => {
  return (
    <div className="business-info-container">
      <AppHeader image="./mokolo.svg" links={HEADER_NAV} />
      <Divider />
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
                <option
                  value="Restaurants&Hotels
"
                >
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
                <option
                  value="Sport/Fitness/Outdoors
"
                >
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
        <Button
          className="app-btn"
          style={{ marginTop: 30, width: 150, marginRight: 200 }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default BusinessInfo;
