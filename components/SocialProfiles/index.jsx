import { Spacer } from "@nextui-org/react";
import React, { useState } from "react";

// comp
import { Button, InputField, Modal, SubContentSettings } from "..";
import { COLORS } from "../../assets/colors";

const SocialProfiles = () => {
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
          className="socialsInput"
          placeholder="https://facebook.com/"
        />
        <InputField
          ariaLabel="storeEmail"
          label="Instagram"
          name="storeEmail"
          type="text"
          className="socialsInput"
          placeholder="https://instagram.com/"
        />
      </div>
      <Spacer />
      <div className="linear-layout-flat">
        <InputField
          ariaLabel="storeEmail"
          label="Twitter"
          name="storeEmail"
          type="text"
          className="socialsInput"
          placeholder="https://twitter.com/"
        />
        <InputField
          ariaLabel="storeEmail"
          label="Tiktok"
          name="storeEmail"
          type="text"
          className="socialsInput"
          placeholder="https://tiktok.com/"
        />
      </div>
      <Spacer />
      <div className="alignRight">
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

export default SocialProfiles;
