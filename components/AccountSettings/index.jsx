import { Spacer } from "@nextui-org/react";
import React from "react";
import { BodyText, Button, InputField, SubContentSettings } from "..";
import { COLORS } from "../../assets/colors";

const AccountSettings = ({ data: { SITE_LANG } }) => {
  return (
    <div>
      <Spacer y={1.5} />
      <SubContentSettings
        subTitle="Password"
        subDesc="Update your password by entering your current and new passwords."
      />
      <Spacer />
      <div className="linear-layout">
        <img src="/got.jpg" className="account-img" />
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

      <div className="linear-layout-flat">
        <InputField
          ariaLabel="storeEmail"
          label="Name"
          name="storeEmail"
          type="text"
          className="storeDetailsInputs"
        />
        <InputField
          ariaLabel="storeEmail"
          label="Surname"
          name="storeEmail"
          type="text"
          className="storeDetailsInputs"
        />
      </div>
      <Spacer />
      <div className="linear-layout-flat">
        <InputField
          ariaLabel="storeEmail"
          label="Name"
          name="storeEmail"
          type="text"
          disabled
          className="storeDetailsInputs"
        />
        <InputField
          ariaLabel="siteLang"
          label="Language"
          name="select"
          className="select-siteLang"
          data={SITE_LANG}
        />
      </div>
      <Spacer y={0.1} />
      <BodyText
          type="mr"
          color="#4FC3F7"
          title="Change email"
          className="clickable"
        />
      <Spacer />

      <div className="alignRight">
        <Button
          titleType="lr"
          titleColor={COLORS.white}
          title="Save changes"
          className="setting-submit-btn"
        />
      </div>
    </div>
  );
};

export default AccountSettings;
