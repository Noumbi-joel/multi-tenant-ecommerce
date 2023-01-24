import React, { useState } from "react";

// comp
import { Spacer } from "@nextui-org/react";
import { Button, Modal, SubContentSettings, TipTap } from "..";

// assets
import { COLORS } from "../../assets/colors";

const Legal = () => {
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
        subTitle="Legal"
        subDesc="Write down legal and policy information below and revise them whenever you want."
      />
      <Spacer />
      <div className="tiptap-container">
        <TipTap label="Privacy policy" settings />
        <Spacer />
        <TipTap label="Refund policy" settings />
        <Spacer />
        <TipTap label="Shipping policy" settings />
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
      </div>

      <Spacer y={2.5} />
    </div>
  );
};

export default Legal;
