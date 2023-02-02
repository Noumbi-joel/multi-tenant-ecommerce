import React, { useState } from "react";

// comp
import { Checkbox, Divider, Spacer } from "@nextui-org/react";
import {
  BodyText,
  Button,
  HeadingText,
  InputField,
  SFContainer,
  SFDeliveryMethod,
  SFDrawerContainer,
  SFPaymentMethods,
} from "../../../../components";

// assets
import { COLORS } from "../../../../assets/colors";
import { useRouter } from "next/router";

const Checkout = () => {
  const router = useRouter();
  const [checkoutInfos, setCheckoutInfos] = useState({
    user: {
      fullName: "",
      phone: "",
      fullAddress: "",
      city: "",
      country: "",
    },
    saveInfo: false,
    deliveryMethod: {
      free: false,
      pay: false,
    },
    paymentMethod: {
      accept: false,
      type: "Orange money",
      number: "",
    },
  });

  const handleInputs = (e) => {
    setCheckoutInfos((prev) => {
      return {
        ...prev,
        user: {
          ...prev.user,
          [e.target.name]: e.target.value,
        },
      };
    });
  };

  const handleCountry = (e) => {
    setCheckoutInfos((prev) => {
      return {
        ...prev,
        user: {
          ...prev.user,
          country: e.target.value,
        },
      };
    });
  };

  const handleCheckbox = (e, type) => {
    if (type === "delivery") {
      return setCheckoutInfos((prev) => {
        return {
          ...prev,
          deliveryMethod: {
            ...prev.deliveryMethod,
            [e.target.name]: e.target.value,
          },
        };
      });
    }
    if (type === "payment") {
      return setCheckoutInfos((prev) => {
        return {
          ...prev,
          paymentMethod: {
            ...prev.paymentMethod,
            [e.target.name]: e.target.value,
          },
        };
      });
    }
    setCheckoutInfos((prev) => {
      return {
        ...prev,
        saveInfo: !prev.saveInfo,
      };
    });
  };

  return (
    <SFDrawerContainer>
      <SFContainer fluid>
        <Divider className="sf-divider" />
        <div className="sf-checkout-container">
          <form className="sf-checkout-row-container">
            <HeadingText type="h6" title="Shipping address" color="#333333" />
            <Spacer />
            <div className="sf-checkout-row-name-number">
              <div className="sf-checkout-row-name">
                <InputField
                  label="Full name"
                  ariaLabel="fullName"
                  name="fullName"
                  type="text"
                  value={checkoutInfos.user.fullName}
                  onChange={(e) => handleInputs(e)}
                  className="sf-checkout-input"
                  placeholder="Full name"
                />
              </div>
              <div className="sf-checkout-row-phone">
                <InputField
                  label="Phone number"
                  ariaLabel="phone number"
                  name="phone"
                  type="text"
                  value={checkoutInfos.user.phone}
                  onChange={(e) => handleInputs(e)}
                  className="sf-checkout-input"
                  placeholder="+237"
                />
              </div>
            </div>
            <Spacer />
            <div className="sf-checkout-row-name-number">
              <div className="sf-checkout-row-name">
                <InputField
                  label="Full address"
                  ariaLabel="fullAddress"
                  name="fullAddress"
                  type="text"
                  value={checkoutInfos.user.fullAddress}
                  onChange={(e) => handleInputs(e)}
                  className="sf-checkout-input"
                  placeholder="nickel oil, logbessou plateau"
                />
              </div>
              <div className="sf-checkout-row-phone">
                <InputField
                  label="City"
                  ariaLabel="city"
                  name="city"
                  type="text"
                  value={checkoutInfos.user.city}
                  onChange={(e) => handleInputs(e)}
                  className="sf-checkout-input"
                  placeholder="Douala"
                />
              </div>
            </div>
            <Spacer />
            <InputField
              label="Country"
              ariaLabel="select"
              name="native-select"
              type="text"
              className="sf-checkout-input"
              value={checkoutInfos.user.country}
              onChange={(e) => handleCountry(e)}
              data={[
                { id: 0, title: "Cameroon" },
                { id: 1, title: "Nigeria" },
                { id: 2, title: "Ghana" },
              ]}
            />
            <Spacer />
            <Checkbox
              isSelected={checkoutInfos.saveInfo}
              onChange={(e) => handleCheckbox(e)}
            >
              <BodyText
                type="mr"
                title="Save this information for next time"
                color="#535353"
              />
            </Checkbox>
            <SFDeliveryMethod
              pay={checkoutInfos.deliveryMethod.pay}
              free={checkoutInfos.deliveryMethod.free}
              onChange={(e) => handleCheckbox(e, "delivery")}
            />
            <SFPaymentMethods
              accept={checkoutInfos.paymentMethod.accept}
              type={checkoutInfos.paymentMethod.type}
              number={checkoutInfos.paymentMethod.number}
              onChange={(e) => handleCheckbox(e, "payment")}
            />
            <Spacer />
            <Button
              titleType="lr"
              titleColor={COLORS.white}
              title={"Pay XAF21,500"}
              onClick={() => console.log(checkoutInfos)}
              className="sf-checkout-btn"
            />
            <Spacer y={0.5} />
            <BodyText
              type="mr"
              title="Return to shop"
              color={COLORS.grayscale_900}
              style={{ textAlign: "center" }}
              onClick={() => router.push("/shop")}
            />
          </form>
        </div>
      </SFContainer>
    </SFDrawerContainer>
  );
};

export default Checkout;
