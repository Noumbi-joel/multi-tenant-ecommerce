import { Spacer } from "@nextui-org/react";
import React from "react";

// comp
import { Button, InputField, SubContentSettings } from "..";
import { COLORS } from "../../assets/colors";

const SocialProfiles = () => {
  return (
    <div>
      <Spacer y={1.5} />
      <SubContentSettings
        subTitle="Social profiles"
        subDesc="These social profiles will appear on your website."
      />
      <Spacer />
      <div className="linear-layout-flat">
        <InputField
          ariaLabel="storeEmail"
          label="Facebook"
          name="storeEmail"
          type="text"
          className="storeDetailsInputs"
        />
        <InputField
          ariaLabel="storeEmail"
          label="Instagram"
          name="storeEmail"
          type="text"
          className="storeDetailsInputs"
        />
      </div>
      <Spacer />
      <div className="linear-layout-flat">
        <InputField
          ariaLabel="storeEmail"
          label="Twitter"
          name="storeEmail"
          type="text"
          className="storeDetailsInputs"
        />
        <InputField
          ariaLabel="storeEmail"
          label="Tiktok"
          name="storeEmail"
          type="text"
          className="storeDetailsInputs"
        />
      </div>
      <Spacer />

      <div className="linear-layout-flat">
        <InputField
          ariaLabel="storeEmail"
          label="Youtube"
          name="storeEmail"
          type="text"
          className="storeDetailsInputs"
        />
        <InputField
          ariaLabel="storeEmail"
          label="Linkedin"
          name="storeEmail"
          type="text"
          className="storeDetailsInputs"
        />
      </div>
      <Spacer />

      <div className="linear-layout-flat">
        <InputField
          ariaLabel="storeEmail"
          label="Whatsapp"
          name="storeEmail"
          type="text"
          className="storeDetailsInputs"
        />
        <div />
      </div>
      <div className="alignRight">
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

export default SocialProfiles;
