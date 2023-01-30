import React, { useState } from "react";

// comp
import { Checkbox, Divider, Spacer } from "@nextui-org/react";
import {
  BodyText,
  Button,
  CheckoutTotal,
  InputField,
  SFCheckoutProd,
  SFContainer,
  SFDrawerContainer,
  SFHeader,
  SFHistory,
} from "../../../components";

// assets
import ArrowLeft from "../../../public/arrow-left.svg";
import Panier from "../../../public/panier.svg";
import ArrowUp from "../../../public/ArrowUp.svg";
import ArrowDown from "../../../public/ArrowDown.svg";
import { COLORS } from "../../../assets/colors";
import { SF_HISTORY } from "../../../helpers";

const Checkout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <SFDrawerContainer>
        <SFHeader checkout />
        <Divider className="sf-divider" />
        <SFContainer fluid>
          <div className="sf-checkout-row-container">
            <div className="checkout-form">
              <SFHistory data={SF_HISTORY} />
              <div className="sf-checkout-contact-infos">
                <BodyText
                  type="xlm"
                  title="Contact Information"
                  color={COLORS.grayscale_900}
                />
                <InputField
                  ariaLabel="fName"
                  name="sf-email"
                  type="email"
                  className="sf-checkout-input"
                  placeholder="Email"
                />
                <Spacer />
                <div className="sf-chekout-name">
                  <div className="sf-name">
                    <InputField
                      ariaLabel="fName"
                      name="sf-fName"
                      type="text"
                      className="sf-name-input"
                      placeholder="First name"
                    />
                  </div>
                  <Spacer />
                  <div className="sf-name">
                    <InputField
                      ariaLabel="lName"
                      name="sf-lName"
                      type="text"
                      className="sf-name-input"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <Spacer />
                <BodyText
                  type="xlm"
                  title="Shipping address"
                  color={COLORS.grayscale_900}
                />
                <div className="shipping-address">
                  <InputField
                    label="Country/Region"
                    ariaLabel="select"
                    name="native-select"
                    type="text"
                    className="sf-checkout-input"
                    data={[
                      { id: 0, title: "Cameroon" },
                      { id: 1, title: "Nigeria" },
                      { id: 2, title: "Ghana" },
                    ]}
                  />
                  <Spacer />
                  <InputField
                    ariaLabel="address"
                    name="sf-address"
                    type="text"
                    className="sf-checkout-input"
                    placeholder="Address"
                  />
                </div>
                <Spacer />
                <InputField
                  ariaLabel="address"
                  name="sf-address"
                  type="text"
                  className="sf-checkout-input"
                  placeholder="City"
                />
                <Spacer />
                <InputField
                  ariaLabel="address"
                  name="sf-address"
                  type="text"
                  className="sf-checkout-input"
                  placeholder="Phone (optional)"
                />
                <Spacer />
                <InputField
                  ariaLabel="address"
                  name="sf-address"
                  type="text"
                  className="sf-checkout-input"
                  placeholder="Apartment, suite, etc. (optional)"
                />
              </div>
              <Spacer />
              <div className="sf-checkout-row-company">
                <div className="sf-checkout-company">
                  <Checkbox isSelected={true} className="sf-checkout-checkbox">
                    <BodyText
                      type="mr"
                      title="Save this information for next time"
                      color="#535353"
                    />
                  </Checkbox>
                </div>
                <div className="sf-checkout-company">
                  <InputField
                    label="Company (optional)"
                    ariaLabel="sf-company"
                    name="sf-company"
                    type="text"
                    value="Eduka"
                    className="sf-checkout-company-input"
                  />
                </div>
              </div>
              <Spacer />
              <div className="sf-checkout-row-continueShop">
                <div className="sf-checkout-goBack">
                  <ArrowLeft />
                  <BodyText
                    type="lr"
                    color={COLORS.grayscale_900}
                    title="Return to cart"
                    style={{ marginLeft: 12 }}
                  />
                </div>
                <Button
                  titleType="lr"
                  titleColor={COLORS.white}
                  onClick={() => {}}
                  title="Continue to shipping"
                  className="sf-btn-checkout"
                />
              </div>
              <Spacer />
              <Divider className="sf-divider" />
              <Spacer />
              <BodyText
                type="lr"
                color="#737373"
                title="All rights reserved to Eduka"
              />
            </div>
            <div className="sf-checkout-infos">
              <div className="sf-checkout-mobile">
                <div className="sf-checkout-mobile-row">
                  <Panier />
                  <BodyText
                    type="mr"
                    title={open ? "Hide order summary" : "Show order summary"}
                    color={COLORS.grayscale_900}
                    style={{ marginLeft: 10, marginRight: 10 }}
                    onClick={() => setOpen(!open)}
                  />
                  {open ? <ArrowUp /> : <ArrowDown />}
                </div>
                <CheckoutTotal remove totalType="Total" totalPrice="10,000" />
              </div>
              {open ? (
                <div>
                  <SFCheckoutProd
                    prodImage="/got.jpg"
                    prodTitle="Straight Leg Pant"
                    prodColor="Ice Grey"
                    prodPrice="275,000"
                    prodQty="1"
                    prodSize="L"
                  />
                  <SFCheckoutProd
                    prodImage="/model-banner.png"
                    prodTitle="Straight Leg Pant"
                    prodColor="Ice Grey"
                    prodPrice="275,000"
                    prodQty="1"
                    prodSize="L"
                  />
                  <SFCheckoutProd
                    prodImage="/got.jpg"
                    prodTitle="Straight Leg Pant"
                    prodColor="Ice Grey"
                    prodPrice="275,000"
                    prodQty="1"
                    prodSize="L"
                  />
                  <Divider className="sf-divider" />
                  <Spacer />
                  <CheckoutTotal
                    totalType="Subtotal"
                    totalPrice="FCFA 478,000"
                  />
                  <CheckoutTotal
                    totalType="Shipping"
                    totalPrice="FCFA 100,000"
                  />
                  <Spacer y={0.5} />
                  <Spacer />
                  <Divider className="sf-divider" />
                  <Spacer />
                  <CheckoutTotal totalType="Total" totalPrice="100,000" />
                </div>
              ) : null}
            </div>
          </div>
        </SFContainer>
      </SFDrawerContainer>
    </div>
  );
};

export default Checkout;
