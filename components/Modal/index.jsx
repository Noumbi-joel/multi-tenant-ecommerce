import React, { useState } from "react";

//comp
import { Button, Image, Input, Modal } from "@nextui-org/react";
import { HeadingText, BodyText, ActiveLink } from "..";

//assets
import { COLORS } from "../../assets/colors";
import OtpInput from "react-otp-input";

const ModalComp = ({
  visible,
  closeModal,
  image,
  modalTitle,
  modalBodyText,
  modalLink,
  modalBtnText,
  isForgotPwd,
  goTo,
}) => {
  const [code, setCode] = useState(0);
  return (
    <Modal
      closeButton
      blur
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
          title={modalTitle}
          color={COLORS.grayscale_900}
        />
        <BodyText
          type="lm"
          title={modalBodyText}
          color={COLORS.grayscale_600}
        />
        {!isForgotPwd && (
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
        )}
        {isForgotPwd && (
          <Input
            type="email"
            required
            placeholder="Email"
            className="form-control"
            aria-label="email"
          />
        )}
        <div onClick={closeModal}>
          <BodyText type="mb" title={modalLink} color={COLORS.primary_base} />
        </div>
      </Modal.Body>
      <ActiveLink href={goTo} className="app-btn" style={{ margin: 20 }}>
        <Button type="submit" className="extended-app-btn">
          {modalBtnText}
        </Button>
      </ActiveLink>
    </Modal>
  );
};

export default ModalComp;
