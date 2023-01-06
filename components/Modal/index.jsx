import React, { useState } from "react";

//comp
import { Button, Image, Input, Modal } from "@nextui-org/react";
import { HeadingText, BodyText } from "..";

//assets
import { COLORS } from "../../assets/colors";
import Logo from "../../public/eduka.svg"

// functions
import { validateEmail } from "../../functions";
import { useRouter } from "next/router";

const ModalComp = ({
  visible,
  closeModal,
  modalTitle,
  modalBodyText,
  modalLink,
  modalBtnText,
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e, email) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      return setError("Please enter a valid email address");
    }
    localStorage.setItem("resetEmail", email);
    return router.push("/resetPassword");
  };

  return (
    <Modal closeButton blur open={visible} onClose={closeModal} style={{}}>
      <form className="form-modal" onSubmit={(e) => handleSubmit(e, email)}>
        <div className="modal-image-container">
          <Logo />
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
          <Input
            type="email"
            required
            placeholder="Email"
            className="form-control"
            aria-label="email"
            value={email}
            style={{ fontSize: 16, fontWeight: "500" }}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <BodyText color="red" title={error} type="mm" />}
          <div onClick={closeModal}>
            <BodyText type="mb" title={modalLink} color={COLORS.primary_base} />
          </div>
        </Modal.Body>
        <Button type="submit" style={{ margin: 20 }} className="app-btn">
          {modalBtnText}
        </Button>
      </form>
    </Modal>
  );
};

export default ModalComp;

/**{!isForgotPwd && (
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
        )} */
