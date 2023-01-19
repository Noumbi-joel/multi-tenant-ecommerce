import React from "react";
// comp
import { BodyText, Button, InputField, SubContentSettings } from "..";
import { Checkbox, Spacer } from "@nextui-org/react";

// assets
import { COLORS } from "../../assets/colors";
import UploadBlack from "../../public/upload-black.svg";

const StoreDetails = ({ data: { SITE_LANG, TIMEZONE, CURRENCY } }) => {
  return (
    <div>
      <Spacer y={1.5} />
      <SubContentSettings
        subTitle="Store details"
        subDesc="Eduka and your customers will use this information to contact you."
      />
      <Spacer />
      <div className="linear-layout-flat">
        <div>
          <InputField
            ariaLabel="siteName"
            label="This is your site name"
            name="siteName"
            type="text"
            className="storeDetailsInputs"
          />
          <BodyText
            type="mr"
            color={COLORS.grayscale_900}
            title="The name of your store as you want it to appear in your store's header."
          />
        </div>
        <div>
          <InputField
            ariaLabel="storeEmail"
            label="Store contact email"
            name="storeEmail"
            type="text"
            className="storeDetailsInputs"
          />
          <BodyText
            type="mr"
            color={COLORS.grayscale_900}
            title="We'll use this address if we need to contact you about your store."
          />
        </div>
      </div>
      <Spacer />
      <div>
        <InputField
          ariaLabel="desc"
          label="Description"
          name="desc"
          type="text"
          className="desc"
        />
        <BodyText
          type="mr"
          color={COLORS.grayscale_900}
          title="This will appear at the footer of the website."
        />
      </div>
      <Spacer />

      <div className="linear-layout-flat">
        <InputField
          ariaLabel="siteLang"
          label="Main site Language"
          name="select"
          className="select-siteLang"
          data={SITE_LANG}
        />
        <InputField
          ariaLabel="siteLang"
          label="Admin dashboard language"
          name="select"
          className="select-siteLang"
          data={SITE_LANG}
        />
      </div>
      <Spacer />
      <div className="linear-layout-flat">
        <InputField
          ariaLabel="siteLang"
          label="Timezone"
          name="select"
          className="select-siteLang"
          data={TIMEZONE}
        />
        <InputField
          ariaLabel="siteLang"
          label="Currency"
          name="select"
          className="select-siteLang"
          data={CURRENCY}
        />
      </div>
      <Spacer y={2.5} />

      <SubContentSettings
        subTitle="Store address"
        subDesc="This address will appear on your invoices."
      />
      <Spacer />
      <InputField
        ariaLabel="storeEmail"
        label="Store contact email"
        name="storeEmail"
        type="text"
        className="storeAddressInput"
      />
      <Spacer />

      <div className="linear-layout-flat">
        <InputField
          ariaLabel="phone"
          label="Phone"
          name="phone"
          type="text"
          className="storeDetailsInputs"
        />
        <InputField
          ariaLabel="city"
          label="City"
          name="city"
          type="text"
          className="storeDetailsInputs"
        />
      </div>
      <Spacer />

      <div className="linear-layout-flat">
        <InputField
          ariaLabel="address"
          label="Address"
          name="address"
          type="text"
          className="storeDetailsInputs"
        />
        <InputField
          ariaLabel="residence"
          label="Apartment, suite, etc."
          name="residence"
          type="text"
          className="storeDetailsInputs"
        />
      </div>
      <Spacer />
      <div className="linear-layout-flat">
        <InputField
          ariaLabel="countryReg"
          label="Country/Region"
          name="select"
          className="select-storeAddr"
          data={CURRENCY}
        />
        <InputField
          ariaLabel="state"
          label="State"
          name="select"
          className="select-storeAddr"
          data={CURRENCY}
        />
        <InputField
          ariaLabel="zipCode"
          label="Zip Code"
          name="zipCode"
          type="text"
          className="storeDetailsZipCode"
        />
      </div>
      <Spacer />

      <SubContentSettings
        subTitle="Favicon"
        subDesc="A favicon is a small icon next to your site title. Display a custom favicon to help visitors recognize your brand and stand out in their browser tabs."
      />
      <Spacer />
      <div className="linear-layout">
        <img src="/got.jpg" alt="got" className="setting-favico" />
        <Button
          titleType="lr"
          className="updateImg"
          title="Update image"
          titleColor={COLORS.primary_base}
        />
        <Button
          titleType="lr"
          className="clickable"
          title="Remove image"
          titleColor={COLORS.primary_base}
        />
      </div>
      <Spacer />

      <SubContentSettings
        subTitle="Storefront logo"
        subDesc="You can upload the storefront logo here."
      />
      <Spacer />

      <div className="linear-layout">
        <UploadBlack style={{ marginRight: 20 }} />
        <Button
          titleType="lr"
          className="updateImg"
          title="Update image"
          titleColor={COLORS.primary_base}
        />
        <Button
          titleType="lr"
          className="clickable"
          title="Remove image"
          titleColor={COLORS.primary_base}
        />
      </div>
      <Spacer />

      <SubContentSettings
        subTitle="General social image"
        subDesc="This image will be shared on social networks, including Facebook and Twitter. It's a great way to help visitors recognize your brand."
      />
      <Spacer />

      <div className="linear-layout">
        <div className="social-img-container">
          <UploadBlack />
        </div>
        <Button
          titleType="lr"
          className="updateImg"
          title="Update image"
          titleColor={COLORS.primary_base}
        />
        <Button
          titleType="lr"
          className="clickable"
          title="Remove image"
          titleColor={COLORS.primary_base}
        />
      </div>

      <Spacer />
      <SubContentSettings
        subTitle="Maintenance mode & access restriction"
        subDesc="Put your store into maintenance mode or restrict the access."
      />
      <Spacer />
      <Checkbox>
        <BodyText
          type="mr"
          color={COLORS.grayscale_900}
          title="Change mode & restrict"
        />
      </Checkbox>

      <Spacer />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          titleType="lr"
          titleColor={COLORS.white}
          title="Save Changes"
          className="setting-submit-btn"
        />
      </div>

      <Spacer y={2.5} />
    </div>
  );
};

export default StoreDetails;
