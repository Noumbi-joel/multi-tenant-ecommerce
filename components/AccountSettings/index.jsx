import React, { useState } from "react";

// comp
import { BodyText, Button, InputField, Modal, SubContentSettings } from "..";
import { Spacer } from "@nextui-org/react";

// assets
import { COLORS } from "../../assets/colors";
import Upload from "../../public/upload.svg";

const AccountSettings = ({ data: { SITE_LANG } }) => {
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
        subTitle="Account settings"
        subDesc="View and update your account details, profile, and more."
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

      <div className="linear-layout-flat">
        <InputField
          ariaLabel="fName"
          label="First name"
          name="name"
          type="text"
          className="name"
          placeholder="First name"
        />
        <InputField
          ariaLabel="lName"
          label="Last name"
          name="name"
          type="text"
          className="name"
          placeholder="Last name"
        />
      </div>
      <Spacer />
      <div className="linear-layout-flat">
        <InputField
          ariaLabel="email"
          label="Email"
          name="email"
          type="email"
          disabled
          placeholder="jim@gmail.com"
          className="email"
        />
        <InputField
          ariaLabel="siteLang"
          label="Language"
          name="select"
          className="select-siteLang"
          data={SITE_LANG}
        />
      </div>
      <Spacer />
      <SubContentSettings
        subTitle="Password"
        subDesc="Update your password by entering your current and new passwords."
      />
      <Spacer />
      <div className="linear-layout-flat">
        <InputField
          ariaLabel="password"
          label="Old password"
          name="password"
          className="password"
          type="password"
        />
        <InputField
          ariaLabel="password"
          label="New password"
          name="password"
          className="password"
          type="password"
        />
      </div>
      <Spacer y={1.5} />
      <div className="alignRight">
        <Button
          titleType="lr"
          titleColor={COLORS.white}
          title="Save changes"
          className="setting-submit-btn"
          onClick={() => setSaved(true)}
        />
      </div>
      <Spacer y={2.5} />
    </div>
  );
};

export default AccountSettings;
