import React, { useContext, useState } from "react";

//comp
import { Button, Modal, Text } from "@nextui-org/react";
import { HeadingText, BodyText, InputField } from "..";

//assets
import { COLORS } from "../../assets/colors";
import Logo from "../../public/eduka.svg";
import SmCross from "../../public/sm-cross.svg";

// functions
import { validateEmail } from "../../functions";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/Auth";

const ModalComp = ({
  visible,
  closeModal,
  modalTitle,
  modalBodyText,
  modalLink,
  modalBtnText,
  dashboard,
  modalBodyTextOne,
  modalBodyTextTwo,
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const authCtx = useContext(AuthContext);

  const handleSubmit = (e, email) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      return setError("Please enter a valid email address");
    }
    authCtx.updatePassword(closeModal, email);
  };

  if (dashboard) {
    return (
      <div>
        <Modal
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeModal}
        >
          <div className="modal-header">
            <div className="rounded" onClick={closeModal}>
              <SmCross className="sm-cross" />
            </div>
          </div>
          <Modal.Body>
            <HeadingText
              type="h4"
              title={modalTitle}
              color={COLORS.grayscale_900}
            />

            <BodyText
              type="mr"
              title={modalBodyTextOne}
              color={COLORS.grayscale_600}
            />

            <BodyText
              type="mr"
              title={modalBodyTextTwo}
              color={COLORS.grayscale_600}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button
              auto
              style={{ backgroundColor: COLORS.grayscale_400, borderRadius: 4 }}
              onPress={closeModal}
            >
              <BodyText type="lr" title="Cancel" color={COLORS.white} />
            </Button>
            <Button
              auto
              style={{ backgroundColor: COLORS.danger_base, borderRadius: 4 }}
              onPress={closeModal}
            >
              <BodyText type="lr" title="Delete" color={COLORS.white} />
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  return (
    <Modal
      closeButton
      blur
      open={visible}
      onClose={closeModal}
      className="modal-container"
    >
      <form className="form-modal" onSubmit={(e) => handleSubmit(e, email)}>
        <div className="modal-image-container">
          <Logo />
        </div>
        <Modal.Body>
          <HeadingText
            type="h5"
            title={modalTitle}
            color={COLORS.grayscale_900}
          />
          <BodyText
            type="lm"
            title={modalBodyText}
            color={COLORS.grayscale_600}
          />
          <InputField
            type="email"
            placeholder="Email"
            className="form-control"
            aria-label="email"
            value={email}
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
