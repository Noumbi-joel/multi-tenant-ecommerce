import { Spacer } from "@nextui-org/react";
import React from "react";

// comp
import { BodyText, Button, InputField, SubContentSettings } from "..";
import { COLORS } from "../../assets/colors";

const SettingPassword = () => {
  return (
    <div>
      <Spacer y={1.5} />
      <SubContentSettings
        subTitle="Password"
        subDesc="Update your password by entering your current and new passwords."
      />
      <Spacer />
      <InputField
        label="Old password"
        type="password"
        name="password"
        className="settingPwdInput"
        aria-label="password"
        dashboard
      />
      <Spacer />

      <InputField
        label="New password"
        type="password"
        name="password"
        className="settingPwdInput"
        aria-label="password"
        dashboard
      />
      <BodyText
        type="mr"
        color={COLORS.grayscale_900}
        title="The password must be at least 6 characters long"
      />
      <Spacer y={1.5} />
      <div className="save-pwd-btn-container">
        <Button
          titleType="lr"
          titleColor={COLORS.white}
          title="Save changes"
          className="save-pwd-btn"
        />
      </div>
    </div>
  );
};

export default SettingPassword;
