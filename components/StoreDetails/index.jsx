import React, { useState } from "react";
// comp
import { Button, InputField, Modal, SubContentSettings } from "..";
import { Spacer } from "@nextui-org/react";

// assets
import { COLORS } from "../../assets/colors";
import Upload from "../../public/upload.svg";

const StoreDetails = ({ data: { STATES, COUNTRIES } }) => {
  const [saved, setSaved] = useState(false);
  return (
    <div>
      <Modal
        closeModal={() => setSaved(false)}
        visible={saved}
        modalTitle="You have unsaved changes"
        modalBodyTextOne="Are you sure you want to leave ?"
        dashboard
      />
      <Spacer y={1.5} />
      <SubContentSettings
        subTitle="Store details"
        subDesc="Eduka and your customers will use this information to contact you."
      />
      <Spacer />
      <InputField
        ariaLabel="siteName"
        label="Your store name"
        name="siteName"
        type="text"
        className="storeDetailsInputs"
      />
      <Spacer />
      <InputField
        ariaLabel="desc"
        label="Short store description"
        name="desc"
        type="text"
        className="desc"
      />
      <Spacer />

      <div className="linear-layout-flat">
        <InputField
          ariaLabel="siteLang"
          label="Primary address"
          name="priAddress"
          className="address"
        />
        <InputField
          ariaLabel="siteLang"
          label="Secondary address"
          name="sndAddress"
          className="address"
        />
      </div>

      <Spacer />
      <div className="linear-layout-flat">
        <InputField
          ariaLabel="city"
          label="City"
          name="city"
          className="cityCode"
        />
        <InputField
          ariaLabel="siteLang"
          label="Postal code"
          name="postalCode"
          className="cityCode"
        />
      </div>
      <Spacer />
      <div className="linear-layout-flat">
        <InputField
          ariaLabel="siteLang"
          label="State"
          name="select"
          className="select-siteLang"
          data={STATES}
        />
        <InputField
          ariaLabel="siteLang"
          label="Country"
          name="select"
          className="select-siteLang"
          data={COUNTRIES}
        />
      </div>
      <Spacer y={2.5} />
      <SubContentSettings
        subTitle="Favicon"
        subDesc="A favicon is a small icon next to your site title. Display a custom favicon to help visitors recognize your brand and stand out in their browser tabs."
      />
      <Spacer />
      <div className="linear-layout">
        <div className="upload-outline-container">
          <Upload />
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
        subTitle="Storefront logo"
        subDesc="You can upload the storefront logo here."
      />
      <Spacer />

      <div className="linear-layout">
        <div className="upload-outline-container">
          <Upload />
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
        subTitle="General social image"
        subDesc="This image will be shared on social networks, including Facebook and Twitter. It's a great way to help visitors recognize your brand."
      />
      <Spacer />

      <div className="linear-layout">
        <div className="social-img-container">
          <Upload />
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
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          titleType="lr"
          titleColor={COLORS.white}
          title="Save Changes"
          className="setting-submit-btn"
          onClick={() => setSaved(true)}
        />
      </div>

      <Spacer y={2.5} />
    </div>
  );
};

export default StoreDetails;
