import React, { useContext, useState } from "react";

//comp
import { Modal, Text } from "@nextui-org/react";
import { HeadingText, BodyText, InputField, Button } from "..";

//assets
import { COLORS } from "../../assets/colors";
import Logo from "../../public/eduka.svg";
import SmCross from "../../public/sm-cross.svg";
import TrashRed from "../../public/trash-red.svg";
import Hide from "../../public/hide.svg";
import Edit from "../../public/edit.svg";

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
  productEdit,
  firstBtnTitle,
  secondBtnTitle,
  sndBtnClassName,
  firstBtnClassName,
  firstBtnTitleColor,
  sndBtnTitleColor,
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

  if (productEdit) {
    return (
      <Modal css={{width: "fit-content"}} closeButton blur open={visible} onClose={closeModal}>
        <div style={{ marginTop: 10 }} />
        <Modal.Body>
          <Button
            titleType="mr"
            title="Edit product"
            titleColor={COLORS.grayscale_900}
            className="editProdBtn"
          >
            <Edit aria-label="red" style={{ marginRight: 5 }} />
          </Button>
          <Button
            titleType="mr"
            title="Hide product"
            titleColor={COLORS.grayscale_900}
            className="editProdBtn"
          >
            <Hide aria-label="red" style={{ marginRight: 5 }} />
          </Button>
          <Button
            titleType="mr"
            title="Delete product"
            titleColor={COLORS.danger_base}
            className="deleteProd"
          >
            <TrashRed aria-label="red" style={{ marginRight: 5 }} />
          </Button>
        </Modal.Body>
      </Modal>
    );
  }

  if (dashboard) {
    return (
      <Modal aria-labelledby="modal-title" open={visible} onClose={closeModal}>
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
            className={firstBtnClassName}
            onClick={closeModal}
            title={firstBtnTitle}
            titleType="lr"
            titleColor={firstBtnTitleColor}
          />

          <Button
            className={sndBtnClassName}
            onClick={closeModal}
            title={secondBtnTitle}
            titleType="lr"
            titleColor={sndBtnTitleColor}
          />
        </Modal.Footer>
      </Modal>
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
