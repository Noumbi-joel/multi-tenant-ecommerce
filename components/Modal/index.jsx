import React, { useState } from "react";

//comp
import { Button, Image, Modal } from "@nextui-org/react";
import { HeadingText, BodyText } from "..";

//assets
import { COLORS } from "../../assets/colors";
import OtpInput from "react-otp-input";

const ModalComp = ({ visible, closeModal, image }) => {
  const [code, setCode] = useState(0);
  return (
    <Modal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeModal}
      style={{}}
    >
      <div className="modal-image-container">
        <Image src={image} />
      </div>
      <Modal.Body>
        <HeadingText
          type="h4"
          title="Enter verification code"
          color={COLORS.grayscale_900}
        />
        <BodyText
          type="lm"
          title="We have just sent a verification code to tynisha*****@mail.com"
          color={COLORS.grayscale_600}
        />
        <OtpInput
          value={code}
          onChange={(val) => setCode(val)}
          numInputs={6}
          shouldAutoFocus={true}
          containerStyle={{ justifyContent: "space-between" }}
          inputStyle={{
            width: 56,
            height: 56,
            backgroundColor: COLORS.grayscale_50,
            borderRadius: 12,
            color: COLORS.grayscale_900,
            fontSize: 24,
            fontWeight: "800",
            borderWidth: 1,
            borderColor: COLORS.grayscale_50,
            borderStyle: "none",
          }}
        />
        <BodyText
          type="mb"
          title="Send the code again"
          color={COLORS.primary_base}
        />
      </Modal.Body>
      <Button type="submit" disabled className="otp-verify-button">
        Verify
      </Button>
    </Modal>
  );
};

export default ModalComp;
