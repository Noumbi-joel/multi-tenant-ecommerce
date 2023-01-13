import React from "react";

// comp
import BodyText from "../BodyText";
import { Spacer } from "@nextui-org/react";

// assets
import { COLORS } from "../../assets/colors";
import Upload from "../../public/upload.svg";


const FileContainer = () => {
  return (
    <>
      <BodyText type="mr" title="Media" color={COLORS.grayscale_900} />

      <div className="file-container">
        <input
          type="file"
          accept="image/png, image/jpg, image/gif, image/jpeg"
          className="file"
        />
        <Upload aria-label="upload" />
        <BodyText
          type="lr"
          title="Drag drop some files here, or click to select files"
          color={COLORS.grayscale_900}
        />
        <BodyText
          type="sr"
          title="1080 x 1080 (1:1) recommended, up to 2MB each."
          color="#A2A2A2"
        />
      </div>
      <Spacer />
    </>
  );
};

export default FileContainer;
