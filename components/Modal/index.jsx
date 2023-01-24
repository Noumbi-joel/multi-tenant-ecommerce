import React, { useContext, useState } from "react";

//comp
import { Modal, Spacer, Text } from "@nextui-org/react";
import { HeadingText, BodyText, InputField, Button } from "..";

//assets
import { COLORS } from "../../assets/colors";
import Logo from "../../public/eduka.svg";
import SmCross from "../../public/sm-cross.svg";

// functions
import { validateEmail } from "../../functions";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/Auth";
import { PAYMENTS_METHODS, PAYMENTS_OPERATORS, STATES } from "../../helpers";

const ModalComp = ({
  visible,
  closeModal,
  modalTitle,
  modalBodyText,
  modalLink,
  modalBtnText,
  dashboard,
  remove,
  modalBodyTextOne,
  modalBodyTextTwo,
  deleteItem,
  withdraw,
  labelOne,
  labelTwo,
  labelThree,
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

  {
    /*
      @params: 
        closeModal
        visible
        modalTitle
        modalBodyTextOne
        modalBodyTextTwo
        dashboard 
        remove
    */
  }

  if (dashboard) {
    return (
      <Modal aria-labelledby="modal-title" open={visible} onClose={closeModal}>
        <div className="modal-header">
          <div className="rounded" onClick={closeModal}>
            <SmCross aria-label="sm-cross" />
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
          {remove ? (
            <div className="linear-layout">
              <Button
                className="grayBtn"
                onClick={closeModal}
                title="Cancel"
                titleType="lr"
                titleColor={COLORS.grayscale_900}
              />

              <Button
                className="redBtn"
                onClick={deleteItem}
                title="Delete"
                titleType="lr"
                titleColor={COLORS.white}
              />
            </div>
          ) : (
            <div className="linear-layout">
              <Button
                className="purpleBtnOutline"
                onClick={closeModal}
                title="Leave"
                titleType="lr"
                titleColor={COLORS.primary_base}
              />

              <Button
                className="purpleBtn"
                onClick={closeModal}
                title="Save changes"
                titleType="lr"
                titleColor={COLORS.white}
              />
            </div>
          )}
        </Modal.Footer>
      </Modal>
    );
  }

  if (withdraw) {
    return (
      <div>
        <Modal
          aria-labelledby="modal-title"
          open={visible}
          width={600}
          onClose={closeModal}
        >
          <div className="modal-header">
            <div className="rounded" onClick={closeModal}>
              <SmCross aria-label="sm-cross" />
            </div>
          </div>
          <Modal.Body>
            <HeadingText
              type="h4"
              title={modalTitle}
              color={COLORS.grayscale_900}
            />
            <InputField
              ariaLabel="native-select"
              label={labelOne}
              name="native-select"
              className="select-withdraw"
              data={PAYMENTS_METHODS}
            />
            <InputField
              ariaLabel="siteLang"
              label={labelTwo}
              name="native-select"
              className="select-withdraw"
              data={PAYMENTS_OPERATORS}
            />
            <InputField
              ariaLabel="momoNumber"
              label={labelThree}
              name="momoNumber"
              type="text"
              className="momoNumber"
              placeholder="Mobile money number"
            />
          </Modal.Body>

          <Modal.Footer>
            <div className="linear-layout">
              <Button
                className="purpleBtnOutline"
                onClick={closeModal}
                title="Cancel"
                titleType="lr"
                titleColor={COLORS.primary_base}
              />

              <Button
                className="purpleBtn"
                onClick={closeModal}
                title="Withdraw"
                titleType="lr"
                titleColor={COLORS.white}
              />
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  {
    /*
      @params: 
        closeModal
        visible
        modalTitle
        modalBodyText
        modalLink
        modalBtnText
        goTo 
    */
  }
  return (
    <Modal
      closeButton
      blur
      open={visible}
      onClose={closeModal}
      className="modal-container"
    >
      <form className="form-modal">
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
        <Button
          onClick={(e) => handleSubmit(e, email)}
          style={{ margin: 20 }}
          className="app-btn"
        >
          {modalBtnText}
        </Button>
      </form>
    </Modal>
  );
};

export default ModalComp;
