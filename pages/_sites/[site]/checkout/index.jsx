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
import toast from "react-hot-toast";
import Check from "../../../../public/check-black.svg";

const Checkout = () => {
  const router = useRouter();
  const [saveInfos, setSaveInfos] = useState(false);
  const [order, setOrder] = useState(false);
  const [deliveryMethods, setDeliveryMethods] = useState({
    free: false,
    pay: true,
  });
  const [paymentMethods, setPaymentMethods] = useState({
    accept: true,
    type: "Orange money",
    number: "",
  });
  const [userInfos, setUserInfos] = useState({
    fullName: "",
    phone: "",
    fullAddress: "",
    city: "",
    country: "Cameroon",
  });

  const handleInputs = (e) => {
    setUserInfos((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleCountry = (e) => {
    setUserInfos((prev) => {
      return {
        ...prev,
        country: e.target.value,
      };
    });
  };

  const handleCheckbox = (e) => {
    if (e === "pay" || e === "free") {
      return setDeliveryMethods((prev) => {
        return {
          ...prev,
          free: e === "free" ? !prev.free : false,
          pay: e === "pay" ? !prev.pay : false,
        };
      });
    }
    if (e === "type") {
      return setPaymentMethods((prev) => {
        return {
          ...prev,
          type: e,
        };
      });
    }
  };

  const handlePaymentMethods = (e, value) => {
    setPaymentMethods((prev) => {
      return {
        ...prev,
        [value]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    if (
      !userInfos.city ||
      !userInfos.country ||
      !userInfos.fullAddress ||
      !userInfos.fullName ||
      !userInfos.phone
    ) {
      return toast.error("Please fill correctly the shipping address");
    }

    console.log(userInfos, saveInfos, deliveryMethods, paymentMethods);
  };

  return (
    <SFDrawerContainer>
      <SFContainer fluid>
        <Divider className="sf-divider" />
        <div className="sf-checkout-container">
          {order ? (
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
                    value={userInfos.fullName}
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
                    type="number"
                    value={userInfos.phone}
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
                    value={userInfos.fullAddress}
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
                    value={userInfos.city}
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
                value={userInfos.country}
                onChange={(e) => handleCountry(e)}
                data={[
                  { id: 0, title: "Cameroon" },
                  { id: 1, title: "Nigeria" },
                  { id: 2, title: "Ghana" },
                ]}
              />
              <Spacer />
              <Checkbox
                isSelected={saveInfos}
                onChange={() => setSaveInfos(!saveInfos)}
              >
                <BodyText
                  type="mr"
                  title="Save this information for next time"
                  color="#535353"
                />
              </Checkbox>
              <SFDeliveryMethod
                pay={deliveryMethods.pay}
                free={deliveryMethods.free}
                onChange={(e) => handleCheckbox(e)}
              />
              <SFPaymentMethods
                accept={paymentMethods.accept}
                type={paymentMethods.type}
                number={paymentMethods.number}
                onChange={handlePaymentMethods}
              />
              <Spacer />
              <Button
                titleType="lr"
                titleColor={COLORS.white}
                title={"Pay XAF21,500"}
                onClick={handleSubmit}
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
          ) : (
            <div className="sf-checkout-ok-container">
              <div className="sf-checkout-ok">
                <div className="sf-checkout-check-rounded">
                  <Check />
                </div>
                <Spacer />
                <HeadingText type="h5" title="Thank you, John" color="#000" />
                <Spacer y={0.5} />
                <BodyText
                  type="lr"
                  title="Your payment was successful. We just sent your receipt to your phone number."
                  color="#000"
                />
                <Spacer />

                <Button
                  titleType="lr"
                  title="Back to home"
                  titleColor={COLORS.white}
                  className="sf-btn-checkout-ok-back"
                  onClick={() => router.push("/")}
                />
              </div>
            </div>
          )}
        </div>
      </SFContainer>
    </SFDrawerContainer>
  );
};

export default Checkout;
